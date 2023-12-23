import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import UserContext from "../utils/UserContext.js";
import { useSelector } from 'react-redux';



const Header = () => {
  const [btnName,setBtnName]=useState("Login");

  const cartItems =useSelector((store) => store.cart.items);

  const onlineStatus=useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser);
    return (
      <div className="flex justify-between bg-gray-200 shadow-lg">
        <div className="logoContainer">
          <img className="w-28" src= {LOGO_URL}/>
        </div>
        <div className="items-center ">
          <ul className="flex p-4 m-4 ">
            <li className="px-4 ">Online Status : {onlineStatus ? "✔" : "🔴"}</li>
            <li className="px-4 "><Link to = "/">Home</Link></li>
            <li className="px-4 "><Link to = "/about">About Us</Link></li>
            <li className="px-4 "><Link to = "/contact">Contact</Link></li>
            <li className="px-4 "><Link to = "/grocery">Grocery</Link></li>
            <li className="px-4 font-bold"><Link to = "/cart">Cart - ({cartItems.length} items)</Link></li>
            <button onClick={() => {btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>
            <li className="px-4 font-bold ">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;