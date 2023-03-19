import React from "react";
import personImg from "./person-img.jpg";
import EmailIcon from "@mui/icons-material/Email";
import CakeIcon from "@mui/icons-material/Cake";
import FetchInfo from "./FetchInfo";

function PersonCard(props) {
  return (
    <div className="card">
      <img src={personImg} alt="" className="person-img" />
      <div className="person-info">
        <p className="person-name">{props.nat}</p>
        <div className="person-email-wrap">
          <EmailIcon />
          <p className="email">andrija@gmail.com</p>
        </div>
        <div className="person-bday-wrap">
          <CakeIcon />
          <p className="bday">18.03.2023</p>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
