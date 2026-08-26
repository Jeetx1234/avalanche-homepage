import React from "react";

import insta from '../assets/insta.png'
import mail from '../assets/mail.png'
import FloatingAvatext from "./FloatingAvatext";
import Mountainpng from "./Mountainpng";

const Mainscreen = () => {
  return (
    <section className="relative grid h-7/8 w-full overflow-hidden ">


    <FloatingAvatext/>
    <Mountainpng/>
 
      <div
        className="
      absolute
      bottom-0
      left-0
      z-[50]
      h-[6%]
      w-full
      flex 
      justify-between
      items-center
      font-medium
      font-body
      px-10
      bg-gray-400/30

    "
      >
        <div className="flex items-center gap-1">

          <img src={insta} className="h-8 w-10 object-contain" alt="" /> <a href="https://www.instagram.com/team_avalanche_official/" className="bg-gray-400/70 rounded-2xl px-3 py-1">INSTAGRAM</a></div>
        <div className="flex items-center gap-2">

          <img src={mail} className="h-8 w-8 object-contain" alt="" /> <a href="" className="bg-gray-400/70 rounded-2xl px-3 py-1">MAIL</a>
          
        </div>

        <div>INSTAGRAM</div>
      </div>



    </section>
  );
};

export default Mainscreen;