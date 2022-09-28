import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HeadTag from '../components/head'
import axios from "axios"
import { useEffect, useState } from 'react'

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


  return (
    <div className='bg-gradient-to-br from-gray-200/80 via-gray-200 to-gray-300/40  my-auto h-full w-full' >
      <HeadTag title="Live Track ISS" cardTitle='' description=''></HeadTag>

      <main className='h-full'>
        {e && <div className=''>logging data</div>}
        {!e && <div className='bg-gray-900 h-full flex flex-col items-center justify-center text-gray-100 '>
          <div className='text-gray-100 text-3xl tracking-wider'>International Space Station</div>
          <div className='text-gray-100/70 text-base tracking-wider'>Waiting for data</div>
          </div>}
        
      </main>

     
    </div>
  )
}
