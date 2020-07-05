import React, { useState, useEffect } from "react";
import "./card.css";

const Card = (props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetchData();

    setInterval(() => {
      fetchData();
    }, 7500);
  }, []);

  const fetchData = () => {
    fetch(props.endpoint)
      .then((response) => response.json())
      .then((data) => {
        const result = Number(Object.values(data.payload));

        setValue(
          result % 1 === 0
            ? result
            : result.toFixed(2)
        );
      });
  };

  return (
    <div className="card">
      <div
        className="card-icon"
        style={{ backgroundColor: props.iconBackgroundColor }}
      >
        <i className={`fa-2x ${props.icon}`} aria-hidden="true"></i>
      </div>
      <div className="title-container">
        <span className="title">{props.title}</span>
        <span className="value">{value}</span>
      </div>
      <div className="line"></div>
      <p className="description">
        <i className="fa fa-undo" aria-hidden="true"></i>
        {props.description}
      </p>
    </div>
  );
};

export default Card;