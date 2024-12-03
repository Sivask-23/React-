import React from 'react'

import FormPart from './FormPart'
import SideBar from './SideBar'
import './MainContent.css'

const MainContent = () => {
  return (
    <div className='cont'>
        <SideBar/>
        <FormPart/>
    </div>
  )
}

export default MainContent