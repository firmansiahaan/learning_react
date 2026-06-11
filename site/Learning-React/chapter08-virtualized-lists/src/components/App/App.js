import React, { useRef, useState } from "react";
import GitHubUser from "../GitHubUser/GitHubUser";
import "./App.css";

export default function App() {
  const [login, setLogin] = useState();
  const txtSearch = useRef(null);

  return (
    <div className="App">
      <form>
        <input
          name="txt-search"
          ref={txtSearch}
          defaultValue={"moontahoe"}
          type="text"
          placeholder="input github user"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setLogin(txtSearch.current.value);
          }}
        >
          Search
        </button>
      </form>
      <GitHubUser login={login} />
    </div>
  );
}
