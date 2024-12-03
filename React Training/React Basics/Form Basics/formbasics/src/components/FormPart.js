import React, { useState } from 'react'
import './FormPart.css'

const FormPart = () => {


    const [nameBox, setNameBox]=useState("")
    const [clgBox, setClgBox]=useState("")

    // creating empty list to store user data

    const[nameList,setNameList]=useState([])



    // to handle name change event from form

    const handleNameChange=(event)=>{
        console.log(event.target.value)
        setNameBox(event.target.value)
    }

    // to handle college name change event from form

    const handleClgChange=(event)=>{
        console.log(event.target.value)
        setClgBox(event.target.value)
    }


    // now we should upload the values enetered in the form to the 
    // nameList we defined inthe form of objects ie, key-value pair
    // for this we need to handle this through add button onClick event
    // when we click add button the key value pair should get into the list 

    const handleAddEvent=(event)=>{
        event.preventDefault()
        if(nameBox && clgBox)
        {
            const userConfirm=window.confirm((nameBox+" "+clgBox+" are you sure ?"))
            console.log(userConfirm)             
            if(userConfirm){
                const tempObj={
                    nameOfstd:nameBox,
                    nameOfClg:clgBox
                }
                let newList=[...nameList] // oldlist is passed to newlist using spread operator
                newList.push(tempObj)
                setNameList(newList)
                setNameBox("")
                setClgBox("")
    
            }
        }
        
        else{
            alert("fill both name and college")
        }
        
    }
  





  return (
    <div className='outerForm'>
        <div className='innerForm'>
            <div className='dataEntry'>
                <form onSubmit={handleAddEvent} >
                    <label htmlFor="name" className='lb'>Name </label>
                    <input type="text"  value={nameBox} className='inp' onChange={handleNameChange} placeholder='fullname' />
                    <label htmlFor="college" className='lb'>College </label>
                    <input type="text"  value={clgBox} className='inp' onChange={handleClgChange} placeholder='college name'/>
                    <button className='okbtn' type='submit'>Add</button>
                </form>
            </div>

            <div className='tableDiv'>
                <table>
                    <thead>
                        <tr>
                            <th>Serial No</th>
                            <th>Name</th>
                            <th>College</th>
                        </tr>
                    </thead>

                    <tbody>

                        {nameList.map((ele,idx)=>(
                            
                                <tr key={idx}>
                                    <td>{idx+1}</td>
                                    <td>{ele.nameOfstd}</td>
                                    <td>{ele.nameOfClg}</td>
                                </tr>
                            
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    </div>
  )
}

export default FormPart