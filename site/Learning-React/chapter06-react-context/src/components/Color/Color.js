import React from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "../StarRating/StarRating";
import '../../components/App/App.css';
import { useColors } from "../App/color-hooks";

function Color({ 
    id, 
    title, 
    color, 
    rating
}) {
    const { rateColor, removeColor } = useColors();
    return (
        <>
            <h1>{title}</h1>
            <button onClick={() => removeColor(id)}>
                <FaTrash />
            </button>
            <div style={{ height: 50, backgroundColor: color }} />
            <StarRating 
                selectedStars={rating}
                onRate={rating => rateColor(id, rating)}
            />
        </>
    )
}

export default Color;