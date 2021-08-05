import React from "react";
import "../styles/Loader.css";

export default function Loader ({ loading }) {
    return (
        <div style={{display: loading ? 'block' : 'none'}}>
            <div className="loader"></div>
            <div id="loading">Please wait...</div>
        </div>
    )
}