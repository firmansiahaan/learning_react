import React from 'react';
import { FaStar } from "react-icons/fa";
import '../../index.css';

function StarRating({
    totalStars = 5,
    selectedStars  = 0,
    onRate = f => f
  }) {

  const Star = ({ selected = false, onSelect }) => (
    <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
  );

  const createArray = length => [...Array(length)];

  function Rating() {
    return createArray(totalStars).map((n, i) => (
      <Star
        key={i}
        selected={i < selectedStars}
        onSelect={() => onRate(i + 1)}
      />
    ));
  }

  return (
    <div className="App">
      <Rating />
      <div>
        {selectedStars} of {totalStars} stars
      </div>
    </div>
  );
}

export default StarRating;