/* LISTING 3- 12: Using an arrow function as an event handler */

import { useState } from "react";

function CountUp() {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Add One</button>
            {count}
        </>
    );
}
export default CountUp;