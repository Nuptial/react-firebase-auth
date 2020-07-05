import React from "react";
import "./chartWrapper.css";

const ChartWrapper = ({ title, children }) => {
  return (
    <div className="chart-wrapper">
      <div className={"title"}>
        <i className="fa fa-bar-chart" aria-hidden="true"></i>
        {title}
      </div>
      {children}
    </div>
  );
};

export default ChartWrapper;
