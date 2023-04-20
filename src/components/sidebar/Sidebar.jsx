import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import ReorderIcon from '@mui/icons-material/Reorder';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import QueryStatsIcon from '@mui/icons-material/QueryStats';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
// import PsychologyIcon from '@mui/icons-material/Psychology';
// import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
    <div className="top"> <span className="logo"> Pharmacy Owners </span></div>
    <hr/>
    <div className="center">

        <ul>
            <p className="title">MAIN </p>
            <li>
                <DashboardIcon className="icon"/>
                <span className="FOO"> Dashboard </span>

            </li>
            <p className="title">LISTS </p>
            {/* <li>
                <PeopleAltIcon className="icon"/>
                <span className="FOO"> Users </span>
                
            </li> */}
            <li>
                <InventoryIcon className="icon"/>
                <span className="FOO"> Products </span>
                
            </li>
            <li>
                <ReorderIcon className="icon"/>
                <span className="FOO"> Orders </span>
                
            </li>

            {/* <li>
                <LocalShippingIcon className="icon"/>
                <span className="FOO"> Delivery  </span>
                
            </li> */}

            {/* <p className="title">USEFUL </p>
            <li>
                <QueryStatsIcon className="icon"/>
                <span className="FOO"> Stats </span>
                
            </li>

            <li>
                <NotificationsIcon className="icon"/>
                <span className="FOO"> Notifications </span>
                
            </li> */}
            {/* <p className="title">SERVICE</p>
            <li>
                <SettingsSystemDaydreamIcon className="icon"/>
                <span> System Health </span>
                
            </li>
            <li>
                <PsychologyIcon className="icon"/>
                <span> Logs </span>
                
            </li>
            <li>
                <SettingsIcon className="icon"/>
                <span> Settings </span>
                
            </li> */}

            <p className="title">USER </p>
            <li>
                <AccountCircleIcon className="icon"/>
                <span className="FOO"> Profile </span>
                
            </li>
            <li>
                <LogoutIcon className="icon"/>
                <span className="FOO"> Log Out </span>
                
            </li>
        </ul>
    </div>
    <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
         </div>
    </div>

  );
};

export default Sidebar