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
            <div className="group-hover:opacity-100 bgred-400 translate-x-16 group-hover:translate-x-0 duration-200 ease-in-out transition-all opacity-0 absolute top-0 right-0 translate-y-6 z-50">
              {d && d.map((i,index)=>(
                // <Link >
                  <a  key={index} href={`/logo/dashboard/${index}`}>
                    <div className="bg-gradient-to-tr from-slate-200/60  via-slate-50/80 to-slate-500/70 z-50 flex flex-row items-center justify-between py-4 px-2 my-3 rounded-lg text-gray-900 w-[200px] ">
                      <div className="text-lg capitalize">{i.fname}</div>
                      <Link href={`/logo/modify/${i._id}`}>
                        <a className="group relative">
                          <div><svg className="w-7 h-7 fill-blue-600 hover:hue-rotate-90 transition-all duration-200 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.994 9.095l2.974-2.884c.144-.14.331-.211.516-.211.188 0 .375.073.518.22l-4.032 3.911c-.283-.294-.268-.752.024-1.036zm-4.49 8.819c-.06.057-.136.086-.212.086-.168 0-.304-.137-.304-.304 0-.079.031-.159.093-.218l.5-.485.422.436-.499.485zm4.034-2.386c-.919.891-1.796 1.333-3.013 1.728l-.754-.779c.433-1.205.901-2.067 1.819-2.958l1.71-1.657 1.946 2.009-1.708 1.657zm6.965-6.483l-4.402 4.269-2.218-2.29 4.402-4.27c1.016-.984 2.703-.246 2.703 1.146 0 .416-.162.832-.485 1.145z"/></svg></div>
                          {/* <div className="bg-black p-1 absolute top-0 left-0 rounded text-white">modify</div> */}
                        </a>
                      </Link>
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

