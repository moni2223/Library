import React from 'react';
import "./Settings.css";

export default function Settings(){
    return(
        <div>
            <div className="FirstHalf">
                <p className="general"><b>GENERAL SETTINGS</b></p>
                <ul className="FirstList">
                    <li>NOTIFICATION AND EMAILS  <span className="arrow">&#10230;</span></li>
                    <li>USER MANAGEMENT<span className="arrow">&#10230;</span></li>
                    <li>PHYSICAL LIBRARIES<span className="arrow">&#10230;</span></li>
                    <li>READING EVENTS<span className="arrow">&#10230;</span></li>
                    <li>INVOICING<span className="arrow">&#10230;</span></li>
                    <li>BOOK STATISTICS<span className="arrow">&#10230;</span></li>
                    <li>READER STATISTICS<span className="arrow">&#10230;</span></li>
                    <li>EVENT STATISTICS<span className="arrow">&#10230;</span></li>
                </ul>
            </div>
            <div className="SecondHalf">
                <p className="general"><b>BOOK SETTINGS</b></p>
                <ul className="FirstList">
                    <li>NOTIFICATION AND EMAILS  <span className="arrow">&#10230;</span></li>
                    <li>MANAGE GENRES <span className="arrow">&#10230;</span></li>
                    <li>BOOK VISIBILITY <span className="arrow">&#10230;</span></li>
                    <li>AUTHORS DATABASE<span className="arrow">&#10230;</span></li>
                    <li>BOOK COVERS<span className="arrow">&#10230;</span></li>
                    <li>BOOK COVERS<span className="arrow">&#10230;</span></li>
                </ul>
            </div>
        </div>
    )
}