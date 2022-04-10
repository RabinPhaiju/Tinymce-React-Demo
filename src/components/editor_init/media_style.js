const media_style = {
  // media_alt_source: false,
  // media_dimensions: false,
  // media_filter_html: false,
  // media_live_embeds: true,
  // media_poster: false,
  media_scripts: [
    { filter: "http://media1.example.com" },
    { filter: "http://media2.example.com", width: 100, height: 200 },
  ],
  media_url_resolver: function (data, resolve /*, reject*/) {
    if (data.url.indexOf("YOUR_SPECIAL_VIDEO_URL") !== -1) {
      var embedHtml = '<iframe src="' + data.url + '" width="400" height="400" ></iframe>'
      resolve({ html: embedHtml })
    } else {
      resolve({ html: "" })
    }
  },
  audio_template_callback: function (data) {
    return (
      "<audio controls>" +
      '\n<source src="' +
      data.source +
      '"' +
      (data.sourcemime ? ' type="' + data.sourcemime + '"' : "") +
      " />\n" +
      (data.altsource
        ? '<source src="' +
          data.altsource +
          '"' +
          (data.altsourcemime ? ' type="' + data.altsourcemime + '"' : "") +
          " />\n"
        : "") +
      "</audio>"
    )
  },
  video_template_callback: function (data) {
    return (
      '<video width="' +
      data.width +
      '" height="' +
      data.height +
      '"' +
      (data.poster ? ' poster="' + data.poster + '"' : "") +
      ' controls="controls">\n' +
      '<source src="' +
      data.source +
      '"' +
      (data.sourcemime ? ' type="' + data.sourcemime + '"' : "") +
      " />\n" +
      (data.altsource
        ? '<source src="' +
          data.altsource +
          '"' +
          (data.altsourcemime ? ' type="' + data.altsourcemime + '"' : "") +
          " />\n"
        : "") +
      "</video>"
    )
  },
}
export default media_style
