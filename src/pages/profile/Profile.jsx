import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Profile = () => {
  return(
    <div className="SIDE">

      <Sidebar/>
      <div className="NAV">
        <Navbar/>
        This is the PROFILE PAGE
      </div>
    </div>
    
  );
};

export default Profile;