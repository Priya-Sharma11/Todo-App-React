import React, { useState } from "react";
import AppName from "./AppName";
import DisplayItems from "./DisplayItems";

const Todo = () => {
  const[addItems,setAddItems]= useState("");
  const[addDate,setAddDate]=useState("");
  const[items,setItem]=useState([]); 
  const[date,setDate]=useState([]);

const itemEvent=(e)=>{
  setAddItems(e.target.value);
}

const dateEvent=(e)=>{
  setAddDate(e.target.value);
}
  const handleAddItem=(event)=>{
    //console.log(event.target.value);
    //console.log("Clicked");
    setItem((oldItems)=>{
      return [...oldItems,{addItems, addDate}];
    });

    setAddItems("");
    setAddDate("");
  }
  const handleRemoveItems=(id)=>{
    setItem((oldItems)=>oldItems.filter((item,index)=>index !== id))
  }

  return (
    <>
      <center className="todo-container">
        <div className="center_div">
          <AppName/>
          <div className="row">
            <div className="col-4">
              <input type="text" 
              value={addItems}
              placeholder="Add Items" onChange={itemEvent}/>

              <input type="date" value={addDate} onChange={dateEvent}/>

              <button className="add-button" onClick={handleAddItem}>ADD</button>
              
                <ol>
                 {/*  <li>
                    {addItems}
                  </li> */}
                  {items.map((item,index)=>{
                 return <DisplayItems 
                 addItem={item.addItems} 
                 addDate={item.addDate} 
                 index={index} 
                 id={index} 
                 onSelect={handleRemoveItems}/>

                  })
                  }
                  
                </ol>
                
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Todo;
