import React from 'react'

function DisplayItems(props) {
 
  return (
    <li key={props.index}>
        <span>{props.addItem} </span>
        <span>{props.addDate}</span>
        <button className='remove-button' onClick={
          ()=>{
            props.onSelect(props.id);
          }
        }>Remove</button>
       </li>
    
  )
}

export default DisplayItems
