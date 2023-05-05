import "./location.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Location = () => {
  return(
    <div className="SIDE">

      <Sidebar/>
      <div className="NAV">
        <Navbar/>
        This is the Location PAGE
      </div>
    </div>
    
  );
};

export default Location;