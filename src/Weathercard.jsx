import React, { useEffect, useState } from 'react'

function Weathercard({tempinfo}) {
  const{
    temp,
    mood,
    name,
    country,
    wicon,
  }=tempinfo
    const [icon,seticon]=useState(" ")
   useEffect(()=>{
     if(mood){
      switch (mood) {
        case "Clouds":
          seticon("cloud.png")
          break;
          case "Clear":
            seticon("clear.png")
            break;
          case "Haze":
            seticon("haze.webp")
             break;  
          case "Mist":
              seticon("haze.webp")
               break; 
               
                  
        default:
          seticon("clear.png")
          break;
      }
     }
   },[mood])

    return (
        <>
        <div className=' mx-96'>
         <div className=" bg-slate-200 mt-8 ">
            <div className=" ">
              <div className="flex justify-center "> 
                <img src={`${icon}`} className=' max-w-sm' alt="" />
              </div>
            </div>
          </div>
          <div className=" bg-purple-800 text-white flex p-4">
            <p className=" text-6xl ml-48">{temp}°C</p>
            <div className="flex-col justify-center ml-10 mt-2">
              <p className=" text-4xl">{mood}</p>
              <p className="flex justify-center">{name},{country}</p>
            </div>
          </div>
           </div>
        </>
    )
}

export default Weathercard
