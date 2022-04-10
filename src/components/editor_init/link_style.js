const link_style = {
  //   default_link_target: "_blank",
  // link_assume_external_targets: true,
  link_class_list: [
    { title: "None", value: "" },
    { title: "External Link", value: "ext_link" },
    { title: "Internal Support Link", value: "int_sup_link" },
    { title: "Internal Marketing Link", value: "int_mark_link" },
    { title: "Other Internal Link", value: "int_other_link" },
  ],
  // link_context_toolbar: true,
  link_title: false,
  // link_quicklink: true,
  link_default_protocol: "https",
  // link_list: function (success) {
  //   // called on link dialog open
  //   var links = fetchLinkList() // get link_list data
  //   success(links) // pass link_list data to TinyMCE
  // },
  link_list: [
    { title: "Tiny Home Page", value: "https://www.tiny.cloud" },
    { title: "Tiny Blog", value: "https://www.tiny.cloud/blog" },
    {
      title: "TinyMCE Support resources",
      menu: [
        { title: "TinyMCE Documentation", value: "https://www.tiny.cloud/docs/" },
        {
          title: "TinyMCE on Stack Overflow",
          value: "https://stackoverflow.com/questions/tagged/tinymce",
        },
        { title: "TinyMCE GitHub", value: "https://github.com/tinymce/" },
      ],
    },
  ],
  target_list: [
    { title: "None", value: "" },
    { title: "Same page", value: "_self" },
    { title: "New page", value: "_blank" },
    { title: "Parent frame", value: "_parent" },
  ],
}
export default link_style
