import React, { useState ,useEffect} from "react";
import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow 
} from "react-google-maps";
import dibs from './Styles/placeholder.png'

function MapComponent() {
    const[lat,setLat]=useState(0);
    const[long,setLong]=useState(0);
    const[gpsAddress,setGpsAdress]=useState('');
    useEffect(() => {
        const KEY = "AIzaSyD7pGIZUaQ_CPNMTKc2mgaqsug4CfwJDcM";
        let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyArvHS32ERlIONYZ3noZVWZ-uB6DEHoatw`;
        
        fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);

        })
        .catch(err => console.warn(err.message));


    //console.log(lat," ",long);

    },[lat,long]);
  
    
    
    // console.log("hello");
    return (
        <>
         <p>{`${lat}:${long}`}</p>
        <GoogleMap 
        onClick={ev => {
            //console.log("latitide = ", ev.latLng.lat());
            //console.log("longitude = ", ev.latLng.lng());
            setLat(ev.latLng.lat());
            setLong(ev.latLng.lng());
          }}
            defaultZoom={12}
            defaultCenter={{ lat: 28.617649, lng: 77.192802 }}
        >
           
               
               <Marker 
                    
                    position={{
                        lat:lat, 
                        lng: long
                    }}
                    icon={{
                        url: {dibs},
                        scaledSize: new window.google.maps.Size(25, 25)
                    }}
                    
                />

                
        
        </GoogleMap>
        </>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapComponent));

function Map( ) {
    return (
        <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyArvHS32ERlIONYZ3noZVWZ-uB6DEHoatw`}
            loadingElement={<div style={{ height:"100v%"}} />}
            containerElement={<div style={{ height:"100%"}} />}
            mapElement={<div style={{ height:"100%"}} />}

        />
    )
}

export default Map;