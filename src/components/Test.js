import React from "react"
import ImportImage from "./import.png"
// use inline css please
function Test() {
  // pass paramters from Tiny mce editor to this component
  return (
    <div>
      <p>This is Rect component</p>
      <div style={{ display: "flex" }}>
        <img src={ImportImage} alt='' />
        <p style={{ padding: "0 4px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quaerat dolor voluptates
          qui corporis harum iste, deleniti voluptatibus sit illum magni ex officiis animi
          voluptatum exercitationem dolores ipsa dolorum reiciendis.
        </p>
      </div>
    </div>
  )
}

export default Test
