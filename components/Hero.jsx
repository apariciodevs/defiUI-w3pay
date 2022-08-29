import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div  className="flex flex-col justify-center h-[100vh] mx-10 sm:mx-20 space-y-20 relative items-start lg:items-center ">
          <h1 className="text-6xl font-bold drop-shadow-2xl md:text-8xl text-slate-100 -tracking-3">
            No <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"> Sign-up </span> payments and transactions
          </h1>
          <Link href="/">
            <a className="w-40 px-8 py-3 font-bold text-center rounded-lg text-sky-400 bg-sky-500/30 hover:text-slate-100 hover:bg-sky-400/90">
                Get started
            </a>
          </Link>
        
       


     
    </div>
  );
};

export default Hero;
