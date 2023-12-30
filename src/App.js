//import logo from './logo.svg';
import './App.css';
//import Webcam from "react-webcam";
import WebImage from './WebImage';
//import WebImage from './WebImage';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <WebImage/>
    </div>
  );
}

export default App;
