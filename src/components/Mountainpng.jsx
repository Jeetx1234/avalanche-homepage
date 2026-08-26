import React from 'react'
import mainScreenImg from "../assets/ava_background3.png";
const Mountainpng = () => {
  return (
    <div>
            {/* MOUNTAIN */}
      <img
        src={mainScreenImg}
        alt="Avalanche mountain"
        className="
          col-start-1
          row-start-1
          z-10

          h-full
          w-full

          object-cover
         translate-y-[-180px]
         

          pointer-events-none
          select-none
        "
      />
 
    </div>
  )
}

export default Mountainpng