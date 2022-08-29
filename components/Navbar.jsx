import Link from "next/link";
import { useState, useEffect } from "react";

import { RiMenu4Fill } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        
        <div id="top">
        <div className="flex items-center justify-between h-16 mx-10 text-slate-200 -tracking-1">
        <nav>
            <h1 className="text-3xl font-bold">W3pay</h1>
        </nav>
        <nav className="hidden space-x-10 text-xl sm:flex">
        <Link href='/'><a className="transition duration-200 cursor-pointer hover:text-sky-400">Home</a></Link>
        <Link href="/"><a className="transition duration-200 cursor-pointer hover:text-sky-400">Pay</a></Link>
        <Link href="#transfer"><a className="transition duration-200 cursor-pointer hover:text-sky-400">Transfer</a></Link>
        <Link href="#anonimity"><a className="transition duration-200 cursor-pointer hover:text-sky-400">Anonimity</a></Link>
        </nav>
        <nav className="hidden lg:flex">
        <Link href="/"><a className="w-40 px-6 py-3 font-bold text-center rounded-lg text-sky-400 bg-sky-500/30 hover:text-slate-100 hover:bg-sky-400/90">Metamask</a></Link>
        </nav>
       
        {/* Burger Menu */}

       <div onClick={handleNav} className="cursor-pointer sm:hidden"> 
        {nav ? <AiOutlineClose size={25}/> : <RiMenu4Fill size={25}/>} 
        </div>

    </div> 
    <div>
          {/* Mobile Nav */}
          <nav className={nav ? 'flex flex-col items-center justify-center w-screen space-y-3 text-xl bg-slate-200/40 text-slate-50 sm:hidden' : 'flex flex-col items-center justify-center w-screen space-y-3 text-lg bg-slate-200/40 text-slate-50 hidden' }>
        <Link href="/"><a className="w-screen py-2 text-center transition duration-200 cursor-pointer hover:text-sky-400 hover:bg-sky-400/20">Home</a></Link>
        <Link href="/"><a className="w-screen py-2 text-center transition duration-200 cursor-pointer hover:text-sky-400 hover:bg-sky-400/20">Pay</a></Link>
        <Link href="#transfer"><a className="w-screen py-2 text-center transition duration-200 cursor-pointer hover:text-sky-400 hover:bg-sky-400/20">Transfer</a></Link>
        <Link href="#anonimity"><a className="w-screen py-2 text-center transition duration-200 cursor-pointer hover:text-sky-400 hover:bg-sky-400/20">Anonimity</a></Link>
        </nav>
    </div>    
    
    </div>
    );
}



export default Navbar;<></>