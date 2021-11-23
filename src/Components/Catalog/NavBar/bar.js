import logo from "../../Login/1.png";
import React from "react";
import {Link} from "react-router-dom";
import "./Bar.css";
import prof from "../profile.svg";

export default function Bar(props){
if(props.active === "settings")
{
    return(
        <div className="ui pointing menu">
            <img alt="logo" className="navlogo" src={logo}/>
            <a href="/catalog" className="item library">
                Library
            </a>
            <a  href="/settings" className="active item settings">
                <b>Settings</b>
            </a>
            <div className="right item">
                <a href="/catalog">
                    <Link to='/catalog'><img alt="profile" className="pic" src={prof}/></Link>
                </a>
            </div>
        </div>);
}
else return(
        <div className="ui pointing menu">
       <img alt="logo" className="navlogo" src={logo}/>
        <a href="/catalog" className="active item library">
            <b>Library</b>
        </a>
        <a  href="/settings" className="item settings">
            Settings
        </a>
        <div className="right item">
        <a href="/catalog">
            <Link to='/catalog'><img alt="profile" className="pic" src={prof}/></Link>
        </a>
        </div>
    </div>);
}