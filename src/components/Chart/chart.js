import React, { useRef, useEffect } from "react";
import "./chart.css";
import Chart from "chart.js";

const ShowChart = (props) => {
  const canvasEl = useRef(null);

  useEffect(() => {
     fetchData();
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
        const result = Object.values(data.payload)[0];
        let labels = [];
        let values = [];
        const datePattern = /(\d{4})(\d{1,2})(\d{1,2})/;

        Object.keys(result).map((res) => {
          values.push(result[res]);
          labels.push(
            datePattern.exec(res)[1] +
              "-" +
              datePattern.exec(res)[2] +
              "-" +
              datePattern.exec(res)[3]
          );

          return null;
        });

        initializeChart(values,labels)
      });
  };

  const initializeChart = (values, labels) => {
        var ctx = canvasEl.current.getContext("2d");
        var gradientFill = ctx.createLinearGradient(0, 300, 0, 0);
        gradientFill.addColorStop(0, "rgba(0, 0, 0, 0)");
        gradientFill.addColorStop(1, "rgba(190, 85, 237, .2)");

        const config = {
          type: "line",
          data: {
            labels,
            datasets: [
              {
                label: "Value",
                data: values,
                borderColor: "#be55ed",
                fill: true,
                backgroundColor: gradientFill,
              },
            ],
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          options: {
            responsive: true,
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
            maintainAspectRatio: false,
          },
        };

        new Chart(ctx, config);
  };

  return <canvas className="chart" ref={canvasEl}></canvas>;
};

export default ShowChart;
