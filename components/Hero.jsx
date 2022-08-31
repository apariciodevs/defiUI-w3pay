import Link from "next/link";
import Image from "next/image";


const Hero = () => {


  return (
    <div  className="flex flex-col justify-center h-[100vh] mx-10 sm:mx-20 space-y-20 relative items-start lg:items-center ">
          <h1 className="text-6xl font-bold drop-shadow-2xl md:text-8xl text-slate-100 -tracking-3">
            No <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"> Sign-up </span> payments and transactions
          </h1>
            <button className="px-6 py-4 font-bold rounded-lg shadow-lg l text-slate-100 bg-indigo-400/90 hover:shadow-indigo-700" >Get Started</button>

        
       


     
    </div>
  );
};

export default Hero;
