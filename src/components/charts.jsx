import React from "react";
import { useForm } from "react-hook-form";
import { LineChart, Line, Legend, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    dt: 1597386600,
    sunrise: 1597364796,
    sunset: 1597410047,
    temp: {
      day: 32,
      min: 29.08,
      max: 32,
      night: 29.08,
      eve: 32,
      morn: 32,
    },
    feels_like: {
      day: 36.41,
      night: 31.49,
      eve: 36.41,
      morn: 36.41,
    },
    pressure: 1003,
    humidity: 59,
    dew_point: 22.98,
    wind_speed: 1.16,
    wind_deg: 221,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: 90,
    pop: 0.71,
    rain: 3,
    uvi: 13.28,
  },
  {
    dt: 1597473000,
    sunrise: 1597451203,
    sunset: 1597496417,
    temp: {
      day: 31.25,
      min: 27.92,
      max: 33.34,
      night: 28.43,
      eve: 31.28,
      morn: 27.92,
    },
    feels_like: {
      day: 31.33,
      night: 30.84,
      eve: 33.5,
      morn: 29.05,
    },
    pressure: 1006,
    humidity: 55,
    dew_point: 21.19,
    wind_speed: 5.95,
    wind_deg: 271,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: 100,
    pop: 0.64,
    rain: 0.32,
    uvi: 14.59,
  },
  {
    dt: 1597559400,
    sunrise: 1597537611,
    sunset: 1597582787,
    temp: {
      day: 32.69,
      min: 27.63,
      max: 33.09,
      night: 29.06,
      eve: 31.43,
      morn: 27.63,
    },
    feels_like: {
      day: 32.96,
      night: 30.63,
      eve: 33.77,
      morn: 28.11,
    },
    pressure: 1006,
    humidity: 51,
    dew_point: 21.32,
    wind_speed: 5.74,
    wind_deg: 259,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: 94,
    pop: 0.97,
    rain: 2.18,
    uvi: 13.53,
  },
  {
    dt: 1597645800,
    sunrise: 1597624018,
    sunset: 1597669156,
    temp: {
      day: 32.43,
      min: 27.87,
      max: 33.36,
      night: 28.52,
      eve: 30.38,
      morn: 27.87,
    },
    feels_like: {
      day: 32.88,
      night: 30.23,
      eve: 31.79,
      morn: 28.93,
    },
    pressure: 1006,
    humidity: 54,
    dew_point: 21.99,
    wind_speed: 6,
    wind_deg: 269,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d",
      },
    ],
    clouds: 100,
    pop: 0.9,
    rain: 2.59,
    uvi: 14.12,
  },
  {
    dt: 1597732200,
    sunrise: 1597710425,
    sunset: 1597755524,
    temp: {
      day: 32.36,
      min: 28.02,
      max: 33.85,
      night: 28.33,
      eve: 29.52,
      morn: 28.02,
    },
    feels_like: {
      day: 33.62,
      night: 31.65,
      eve: 30.94,
      morn: 29.56,
    },
    pressure: 1006,
    humidity: 53,
    dew_point: 21.71,
    wind_speed: 4.56,
    wind_deg: 273,
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d",
      },
    ],
    clouds: 100,
    pop: 0.97,
    rain: 5.52,
    uvi: 14.82,
  },
  {
    dt: 1597818600,
    sunrise: 1597796831,
    sunset: 1597841891,
    temp: {
      day: 32.29,
      min: 26.82,
      max: 33.72,
      night: 26.82,
      eve: 29.69,
      morn: 27.3,
    },
    feels_like: {
      day: 35.23,
      night: 31.36,
      eve: 30.91,
      morn: 29.24,
    },
    pressure: 1005,
    humidity: 56,
    dew_point: 22.56,
    wind_speed: 2.8,
    wind_deg: 270,
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d",
      },
    ],
    clouds: 100,
    pop: 0.99,
    rain: 9.56,
    uvi: 15,
  },
  {
    dt: 1597905000,
    sunrise: 1597883237,
    sunset: 1597928258,
    temp: {
      day: 32.28,
      min: 27.49,
      max: 33.36,
      night: 28.72,
      eve: 29.7,
      morn: 27.49,
    },
    feels_like: {
      day: 34.19,
      night: 30.96,
      eve: 30.83,
      morn: 29.64,
    },
    pressure: 1005,
    humidity: 54,
    dew_point: 21.92,
    wind_speed: 3.81,
    wind_deg: 264,
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d",
      },
    ],
    clouds: 100,
    pop: 0.95,
    rain: 3.3,
    uvi: 14.15,
  },
  {
    dt: 1597991400,
    sunrise: 1597969642,
    sunset: 1598014624,
    temp: {
      day: 31.63,
      min: 27.64,
      max: 32.08,
      night: 28.29,
      eve: 29.51,
      morn: 27.64,
    },
    feels_like: {
      day: 33.84,
      night: 30.65,
      eve: 30.39,
      morn: 28.8,
    },
    pressure: 1008,
    humidity: 57,
    dew_point: 22.34,
    wind_speed: 3.6,
    wind_deg: 208,
    weather: [
      {
        id: 501,
        main: "Rain",
        description: "moderate rain",
        icon: "10d",
      },
    ],
    clouds: 100,
    pop: 0.99,
    rain: 3.19,
    uvi: 13.99,
  },
];

const Charts = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
                <option>Temperature</option>
                <option>Pressure</option>
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
              className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
              Okay
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center mt-10">
        <LineChart
          width={800}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line
            type="monotone"
            dataKey="rain"
            stroke="#F2998B"
            strokeWidth="3"
          />

          <XAxis dataKey="dt" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip cursor={false} wrapperStyle={{ backgroundColor: "black" }} />
          <Legend verticalAlign="top" height={36} />
        </LineChart>
      </div>
    </>
  );
};

export default Charts;
