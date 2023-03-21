import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CakeIcon from "@mui/icons-material/Cake";
import Main from "./Main";
import { useState } from "react";

function PersonCard(props) {
  // const [showImage, setShowImage] = useState(true);

  return (
    <div className="card">
      <img src={props.img} alt="" className="person-img" />
      <div className="person-info">
        <p className="person-name">
          {props.name} {props.last}
        </p>
        <div className="person-email-wrap">
          <EmailIcon />
          <p className="email">{props.email}</p>
        </div>
        <div className="person-bday-wrap">
          <CakeIcon />
          <p className="bday">{props.dob}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
