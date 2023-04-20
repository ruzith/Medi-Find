import "./single.scss"
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img 
              src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="itemImg"
              />
              <div className="details">
               <h1 className="itemTitle"> Sam Curran </h1>
               <div className="detailItem">
                <span className="itemKey">Email-</span>
                <span className="itemValue">curran@gmail.com</span>
                </div>

                <div className="detailItem">
                <span className="itemKey">Phone-</span>
                <span className="itemValue"> +1 234 468795</span>
                </div>

                <div className="detailItem">
                <span className="itemKey">Address-</span>
                <span className="itemValue"> London, UK</span>
                </div>

                <div className="detailItem">
                <span className="itemKey">Country-</span>
                <span className="itemValue"> England </span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
          {/* <Chart aspect={3 / 1} title="User Spending" /> */}
        </div>
        <div className="bottom"></div>
        <h1 className="title"> Last transactions</h1>
        <List/>
      </div>
      </div>
  )
}

export default Single