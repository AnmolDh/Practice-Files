import React from "react";

function Item(props) {
  return (
    <div
      onClick={() => {
        props.onclick(props.id);
      }}
    >
      <li>{props.todoItem}</li>
    </div>
  );
}

export default Item;
