const toolbarStyle = {
  //  toolbar //This will override the toolbar in the init prop.
  toolbar1:
    // eslint-disable-next-line no-multi-str
    "undo redo | formatselect | fontselect | fontsizeselect | \
              copy paste pastetext | blockquote lineheight forecolor backcolor charmap | \
                bold italic underline strikethrough subscript superscript code removeformat | \
                alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media | \
                insertdatetime",

  // lists_indent_on_tab: false,

  toolbar_mode: "floating", //floating, inline, both
  // toolbar_location: "bottom", //top, bottom
  toolbar_sticky: true, //If true, the toolbar will remain on the top or bottom of the editor.

  toolbar2:
    // tableprops tablerowprops tablecellprops |\
    //  tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol |\
    // eslint-disable-next-line no-multi-str
    "table tabledelete | quickimage quicktable | save| \
             help | print preview anchor searchreplace visualblocks emoticons |\
            autolink-notworking | hr pagebreak nonbreaking| restoredraft | ltr rtl | fullscreen template myCustomToolbarButton",
}
export default toolbarStyle
