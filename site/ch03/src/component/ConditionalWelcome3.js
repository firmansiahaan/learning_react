/* LISTING 3- 11: Using the conditional operator */

import Header from './Header';
import Login from './Login';

function Welcome({loggedIn}) {
    return (
        <>
            loggedIn ? <Header/> : <Login/>
        </>
    );
}
export default Welcome;