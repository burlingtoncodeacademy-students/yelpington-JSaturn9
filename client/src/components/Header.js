import { Link } from "react-router-dom";

//Function for Header
function Header() {
  //Returns header of Yelpington
  return (
    <div>
      {/* Link to homepage */}
      <Link to="/" add style={{ textDecoration: "none" }}>
        {/* Yelpington header */}
        <h1 id="header">Yelpington!</h1>;
      </Link>
    </div>
  );
}

//Exports function Header to be used by other components
export default Header;
