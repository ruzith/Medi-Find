import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {
let data;

    //temporary
    const amount = 150;
    const diff = 20; 

    switch (type) {
        case "user":
            data = {
                title : "USERS",
                isMoney: false,
                link: "See all users",
                icon: <PersonOutlinedIcon className="icon"/>

            };

            break;

            case "order":
            data = {
                title : "TOTAL ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className="icon"/>

            };

            break;

            case "earning":
            data = {
                title : "TOTAL SALES",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon className="icon"/>

            };

            break;

            case "balance":
            data = {
                title : "BALANCE",
                isMoney: true,
                link: "See Details",
                icon: <AccountBalanceOutlinedIcon className="icon"/>
            };

            break;
            default:
                break;
    }


 return (
    <div className = "widget">
        <div className="left">
            <span className="title"> {data.title}</span>
            <span className="counter">
                {data.isMoney && "LKR"} {amount} 
            </span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
            <KeyboardArrowUpIcon/>
               {diff} %
            </div>
          {data.icon}
        </div>
    </div>
  );
};

export default Widget;