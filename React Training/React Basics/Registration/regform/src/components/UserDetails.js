import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './UserDetails.css'

const UserDetails = () => {


    const {id}=useParams();
    const [userProfile, setuserProfile]=useState([])



    const apiCall=async ()=>{
        
        try{
            const res= await fetch(`https://gorest.co.in/public/v2/users/${id}`,{
                headers:{
                    'Authorization':'Bearer 35c707c450cba2d92a0573f66a364f42b92af1cf2e2a1e260034a0b0944ff4c6'
                }
            })
            if(!res.ok){
                alert(res.status)
            }else{
                console.log("ok from api")
            }
            return res.json()
        }
        catch(er){
            console.log("erro from catch is ",er)
            return [];
        }
        
    }


    useEffect(()=>{
        const apCall=async()=>{
            const dat=await apiCall();
            setuserProfile(dat)
        }
        apCall()
        // window.scroll(0,0)
    },[id])




  return (
    <div className='outDet'>
        <div className='inDet'>
            <div className='detBox'>ID: {userProfile.id}</div>
            <div className='detBox'>{userProfile.name}</div>
            <div className='detBox'>{userProfile.email}</div>
            <div className='detBox'>{userProfile.gender}</div>
            <div className='detBox'>{userProfile.status}</div>
        </div>
    </div>
  )
}

export default UserDetails