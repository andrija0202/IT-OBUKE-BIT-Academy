import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FetchInfo from "./FetchInfo";
import { useState } from "react";
import PersonCard from "./PersonCard";

function Main() {
  const [inputValue, setInputValue] = useState("");
  const inputShow = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <section>
      <div className="container main-flex">
        <div className="input-wrap">
          <SearchIcon />
          <input
            type="text"
            placeholder="Seach users"
            className="main-input"
            onChange={inputShow}
          />
        </div>
        <div className="count-wrap">
          <p className="male">Male:</p>
          <p className="female">Female:</p>
        </div>
        <div className="list-wrap">
          <FetchInfo />
        </div>
      </div>
    </section>
  );
}

export default Main;
