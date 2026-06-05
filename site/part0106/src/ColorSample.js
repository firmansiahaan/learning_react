import React from "react";

export default function ColorSample({color = "white"}) {
    return (
        <div className="colorSample" style={{ background: color }}>
            &nbsp;
        </div>
    )
}