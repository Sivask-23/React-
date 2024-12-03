import React from 'react'
import './SideBar.css'
const SideBar = (props) => {
  const counter=props.dfrmChild;
  return (
    <div className='outerSide'>
        <div className='innerSide'>
        Total Number enrolled
        <div className='countDiv'>{counter}</div>
        </div>
        
    </div>
  )
}

export default SideBar