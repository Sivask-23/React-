import React, { useState } from 'react'
import './MainContent.css'
import FormPart from './FormPart'
import SideBar from './SideBar'

const MainContent = () => {

  const [dataFromChild,setDataFromChild]=useState('0')
  const getData=(data)=>{
    setDataFromChild(data)
  }
  return (
    <div className='cont'>
        <SideBar dfrmChild={dataFromChild}/>
        <FormPart dataHolder={getData}/>
    </div>
  )
}

export default MainContent