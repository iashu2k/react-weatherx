import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import GpsFixedSharpIcon from "@material-ui/icons/GpsFixedSharp";
import Axios from "axios";
import {useHistory} from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

const SearchBar = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const onSubmit = ({ city }) => {
    console.log(city);
    const key = process.env.REACT_APP_KEY;

    Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    )
      .then((res) => {
        console.log(res.data.coord);
        const {lon, lat} = res.data.coord;
        history.push(`/${lon}/${lat}`)
      })
      .catch((err) => {
        console.log(err);
        toast("City Not Found");
      });
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const {latitude: lat, longitude: lon} = position.coords;
      console.log({lon, lat});
      history.push(`/${lon}/${lat}`);
    });
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="w-1/2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center py-2">
          <input
            className="appearance-none  border-none w-full text-gray-700 p-2 rounded-sm leading-tight focus:outline-none"
            type="text"
            name="city"
            placeholder="Search your city..."
            ref={register({ required: true })}
          />

          <GpsFixedSharpIcon
            className="text-white mx-2 cursor-pointer hover:text-gray-200"
            onClick={handleLocation}
          />

          <button
            className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            SEARCH
          </button>
        </div>
        {errors.city && (
          <h1 className="text-xs text-red-500 bg-white inline p-1 rounded">
            This field is required
          </h1>
        )}

        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
};

export default SearchBar;
