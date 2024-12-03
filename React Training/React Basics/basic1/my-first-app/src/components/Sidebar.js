import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sideBar">
        <div className="sideHead"><div className="imgDiv"></div></div>
        <div className="sideMenu">
            <div className="box">Home</div>
            <div className="box">Projects</div>
            <div className="box">Tasks</div>
            <div className="box">Team</div>
            <div className="box">Settings</div>
        </div>

        <div className="upmenu">
            <div className="msg"><h4>Upgrade to pro</h4>
            Get 1 month free and unlock</div>
            <div className="upBtn"><button className='upbt'>Upgrade</button></div>
        </div>
    </div>
  )
}

export default Sidebar