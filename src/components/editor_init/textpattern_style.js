const textpattern_style = {
  textpattern_patterns: [
    { start: "*", end: "*", format: "italic" },
    { start: "**", end: "**", format: "bold" },
    { start: "~", end: "~", cmd: "createLink", value: "https://tiny.cloud" },
    { start: "#", format: "h1" },
    { start: "##", format: "h2" },
    { start: "###", format: "h3" },
    { start: "####", format: "h4" },
    { start: "#####", format: "h5" },
    { start: "######", format: "h6" },
    { start: "* ", cmd: "InsertUnorderedList" },
    { start: "- ", cmd: "InsertUnorderedList" },
    { start: "1. ", cmd: "InsertOrderedList", value: { "list-style-type": "decimal" } },
    { start: "1) ", cmd: "InsertOrderedList", value: { "list-style-type": "decimal" } },
    { start: "a. ", cmd: "InsertOrderedList", value: { "list-style-type": "lower-alpha" } },
    { start: "a) ", cmd: "InsertOrderedList", value: { "list-style-type": "lower-alpha" } },
    { start: "i. ", cmd: "InsertOrderedList", value: { "list-style-type": "lower-roman" } },
    { start: "i) ", cmd: "InsertOrderedList", value: { "list-style-type": "lower-roman" } },
    { start: "---", replacement: "<hr/>" },
    { start: "--", replacement: "—" },
    { start: "-", replacement: "—" },
    { start: "(c)", replacement: "©" },
    { start: "//brb", replacement: "Be Right Back" },
    {
      start: "//heading",
      replacement:
        '<h1 style="color: blue">Heading here</h1> <h2>Author: Name here</h2> <p><em>Date: 01/01/2000</em></p> <hr />',
    },
  ],
}
export default textpattern_style
