import "./index.scss";
import { ChevronLeft, ThreeDots } from "react-bootstrap-icons";

const Header = () => {
  return (
    <div className="header">
      <button className="icon">
        <ChevronLeft />
      </button>
      <h1 className="headerText">Song</h1>
      <button className="icon">
        <ThreeDots />
      </button>
    </div>
  );
};

export default Header;
