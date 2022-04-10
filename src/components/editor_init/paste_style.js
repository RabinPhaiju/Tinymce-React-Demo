const paste_style = {
  paste_block_drop: false,
  paste_data_images: true,
  paste_as_text: true,
  paste_enable_default_filters: false,
  paste_filter_drop: false,
  paste_word_valid_elements: "b,strong,i,em,h1,h2",
  paste_webkit_styles: "color font-size",
  paste_retain_style_properties: "color font-size",
  paste_merge_formats: false,
  paste_tab_spaces: 2,
  paste_convert_word_fake_lists: false,
  paste_remove_styles_if_webkit: false,
  smart_paste: false,
  paste_preprocess: function (plugin, args) {
    console.log(args.content)
    args.content += " preprocess"
  },
  paste_postprocess: function (plugin, args) {
    console.log(args.node)
    args.node.setAttribute("id", "42")
  },
}
export default paste_style
