import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonCard from "./PersonCard";

function Main() {
  return (
    <section>
      <div className="container main-flex">
        <div className="input-wrap">
          <SearchIcon />
          <input type="text" placeholder="Seach users" className="main-input" />
        </div>
        <div className="count-wrap">
          <p className="male">Male:</p>
          <p className="female">Female:</p>
        </div>
        <div className="list-wrap">
          <PersonCard />
        </div>
      </div>
    </section>
  );
}

export default Main;
