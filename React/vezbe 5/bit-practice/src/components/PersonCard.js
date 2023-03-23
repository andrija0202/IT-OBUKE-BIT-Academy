import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CakeIcon from "@mui/icons-material/Cake";

function PersonCard(props) {
  // const [showImage, setShowImage] = useState(true);

  return (
    <div className="card">
      <img src={props.img || props.data.img} alt="" className="person-img" />
      <div className="person-info">
        <p className="person-name">
          {props.name || props.data.name} {props.last || props.data.last}
        </p>
        <div className="person-email-wrap">
          <EmailIcon />
          <p className="email">{props.email || props.data.email}</p>
        </div>
        <div className="person-bday-wrap">
          <CakeIcon />
          <p className="bday">{props.dob || props.data.dob}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
