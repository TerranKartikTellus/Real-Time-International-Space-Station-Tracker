import Link from "next/link";
import { useState } from "react";
import Map from "../../../components/dashMap/map";
import Nav from "/components/Nav"
import SideNav from "/components/SideNav"
import toast,{ Toaster } from "react-hot-toast";
import Router from "next/router";

import clientPromise from "/lib/mongodb";
 
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
// import './Map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidGVycmFua2FydGlrdGVsbHVzIiwiYSI6ImNsNmdqd3ByYzE4NDQzcG4yeWlpbHA2d3YifQ.rnn_JDtEZI7vnmlBMM6U3g';


export default function Dashb3({d}){

let data ={
  name: "Vineet",
}

  return(
  <div className="w-full">
    <Toaster
      
      gutter={14}
      position="top-right"
      reverseOrder={true}
  
      />
    <div className="bg-black/90 w-full px-10 py-4 fixed top-0 bg-opacity-90 z-50"><Nav d={d}  name={""}></Nav></div>
    <div className="w-[300px] bg-black/80 fixed left-0 top-[72px]  h-full "><SideNav active={'data'}></SideNav></div>
    <div className="bg-black/80 w-[1236px] h-[690px] fixed bottom-0 right-0">
      <div className="mt-5 text-3xl font-extralight tracking-widest text-center z-40 text-white  ">Data Inflow</div>
      <Form d={d}></Form>
    </div>
  </div>)
}

function Form({d}){
const mapContainer = useRef(null);
const map = useRef(null);

const mapContainer2 = useRef(null);
const map2 = useRef(null);

const [lng, setLng] = useState(-70.9);
const [lat, setLat] = useState(42.35);
const [lng2, setLng2] = useState(-70.9);
const [lat2, setLat2] = useState(42.35);
const [zoom, setZoom] = useState(9);
 
  const [loading, setLoading] = useState(false);


useEffect(() => {
if (map.current) return; // initialize map only once
map.current = new mapboxgl.Map({
container: mapContainer.current,
style: 'mapbox://styles/mapbox/streets-v11',
center: [lng, lat],
zoom: zoom
});
});

useEffect(() => {
if (!map.current) return; // wait for map to initialize
map.current.on('move', () => {
setLng(map.current.getCenter().lng.toFixed(4));
setLat(map.current.getCenter().lat.toFixed(4));
setZoom(map.current.getZoom().toFixed(2));
});
});

// ---------------------------

useEffect(() => {
if (map2.current) return; // initialize map only once
map2.current = new mapboxgl.Map({
container: mapContainer2.current,
style: 'mapbox://styles/mapbox/streets-v11',
center: [lng, lat],
zoom: zoom
});
});

useEffect(() => {
if (!map2.current) return; // wait for map to initialize
map2.current.on('move', () => {
setLng2(map2.current.getCenter().lng.toFixed(4));
setLat2(map2.current.getCenter().lat.toFixed(4));
setZoom(map2.current.getZoom().toFixed(2));
});
});




  const [schema, setSchema] = useState({
    fname: '', lname: '',
    users: 0, flogin: 0,
    groups: 0, activeUsers: 0,
    lati: lat , long: lng
  })
  const [data,setData] = useState();

  

  async function submitForm(e){
    setLoading(true);
         e.preventDefault();
         if(document.querySelector(".fname").value!='' &&
            document.querySelector(".lname").value!='' &&
            document.querySelector(".users").value!='' &&
            document.querySelector(".flogin").value!='' &&
            document.querySelector(".groups").value!='' &&
            document.querySelector(".activeUsers").value!=''
            ){
         const response = await fetch(
                 '/api/dash/add',
                 {
                   method: 'POST',
                         body: JSON.stringify(
                                 schema
                                 ),
                                headers: {
                                  'Content-Type': 'application/json'
                                }
                              }
                );
         const jsonResponse = await response.json();
        //  console.log('Json Resp: ',jsonResponse);
         console.log(jsonResponse); 
         if(jsonResponse.msg == 'Insertion Completed'){
           console.log('Success to indert data to mongoDB  /pages/edit');
           toast.success('Successful',{duration: 4000,style: {opacity: 0.4},})
           Reset();
           Router.push(`/logo/dashboard/${d.length}`)
          }
          else {
            console.log('Failed to indert data to mongoDB  /pages/edit');
                    toast.error('Failed to send message',{duration: 4000,});

          }}
          else{
            console.log("Invalid data input");
                    toast.error('Invalid Input',{duration: 4000,});

          }

            setLoading(false);
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
    
     <div className="w-1/2 p-10 flex flex-row items-center justify-start space-x-5">
         <div>
            
            <div className="text-white text-xs font-sans my-4">
            <p className="text-lg tracking-widest font-bold">Location 1</p>Longitude: {lng} <br></br> Latitude: {lat} 
            </div>
            <div ref={mapContainer} onClick={(e)=>{
              setSchema({...schema,   lati: lat, long:lng})
            }} className="map-container z-30 text-transparent" />
            <p className="text-white text-xs my-1">Double click on desired location </p>
          </div>

          <div>
            <div className="text-white text-xs font-sans my-4">
            <p className="text-lg tracking-widest font-bold">Location 2</p>Longitude: {lng2} <br></br> Latitude: {lat2} 
            </div>
            <div ref={mapContainer2} onClick={(e)=>{
              setSchema({...schema,   lati2: lat2, long2:lng2})
            }} className="map-container  z-30 text-transparent" ></div>
            <p className="text-white text-xs my-1">Double click on desired location </p>
          </div>
     </div> 
     
       
    

   
    </div>
    <div className="flex flex-row items-center justify-center space-x-5 w-1/2 mx-auto ">
      <button  onClick={submitForm} className="w-1/2 bg-white text-black text-lg font-mono font-semibold hover:invert rounded transition-all duration-200 ease-in-out">
        {!loading && <p>Submit</p>}
        {loading && <p>Loading</p>}
      </button>
      <button onClick={Reset} className="w-1/2 bg-white text-black text-lg font-mono font-semibold hover:invert rounded transition-all duration-200 ease-in-out">Reset</button>
    </div>

    </div>
  );
}
export async function getServerSideProps(context) {
 
   const client = await clientPromise;
 const db = client.db("dash");
  const data = await db
    .collection("dash1")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();
  // console.log(Allproducts);
  
  return {
    props: {
      d: JSON.parse(JSON.stringify(data)),
    } // will be passed to the page component as props
  }
}