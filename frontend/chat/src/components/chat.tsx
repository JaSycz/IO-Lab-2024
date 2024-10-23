import { useState } from "react";
import { CiMicrophoneOn } from "react-icons/ci";    
import { IoIosSend } from "react-icons/io";


export default function Chat(){

    const [isSpeechInputMode,setIsSpeechInputMode] = useState<boolean>(false);

    return(
        <div className=" w-full h-screen bg-red-600 flex justify-center items-center">
            {/* chat window */}
            <div className="w-[60%] h-[80%] bg-gray-600 rounded-2xl flex flex-col justify-center items-end">
                {/* big glowa strefa */}
                <div className=" w-[80%] h-full my-[10px] bg-black flex self-center">

                </div>
                {/* input area */}
                <div className="p-1 my-2 h-[50px] self-center w-[90%] rounded-2xl border-2 border-green-500 flex  justify-between">
                    <textarea className="bg-transparent p-[1px] outline-none w-[80%] h-full rounded-l-2xl" placeholder="Wpisz pytanie tutaj"/>
                    <div className="grid grid-cols-2 w-fit justify-end">
                        <div className="grid row-span-1 w-full">
                            <IoIosSend className="hover:rotate-45 hover:scale-110 ease-in-out duration-500" size={40}/>
                        </div>
                        <div className="grid row-span-1 w-full">
                            <CiMicrophoneOn className="hover:scale-110 ease-in-out duration-500" size={40}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
);

}