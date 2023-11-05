import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Weathercard from "./Weathercard";


function App() {
  const [searchvalue, setsearchvalue] = useState("pune");
  const [tempinfo, settempinfo] = useState({});

  const getinfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=de96e9808e795bd3b3bf9fa77b257e88`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data)
      
      const { temp } = data.main;
    const { main: mood } = data.weather[0];
    const { name } = data;
    const { country } = data.sys;
    const {wiicon}=data.weather[0].icon;
    
    const myweatherinfo = {
      temp,
      mood,
      name,
      country,
      wiicon,
    };
    settempinfo(myweatherinfo);
    } 

    
    catch (error) {
      alert("not found");
    }
  };
  useEffect(() => {
    getinfo();
  }, []);

  return (
    <>
      <div className="flex justify-center mt-40">
        <div className="">
          <div className=" ml-7">
            <input
              type="search"
              placeholder="search"
              value={searchvalue}
              onChange={(e) => setsearchvalue(e.target.value)}
              className=" p-1 w-60 rounded-l-sm"
            />
            <button
              className=" bg-purple-800 p-1 rounded-r-sm text-white "
              onClick={getinfo}
            >
              Search
            </button>
          </div>
         
        </div>
      </div>
      <Weathercard tempinfo={tempinfo}/>
    </>
  );
}

export default App;
