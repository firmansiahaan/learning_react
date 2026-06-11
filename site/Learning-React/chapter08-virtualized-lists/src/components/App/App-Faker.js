import React from 'react';
import './App.css';
import BigList from './Fake.js';
import { FixedSizeList as List } from "react-window";

function AppFaker() {
  const renderRow = ({ index, style }) => (
    <div style={{ ...style, ...{ display: "flex" } }}>
      <img
        src={BigList[index].avatar}
        alt={BigList[index].name}
        width={50}
      />
      <p>
        {BigList[index].name} - {BigList[index].email}
      </p>
    </div>
  );
  return (
    <List
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={BigList.length}
      itemSize={50}
    >
      {renderRow}
    </List>
  );
}

export default AppFaker;
