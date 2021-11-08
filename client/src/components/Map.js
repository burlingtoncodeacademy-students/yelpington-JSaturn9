//Imports the container, tile layer, markers, and popups for map from leaflet
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//Imports Link from react-router-dom to allow for links in component
import { Link } from "react-router-dom";

//Function for the map
function Map(props) {
  //Shy Guy lat and long
  let shyGuy = [44.4674, -73.2101];
  //Tom Girl lat and long
  let tomGirl = [44.4723, -73.2144];
  //Sherpa Kitchen lat and long
  let sherpaKitchen = [44.4768, -73.2151];
  //A Single Pebble lat and long
  let singlePebble = [44.478, -73.2146];
  //Skinny Pancake lat and long
  let skinnyPancake = [44.4772, -73.2197];
  //Pho Hong lat and long
  let phoHong = [44.4888, -73.2071];
  //The Farmhouse lat and long
  let farmhouse = [44.475883, -73.212074];
  //El Gato lat and long
  let elGato = [44.4755, -73.2126];

  //Returns map itself, markers, and popups on map
  return (
    <div id="map">
      {/* Container for map */}
      <MapContainer
        center={props.center}
        zoom={14}
        style={{ height: "520px", width: "900px" }}
      >
        {/* Tilelayer: brings in actual map you want to use from leaflet and gives attribution */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Marker for Shy Guy */}
        <Marker position={shyGuy}>
          {/* Pop up for Shy Guy */}
          <Popup>
            {/* Link in pop up that redirects to Shy Guy page */}
            <Link to="/shy-guy">Shy Guy Gelato</Link>
          </Popup>
        </Marker>
        {/* Marker for Tom Girl */}
        <Marker position={tomGirl}>
          {/* Pop up for Tom Girl */}
          <Popup>
            {/* Link in pop up that redirects to Tom Girl page */}
            <Link to="/tom-girl">Tom Girl Kitchen</Link>
          </Popup>
        </Marker>
        {/* Marker for Sherpa Kitchen */}
        <Marker position={sherpaKitchen}>
          {/* Pop up for Sherpa Kitchen */}
          <Popup>
            {/* Link in pop up that redirects to Sherpa Kitchen page */}
            <Link to="/sherpa-kitchen">Sherpa Kitchen</Link>
          </Popup>
        </Marker>
        {/* Marker for A Single Pebble */}
        <Marker position={singlePebble}>
          {/* Pop up for A Single Pebble */}
          <Popup>
            {/* Link in pop up that redirects to Single Pebble page */}
            <Link to="/single-pebble">A Single Pebble</Link>
          </Popup>
        </Marker>
        {/* Marker for Skinny Pancake */}
        <Marker position={skinnyPancake}>
          {/* Pop up for Skinny Pancake */}
          <Popup>
            {/* Link in pop up that redirects to Skinny Pancake page */}
            <Link to="/skinny-pancake">The Skinny Pancake</Link>
          </Popup>
        </Marker>
        {/* Marker for Pho Hong*/}
        <Marker position={phoHong}>
          {/* Pop up for Pho Hong */}
          <Popup>
            {/* Link in pop up that redirects to Pho Hong page */}
            <Link to="pho-hong">Pho Hong</Link>
          </Popup>
        </Marker>
        {/* Marker for The Farmhouse */}
        <Marker position={farmhouse}>
          <Popup>
            {/* Link in pop up that redirects to The Farmhouse page */}
            <Link to="the-farmhouse">The Farmhouse Tap and Grill</Link>
          </Popup>
        </Marker>
        {/* Marker for El Gato */}
        <Marker position={elGato}>
          {/* Pop up for El Gato */}
          <Popup>
            {/* Link in pop up that redirects to El Gato page */}
            <Link to="el-gato">El Gato</Link>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

//Exports Map to be used in other components
export default Map;
