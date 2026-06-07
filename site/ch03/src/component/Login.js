// LISTING 3-1: A React component

import React from "react";

function login() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`logging in ${e.target[0].value}`);

        // do something else in here
    }

    return (
        <form id="login_form" onSubmit={handleSubmit}>
            <input type="email" placeholder="E-Mail Address" />
            <input type="password" id="password" />
            <button>Login</button>
        </form>
    );
}

export default login;