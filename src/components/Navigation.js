import React from "react";
import cloud from "../images/cloud.png";
import book from "../images/book.png";
import "../styles/Navigation.css";
import { Link } from "react-router-dom";


export default function Navigation () {

    return (
        <div>
            <Link to="/homepage">
                <div className="link_block">
                    <img className="link_image" src={cloud} alt={"Home Page"} title={"Home Page"}/>
                </div>
            </Link>
            <br/>
            <Link to="/bookmarks">
                <div className="link_block">
                    <img className="link_image" src={book} alt={"Bookmarks"} title={"Bookmarks"}/>
                </div>
            </Link>
        </div>
    )
}