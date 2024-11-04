import "regenerator-runtime";
import { useState, useEffect } from "react";
import { CiMicrophoneOn } from "react-icons/ci";    
import { IoIosSend } from "react-icons/io";
import TalkingSun from "./TalkingSun";
import './chat.css'
import axios from "axios";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export default function Chat(){

    const [isSpeechInputMode,setIsSpeechInputMode] = useState<boolean>(false);
    const [data,setData] = useState("");
    const [prompt,setPrompt] = useState("");
    const [changeValue,setChangeValue] = useState("");
    
    const sendPostRequest = async () => {
        try {
          const prompt = changeValue
          const response = await axios.post('http://localhost:5000/', {
            prompt
          });
          console.log(data)
          console.log(response)
          setData(response.data);
          speak(response.data) //wywolanie mowy

        } catch (err) {
          console.log(err);
        } 
      };

      
      const handleSendClick = () => {
        setPrompt(changeValue);
        sendPostRequest();
        setChangeValue("");
      }

      const speak = (text:string) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = "pl-PL";
        
        // Ustawienie isSpeechInputMode na true przed rozpoczęciem mowy
        setIsSpeechInputMode(true);
    
        // ustawi isSpeechInputMode na false po zakończeniu mowy
        utterance.onend = () => {
        setIsSpeechInputMode(false);
        };
        

        window.speechSynthesis.speak(utterance);        
    };
    


      const {
        listening,
        transcript,
        interimTranscript,
        browserSupportsSpeechRecognition} = useSpeechRecognition();

      const handleMicClick =  () => {
        if (!browserSupportsSpeechRecognition){
          setChangeValue("Change Browser!")
        } 
        else{
          const options = {
            language: 'pl-PL', // Ustaw język na polski
          };
        SpeechRecognition.startListening(options);
        }

      }
        
      useEffect(()=> {
        setChangeValue(transcript)
      },[listening, interimTranscript])

      


    return(
        <div className="flex items-center justify-center w-full h-screen image">
            {/* chat window */}
            <div>
                {data }
            </div>
            <div className="w-[60%] h-[80%] bg-wite rounded-2xl flex flex-col justify-center items-end border-2 border-[#333647] z-20 bg-white">
                <div className=" h-[40px] bg-[#f532d5] w-full rounded-tl-xl rounded-tr-xl border-b-2 border-[#333647]">
                </div>
                {/* big glowa strefa */}
                <div className=" w-[70%] h-full my-[10px] bg-[rgba(163,204,198,255)]  self-center">
                    <TalkingSun isSpeechInputMode={isSpeechInputMode}/>
                </div>
                {/* input area */}
                <div className="p-1 my-2 h-[50px] self-center w-[90%] rounded-2xl border-2 border-[#fae134] flex  justify-between">
                    <textarea className="bg-transparent p-[1px] outline-none w-[80%] h-full rounded-l-2xl" placeholder="Wpisz pytanie tutaj" onChange={e => setChangeValue(e.target.value)} value={changeValue}/>
                    <div className="grid justify-end grid-cols-2 w-fit">
                        <div className="grid w-full row-span-1" onClick={handleSendClick}>
                            <IoIosSend className="duration-500 ease-in-out hover:rotate-45 hover:scale-110 text-[#333647]" size={40}/>
                        </div>
                        <div className="grid w-full row-span-1" onClick={handleMicClick}>
                            <CiMicrophoneOn color={listening ? "green" : "red"} className="duration-500 ease-in-out hover:scale-110 text-[#333647]" size={40}/> 
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
);

}