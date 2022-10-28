import Link from "next/link";
import Nav from "/components/Nav"
import SideNav from "/components/SideNav"


import clientPromise from "/lib/mongodb";

export default function Dashb1({d}){

let data ={
  name: "",
}

  return(
  <div className="w-full">
    <div className="bg-black/90 w-full px-10 py-4 fixed top-0 bg-opacity-90"><Nav d={d}  name={data.name}></Nav></div>
    <div className="w-[300px] bg-black/80 fixed left-0 top-[72px]  h-full "><SideNav active={'dash'}></SideNav></div>
    <div className="bg-black/90 w-[1236px] h-[690px] fixed bottom-0 right-0 p-10 z-40 text-white flex flex-row items-center justify-center space-x-5">
      <Link href="/logo/edit"><a        className="text-2xl font-bold tracking-widest hover:opacity-80 transition-all duration-200 ease-in-out">Add User</a></Link>
      <Link href="/logo/dashboard/0"><a className="text-2xl font-bold tracking-widest hover:opacity-80 transition-all duration-200 ease-in-out">View User</a></Link>
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