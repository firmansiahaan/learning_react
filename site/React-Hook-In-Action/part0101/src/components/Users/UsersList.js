import { useState } from "react";
import data from "../../static.json";

export default function UsersList () {

  const usersData = data.users;

  const [userIndex, setUserIndex] = useState(0);
  const [hasDetails, setHasDetails] = useState(false);

  function changeUser(index) {
    setUserIndex(index) ;
    console.log("change user to", index);
  }

  return (
    <>
      <ul className="bookables items-list-nav">
        {usersData.map((b, i) => (
          <li
            key={b.id}
            className={i === userIndex ? "selected" : null}
          >
            <button
              className="btn"
              onClick={() => changeUser(i)}
            >
              {b.name}
            </button>
          </li>
        ))}
      </ul>

      { userIndex !== undefined && (
        <div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>
                {data.users[userIndex].title}
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

            <p>{data.users[userIndex].notes}</p>

            {hasDetails && (
              <div className="item-details">
                <h3>Availability</h3>
                <div className="bookable-availability">
                  <ul>
                    {
                      data.days.sort().map((d, i) => 
                        <li key={i}>
                          {data.days[i]}
                        </li>)
                    }
                  </ul>
                  <ul>
                    {
                      data.sessions.sort().map((s, i) => 
                        <li key={i}>
                          {data.sessions[i]}
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