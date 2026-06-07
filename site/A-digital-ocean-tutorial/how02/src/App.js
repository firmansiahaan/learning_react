import React from 'react';
import './App.css';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: "😀",
    name: "grinning face"
  },
  {
    emoji: "🎉",
    name: "party popper"
  },
  {
    emoji: "💃",
    name: "woman dancing"
  }
];

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return (
    <div className="container">
      <h1 id={greeting}>Hello, world!</h1>
      {displayAction && <p>I am writing JSX</p>}

      <ul>
        {/* <li><button onClick={displayEmojiName}><span id={emojis[0].name} role='img'>{emojis[0].emoji}</span></button></li>
        <li><button onClick={displayEmojiName}><span id={emojis[1].name} role='img'>{emojis[1].emoji}</span></button></li>
        <li><button onClick={displayEmojiName}><span id={emojis[2].name} role='img'>{emojis[2].emoji}</span></button></li> */}

        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button onClick={displayEmojiName}>
                <span id={emoji.name} role='img' aria-label={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>

          ))
        }

      </ul>

    </div>
  );
}

export default App;
