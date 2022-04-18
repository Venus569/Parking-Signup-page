import React from 'react'

export const CollectedData = ({email,password,operator,parking,address,gstno,parkdesc}) => {
  return (
    <div className='collected'>
        <h1>collected data from signup</h1>
        <h2>email:{email}</h2>
        <h2>password:{password}</h2>
        <h2>operator:{operator}</h2>
        <h2>parking:{parking}</h2>
        <h2>address:{address}</h2>
        <h2>gstno:{gstno}</h2>
        <h2>parkdesc:{parkdesc}</h2>
    </div>
  )
}
