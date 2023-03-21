import React from "react";
import ShowCard from "./ShowCard";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
// import ShowPage from "./ShowPage";

function HomePage() {
  const [showInfo, setShowInfo] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://api.tvmaze.com/shows").then((res) => {
      setShowInfo(res.data);
    });
  }, []);
  let shows50 = showInfo.slice(0, 50);
  // console.log(shows50);

  return (
    <div className="main container">
      {shows50.map((show) => {
        const showId = show.id;
        const handleShowClick = () => {
          navigate(`/showpage/${showId}`);
        };
        return (
          <ShowCard
            key={show.id}
            onClick={handleShowClick}
            title={show.name}
            image={show.image}
            rating={show.rating}
          />
        );
      })}
    </div>
  );
}

export default HomePage;
