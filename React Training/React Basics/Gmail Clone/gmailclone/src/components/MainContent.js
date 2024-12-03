import React, { useState } from 'react'
import './MainContent.css'
import SideBar from './SideBar'
import DataPart from './DataPart'
const MainContent = () => {

    
    const [getData,setData]=useState("Welcome to Gmail..");

    const getDataFromChild=(data)=>{
        console.log(data);
        setData(data);
    }

    const dataFromSibling=getData;

  return (
    <div className='main-content'>
    <SideBar dp={getDataFromChild}/>
    <DataPart dp2={dataFromSibling}/>
  </div>
  )
}

export default MainContent