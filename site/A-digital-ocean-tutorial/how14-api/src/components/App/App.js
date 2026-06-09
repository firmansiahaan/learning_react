import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { getList, setItem } from '../../services/list';

function App() {
  const [list, setList] = useState([]);
  const [itemInput, setItemInput] = useState('');
  const [alert, setAlert] = useState(false);
  const mounted = useRef(true);

  const handeSubmit = (event) => {
    event.preventDefault();
    setItem(itemInput)
      .then(() => {
        if(mounted.current) {
          setItemInput('');
          setAlert(true);
        }
      })
  };

  useEffect(() => {
    if(alert) {
      setTimeout(() => {
        if(mounted.current) {
          setAlert(false);
        }
      }, 1000)
    }
  }, [alert, list])

  useEffect(() => {
    mounted.current = true;
    if(list.length && !alert) {
      return;
    }
    getList()
      .then((items) => {
        if(mounted.current) {
          setList(items)
        }
      })
    return () => mounted.current = false;
  }, [alert, list])

  return (
    <div className="wrapper">
      <h1>My Grocery List</h1>
      <ul>
        {list.map(item => <li key={item.item}>{item.item}</li>)}
      </ul>
      {alert && <h2> Submit Successful</h2>}
      <form onSubmit={handeSubmit}>
        <label>
          <p>New Item</p>
          <input type="text" 
            onChange={event => setItemInput(event.target.value)}
            value={itemInput}
          />
        </label>
        <button type="submit" >Submit</button>
      </form>
    </div>
  );
}

export default App;
