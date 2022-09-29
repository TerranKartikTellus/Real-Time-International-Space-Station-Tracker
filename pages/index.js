import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeadTag from '../components/head'
import axios from "axios"
import { useEffect, useState } from 'react'
import Map from '../components/maps/mapDark'

export default function Home() {
const [e,sete] = useState();

  async function getData(){
      await axios({
       method: 'get',
       url: "//api.open-notify.org/iss-now.json",
       responseType: 'stream'
       })
      .then(e=>{
          sete(e);
          console.log(e);
       },
      );
          // setLat(e.data.iss_position.latitude);
          // setLong(e.data.iss_position.longitude);      
          // var time = moment(e.data.iss_position.timestamp).format("DD-MM-YYYY h:mm:ss");
          // setTime(time);
  }
  // setInterval(getData,[1000]);
  useEffect(()=>{
    getData()
  },[e])
  const [view,setView] = useState("globe"); // big globe,small street view
  function changeView(str){  setView(str);  }



  return (
    <div className='bg-gradient-to-br from-gray-200/80 via-gray-200 to-gray-300/40  my-auto h-full w-full' >
      <HeadTag title="Live Track ISS" cardTitle='' description=''></HeadTag>

      <main className='h-full'>
        {e &&  <LoggingData e={e} view={view} changeView={changeView}></LoggingData>}
    
        {!e && <NoData></NoData>}
        
      </main>

     
    </div>
  )
}

function NoData(){
  return(
    <div className='bg-gray-900 h-full flex flex-col items-center justify-center text-gray-100 '>
          <div className='text-gray-100 text-3xl tracking-wider'>International Space Station</div>
          <div className='text-gray-100/70 text-base tracking-wider'>Waiting for data</div>
    </div>
  );
}
function LoggingData({view,changeView,e}){
  return(
    <div className='h-full relative group'>
      <div className="overflow-hidden relative rounded">
        <div className='absolute top-2 left-2 text-gray-100 text-3xl z-50'>Globe View</div>  
        <Map e={e} view="street v"></Map>
      </div>
      
      <div className=' absolute group top-0 flex flex-col items-center justify-center w-full h-full   group-hover:bg-black/50  transition-all duration-700 ease-in-out'>
        <div className='bg-red-400 flex flex-col opacity-0 group-hover:opacity-100 blur group-hover:blur-0  translate-y-[40px] group-hover:translate-y-0 transition-opacity duration-1000 ease-in-out items-center justify-center group-hover:visible invisible w-[30px] h-[30px]'>
          <div className='rounded-full relative'>
             <div className='absolute top-2 w-full text-center tracking-wider text-gray-100 text-xl z-50 '>Street View</div>  
             <Map e={e} view="street view"></Map>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 right-0 space-x-1'>
        <button onClick={changeView("street")} className='hover:underline text-sm'>Street View</button> |
        <button onClick={changeView("globe")} className='hover:underline text-sm'>Globe View</button>
      </div>
    </div>
  );
}