import React, { Component } from "react";
import "../QLHP/Nav/Navmenu.css";
import Navmenu from "../QLHP/Navmenu";

export default class Home extends Component {


    render() {
        return (
            <div className="home">
                <Navmenu />
            </div>
        )
    }
}