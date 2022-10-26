import Link from "next/link";
import { useState } from "react";
import Map from "../../../components/dashMap/map";
import Nav from "/components/Nav"
import SideNav from "/components/SideNav"


 
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
// import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidGVycmFua2FydGlrdGVsbHVzIiwiYSI6ImNsNmdqd3ByYzE4NDQzcG4yeWlpbHA2d3YifQ.rnn_JDtEZI7vnmlBMM6U3g';


export default function Dashb(){

let data ={
  name: "Vineet",
}

  return(
  <div className="w-full">
    <div className="bg-black/90 w-full px-10 py-4 fixed top-0 bg-opacity-90"><Nav  name={data.name}></Nav></div>
    <div className="w-[300px] bg-black/80 fixed left-0 top-[72px]  h-full "><SideNav active={'data'}></SideNav></div>
    <div className="bg-black/80 w-[1236px] h-[690px] fixed bottom-0 right-0">
      <div className="mt-5 text-3xl font-extralight tracking-widest text-center text-white  ">Data Inflow</div>
      <Form></Form>
    </div>
  </div>)
}

function Form(){
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);
  const [loading, setLoading] = useState(false);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v9',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.on('move', () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const [schema, setSchema] = useState({
    fname: '', lname: '',
    users: 0, flogin: 0,
    groups: 0, activeUsers: 0,
    lati: lat , long: lng
  })
  const [data,setData] = useState();

  
 async function Submit(){
    setLoading(true);
    setData(schema);
    console.log('data: ',data);
    console.log('schema: ',schema);
    
    Reset();
  }

  function Reset(){
    document.querySelector(".fname").value='';
    document.querySelector(".lname").value='';
    document.querySelector(".users").value='';
    document.querySelector(".flogin").value='';
    document.querySelector(".groups").value='';
    document.querySelector(".activeUsers").value='';
  }
  return(
    <div className="w-full">
    <div className="w-full flex flex-row items-center justify-start">

    <div className="grid grid-cols-2 w-1/2  mx-auto gap-5 bgred-400 p-10"> 
      <div>
        <div        className="text-white/90 text-sm tracking-widest  font-extralight">First Name</div>
        <div><input onChange={(e)=>{
          setSchema({
            ...schema,
            fname: e.target.value
          })
        }} className="fname bg-transparent border-b-[1px] w-full p-2 b  font-extralight  order-white/70 outline-none text-white/80 fe  ht" type={"text"}></input></div>
      </div>

      <div>
        <div        className="text-white/90 text-sm tracking-widest  font-extralight">Last Name</div>
        <div><input onChange={(e)=>{
          setSchema({
            ...schema,
            lname: e.target.value
          })
        }} className="lname bg-transparent border-b-[1px] w-full p-2 b  font-extralight  order-white/70 outline-none text-white/80 fe  ht" type={"text"}></input></div>
      </div>

      <div>
        <div        className="text-white/90 text-sm tracking-widest  font-extralight">Total number of users</div>
        <div><input onChange={(e)=>{
          setSchema({
            ...schema,
            users: e.target.value
          })
        }} className="users bg-transparent border-b-[1px] w-full p-2   font-extralight  border-white/70 outline-none text-white/80 e  ght" type={"number"}></input></div>
      </div>

      <div>
        <div        className="text-white/90 text-sm tracking-widest  font-extralight">Number of failed logins</div>
        <div><input onChange={(e)=>{
          setSchema({
            ...schema,
            flogin: e.target.value
          })
        }} className="flogin bg-transparent border-b-[1px] w-full p-2   font-extralight  border-white/70 outline-none text-white/80 e  ght" type={"number"}></input></div>
      </div>

      <div>
        <div        className="text-white/90 text-sm tracking-widest  font-extralight">Total number of groups</div>
        <div><input onChange={(e)=>{
          setSchema({
            ...schema,
            groups: e.target.value
          })
        }} className="groups bg-transparent border-b-[1px] w-full p-2   font-extralight  border-white/70 outline-none text-white/80 e  ght" type={"number"}></input></div>
      </div>

      <div>
        <div        className="text-white/90 text-sm tracking-widest  font-extralight">Total number of active users</div>
        <div><input onChange={(e)=>{
          setSchema({
            ...schema,
            activeUsers: e.target.value
          })
        }} className="activeUsers bg-transparent border-b-[1px] w-full  font-extralight   p-2 border-white/70 outline-none text-white/80  nt-light" type={"number"}></input></div>
      </div>
    </div>
     <div className="w-1/2 p-10">s
         <div>
            <div className='sidebarStyle rounded-lg overflow-hidden'>
              <div className='text-white text-sm tracking-wider font-mono font-light text-center'>
                Longitude: {lng} : Latitude: {lat} 
              </div>
            </div>
            <div className='map-container rounded-lg' onClick={(e)=>{
              setSchema({...schema,   lati: lat, long:lng})
            }} ref={mapContainerRef} />
          </div>
     </div>   
    

   
    </div>
    <div className="flex flex-row items-center justify-center space-x-5 w-1/2 mx-auto ">
      <button  onClick={Submit} className="w-1/2 bg-white text-black text-lg font-mono font-semibold hover:invert rounded transition-all duration-200 ease-in-out">
        {!loading && <p>Submit</p>}
        {loading && <p>Loading</p>}
      </button>
      <button onClick={Reset} className="w-1/2 bg-white text-black text-lg font-mono font-semibold hover:invert rounded transition-all duration-200 ease-in-out">Reset</button>
    </div>

    </div>
  );
}