import Link from "next/link";

export default function Nav({name}){

  return(
    <div className=" text-white  flex flex-row h-full items-center justify-between w-full ">
         <Link href="/">
              <a>
                <div className="text-4xl font-extrabold hover:opacity-80">LOGO</div>
              </a>
         </Link>
        <div className="h-full text-xl font-semibold bgred-400 space-x-5 flex flex-row items-center justify-between">
            <div className="">Hi, {name}</div>
            <div>
             
                  <svg className="fill-white" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 24h-24v-24h24v24zm-2-22h-20v20h20v-20zm-4.118 14.064c-2.293-.529-4.427-.993-3.394-2.945 3.146-5.942.834-9.119-2.488-9.119-3.388 0-5.643 3.299-2.488 9.119 1.064 1.963-1.15 2.427-3.394 2.945-2.048.473-2.124 1.49-2.118 3.269l.004.667h15.993l.003-.646c.007-1.792-.062-2.815-2.118-3.29z"/></svg>
              
            </div>
        </div>
    </div>
  );
}