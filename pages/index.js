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
    <div className="bg-black/90 w-full px-10 py-4 fixed top-0 bg-opacity-90 z-50"><Nav d={d}  name={data.name}></Nav></div>
    <div className="w-[300px] bg-black/80 fixed left-0 top-[72px]  h-full "><SideNav active={'dash'}></SideNav></div>
    <div className="bg-black/90 z-40 w-[1236px] h-[690px] fixed bottom-0 right-0 p-10 z-40 text-white flex flex-row items-center justify-center space-x-16">
      <Link href="/logo/edit"><a        className="text-2xl font-bold tracking-widest hover:opacity-80 transition-all duration-200 ease-in-out">
        <div><svg className="w-32 h-32 fill-white mx-auto mb-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M24 0v24h-24v-24h24zm-6.118 16.064c-2.293-.529-4.427-.993-3.394-2.945 3.146-5.942.834-9.119-2.488-9.119-3.388 0-5.643 3.299-2.488 9.119 1.064 1.963-1.15 2.427-3.394 2.945-2.048.473-2.124 1.49-2.118 3.269l.004.667h15.993l.003-.646c.007-1.792-.062-2.815-2.118-3.29z"/></svg></div>
        <div>Add New User</div>
          <div className="text-xs font-sans font-normal w-[200px] text-justify">Add a new user + data is saved in mongoDB + can be modified</div>
      </a></Link>
      <div className="text-2xl font-bold tracking-widest hover:opacity-80 transition-all duration-200 ease-in-out">
        <div><svg className="w-32 h-32 fill-white mx-auto mb-5 border-2 border-white" xmlns="http://www.w3.org/2000/svg " width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="m11.998 5c-4.078 0-7.742 3.093-9.853 6.483-.096.159-.145.338-.145.517s.048.358.144.517c2.112 3.39 5.776 6.483 9.854 6.483 4.143 0 7.796-3.09 9.864-6.493.092-.156.138-.332.138-.507s-.046-.351-.138-.507c-2.068-3.403-5.721-6.493-9.864-6.493zm.002 3c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4zm0 1.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" fill-rule="nonzero"/></svg></div>
        <div>View Users</div>
        <div className="text-xs font-sans font-normal w-[200px] text-justify">Hover on Top Navbar Select User to select a user</div>
      </div>
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