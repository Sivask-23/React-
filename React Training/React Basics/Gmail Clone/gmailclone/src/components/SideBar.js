import React, { useState } from 'react'
import './SideBar.css'

const SideBar = (props) => {


  const [buttonVal,setButtonVal]=useState('');

  
  const handleButtonClick=(butName)=>{
    setButtonVal(butName);
    props.dp(butName);
  }

  return (
    <div className='outBar'>
        <div className='inBar'>
            <div className='menuBar'>
                <button className={`menu ${buttonVal==='Inbox' ? 'active' : ''}`} onClick={()=>{handleButtonClick('Inbox')}}>Inbox</button>
                <button className={`menu ${buttonVal==='Starred' ? 'active':''}`} onClick={()=>{handleButtonClick("Starred")}}>Starred</button>
                <button className={`menu ${buttonVal==='Snoozed' ? 'active':''}`} onClick={()=>{handleButtonClick("Snoozed")}}>Snoozed</button>
                <button className={`menu ${buttonVal==='Sent' ? 'active':''}`} onClick={()=>{handleButtonClick("Sent")}}>Sent</button>
                <button className={`menu ${buttonVal==='Draft' ? 'active':''}`} onClick={()=>{handleButtonClick("Draft")}}>Draft</button>
            </div>
        </div>
    </div>
  )
}

export default SideBar