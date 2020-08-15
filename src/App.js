import React from "react";
import {Switch, Route} from "react-router-dom";
import "./App.css";
import SearchBar from "./components/searchBar";
import WeatherReport from "./components/weatherReport";

function App() {
  const background =
    "https://images.hdqwalls.com/wallpapers/beautiful-evening-landscape-4k-33.jpg";
  return (
    <div
      className="min-h-screen bg-fixed"
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
