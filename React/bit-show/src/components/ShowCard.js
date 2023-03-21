function ShowCard(props) {
  return (
    <div className="card">
      <img src={props.image.original} alt="Slika ovde" className="card-img" />
      <div className="card-rating">
        <p className="rating">{props.rating.average}</p>
      </div>
      <div className="title-wrap">
        <h3 className="card-title">{props.title}</h3>
      </div>
    </div>
  );
}

export default ShowCard;
