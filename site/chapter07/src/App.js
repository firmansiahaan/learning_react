import './App.css';
import React, {useState, useEffect} from 'react';

function CheckBox() {
  const [val, set] = useState("");
  const [phrase, setPhrase] = useState("example phrase");

  const createPhrase = () => {
    setPhrase(val);
    set("");
  };

  useEffect(() => {
    console.log(`typing "${val}"`);
  }, [val]);

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  }, [phrase]);

  useEffect(() => {
    console.log("only once after initial render");
  }, []);

  useEffect(() => {
    console.log("Alpha");
    return () => console.log("Omega");
  }, [])

  return (
    <>
      <label>Favorite phrase:</label>
      <input
        value={val}
        placeholder={phrase}
        onChange={e => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enhancing Components with Hooks
        </p>
        <CheckBox />
      </header>
    </div>
  );
}

export default App;
