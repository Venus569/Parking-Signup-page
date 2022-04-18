import React, { useEffect } from 'react'
import './Styles/signup.css' 
import Map from './Map'


const MapContainer = ({showing,setShowing,address,lat,long,setLat,setLong}) => {

 

  return (
    <>
       {(showing==5)&&( 
    <div className="container">
      <form onSubmit={(e)=>{
          e.preventDefault();
          setShowing(showing+1)


      }}>

        <div className="form-group">
          <label for="address">Address</label>
          <input type="text" id="address" name="address" value={address} />
        </div>
        <br/>
        <br/>
        <br/>
        <h4>Please Mark on Map</h4>
       
        <div id="mapClipPath">
                <Map />
            </div>
        <button type="submit" >Next</button>
      </form>
     
      
      
    </div>
       )}
    </>
  )
}

export default MapContainer;