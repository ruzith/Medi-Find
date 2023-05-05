import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";

import Signup from "./pages/Signup/Signup";

import Inventory from "./pages/Inventory/Inventory";
import Orders from "./pages/Orders/Orders";
import Profile from "./pages/profile/Profile";
import Location from "./pages/Location/Location";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element = {<Home/>} />
          <Route path = "login" element= {<Login/>} />
          {/* <Route path = "new" element= {<New/>}/> */}
          <Route path="signup" element={<Signup/>} />
          
          <Route path="inventory" element={<Inventory/>} />
          <Route path="orders" element={<Orders/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="location" element={<Location/>} />
        
         

          <Route path = "users">
            <Route index element= {<List/>}/>
            <Route path= ":userId" element = {<Single/>}/>
            

          </Route>

          <Route path = "products">
            <Route index element= {<List/>}/>
            <Route path= ":productId" element = {<Single/>}/>
            {/* <Route path = "new" element= {<New/>}/> */}

          </Route> 
            </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
