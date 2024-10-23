import { useState } from "react";
import { CiMicrophoneOn } from "react-icons/ci";    
import { IoIosSend } from "react-icons/io";
import './chat.css'


export default function Chat(){

    const [isSpeechInputMode,setIsSpeechInputMode] = useState<boolean>(false);

    return(
        <div className="flex items-center justify-center w-full h-screen image">
            {/* chat window */}
            <div className="w-[60%] h-[80%] bg-wite rounded-2xl flex flex-col justify-center items-end border-2 border-[#333647] z-20 bg-white">
                <div className=" h-[40px] bg-[#f532d5] w-full rounded-tl-xl rounded-tr-xl border-b-2 border-[#333647]">
                </div>
                {/* big glowa strefa */}
                <div className=" w-[80%] h-full my-[10px] bg-[#333647] flex self-center">

                </div>
                {/* input area */}
                <div className="p-1 my-2 h-[50px] self-center w-[90%] rounded-2xl border-2 border-[#fae134] flex  justify-between">
                    <textarea className="bg-transparent p-[1px] outline-none w-[80%] h-full rounded-l-2xl" placeholder="Wpisz pytanie tutaj"/>
                    <div className="grid justify-end grid-cols-2 w-fit">
                        <div className="grid w-full row-span-1">
                            <IoIosSend className="duration-500 ease-in-out hover:rotate-45 hover:scale-110 text-[#333647]" size={40}/>
                        </div>
                        <div className="grid w-full row-span-1">
                            <CiMicrophoneOn className="duration-500 ease-in-out hover:scale-110 text-[#333647]" size={40}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
);

}