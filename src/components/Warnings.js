import React from "react";
import "../styles/Warnings.css";

export default function Warnings ({ title, data, loading }) {
    return (
        <div>
            <div className="warning" style={{ display: title == null ? 'block' : 'none' }}>
                Please start with searching pictures.
            </div>
            <div className="warning" style={{ display: data.length === 0 && title != null && !loading ? 'block' : 'none' }}>
                No images here. Would you try to search for anything else?
            </div>
        </div>
    );
};
