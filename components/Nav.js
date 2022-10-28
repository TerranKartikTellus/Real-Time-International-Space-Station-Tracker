import Link from "next/link";


export default function Nav({name,d}){

  return(
    <div className=" text-white  flex flex-row h-full items-center justify-between w-full ">
         <Link href="/">
              <a>
                <div className="text-4xl font-extrabold hover:opacity-80">LOGO</div>
              </a>
         </Link>
        <div className="h-full group relative z-50 text-xl font-semibold bgred-400 space-x-5 flex flex-row items-center justify-between">
            <div className="">{name && <p>Hi, {name}</p>}
            {!name && <p>Select User</p>}
            </div>
            <div>
             
                  <svg className="fill-white" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 24h-24v-24h24v24zm-2-22h-20v20h20v-20zm-4.118 14.064c-2.293-.529-4.427-.993-3.394-2.945 3.146-5.942.834-9.119-2.488-9.119-3.388 0-5.643 3.299-2.488 9.119 1.064 1.963-1.15 2.427-3.394 2.945-2.048.473-2.124 1.49-2.118 3.269l.004.667h15.993l.003-.646c.007-1.792-.062-2.815-2.118-3.29z"/></svg>
              
            </div>
            <div className="group-hover:opacity-100 bgred-400 translate-x-12 group-hover:translate-x-0 duration-200 ease-in-out transition-all opacity-0 absolute top-0 right-0 translate-y-3 z-50">
              {d.map((i,index)=>(
                // <Link >
                  <a  key={index} href={`/logo/dashboard/${index}`}>
                    <div className="bg-gray-100 z-50 flex flex-row items-center justify-between p-2 my-3 rounded-lg text-gray-900 w-[200px] ">
                      <div className="text-lg capitalize">{i.fname}</div>
                      <div className="text-xs text-right">Lat: {i.lati} <br></br>Long: {i.long}</div>
                    </div>
                  </a>
                // </Link
              ))}
            </div>
        </div>
    </div>
  );
}

