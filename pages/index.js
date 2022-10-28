import Link from "next/link";
import Nav from "/components/Nav"
import SideNav from "/components/SideNav"


export default function Dashb(){

let data ={
  name: "",
}

  return(
  <div className="w-full">
    <div className="bg-black/90 w-full px-10 py-4 fixed top-0 bg-opacity-90"><Nav  name={data.name}></Nav></div>
    <div className="w-[300px] bg-black/80 fixed left-0 top-[72px]  h-full "><SideNav active={'dash'}></SideNav></div>
    <div className="bg-red-400 w-[1236px] h-[690px] fixed bottom-0 right-0">home</div>
  </div>)
}
