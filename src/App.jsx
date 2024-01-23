import React, { useRef } from 'react';
import frame from './assets/frame.png'; // with import
import frame_top from './assets/frame_top_2.png'; // with import
import left_frame from './assets/left_frame.png'; // with import
import right_frame from './assets/right_frame.png'; // with import
import frame_bottom from './assets/frame_bottom.png'; // with import
import scene from './assets/scene_1.png'; // with import
import { useEffect } from 'react';

const data = [
    { name: "John Doe", age: 30, city: "New York" },
    { name: "Jane Doe", age: 25, city: "Los Angeles" },
];

const App = () => {
  const tableRef = useRef(null);

  useEffect(() => {
  });

  const enterFullscreen = () => {
    const elem = tableRef.current;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      elem.webkitRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    }
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  return (
    <div ref={tableRef} className="flex items-center justify-center bg-indigo-500 h-screen">
      <div  id='frame' className="flex items-center justify-center w-full h-screen max-h-[720px] max-w-[350px] min-w-[350px]">



      <div className="grid grid-cols-11 grid-rows-[repeat(40,minmax(0,1fr))] gap-0 w-full h-full relative">
    <div className="col-span-11 row-span-12 row-start-1 col-start-1"><img src={frame_top} alt="" className='w-full absolute -top-1'/></div>
    <div className="row-[span_18/span_18] row-start-13  flex justify-start">
      <img src={right_frame} alt="" className='w-[92%]'/>
      {/* <img src={left_frame} alt="" className='w-[91.16%]'/> */}
    </div>
    <div className="col-span-11 row-span-10 col-start-1 row-start-[31] "><img src={frame_bottom} alt="" className='w-full '/></div>
    <div className="row-[span_18/span_18] col-start-11 row-start-13  flex justify-end ">
      <img src={right_frame} alt="" className='w-[92%]'/>
    </div>
    {/* <div className="col-span-9 row-span-16 col-start-2 row-start-13 bg-slate-400"><img src={scene} alt="" className='w-full'/></div> */}
    <div className="col-span-9 row-[span_20/span_20] col-start-2 row-start-2 "><img src={scene} alt="" className='w-full'/></div>
</div>

      {/* <div className="grid grid-cols-11 grid-rows-40 gap-0 w-full h-full">
        <div className="col-span-11 row-span-12 row-start-1 col-start-1  "><img src={frame_top} alt="" className='w-full'/></div>
        <div className="row-span-16 row-start-13 bg-green-400">4</div>
        <div className="col-span-9 row-span-16 col-start-2 row-start-4 bg-slate-400"><img src={scene} alt="" className='w-full'/></div>
        <div className=" col-start-11 row-span-16 row-start-13 bg-lime-400">12</div>
        <div className="col-span-11 row-span-12 col-start-1 row-start-29 bg-amber-400">7</div>
      </div> */}

      {/* <div class="frame_container">
        <div class="frame_top"></div>
        <div class="frame_bottom"></div>
        <div class="frame_left "></div>
        <div class="frame_right "></div>
        <div class="scene">
          <img src={scene} alt="" className='w-full'/>

        </div>
      </div> */}
        {/* <img src={frame} alt="" className='w-80 z-10 '/>
        <img src={scene} alt="" className='w-56 absolute top-20  z-1  before:w-4 before:h-4 before:rounded-full before:bg-slate-700 before:block before:absolute before:top-[-2px] before:left-[-30px]'/>
        <p className='absolute  bottom-[95px] left-12  z-1 text-gray-700 text-xs w-56  h-12 flex items-center justify-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis aperiam eaque, odio quas corporis optio voluptatum porro.
        </p>
        <button className='absolute  bottom-6 left-10  z-1 bg-gray-500 text-white w-10 h-10 flex items-center justify-center'>
        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
        </svg>

        </button>
        <button className='absolute  bottom-10 right-10  z-1 bg-gray-500 text-white w-10 h-10 flex items-center justify-center'>
        <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
        </svg>
       </button> */}
      </div>
        <button className='absolute bottom-1 right-1' onClick={handleFullscreen}>
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
          <path d="M18 .989a1.016 1.016 0 0 0-.056-.277c-.011-.034-.009-.073-.023-.1a.786.786 0 0 0-.066-.1.979.979 0 0 0-.156-.224l-.007-.01a.873.873 0 0 0-.116-.073.985.985 0 0 0-.2-.128.959.959 0 0 0-.231-.047A.925.925 0 0 0 17 0h-4a1 1 0 1 0 0 2h1.664l-3.388 3.552a1 1 0 0 0 1.448 1.381L16 3.5V5a1 1 0 0 0 2 0V.989ZM17 12a1 1 0 0 0-1 1v1.586l-3.293-3.293a1 1 0 0 0-1.414 1.414L14.586 16H13a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1ZM3.414 2H5a1 1 0 0 0 0-2H1a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V3.414l3.536 3.535A1 1 0 0 0 6.95 5.535L3.414 2Zm2.139 9.276L2 14.665V13a1 1 0 1 0-2 0v4c.006.046.015.09.027.135.006.08.022.16.048.235a.954.954 0 0 0 .128.2.95.95 0 0 0 .073.117l.01.007A.983.983 0 0 0 1 18h4a1 1 0 0 0 0-2H3.5l3.436-3.276a1 1 0 0 0-1.38-1.448h-.003Z"/>
        </svg>
        </button>
    </div>
  );
};

export default App;
