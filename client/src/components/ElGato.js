//Imports MapContainer, TileLayer, Marker, and Popup from react-leaflet to be used in component
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//Imports useEffect and useState to be used in component
import { useEffect, useState } from "react";
//Imports Header into component
import Header from "./Header.js";
//Imports Nav into component
import Nav from "./Nav.js";

//Function for El Gato page
function ElGato(props) {
  //Sets the center of the map
  const [center, setCenter] = useState([44.4755, -73.2126]);
  //Sets the marker of the map
  const [marker, setMarker] = useState([44.4755, -73.2126]);
  //Sets the name to pull in data from json and to be used in return
  const [name, setName] = useState("");
  //Sets the address to pull in data from json and to be used in return
  const [address, setAddress] = useState("");
  //Sets the phone to pull in data from json and to be used in return
  const [phone, setPhone] = useState("");
  //Sets the hours to pull in data from json and to be used in return
  const [hours, setHours] = useState("");
  //Sets the notes to pull in data from json and to be used in return
  const [notes, setNotes] = useState("");

  //useEffect hook to pull in info from json file
  useEffect(() => {
    //fetches data from elgato.json
    fetch("/api/elgato")
      //returns the body as promise with json content
      .then((res) => res.json())
      //second .then sets up to pull in the data as a callback function
      .then((elData) => {
        //pulls in the name data
        setName(elData.name);
        //pulls in the address data
        setAddress(elData.address);
        //pulls in the phone data
        setPhone(elData.phone);
        //pulls in the hours data
        setHours(elData.hours);
        //pulls in the notes data
        setNotes(elData.notes);
      });
  }, []);

  //Returns Header, Nav components, map for page, and the info section of the page
  return (
    <div>
      {/* Brings in Header component */}
      <Header />
      {/* Brings in Navigation component */}
      <Nav />
      <div className="map-text-wrapper">
        <div>
          {/* The map for El Gato page */}
          <MapContainer
            center={center}
            zoom={18}
            style={{ height: "400px", width: "500px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Marker for El Gato */}
            <Marker position={marker}>
              {/* Pop up for El Gato */}
              <Popup>El Gato</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div>
          {/* An unordered list for info section */}
          <ul>
            {/* Info section: contains name, address, phone, hours, and notes. Data pulled in from useState. */}
            <li>Name: {name}</li>
            <li>Address: {address}</li>
            <li>Phone: {phone}</li>
            <li>Hours: {hours}</li>
            <li>Notes: {notes}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

//Exports El Gato function to be used in other components
export default ElGato;
