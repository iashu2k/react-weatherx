import React, { useEffect, useState } from "react";

import UpperHeader from "./upperHeader";
import Card from "./card";
import Charts from "./charts";
import Axios from "axios";
import { FaClock, FaEye, FaWind, FaCompass, FaTint, FaTemperatureLow, FaSun, FaCloud } from "react-icons/fa"
import {FiSunrise, FiSunset} from "react-icons/fi"

const WeatherReport = (props) => {
  const [weather, setWeather] = useState({});
  const [loaded, setLoaded] = useState(false);
  const { lon, lat } = props.match.params;
  const key = process.env.REACT_APP_KEY;
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    Axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely&appid=${key}`,
      { signal }
    )
      .then(({ data }) => {
        setWeather(data);
        setLoaded(true);
        
      })
      .catch((err) => console.log(err));

    return () => {
      abortController.abort();
    };
  }, [key, lat, loaded, lon]);

  return (
    <>
      { loaded &&
        <div className="py-1">
        <div className="container mx-auto my-10 rounded-lg min-h-screen bg-transparent p-5 border-2 border-gray-400 shadow-lg text-white">
          <UpperHeader report={weather} />
          

          <div className="grid grid-cols-3 gap-2">
            <div className="grid grid-cols-1 mx-auto text-xs text-center">
              <Card name={"Timezone"} icon={<FaClock/>} data={weather.timezone} />
              <Card name={"Visbility"} icon={<FaEye/>} data={`${weather.current.visibility} meters`}/>
              <Card name={"Wind Speed"} icon={<FaWind/>} data={`${weather.current.wind_speed} meter/sec`}/>
              <Card name={"Wind Degree"} icon={<FaCompass/>} data={`${weather.current.wind_deg} degrees`}/>
              
            </div>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`}
                alt="weather-icon"
                className="mx-auto"
              />
              <div className="text-xl font-bold mx-4 text-center">{weather.current.weather[0].main}</div>
              <div className="text-sm mx-4 text-center capitalize">{weather.current.weather[0].description}</div>
            </div>
            <div className="grid grid-cols-1 mx-auto text-xs text-center">
            <Card name={"Humidity"} icon={<FaTint/>} data={`${weather.current.humidity} %`}/>
            <Card name={"Dew Point"} icon={<FaTemperatureLow/>} data={`${weather.current.dew_point} °C`}/>
            <Card name={"UV Index"} icon={<FaSun/>} data={`${weather.current.uvi}`}/>
            <Card name={"Clouds"} icon={<FaCloud/>} data={`${weather.current.clouds} %`}/>
              
            </div>
          </div>

          <div className="flex justify-around w-max text-sm">
          <Card name={"Sunrise"} icon={<FiSunrise/>} data={new Date(weather.current.sunrise).toLocaleTimeString("en-US")}/>
          <Card name={"Sunset"} icon={<FiSunset/>} data={new Date(weather.current.sunset).toLocaleTimeString("en-US")}/>
          </div>
          <div className="text-xl font-bold mx-4 text-center mt-16">
            Weather Forcasts
          </div>
          <Charts />
        </div>
      </div>
      }
      
    </>
  );
};

export default WeatherReport;
