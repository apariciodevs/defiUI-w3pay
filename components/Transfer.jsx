import Image from "next/image";


const TransferUi = () => {
  return (
    <>

      <div id="transfer" className="flex flex-col items-center justify-center h-screen "> 
    
        <div  className="flex items-center flex-col  p-10 bg-slate-900/80 h-[500px] w-[400px] rounded-xl justify-center shadow-2xl shadow-indigo-500">
          <h1 className="text-3xl font-bold text-slate-400 mb-14 tracking-[-1.8px]"><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">Ether</span>eum station</h1>
       <div className="flex w-full space-x-2 ">
        <Image
        src={'/eth.svg'}
        width={60}
        height={40}
        alt='eth'
       />
  
        <input type='number' id="amount" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ETH Amount" required/>
        </div>
        <input type="text" id="sender_address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-8" placeholder="Sender Address" required/>
        <input type="text" id="recipient_address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-12 mt-8" placeholder="Recipient's Address" required/>
          <button className="px-8 py-2 font-bold rounded-lg shadow-lg l text-sky-400 bg-sky-500/30 hover:text-slate-100 hover:bg-sky-400/90 hover:shadow-sky-800 hover:scale-110 " >Send</button>
        </div>
      </div>
    </>
  );
};

export default TransferUi;
