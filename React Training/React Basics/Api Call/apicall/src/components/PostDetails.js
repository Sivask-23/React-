import React, { useEffect, useState } from 'react'
import './PostDetails.css'

const PostDetails = (props) => {

  const [pdata,setpdata]=useState({});

  useEffect(()=>{

    if(props.dt){
      setpdata(props.dt)
      window.scrollTo(0, 0);
    }

  },[props.dt])

  return (
    <div className='outerData'>
      <div className='innerData'>
        <div>Post ID: {pdata.id}</div>
        <div>User ID: {pdata.user_id}</div>
        <div>Title: {pdata.title}</div>
      </div>
    </div>
  )
}

export default PostDetails