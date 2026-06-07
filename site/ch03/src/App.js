import './App.css';
import SearchBox from './component/SearchBox/SearchBox';
import MyFancyComponent from './component/MyFancyComponent/MyFancyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Using a user-defined React component in JSX
        </p>
        <SearchBox />
        <MyFancyComponent />
      </header>
    </div>
  );
}

export default App;
