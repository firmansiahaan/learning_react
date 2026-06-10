import React from "react";
import ColorList from "../ColorList/ColorList";
import AddColorForm from "../AddColorForm/AddColorForm";
import './App.css';

function App() {
  return (
    <div className="App">
      <AddColorForm />
      <ColorList />
    </div>
  );
}

export default App;