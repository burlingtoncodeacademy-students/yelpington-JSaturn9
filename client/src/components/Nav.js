//Imports Link from react router dom into the component
import { Link } from "react-router-dom";

//Function for the navigation component
function NavBar() {
  //Returns Links to navigate to various restaurant components of application
  return (
    <div id="nav-wrapper">
      {/* Links to Shy Guy Restaurant component */}
      <Link to="/shy-guy" add style={{ textDecoration: "none" }}>
        <h3>Shy Guy Gelato</h3>
      </Link>
      {/* Links to Tom Girl Restaurant component */}
      <Link to="/tom-girl" add style={{ textDecoration: "none" }}>
        <h3>Tom Girl Kitchen</h3>
      </Link>
      {/* Links to El Gato Restaurant component */}
      <Link to="/el-gato" add style={{ textDecoration: "none" }}>
        <h3>El Gato</h3>
      </Link>
      {/* Links to The Farmhouse Restaurant component */}
      <Link to="/the-farmhouse" add style={{ textDecoration: "none" }}>
        <h3>The Farmhouse Tap and Grill</h3>
      </Link>
      {/* Links to Sherpa Kitchen Restaurant component */}
      <Link to="/sherpa-kitchen" add style={{ textDecoration: "none" }}>
        <h3>Sherpa Kitchen</h3>
      </Link>
      {/* Links to Skinny Pancake Restaurant component */}
      <Link to="/skinny-pancake" add style={{ textDecoration: "none" }}>
        <h3>The Skinny Pancake</h3>
      </Link>
      {/* Links to Single Pebble Restaurant component */}
      <Link to="/single-pebble" add style={{ textDecoration: "none" }}>
        <h3>A Single Pebble</h3>
      </Link>
      {/* Links to Pho Hong Restaurant component */}
      <Link to="/pho-hong" add style={{ textDecoration: "none" }}>
        <h3>Pho Hong</h3>
      </Link>
    </div>
  );
}

//Exports NavBar to be used by other components
export default NavBar;
