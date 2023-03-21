import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function Header() {
  return (
    <nav className="nav">
      <div className="container nav-flex">
        <h3 className="logo">BIT Show</h3>
        {/* <ul>
          <li>
            <Link to="/homepage">Home</Link>
          </li>
          <li>
            <Link to="/showpage">SHOWS</Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Header;
