import React from 'react'

function DisplayItems(props) {
  return (
    <li key={props.index}>
        <span>{props.addItem} </span>
        <span>{props.addDate}</span>
       </li>
    
  )
}

export default DisplayItems
