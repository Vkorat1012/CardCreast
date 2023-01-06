import React from "react";
 import { NavLink } from "react-router-dom";
import "../css/slider.css";
import img from '../css/giriraj.png'
import {
  CreditCardOutlined,
    HomeOutlined,
    SettingOutlined,
    SlidersOutlined,
} from "@ant-design/icons";
const Slider = () => {
  return (
    <div className=" navigation">
      <div className="logo">
        <img src={img} alt='img'></img>
      </div>
      <div className='company_name'>
            <p>Software & Web Devlopment Company-Umbraco Gold Partner</p>
      </div>
      <div className='Navbar'>
                        <ul>
                            <li><NavLink to="home"><HomeOutlined /> Home</NavLink></li>
                            <li><NavLink to="cards"><CreditCardOutlined /> Cards</NavLink></li>
                            <li><NavLink to="transactions"><SlidersOutlined /> Transactions</NavLink></li>
                            <li><NavLink to="setting"><SettingOutlined /> Settings</NavLink></li>
                        </ul>
                    </div>
      {/* <div className='Navbar'>
                    <ul>
                        <li><NavLink to="Home"> <HomeOutlined />Home</NavLink></li>
                        <li><NavLink to="about"><CreditCardOutlined />  About</NavLink></li>
                        <li><NavLink to="contact"><SettingOutlined /> Contact</NavLink></li>
                    </ul>
                </div> */}
    </div>
  );
};

export default Slider;
