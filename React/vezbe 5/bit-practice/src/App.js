import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import FetchInfo from "./components/FetchInfo";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <FetchInfo />
    </div>
  );
}

export default App;
