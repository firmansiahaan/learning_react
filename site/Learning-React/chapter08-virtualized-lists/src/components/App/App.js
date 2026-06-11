import React from 'react';
import './App.css';
import List from "./List.js"
import BigList from './Fake.js';

function App() {
  const renderItem = item => (
    <div style={{ display: "flex" }}>
      <img src={item.avatar} alt={item.name} width={50} />
      <p>
        {item.name} - {item.email}
      </p>
    </div>
  );

  return <List data={BigList} renderItem={renderItem} />;

}

export default App;
