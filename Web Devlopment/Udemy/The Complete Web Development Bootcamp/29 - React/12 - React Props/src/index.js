import React from "react";
import ReactDOM from "react-dom/client";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.imgURL} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      imgURL="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+1 234 567 89"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Mama"
      imgURL="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      phone="+1 234 567 89"
      email="jackmama@email.com"
    />
  </div>
);
