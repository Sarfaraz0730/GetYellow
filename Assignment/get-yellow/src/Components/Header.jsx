import "../App.css";
import logo from "../Assests/logo.png";
import LandingPage from "./LandingPage";
import GoogleMap from './GoogleMap';

const Header = () => {
  return (
    <div>
      <div className="mainDiv">
        <div className="logoDiv">
          <div>
            {" "}
            <img className="logo" src={logo} alt="" />{" "}
          </div>
          <div className="comName">
            <h6
              className="
          comName"
            >
              FoodGuru
            </h6>
          </div>

          <div className="comName">
            <h6
              className="
          comName"
            >
              Home
            </h6>
          </div>
        </div>
        <div className="comName">
          <h6
            className="
          comName"
          >
            Service
          </h6>
        </div>
      </div>

      <div className="body">
      <GoogleMap/>
        <LandingPage />
      </div>
    </div>
  );
};

export default Header;
