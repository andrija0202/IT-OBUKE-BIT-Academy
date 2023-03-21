import React from "react";
import ShowCard from "./ShowCard";
import { useState, useEffect } from "react";
import Axios from "axios";

function HomePage() {
  const [showInfo, setShowInfo] = useState([]);

  useEffect(() => {
    const fetch = Axios.get("http://api.tvmaze.com/shows").then((res) => {
      setShowInfo(res.data);
    });
  }, []);
  let shows50 = showInfo.slice(0, 50);
  // console.log(shows50);

  return (
    <div className="main container">
      {shows50.map((show) => {
        return (
          <ShowCard title={show.name} image={show.image} rating={show.rating} />
        );
      })}
    </div>
  );
}

export default HomePage;
