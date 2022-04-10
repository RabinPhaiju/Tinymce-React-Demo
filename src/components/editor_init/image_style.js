import axios from "axios"

const tinymce_image_upload_handler = async (blobInfo, success, failure, progress) => {
  console.log("test", process.env.REACT_APP_URL)
  console.log("token", process.env.REACT_APP_TOKEN)
  const file = blobInfo.blob()
  const data = new FormData()
  data.set("image", file, file.name)

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQ5NzYxNjA5LCJqdGkiOiIxZmI0OTRmMjk3ZmY0NGMwYWIyMmNkNmY5YTJlMGI3ZCIsInVzZXJfaWQiOjF9.Vhv-vxFJ24-QniD74WBLj_vXVn5r2pCCrLQybVlzp_A"
  const url = "http://staging.nepalpicturelibrary.org/api/library/media/single/upload/"

  axios
    .post(url, data, {
      headers: {
        accept: "application/json",
        Authorization: `NPL ${token}`,
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response)
      console.log(response.data.url)
      success(response.data.url)
    })
    .catch((error) => {
      console.warn(error)
      failure(error)
    })
}
const image_style = {
  paste_data_images: true, //drag and drop from explorer
  // file_picker_types: "image",
  file_picker_types: "media audio",
  file_picker_callback: function (callback, value, meta) {
    var input = document.createElement("input")
    input.setAttribute("type", "file")
    input.setAttribute("accept", "media/* audio/*")

    input.onchange = function () {
      var file = this.files[0]
      console.log(file)
      var reader = new FileReader()
      reader.onload = function () {
        /* call the callback and populate the Title field with the file name */
        callback("test.com", { title: file.name })
      }
      reader.readAsDataURL(file)
    }

    input.click()
  },
  image_class_list: [
    { title: "Left With Caption", value: "caption_image_left" },
    { title: "Center With Caption", value: "caption_image_center" },
    { title: "Right With Caption", value: "caption_image_right" },
    { title: "No border", value: "img_no_border" },
    {
      title: "Borders",
      menu: [
        { title: "Green border", value: "img_green_border" },
        { title: "Blue border", value: "img_blue_border" },
        { title: "Red border", value: "img_red_border" },
      ],
    },
  ],
  automatic_uploads: true,
  block_unsupported_drop: true,
  image_caption: true,
  image_advtab: true,
  image_uploadtab: true,
  // images_file_types: "jpg,svg,webp,png",
  // a11y_advanced_options: true, // premium only
  image_list: function (success) {
    success([
      {
        title: "Tree",
        value: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      },
      {
        title: "Bkt",
        value:
          "https://media.istockphoto.com/photos/patan-picture-id637696304?k=20&m=637696304&s=612x612&w=0&h=GqmMtggU2LgHWcXPFNxMrZg9dtPzyrnl9ek5oARcI7Y=",
      },
    ])
  },
  images_upload_credentials: true,
  ///////////////////
  // images_upload_url: "postAcceptor.php",
  images_upload_base_path: "/",

  /* we override default upload handler to simulate successful upload*/
  images_upload_handler: tinymce_image_upload_handler,
  image_description: false,
  // image_dimensions: false,
  // image_title: true,
  // image_prepend_url: "https://www.tiny.cloud/images/",

  // **** Use the Style Formats option instead, which is much more powerful.
  // style_formats: [
  //   {
  //     title: "Image Left",
  //     selector: "img",
  //     styles: {
  //       float: "left",
  //       margin: "0 10px 0 10px",
  //     },
  //   },
  //   {
  //     title: "Image Right",
  //     selector: "img",
  //     styles: {
  //       float: "right",
  //       margin: "0 10px 0 10px",
  //     },
  //   },
  // ],
}

export default image_style
