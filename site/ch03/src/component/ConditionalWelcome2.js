/* LISTING 3- 10: Conditional rendering with && */

import Header from "./Header";

function Welcome({loggedIn}) {

    return (
        <>
            {loggedIn && <Header/>}
            Note: if you don't see the welcome messsage, you're not logged in.
        </>
    );
}
export default Welcome;