import Link from "next/link";
import ReactMapGL,{ Marker,GeolocateControl,ScaleControl,NavigationControl} from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css";

import Nav from "/components/Nav"
import SideNav from "/components/SideNav"
import clientPromise from "/lib/mongodb";
import { useState } from "react";

import { useRouter } from 'next/router'


export default function Dashb2({d}){
  

  const router = useRouter()
  const { index } = router.query
  console.log('index: ',index);
console.log('daaa: ',d);
let map = d[index];

let data ={
  name: "Vineet",
}

  return(
  <div className="w-full">
    <div className="bg-black/90 w-full px-10 py-4 fixed top-0 bg-opacity-90 z-50"><Nav d={d}  name={map.fname}></Nav></div>
    <div className="w-[300px] bg-black/80 fixed left-0 top-[72px]  h-full "><SideNav active={'dash'}></SideNav></div>
    <div className="bg-black/90 w-[1236px] h-[690px] fixed bottom-0 right-0 px-10 z-40 overflow-y-auto">
    
      {d &&  <Dash d={map}></Dash>}
      {!d && <div className="h-full w-full flex flex-col items-center justify-center"><div className="w-16 h-16 bg-white animate-spin"></div></div>}     
    </div>
  </div>)
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

function Dash({d}){

  return(
    <div>
      <div className="flex flex-row space-x-3 items-start justify-start text-white">
        <div className="space-y-5">
          
          
          <div className="bg-[#202020] p-5 rounded-md w-[300px]">
            <div className="flex flex-row items-center justify-between">
              <img src="/svg/dustbin.svg" className="w-8 h-8"></img>
              <div className="text-white upase font-medium text-xl tracking-widest">Total Users</div>
            </div>
            <div className="flex flex-row border-b-[1px] border-b-white/70 items-center justify-between py-5">
              <svg className="fill-green-600  ring-1 ring-white rounded-full p-1 w-24 h-24 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-7.18 4h-14.815l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 6.751 0 7.506 7.595 3.64 13.679-1.292 2.031-2.64 3.63-2.64 5.821 0 1.747.696 3.331 1.82 4.5z"/></svg>
              <div className="text-5xl font-extrabold opacity-80 truncate">{d.users}</div>
            </div>
            <div className="pt-4">
              Live Users
            </div>
          </div>
          
          <div className="bg-gray-900">

            <div className="bg-[#202020] p-5 rounded-md w-[300px]">
            <div className="flex flex-row items-center justify-between">
              <img src="/svg/dustbin.svg" className="w-8 h-8"></img>
              <div className="text-white uppe font-medium text-xl tracking-widest">Login Failed</div>
            </div>
            <div className="flex flex-row border-b-[1px] border-b-white/70 items-center justify-between py-5">
              <svg className="fill-red-600  ring-1 ring-white rounded-full p-1 w-24 h-24 "  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-5v-1h5v1zm-7.18 4h-14.815l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 6.751 0 7.506 7.595 3.64 13.679-1.292 2.031-2.64 3.63-2.64 5.821 0 1.747.696 3.331 1.82 4.5z"/></svg>
              <div className="text-5xl font-extrabold opacity-80 truncate">{d.flogin}</div>
            </div>
            <div className="pt-4">
              From July, 2022 to Aug, 2022
            </div>
          </div>

          </div>
        </div>



        <div>

            <div className="bg-gray-900">

            <div className="bg-[#202020] p-5 rounded-md w-[500px]">
            <div className="flex flex-row items-center justify-between">
              {/* <img src="/svg/dustbin.svg" className="w-8 h-8"></img> */}
              <div className="text-white uppe font-medium text-xl tracking-widest">User accessing application from</div>
            </div>
            <div className="flex  flex-row border-b-[1px] border-b-white/70 items-center justify-between py-14">
              <Map lat={d.lati} long={d.long} lat2={d.lati2} long2={d.long2}></Map>
            </div>
            <div className="pt-4 flex flex-col items-center justify-start space-y-1">
              <Link href="/logo/dashboard" className="" >Update</Link> 
              <div className="flex flex-row items-center justify-start space-x-1"><div>Location 1 : [ {d.lati}, {d.long}   ]</div> <div className="bg-fuchsia-600 w-6 h-6 text-transparent">.</div></div>
              <div className="flex flex-row items-center justify-start space-x-1"><div>Location 2 : [ {d.lati2}, {d.long2}   ]</div> <div className="bg-pink-700 w-6 h-6 text-transparent">.</div></div>
            </div>
          </div>

          </div>

            


        </div>
        

        <div className="space-y-5">
          
          
          <div className="bg-[#202020] p-5 rounded-md w-[300px]">
            <div className="flex flex-row items-center justify-between">
              <img src="/svg/dustbin.svg" className="w-8 h-8"></img>
              <div className="text-white upase font-medium text-xl tracking-widest">Total Groups</div>
            </div>
            <div className="flex flex-row border-b-[1px] border-b-white/70 items-center justify-between py-5">
              <svg className="fill-blue-600  ring-1 ring-white rounded-full p-1 w-24 h-24 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.644 17.08c2.866-.662 4.539-1.241 3.246-3.682-3.932-7.427-1.042-11.398 3.111-11.398 4.235 0 7.054 4.124 3.11 11.398-1.332 2.455.437 3.034 3.242 3.682 2.483.574 2.647 1.787 2.647 3.889v1.031h-18c0-2.745-.22-4.258 2.644-4.92zm-12.644 4.92h7.809c-.035-8.177 3.436-5.313 3.436-11.127 0-2.511-1.639-3.873-3.748-3.873-3.115 0-5.282 2.979-2.333 8.549.969 1.83-1.031 2.265-3.181 2.761-1.862.43-1.983 1.34-1.983 2.917v.773z"/></svg>
              <div className="text-5xl font-extrabold opacity-80 truncate">{d.groups}</div>
            </div>
            <div className="pt-4">
              Live Groups
            </div>
          </div>
          
          <div className="bg-gray-900">

            <div className="bg-[#202020] p-5 rounded-md w-[300px]">
            <div className="flex flex-row items-center justify-between">
              <img src="/svg/dustbin.svg" className="w-8 h-8"></img>
              <div className="text-white uppe font-medium text-xl tracking-widest">Active Users</div>
            </div>
            <div className="flex flex-row border-b-[1px] border-b-white/70 items-center justify-between py-5">
              <svg className="fill-blue-600  ring-1 ring-white rounded-full p-1 w-24 h-24 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10.644 17.08c2.866-.662 4.539-1.241 3.246-3.682-3.932-7.427-1.042-11.398 3.111-11.398 4.235 0 7.054 4.124 3.11 11.398-1.332 2.455.437 3.034 3.242 3.682 2.483.574 2.647 1.787 2.647 3.889v1.031h-18c0-2.745-.22-4.258 2.644-4.92zm-12.644 4.92h7.809c-.035-8.177 3.436-5.313 3.436-11.127 0-2.511-1.639-3.873-3.748-3.873-3.115 0-5.282 2.979-2.333 8.549.969 1.83-1.031 2.265-3.181 2.761-1.862.43-1.983 1.34-1.983 2.917v.773z"/></svg>
              <div className="text-5xl font-extrabold opacity-80 truncate">{d.activeUsers}</div>
            </div>
            <div className="pt-4">
              User allowed under your subscription
            </div>
          </div>

          </div>
        </div>


      </div>
      <div>
        <div className="text-white text-xl mb-3">Quick Setup</div>
        <div className="flex flex-row items-center justify-start space-x-3">
          
          <div className="relative">
          <svg className="fill-black z-40 absolute top-0 left-0 rotate-90 w-8 h-8 -translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
          <div className="flex flex-row py-1 px-3 items-center justify-start space-x-3 bg-green-600 text-white font-sans font-medium text=base">
            <div className="pl-5">Create Users</div>
            <div><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg></div>
          </div>
          <svg className="fill-green-600 z-50 absolute right-0 top-0 rotate-90 w-8 h-8 translate-x-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
          </div>


          <div className="relative">
          <svg className="fill-black absolute z-40 top-0 left-0 rotate-90 w-8 h-8 -translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
          <div className="flex flex-row py-1 px-3 items-center justify-start space-x-3 bg-green-600 text-white font-sans font-medium text=base">
            <div className="pl-5">Create Application</div>
            <div><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg></div>
          </div>
          <svg className="fill-green-600 z-50 absolute right-0 top-0 rotate-90 w-8 h-8 translate-x-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
          </div>

          <div className="relative">
          <svg className="fill-black z-40 absolute top-0 left-0 rotate-90 w-8 h-8 -translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
          <div className="flex flex-row py-1 px-3 items-center justify-start space-x-3 bg-green-600 text-white font-sans font-medium text=base">
            <div className="pl-5">Create Policy</div>
            <div><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg></div>
          </div>
          <svg className="fill-green-600 z-50 absolute right-0 top-0 rotate-90 w-8 h-8 translate-x-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
          </div>

          <div className="relative">
          <svg className="fill-black absolute z-40 top-0 left-0 rotate-90 w-8 h-8 -translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
          <div className="flex flex-row py-1 px-3 items-center justify-start space-x-3 bg-green-600 text-white font-sans font-medium text=base">
            <div className="pl-5">Create Gateway</div>
            <div><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg></div>
          </div>
          <svg className="fill-green-600 z-50 absolute right-0 top-0 rotate-90 w-8 h-8 translate-x-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
          </div>

          <div className="relative">
          <svg className="fill-black absolute z-40 top-0 left-0 rotate-90 w-8 h-8 -translate-x-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
          <div className="flex flex-row py-1 px-3 items-center justify-start space-x-3 bg-green-600 text-white font-sans font-medium text=base">
            <div className="pl-5">Add Apps to Gateway</div>
            <div><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/></svg></div>
          </div>
          <svg className="fill-green-600 z-50 absolute right-0 top-0 rotate-90 w-8 h-8 translate-x-7" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
          </div>
        </div>
        
      </div>
    </div>
  );
}

function Map({lat,long,lat2,long2}){
  let view="street view"
  const [viewport,setViewport] = useState({
  // style: 'mapbox://styles/mapbox/streets-v10',
  projection: 'globe',
  latitude: lat ,
  longitude: long,
  zoom: 0.6,
  center: [lat,long],
  width: "100%",
  height: "100%",
  projection: 'naturalEarth'
})
  return(
    <ReactMapGL
    projection='equalEarth'
            attributionControl={true}
    initialViewState={viewport}
        center={[lat,long]}
        {...viewport}
        style={{width: '500px' , height: '300px' }}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
         onViewportChange={viewport => setViewport({viewport})}
         
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        >
          
          <Marker longitude={long} latitude={lat} anchor="bottom" >
            <div className='group relative'>
            <div className="bg-fuchsia-600 w-7 z-40 h-7 rounded-full">.</div>{/* <div className='invisible absolute top-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 text-white group-hover:visible w[400px] h-[400px]'>
              <StreetMap e={e} />
            </div> */}
            </div>
          
          </Marker>

          <Marker longitude={long2} latitude={lat2} anchor="bottom" >
            <div className='group relative'>
            <div className="bg-pink-700 z-50 w-5 h-5 rounded-full">.</div>{/* <div className='invisible absolute top-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 text-white group-hover:visible w[400px] h-[400px]'>
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
        
  );
}