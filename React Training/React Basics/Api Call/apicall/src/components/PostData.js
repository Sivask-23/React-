import React, { useEffect, useState } from 'react'
import './PostData.css'
import { useNavigate } from 'react-router-dom'

const PostData = (props) => {

  const[post,setPost]=useState([])

  const navigate = useNavigate();


 useEffect(()=>{

  const postData=async () => {
    const data=await apiCall();
    setPost(data)
  };

  postData();

 },[])


 useEffect(()=>{
  console.log(post)
 },[post])




  async function apiCall() {

    const URL="https://gorest.co.in/public/v2/posts"

    try{
      const response= await fetch(URL);
      if(!response.ok){
        throw new Error(`Eror: ${response.status}`);
      }

      return await response.json();
    }
    catch(error){
      console.log("failed to fetch posts: ",error)
      return []
    }
    
  }

  const sendPostdata=(postdet)=>{
    console.log("hello")
    props.tk(postdet)
    navigate('postdetails');
  }

  
  return (
    <div className='outDat'>
        <div className='inData'>
          {post.map((postdata)=>{
            return(
              <div className='postCont' key={postdata.id}>
                <div className='pno'>
                  <div>Post id: {postdata.id}</div>
                  <div>userId : {postdata.user_id}</div>
                </div>
                <div className='ptitle'>{postdata.title}</div>
                {/* <div className='pbody'>{postdata.body}</div> */}
                <div className='pauthor'><button onClick={()=>{sendPostdata(postdata)}} className='item'>read more</button></div>
            </div>
            )
          })}
        </div>
    </div>
  )
}

export default PostData