const table_style = {
  table_appearance_options: false,
  table_use_colgroups: true,
  table_clone_elements: "strong em a",
  table_grid: false,
  table_tab_navigation: false,
  // table_advtab: false,
  // table_cell_advtab: false,
  // table_row_advtab: false,
  // table_resize_bars: false,
  // table_style_by_css: false,
  table_default_attributes: {
    border: "1",
  },
  table_default_styles: {
    width: "50%",
  },
  table_responsive_width: false,
  table_sizing_mode: "relative", // 'fixed', 'relative', 'responsive', 'auto'
  table_column_resizing: "resizetable", // 'preservetable', 'resizetable'
  table_row_resizing: "resizable", // 'resizable', 'resizable-autosize'
  table_class_list: [
    { title: "None", value: "" },
    { title: "No Borders", value: "table_no_borders" },
    {
      title: "Borders",
      menu: [
        { title: "Red borders", value: "table_red_borders" },
        { title: "Blue borders", value: "table_blue_borders" },
        { title: "Green borders", value: "table_green_borders" },
      ],
    },
  ],
  table_cell_class_list: [
    { title: "None", value: "" },
    { title: "No Border", value: "table_cell_no_border" },
    {
      title: "Border",
      menu: [
        { title: "Red border", value: "table_cell_red_border" },
        { title: "Blue border", value: "table_cell_blue_border" },
        { title: "Green border", value: "table_cell_green_border" },
      ],
    },
  ],
  table_row_class_list: [
    { title: "None", value: "" },
    { title: "No Border", value: "table_row_no_border" },
    {
      title: "Border",
      menu: [
        { title: "Red border", value: "table_row_red_border" },
        { title: "Blue border", value: "table_row_blue_border" },
        { title: "Green border", value: "table_row_green_border" },
      ],
    },
  ],
  table_border_widths: [
    { title: "small", value: "1px" },
    { title: "medium", value: "3px" },
    { title: "large", value: "5px" },
  ],
  table_border_styles: [
    { title: "Solid", value: "solid" },
    { title: "Dotted", value: "dotted" },
    { title: "Dashed", value: "dashed" },
  ],
  table_background_color_map: [
    { title: "Red", value: "FF0000" },
    { title: "White", value: "FFFFFF" },
    { title: "Yellow", value: "F1C40F" },
  ],
  table_border_color_map: [
    { title: "Red", value: "FF0000" },
    { title: "White", value: "FFFFFF" },
    { title: "Yellow", value: "F1C40F" },
  ],
}
export default table_style
