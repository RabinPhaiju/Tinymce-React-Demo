import ReactDOMServer from "react-dom/server"
import Test from "../Test"

const templates_style = {
  template_cdate_format: "%m/%d/%Y : %H:%M",
  template_mdate_format: "%m/%d/%Y : %H:%M:%S",
  template_replace_values: {
    username: "Jack Black",
    staff_id: "991234",
  },
  templates: [
    { title: "Some title 1", description: "Some desc 1", content: "My content" },
    {
      title: "React Component",
      description: "This is react component",
      content: ReactDOMServer.renderToStaticMarkup(<Test />),
    },
    {
      title: "Username and Staff_id",
      description: "Your name and staff_id",
      content: "<p>Name: {$username}, StaffID: {$staff_id}</p>",
    },
    { title: "HTML Page", description: "Some desc 2", url: "development.html" },
    {
      title: "Cdate",
      description: "cdate",
      content: '<p class="cdate">DD/MM/YYYY : HH:MM</p>',
    },
  ],
}
export default templates_style
