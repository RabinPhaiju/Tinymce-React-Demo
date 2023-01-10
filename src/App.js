import React,{useState} from "react"
import TinyMCE from "./components/TinyMCE"
import TinyMCEInline from "./components/TinyMCEInline"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css"
import { useEffect } from "react"

const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: '100%'
});

function App() {

  const initItems = [
    {id:'one',content:'one'},
    {id:'two',content:'two'},
    {id:'three',content:'three'},
    {id:'four',content:'four'},
    {id:'five',content:'five'},
    {id:'six',content:'six'},
    {id:'seven',content:'seven'},
    {id:'eight',content:'eight'},
    {id:'nine',content:'nine'},
    {id:'10',content:'10'},
    {id:'11',content:'11'},
    {id:'12',content:'12'},
    {id:'13',content:'13'},
    {id:'14',content:'14'},
    {id:'15',content:'15'},
    {id:'16',content:'16'},
    {id:'17',content:'17'},
    {id:'18',content:'18'},
    {id:'19',content:'19'},
    {id:'20',content:'20'}  ]

  const newItem = [{id:'one',content:'test'}]

	const [items, setItems] = useState(newItem);
	const [submitItems, setSubmitItems] = useState(newItem);

	const onDragEnd = (result) => {
		// dropped outside the list
		if (!result.destination) { return; }
    reorder(result.source.index, result.destination.index)
	};

  const addNewItem = ()=>{
    const id = items[items.length-1].id + 1;
    setItems(prev=>([...prev,{id:id,content:`${id}`}]))
    if(submitItems.length>0){
      setSubmitItems(prev=>([...prev,{id:id,content:`${id}`}]))
    }else{
      setSubmitItems([...items,{id:id,content:`${id}`}])
    }
  }

  useEffect(()=>{ console.log('submitItems',submitItems) },[submitItems])

  const reorder = (startIndex, endIndex) => {
    let result = Array.from(submitItems);

    let values = result.map(r=>r.content)
    const [removed] = values.splice(startIndex, 1);
    values.splice(endIndex, 0, removed);
    console.log("🚀 reorder ~ values", values)

    let newItems = []
    for(let i=0;i<items.length;i++){
      newItems.push({id:items[i].id,content:values[i]})
    }
    
    setItems(newItems)
  };

  const onEditorChange = (id,content) => {
    if(submitItems.length>0){
      setSubmitItems(prev=>[...prev.map(p=>p.id===id?{...p,content:content}:p)])
    }else{
      setSubmitItems(items)
    }
  }

  return (
    <div>
        <div className='App'>
            {/* <div style={{paddingTop:'20px',backgroundColor:'gray'}}>
              <TinyMCE id='test1' />
            </div> 
            <div style={{paddingTop:'20px',backgroundColor:'gray'}}>
              <TinyMCE id='test2' />
            </div> */}
          {/* <TinyMCEInline id='inline' /> */}
        </div>
        
    <div>
      <button onClick={addNewItem}>Add new</button>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                        <TinyMCE id={item.id} content={item.content} onEditorChange={onEditorChange} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      {/* <div>
        {items.map((item, index) => (
          <div key={item.id}>
          <TinyMCE id={item.id} content={item.content} onEditorChange={onEditorChange} />
                </div>))}
      </div> */}
      
      </div>
  )
}

export default App
