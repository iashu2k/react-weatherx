import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LineChart, Line, Legend, XAxis, YAxis, Tooltip } from "recharts";


const Charts = ({ report }) => {
  const { register, handleSubmit } = useForm();
  const [dur, setDur] = useState("Hourly");
  const [par, setPara] = useState("temp");
  const { daily, hourly } = report;

  const dailyData = daily.map((day) => {
    return {
      temp: day.temp.day,
      pressure: day.pressure,
      humidity: day.humidity,
      dt: new Date(day.dt * 1000).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      dew_point: day.dew_point,
      clouds: day.clouds,
      wind_speed: day.wind_speed,
      wind_deg: day.wind_deg
    };
  });
  const hourlyData = hourly.map((hour) => {
    return {
      temp: hour.temp,
      pressure: hour.pressure,
      humidity: hour.humidity,
      dt: new Date(hour.dt * 1000).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      }),
      dew_point: hour.dew_point,
      clouds: hour.clouds,
      wind_speed: hour.wind_speed,
      wind_deg: hour.wind_deg
    };
  });
  
  const onSubmit = (data) => {
    console.log(data);
    setPara(data.parameter);
    setDur(data.duration);
  };
  return (
    <>
      <div className="mt-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center items-end"
        >
          <div className="px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Duration
            </label>
            <div className="relative">
              <select
                ref={register}
                name="duration"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Hourly</option>
                <option>Daily</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Parameter
            </label>
            <div className="relative">
              <select
                ref={register}
                name="parameter"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option value="temp">Temperature</option>
                <option value="pressure">Pressure</option>
                <option value="humidity">Humidity</option>
                <option value="dew_point">Dew Point</option>
                <option value="clouds">Clouds</option>
                <option value="wind_speed">Wind Speed</option>
                <option value="wind_deg">Wind Degree</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="px-3 mb-6 md:mb-0">
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-2 rounded"
            >
              Okay
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center mt-10 w-max">
        <LineChart
          width={1000}
          height={300}
          data={dur === "Hourly" ? hourlyData : dailyData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line
            type="monotone"
            dataKey={par}
            stroke="yellow"
            strokeWidth="3"
          />

          <XAxis dataKey="dt" stroke="white" />

          <YAxis stroke="white" />
          <Tooltip
            labelStyle={{ color: "#052743" }}
            itemStyle={{ color: "#2E7C87" }}
            wrapperStyle={{ borderRadius: "25px" }}
          />
          <Legend verticalAlign="top" height={36} />
        </LineChart>
      </div>
    </>
  );
};

export default Charts;
