import React, { useState } from "react";
import AppName from "./AppName";

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
  const handleOnClick=(event)=>{
    //console.log(event.target.value);
    //console.log("Clicked");
    setItem((oldItems)=>{
      return [...oldItems,{addItems, addDate}];
    });

    setAddItems("");
    setAddDate("");
    
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

              <button onClick={handleOnClick}>ADD</button>
              
                <ol>
                 {/*  <li>
                    {addItems}
                  </li> */}
                  {items.map((item,index)=>{
                    return <li key={index}>
                      <span>{item.addItems} </span>
                      <span>{item.addDate}</span>

                    </li>
                  })}
                  
                </ol>
                
            </div>
          </div>
        </div>
      </center>
    </>
  );
};

export default Todo;
