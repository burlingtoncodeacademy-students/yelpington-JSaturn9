//Import BrowserRouter, Route, and Routes from react-router-dom to be used in component
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Imports the Home component
import Home from "./components/Home.js";
//Imports the Shy Guy component
import ShyGuy from "./components/ShyGuy.js";
//Imports the Tom Girl component
import TomGirl from "./components/TomGirl.js";
//Imports the Sherpa Kitchen component
import SherpaKitchen from "./components/SherpaKitchen.js";
//Imports the Single Pebble component
import SinglePebble from "./components/SinglePebble.js";
//Imports the Skinny Pancake component
import SkinnyPancake from "./components/SkinnyPancake.js";
//Imports the Pho Hong component
import PhoHong from "./components/PhoHong.js";
//Imports The Farmhouse component
import TheFarmhouse from "./components/TheFarmhouse.js";
//Imports the El Gato component
import ElGato from "./components/ElGato.js";

//Funtion for main app 
function App() {
  //Returns various routes within BrowserRouter
  return (
    <div>
      {/* BrowserRouter is used for client side routing with URL segments*/}
      <BrowserRouter>
        {/* Routes contains all of the routes */}
        <Routes>
          {/* Route is each individual route - utilizes the path and element prop. 
          Path reflects the URL path, element is where component is rendered */}
          {/* Routes to Home Component */}
          <Route path="/" element={<Home />} />
          {/* Routes to Shy Guy Component */}
          <Route path="/shy-guy" element={<ShyGuy />} />
          {/* Routes to Tom Girl Component */}
          <Route path="/tom-girl" element={<TomGirl />} />
          {/* Routes to Sherpa Kitchen Component */}
          <Route path="/sherpa-kitchen" element={<SherpaKitchen />} />
          {/* Routes to Single Pebble Component */}
          <Route path="/single-pebble" element={<SinglePebble />} />
          {/* Routes to Skinny Pancake Component */}
          <Route path="/skinny-pancake" element={<SkinnyPancake />} />
          {/* Routes to Pho Hong Component */}
          <Route path="/pho-hong" element={<PhoHong />} />
          {/* Routes to The Farmhouse Component */}
          <Route path="/the-farmhouse" element={<TheFarmhouse />} />
          {/* Routes to El Gato Component */}
          <Route path="/el-gato" element={<ElGato />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//Exports App to be used in index.js
export default App;
