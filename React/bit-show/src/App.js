import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ShowPage from "./components/ShowPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showpage/:showId" element={<ShowPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="*" element={<h1>You are 404 page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
