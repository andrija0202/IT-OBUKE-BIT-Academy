import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FetchInfo from "./FetchInfo";
import { useState, useEffect } from "react";
import PersonCard from "./PersonCard";
import { display } from "@mui/system";
import Axios from "axios";

function Main() {
  const [inputValue, setInputValue] = useState("");
  // const [filterArr, setFilterArr] = useState([]);
  const [personCards, setPersonCards] = useState("");

  const [dataNew, setDataNew] = useState([]);

  useEffect(() => {
    Axios.get("https://randomuser.me/api/?results=15").then((res) => {
      // console.log(res.data.results);
      setDataNew(res.data.results);
      // console.log(dataNew);
    });
  }, []);

  const inputShow = (event) => {
    setInputValue(event.target.value);

    let proba = dataNew.filter((user) => {
      return user.name.first.includes(inputValue);
      // if (user.name.first.includes(inputValue)) {
      //   user
      // }
    });
    console.log(proba);
    setPersonCards(
      proba.map((user) => (
        <PersonCard
          name={user.name.first}
          last={user.name.last}
          email={user.email}
          dob={user.dob.date}
          img={user.picture.thumbnail}
        />
      ))
    );
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
          {personCards}
          {dataNew.map((user) => (
            <PersonCard
              name={user.name.first}
              last={user.name.last}
              email={user.email}
              dob={user.dob.date}
              img={user.picture.thumbnail}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Main;
