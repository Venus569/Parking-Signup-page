import React from 'react'
import './Styles/signup.css' 

export const ParkingDetails = ({showing,setShowing,operator,parking,address,setAddress,setParking,setOperator}) => {
  return (
    <>
     {(showing==2)&&( 
    <div className="container">
      <form  onSubmit={(e)=>{
          e.preventDefault();
          setAddress(address);
          setOperator(operator);
          setParking(parking);
          setShowing(showing+1)

      }}
      >
        <div className="form-group">
          <label for="operator">name of operator</label>
          <input type="text" id="operator" name="operator" required={true} onChange={e => setOperator(e.target.value)} value={operator}/>
        </div>

        <div className="form-group">
          <label for="parking">name of parking</label>
          <input type="text" id="parking" name="parking" required={true} onChange={e => setParking(e.target.value)} value={parking}/>
        </div>

        <div className="form-group">
          <label for="address">address</label>
          <input type="text" id="address" name="address" required={true} onChange={e => setAddress(e.target.value)} value={address}/>
        </div>

        
        <button type="submit" >Next</button>
      </form>
     
    </div>
     )}
    </>
  )
}
