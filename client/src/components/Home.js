//Imports Map component
import Map from "./Map";
//Imports CSS into this App component
import "../App.css";
//Imports useState
import { useState } from "react";
//Imports the Header
import Header from "./Header.js";
//Imports the Navigation
import Nav from "./Nav.js";

//Function for Home page component
function Home(props) {
  //Sets the center of the map, need this to have map show up
  const [center, setCenter] = useState([44.4759, -73.2121]);
  //Sets the zoom of the map, need this to have map show up
  const [zoom, setZoom] = useState(13);
  //Renders the Header, Nav, and Map components into the Home component
  return (
    <div>
      {/* Brings in Header component into Home.js */}
      <Header />
      {/* Brings in Nav component into Home.js */}
      <Nav />
      {/* Brings in Map component into Home.js */}
      <Map center={center} zoom={zoom} />
    </div>
  );
}

//Exports the Home component to be used by other components
export default Home;
