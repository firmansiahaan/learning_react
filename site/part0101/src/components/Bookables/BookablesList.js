import { useState,  Fragment } from "react";
import bookables_data from "../../static.json";
import {FaArrowRight} from "react-icons/fa";

export default function BookablesList () {

  const [group, setGroup] = useState("Kit");
  const bookablesInGroup = bookables_data.bookables.filter(b => b.group === group);
  const [bookableIndex, setBookableIndex] = useState(0);
  // const groups = [...new Set(bookables_data.bookables.map(b => b.group))];
  const groups = getUniqueValues(bookables_data.bookables, "group");

  const bookable = bookablesInGroup[bookableIndex];

  const [hasDetails, setHasDetails] = useState(false);

  function nextBookable (index) {
    setBookableIndex(i => (i + 1) % bookablesInGroup.length);
    console.log("change bookable to", bookableIndex);
  }

  function getUniqueValues (array, property) {
    const propValues = array.map(element => element[property]);
    const uniqueValues = new Set(propValues);
    const uniqueValuesArray = [...uniqueValues];
    return uniqueValuesArray;
  }

  return (
    <>
      <div>
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        >
          {
            groups.map(g => (
              <option key={g}>
                {g}
              </option>
            ))
          }
        </select>

        <ul className="bookables items-list-nav">
          {bookablesInGroup.map((b, i) => (
            <li
              key={b.id}
              className={i === bookableIndex ? "selected" : null}
            >
              <button
                className="btn"
                onClick={() => setBookableIndex(i)}
              >
                {b.title}
              </button>
            </li>
          ))}
        </ul>
        <p>
          <button
            className="btn"
            onClick={nextBookable}
          >
            <FaArrowRight />
            <span>Next</span>
          </button>
        </p>
          
      </div>

      {bookable && (
        <div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>
                {bookable.title}
              </h2>
              <span className="controls">
                <label>
                  <input
                    type="checkbox"
                    checked={hasDetails}
                    onChange={() => setHasDetails(has => !has)}
                  />
                  Show Details
                </label>
              </span>
            </div>

            <p>{bookable.notes}</p>

            {hasDetails && (
              <div className="item-details">
                <h3>Availability</h3>
                <div className="bookable-availability">
                  <ul>
                    {
                      bookables_data.days.sort().map((d, i) => 
                        <li key={i}>
                          {bookables_data.days[i]}
                        </li>)
                    }
                  </ul>
                  <ul>
                    {
                      bookables_data.sessions.sort().map((s, i) => 
                        <li key={i}>
                          {bookables_data.sessions[i]}
                        </li>)
                    }
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}