import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import PersonCard from "./PersonCard";

function FetchInfo(props) {
  const [data, setData] = useState("");

  const fetch = [
    {
      name: data,
    },
  ];
  useEffect(() => {
    Axios.get("https://randomuser.me/api/?results=15").then((res) => {
      console.log(res.data);
      setData(res.data.results);
    });
  }, []);

  return (
    <div>
      {fetch.map((user) => {
        return <PersonCard name={user.nat} />;
      })}
    </div>
  );
}

export default FetchInfo;
