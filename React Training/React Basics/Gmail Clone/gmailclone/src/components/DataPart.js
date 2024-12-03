import React from 'react'
import './DataPart.css'

const DataPart = (props) => {
    const data=props.dp2;
  return (
    <div className='dataOut'>
        <div className='dataIn'>{data}</div>
    </div>
  )
}

export default DataPart