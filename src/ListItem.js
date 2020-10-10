import React from "react";
import "./ListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function ListItem(props) {
  const items = props.items;
  const listItems = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => props.updateItem(item.key, e.target.value)}
          ></input>
          <span>
            <FontAwesomeIcon
              className="faicons icon"
              icon="check"
              onClick={() => (
                (document.getElementById(item.key).readOnly = true),
                (document.getElementById(item.key).style.textDecoration = "line-through")
              )}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteItem(item.key)}
            ></FontAwesomeIcon>
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={300} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}

export default ListItem;
