import React from "react";

const UpperHeader = ({ report }) => {
  
  const dateObject = new Date(report.current.dt * 1000)

  const weekday = dateObject.toLocaleString("en-US", {weekday: "long"})
  const day = dateObject.toLocaleString("en-US", {day: "numeric"})
  

  return (
    <>
      <div className="text-sm font-semibold text-center">
        <span>{`${weekday} ${day}`}</span>
        <span className="ml-2 font-light">• TODAY</span>
      </div>
      <div className="flex justify-center mt-4">
        <div className="flex-col">
          <h6 className="text-xs">Low</h6>
          <h6 className="text-xl">{`${report.daily[0].temp.min} °C`}</h6>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold mx-8 p-2">{`${report.current.temp} °C`}</div>
          <div className="text-xs text-center">{`Feels Like ${report.current.feels_like} °C`}</div>
        </div>

        <div className="flex-col">
          <h6 className="text-xs">High</h6>
          <h6 className="text-xl">{`${report.daily[0].temp.max} °C`}</h6>
        </div>
      </div>
    </>
  );
};

export default UpperHeader;
