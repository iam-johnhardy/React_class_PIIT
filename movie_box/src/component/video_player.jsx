import React from 'react'
import { GiLoveMystery } from "react-icons/gi";


const Video_player = ({display}) => {
  return (
   <div className="">
           <h3>Video Play</h3>
           <div className="bg">
               <h3 className="text-start">video 3</h3>
               <div className="flex items-center justify-between">
                   <div className="flex items-center gap-5">
                       <img src="assets/images/video_player.avif" alt="" className="w-40 h-30"/>
                   <div className="text-start">
                       <h5 className="font-bold text-black">first video</h5>
                   <p>video description</p>
                   <p>{display}</p>
                   </div>
                   </div>
                   <GiLoveMystery className="w-15 h-15 text-[#E35033]"/>
               </div>
   
           </div>
       </div>
  )
}

export default Video_player