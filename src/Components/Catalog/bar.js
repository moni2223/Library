import logo from "../Login/1.png";
import React from "react";
import {Link} from "react-router-dom";
import "./Bar.css";
import prof from "./profile.svg";

export default function Bar(){
    return(
        <div className="ui pointing menu">
        <a><Link to='/catalog'><img alt="logo" className="navlogo" src={logo}/></Link></a>
        <a className="active item library">
            Library
        </a>
        <a className="item settings">
            Settings
        </a>
        <div className="right item">
        <a>
            <Link to='/catalog'><img alt="profile" className="pic" src={prof}/></Link>
        </a>
        </div>
    </div>);
}