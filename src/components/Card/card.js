import React, { useState, useEffect } from "react";
import "./card.css";

import { withFirebase } from "../../components/Firebase/context";

const Card = (props) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetchData();

    const fetchDataInterval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => {
      clearInterval(fetchDataInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = () => {
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", localStorage.getItem("idToken"));

    fetch(props.endpoint, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((data) => {
        const result = Number(Object.values(data.payload));
        const modifiedResult = result % 1 === 0 ? result : result.toFixed(2);

        if (value !== modifiedResult) {
          setValue(modifiedResult);
        }
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

export default withFirebase(Card);
