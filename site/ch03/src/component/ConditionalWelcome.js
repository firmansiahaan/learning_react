/* LISTING 3- 9: Conditional rendering with element variables */

import Header from "./Header";
import Login from "./Login";

function Welcome({loggedIn}) {
    let header;

    if (loggedIn) {
        header = <Header/>;
    }
    else {
        header = <Login/>;
    }

    return (
        <>
            {header}
        </>
    );
}
export default Welcome;
