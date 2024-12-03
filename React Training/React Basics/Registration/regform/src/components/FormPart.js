import React, { useEffect, useState } from 'react'
import './FormPart.css'
import { useNavigate } from 'react-router-dom'
const FormPart = (props) => {

// use state
    const[details,setDetails]=useState({name:'',email:'',gender:'',status:''})

    const[userList,setUserList]=useState([])


    const [apiList,setapiList]=useState([])

    const [refresh, setRefresh] = useState(false); // For refreshing the table


// useeffect ie, used to perfome sideeffects after use state
// take 2 arguments, first one is a fn and scnd one is dependency 

    useEffect(()=>{

       const dataFromApi=async()=>{
            const dfrm= await apiCalling()
            setapiList(dfrm)
            console.log( "length of ",dfrm.length)
        }
       
        dataFromApi()
        
    },[refresh])




    const apiPosting= async (data)=>{
        const URL="https://gorest.co.in/public/v2/users?access-token=35c707c450cba2d92a0573f66a364f42b92af1cf2e2a1e260034a0b0944ff4c6";
        try{
            const response=await fetch(URL,{
                method:'POST',
                headers:{ 'Content-Type': 'application/json' },
                body:JSON.stringify(data),
            });

            const responsedata=await response.json();
            if(!response.ok){
                console.log("error...",response.status,responsedata)
            }else{
                console.log("succesfully uploaded to API",response.status,responsedata)
            }

            return responsedata;
        }catch(er){
            console.log('error fetched...',er)
        }
    }





    const handleOnChange=(data,key)=>{
        console.log(data,key)
        let temp={...details}
        temp[key]=data
        setDetails(temp)
    }




    const handleOnSubmit= async (e)=>{
        e.preventDefault()
        
        if(details.name && details.email && details.gender && details.status){
            if(window.confirm("are you sure to add ?")){
                const tempObj={
                    name:details.name,
                    email:details.email,
                    gender:details.gender,
                    status:details.status
                }

                // post the same to API
                let tempApiObj={...details}
                const retVal=await apiPosting(tempApiObj)
                console.log("hello from api console",retVal)
                setRefresh((prev) => !prev);
                let tempList=[...userList]
                tempList.push(tempObj)
                setUserList(tempList)
                details.name=''
                details.email=''
                details.gender=''
                details.status=''
                console.log(tempList)
                console.log(tempList.length)
                props.dataHolder(tempList.length)
                console.log("submitted")

            }
        }else{
            alert("Please fill all details")
        }

    }


    // const handleDelete=(idx)=>{

    //     if(window.confirm("Are you sure want to delete?")){
    //         const newUserList=userList.filter((ele,index)=>{
    //             return index!==idx
    //          })
     
    //          setUserList(newUserList)
    //          console.log(newUserList.length)
    //          props.dataHolder(newUserList.length)
    //     }
        
    // }


    const nav=useNavigate()

    const handleView=(idx)=>{

        nav(`/user/${idx}`)

    }




    // fetching

    const apiCalling= async()=>{
       const val= await fetch("https://gorest.co.in/public/v2/users?per_page=6",{
        headers:{
            'Authorization':'Bearer 35c707c450cba2d92a0573f66a364f42b92af1cf2e2a1e260034a0b0944ff4c6'
        }
       })
        const rVal=await val.json()
        return rVal
    }


  return (
    <div className='mainPart'>
        <div className='innerPart'>
           <span>Register Here..</span>
            <div className='formDiv'>
                <form className='frm' onSubmit={handleOnSubmit}>

                    <div className='det'>
                        <input type="text" placeholder='Fullname' value={details.name} onChange={(event)=>{handleOnChange(event.target.value,'name')}} className='txt'/>
                        <input type="email" placeholder='Enter mail id' value={details.email} onChange={(event)=>{handleOnChange(event.target.value,'email')}}  className='em'/>
                    </div>

                    <div className='det'>
                        <div className='detg'>
                            <label>Gender </label><br/>
                            <div className='rdDiv'>
                                <label><input type="radio" name='gender' value={details.gender} checked={details.gender==='Male'} onChange={(event)=>{handleOnChange('Male','gender')}}  className='rd'/>Male</ label>
                                <label><input type="radio" name='gender' value={details.gender} checked={details.gender==='Female'} onChange={(event)=>{handleOnChange('Female','gender')}}  className='rd'/>Female</ label>
                            </div>
                        </div>

                        
                        <div className='detSel'>
                                <label>Status </label>
                                <select className='selBox' value={details.status}  onChange={(event)=>{handleOnChange(event.target.value,'status')}} >
                                    <option value="" disabled selected hidden>Select Status</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                        </div>
                    </div>


                    <div className='detbtn'>
                        <button type='submit' className='btn'>ADD</button>
                    </div>

                </form>


                <div className='dataTable'>
                    <table className='styletable'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Mail id</th>
                                <th className='gen'>Gender</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>

                        {apiList.length && apiList?.map((ele,idx)=>{
                            return(
                                <tr key={idx} className={`trData${(idx+1) % 2===0 ? 'even':'odd'}`}>
                                    <td>{ele.id}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.gender}</td>
                                    <td>{ele.status}</td>
                                    <td><button className='delBtn' onClick={()=>{handleView(ele.id)}}>View</button></td>
                                </tr>
                            )
                        })}

                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default FormPart