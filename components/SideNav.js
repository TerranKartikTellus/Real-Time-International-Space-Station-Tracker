import Link from "next/link";

export default function SideNav({active}){

  return(
    <div className="h-full w-full bg-black">
      <Link href="/logo/dashboard/0">
        <a className={active=='dash' ? "flex flex-row scale-95 hover:scale-100 items-center justify-between transition-all duration-200 ease-in-out px-5 group hover:bg-black/90 hover:text-white text-black/80 text-2xl tracking-wide text-center bg-white/90  font-semibold" : "flex flex-row scale-95 hover:scale-100 items-center justify-between transition-all duration-200 ease-in-out px-5 group hover:bg-white/90 hover:text-black text-white/80 text-2xl tracking-wide text-center bg-black/50  font-semibold"}>
          <p>Dashboard</p>
          <svg className={active=='dash'? "fill-black/90 w-10 h-10 group-hover:invert" :"fill-white/80 w-10 h-10 group-hover:invert"} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
        </a>
      </Link>
      
      
      
      
      <div className="mt-6 mb-2 px-2 border-b-[1px] border-white/60 text-white/80 ml-4 text-lg pb-1 font-semibold">CONFIGURE</div>
      <Link href="/logo/dashboard">
        <a className="flex flex-row scale-95 hover:scale-100 items-center justify-between px-5 group hover:bg-white/90 hover:text-black transition-all duration-200 ease-in-out text-white/80 text-base tracking-wide text-center bg-black/50  font-semibold">
          <p>Identity Providers</p>
          <svg className="fill-white/80 w-10 h-10 group-hover:invert" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
        </a>
      </Link>
      <Link href="/logo/dashboard">
        <a className="flex flex-row scale-95 hover:scale-100 items-center justify-between px-5 group hover:bg-white/90 hover:text-black transition-all duration-200 ease-in-out text-white/80 text-base tracking-wide text-center bg-black/50  font-semibold">
          <p>User Stores</p>
          <svg className="fill-white/80 w-10 h-10 group-hover:invert" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
        </a>
      </Link>
      <Link href="/logo/dashboard">
        <a className="flex flex-row scale-95 hover:scale-100 items-center justify-between px-5 group hover:bg-white/90 hover:text-black transition-all duration-200 ease-in-out text-white/80 text-base tracking-wide text-center bg-black/50  font-semibold">
          <p>Applications</p>
          <svg className="fill-white/80 w-10 h-10 group-hover:invert" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
        </a>
      </Link>
      <Link href="/logo/dashboard">
        <a className="flex flex-row scale-95 hover:scale-100 items-center justify-between px-5 group hover:bg-white/90 hover:text-black transition-all duration-200 ease-in-out text-white/80 text-base tracking-wide text-center bg-black/50  font-semibold">
          <p>Policies</p>
          <svg className="fill-white/80 w-10 h-10 group-hover:invert" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
        </a>
      </Link>
      <Link href="/logo/dashboard">
        <a className="flex flex-row scale-95 hover:scale-100 items-center justify-between px-5 group hover:bg-white/90 hover:text-black transition-all duration-200 ease-in-out text-white/80 text-base tracking-wide text-center bg-black/50  font-semibold">
          <p>Multi-Factor Auth</p>
          <svg className="fill-white/80 w-10 h-10 group-hover:invert" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
        </a>
      </Link>
      


      <div className="mt-6 mb-2 px-2 border-b-[1px] border-white/60 text-white/80 ml-4 text-lg pb-1 font-semibold">MANAGE</div>
      <Link href="/logo/dashboard">
        <a className="flex flex-row scale-95 hover:scale-100 items-center justify-between px-5 group hover:bg-white/90 hover:text-black transition-all duration-200 ease-in-out text-white/80 text-base tracking-wide text-center bg-black/50  font-semibold">
          <p>Users</p>
          <svg className="fill-white/80 w-10 h-10 group-hover:invert" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
        </a>
      </Link>
      <Link href="/logo/dashboard">
        <a className="flex flex-row scale-95 hover:scale-100 items-center justify-between px-5 group hover:bg-white/90 hover:text-black transition-all duration-200 ease-in-out text-white/80 text-base tracking-wide text-center bg-black/50  font-semibold">
          <p>Groups</p>
          <svg className="fill-white/80 w-10 h-10 group-hover:invert" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
        </a>
      </Link>
      <Link href="/logo/dashboard">
        <a className="flex flex-row scale-95 hover:scale-100 items-center justify-between px-5 group hover:bg-white/90 hover:text-black transition-all duration-200 ease-in-out text-white/80 text-base tracking-wide text-center bg-black/50  font-semibold">
          <p>Audit</p>
          <svg className="fill-white/80 w-10 h-10 group-hover:invert" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
        </a>
      </Link>
      
      <Link href="/logo/edit">
        <a className={active=='data' ? "flex flex-row scale-95 hover:scale-100 items-center justify-between transition-all duration-200 ease-in-out px-5 group hover:bg-black/90 hover:text-white text-black/80 text-2xl tracking-wide text-center bg-white/90  font-semibold" : "flex flex-row scale-95 hover:scale-100 items-center justify-between transition-all duration-200 ease-in-out px-5 group hover:bg-white/90 hover:text-black text-white/80 text-2xl tracking-wide text-center bg-black/50  font-semibold"}>
          <p>Add</p>
          <svg className={active=='data'? "fill-black/90 w-10 h-10 group-hover:invert" :"fill-white/80 w-10 h-10 group-hover:invert"} clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"/></svg>
        </a>
      </Link>
      
    </div>
  );
}
