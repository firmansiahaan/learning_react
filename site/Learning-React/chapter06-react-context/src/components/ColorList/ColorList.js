import React from "react";
import { useColors } from "../../components/App/color-hooks"
import Color from "../Color/Color";

function ColorList() {
    const { colors } = useColors();
    if(!colors.length) return <div>No Colors Listed.</div>;
    return (
        <div className="color-list">
            { 
                colors.map(color => <Color key={color.id} {...color} />) 
            };
        </div>
    );
}

export default ColorList;