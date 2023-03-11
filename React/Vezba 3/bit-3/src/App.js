import "./App.css";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";

function App() {
  return (
    <div className="app">
      <Navigation />
      <main className="main container">
        <SideBar />
        <Feed />
      </main>
    </div>
  );
}

export default App;
