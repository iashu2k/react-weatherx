import React from "react";
import {Switch, Route} from "react-router-dom";
import "./App.css";
import SearchBar from "./components/searchBar";
import WeatherReport from "./components/weatherReport";

function App() {
  const background =
    "https://i.imgur.com/rIgX9wA.jpg";
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url("${background}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Switch>
        <Route path="/" component={SearchBar} exact/>
        <Route path="/:lon/:lat" component={WeatherReport}/>
      </Switch>
      
    </div>
  );
}

export default App;
