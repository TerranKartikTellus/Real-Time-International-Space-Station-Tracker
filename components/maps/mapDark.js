import { useEffect, useState } from 'react';
import * as React from 'react';

import moment from 'moment';

import ReactMapGL,{ Marker,GeolocateControl,ScaleControl,NavigationControl} from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css";

// pk.eyJ1IjoidGVycmFua2FydGlrdGVsbHVzIiwiYSI6ImNreWNsd3F6NTBxYzkydG9kcmdlbWV5bGYifQ._cEUQ-zPtsLt9faUD8GRWw


export default function Map({view,e}){
// let z =3;
let lat  = e.data.iss_position.latitude;
let long = e.data.iss_position.longitude; 
let time = moment(e.data.iss_position.timestamp).format("DD-MM-YYYY h:mm:ss");

let z= 10.2;
const [zoom,setZoom] = useState(
  view=="street view" ? 12 : 2.4
);

  const [viewport,setViewport] = useState({
  // style: 'mapbox://styles/mapbox/streets-v10',
  projection: 'globe',
  latitude: lat ,
  longitude: long,
  zoom: zoom,
  center: [long, lat],
  width: "100%",
  height: "100%"
})
const [latitude,setLat] = useState();
const [longitude,setLong] = useState();

useEffect((e)=>{
   setLat(lat);
   setLong(long);

   setViewport({
    // style: 'mapbox://styles/mapbox/streets-v10',
    projection: 'globe',
    latitude: lat ,
    longitude: long,
    zoom: zoom,
    center: [long, lat],
    width: view=="street view" ? '300px':"600px",
    height:view=="street view" ? '300px': "500px",
    
  });
},[e]);

// console.log(e);


  return(
    <div className={ view=="street view" ? "w-full scale-105  h-full bg-black bg-cover rounded-full  bg-Dust-Clouds-of-the-Pacman-Nebula bg-cover ": " bg-Dust-Clouds-of-the-Pacman-Nebula bg-cover w-full  h-full bg-black bg-cover "}>
        <ReactMapGL
            attributionControl={true}
    initialViewState={viewport}
        center={[long, lat]}
        {...viewport}
        style={{width: view=="street view" ? '300px' :'83vw', height: view=="street view" ? '300px' :'83.2vh', borderRadius: '200px'}}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
         onViewportChange={viewport => setViewport({viewport})}
         
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        >
          
          <Marker longitude={long} latitude={lat} anchor="bottom" >
            <div className='group relative'>
            <img className='w-6 invert animate-pin h-6 rotate-45 shadow-2xl drop-shadow-2xl' src="/iss.svg"></img>
            {/* <div className='invisible absolute top-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 text-white group-hover:visible w[400px] h-[400px]'>
              <StreetMap e={e} />
            </div> */}
            </div>
          
          </Marker>
        {/* <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        /> */}

        {view!="street view" && <NavigationControl />}
        </ReactMapGL>
        
        
       
        
    </div>
  );
}
function StreetMap({e}){
  return(
    <Map e={e} view="street view"></Map>
  );
}