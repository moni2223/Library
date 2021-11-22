import logo from "../../Login/1.png";
import React from "react";
import {Link} from "react-router-dom";
import "./Bar.css";
import prof from "../profile.svg";

export default function Bar(){
    return(
        <div className="ui pointing menu">
       <img alt="logo" className="navlogo" src={logo}/>
        <a href="/catalog" className="active item library">
            <b>Library</b>
        </a>
        <a  href="/catalog" className="item settings">
            Settings
        </a>
        <div className="right item">
        <a href="/catalog">
            <Link to='/catalog'><img alt="profile" className="pic" src={prof}/></Link>
        </a>
        </div>
    </div>);
}