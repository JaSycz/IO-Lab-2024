import React from 'react';
import Sun from '../assets/images/sun.png';
import SunTalking from '../assets/videos/suntalking.mp4';

interface TalkingSunProps {
  isSpeechInputMode: boolean; // Accept prop to determine mode
}

const image = <img src={Sun} alt="Sun image" className='w-[70%] h-fit' />
const video = <video 
src={SunTalking} 
autoPlay 
loop 
className="w-[70%] h-fit" 
muted // Muted for autoplay
/>

const TalkingSun: React.FC<TalkingSunProps> = ({ isSpeechInputMode }) => {
  return (
    <div className='justify-center items-center flex center' >
      {!isSpeechInputMode ? image : video}
    </div>
  );
};

export default TalkingSun;
