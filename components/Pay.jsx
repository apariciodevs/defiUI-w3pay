import Image from "next/image";

import { AiFillCamera } from "react-icons/ai";

const PayUI = () => {
  return (
    <>
      <div
        id="pay"
        className="flex flex-col items-center justify-center h-screen "
      >
        <div className="flex items-center flex-col  p-8 bg-slate-300/80 h-[500px] w-[400px] rounded-xl justify-center shadow-2xl shadow-indigo-500">
          <h1 className="text-3xl font-bold text-slate-900 mb-14 tracking-[-1.8px]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">
              Flash
            </span>{" "}
            Payments
          </h1>
          <div className="flex items-center justify-center w-full mb-6 ">
            <button
              className="p-1 rounded-lg bg-slate-300/30 neumorphismShadow"
            >
              <AiFillCamera size={25} />{" "}
            </button>
            <h2 className="text-xl font-bold text-slate-900  tracking-[-1.8px] ml-2">
              Scan QR Code
            </h2>
          </div>
          <Image src={"/qr.svg"} width={300} height={300} />
          <svg width="100" height="100"></svg>

          <div className="flex w-full mt-20 space-x-2 ">
            <input
              type="number"
              id="amount"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ETH Amount"
              required
            />
            <button className="px-8 py-2 font-bold rounded-lg shadow-lg l hover:text-slate-100 hover:bg-indigo-400/70 text-slate-100 bg-sky-400/90 hover:shadow-indigo-500 hover:scale-110 ">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayUI;
