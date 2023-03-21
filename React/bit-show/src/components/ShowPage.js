// ShowPage.js
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useEffect, useState } from "react";

function ShowPage() {
  const { showId } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    Axios.get(`http://api.tvmaze.com/shows/${showId}`).then((res) => {
      setShow(res.data);
    });
  }, [showId]);

  if (!show) {
    return <div>Loading...</div>;
  }

  let img6 = show.image.original;
  let genres = show.genres;
  console.log(img6);
  console.log(show);

  return (
    <div className="show-page container">
      <div className="show-content-wrap">
        <img src={show.image.original} alt="Slika ovde" className="show-img" />
        <div className="show-content">
          <h1 className="show-title">{show.name}</h1>
          <div className="genres">
            {genres.map((e) => {
              return (
                <div className="zanr-wrap">
                  <p className="zanr">{e}</p>
                </div>
              );
            })}
          </div>

          <h3>{show.summary}</h3>
        </div>
      </div>
      <div className="cast-wrap">
        <h2>CAST</h2>
      </div>
    </div>
  );
}

export default ShowPage;
