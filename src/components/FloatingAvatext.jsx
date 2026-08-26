import React from 'react'

const FloatingAvatext = () => {
  return (
    <div>
              {/* AVALANCHE TEXT */}
              <h1
                className="
                  col-start-1
                  row-start-1
                  z-0
        
                  flex
                  h-full
                  w-full
                  items-center
                  justify-center
        
                  whitespace-nowrap
        
                  gap-[0.18em]
                  translate-y-[-20px]
        font-body
                  text-[11vw]
                  font-black
                  uppercase
                  leading-none
                  tracking-[0.07em]
        
                  pointer-events-none
                "
              >
                {"AVALANCHE".split("").map((letter, index) => (
                  <span
                    key={index}
                    className="avalanche-letter"
                    style={{
                      animationDelay: `${index * 0.08}s`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </h1>
    </div>
  )
}

export default FloatingAvatext