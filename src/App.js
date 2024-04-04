import React, { useEffect, useRef, useState } from 'react';
import eye from './assets/eye.mp4';
import gsap from 'gsap';
import './App.css';

const App = () => {
  const [videoHidden, setVideoHidden] = useState(false);
  const head = useRef(null);

  const handleVideoEnd = () => {
    setVideoHidden(true);
  };

  
  return (
    <div className='min-h-screen overflow-hidden bg-black'>
      <div>
        <video
          autoPlay
          className={`absolute w-[90vw] ml-20 h-[100vh] ${videoHidden ? 'hidden' : ''}`}
          loop={true}
          src={eye}
        />
      </div>
      <div ref={head} className='content absolute mt-10 ml-[140px] text-[100px] text-white'>
        Drowsiness Detection
      </div>
      <div className='absolute bottom-[300px] left-[36%] transform[-50%]'>
        <form>
          <input type="file" id="fileInput" name="filename" className='rounded-lg border-2 content border-white px-3 py-1 text-white bg-transparent'/>
          <input type="submit" value="Upload" className='mt-2 content bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'/>
        </form>
        <p className='text-white content mt-10 w-[70%] text-center'>*Upload the image to predict whether the user is drowsy or not</p>
      </div>
    </div>
  );
};

export default App;
