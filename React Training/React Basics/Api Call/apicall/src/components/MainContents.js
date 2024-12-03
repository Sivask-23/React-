import React from 'react'
import './MainContents.css'
import TaskBar from './TaskBar'
import { Outlet } from 'react-router-dom'
const MainContents = () => {
  return (
    
    <div className='mcont'>
        <TaskBar/>
        <Outlet />
    </div>
   
  )
}

export default MainContents