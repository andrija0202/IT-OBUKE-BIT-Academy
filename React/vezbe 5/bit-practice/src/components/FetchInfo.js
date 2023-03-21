import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import PersonCard from "./PersonCard";

function FetchInfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://randomuser.me/api/?results=15").then((res) => {
      console.log(res.data);
      setData(res.data.results);
    });
  }, []);

  return (
    <div className="list-wrap">
      {data.map((user) => (
        <PersonCard
          name={user.name.first}
          last={user.name.last}
          email={user.email}
          dob={user.dob.date}
          img={user.picture.thumbnail}
        />
      ))}
    </div>
  );
}

export default FetchInfo;
