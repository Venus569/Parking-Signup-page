import React from 'react'
import './Styles/signup.css' 

export const ParkDesc = ({showing,setShowing,parkdesc,setParkdesc}) => {
  return (
    <>
   {(showing==6)&&( 
    <div className="container">
      <form onSubmit={(e)=>{
          e.preventDefault();

         
          setParkdesc(parkdesc);
          setShowing(showing+1)


      }}>
        <div className="form-group">
          <label for="description" >Describe parking facility</label>
          
          <textarea className="get-margin"
          rows="14"
          name="description"
          placeholder="users are going to read this"
          value={parkdesc}  required={true} onChange={e => setParkdesc(e.target.value)} 
          
        />

        </div>


        <button type="submit">Next</button>
      </form>
     
      
    </div>
   )}
    </>
  )
}
