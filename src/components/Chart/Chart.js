import React from "react";
import { toFixed } from "accounting";
import { Line } from "react-chartjs-2";

const lineOptions = {
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          fontColor: "#fbfbfd",
          fontSize: 10
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: true,
          color: "rgba(159, 160, 165, 0.1)"
        },
        ticks: {
          beginAtZero: false,
          userCallback(value) {
            return `$ ${toFixed(value, 1)}k`;
          },
          fontColor: "#fbfbfd",
          fontSize: 10
        }
      }
    ]
  },
  legend: {
    display: false
  },
  tooltips: {
    enabled: false
  },
  maintainAspectRatio: false
};

const Chart = ({ data: { data: dataset } }) => {
  const configure = canvas => {
    const ctx = canvas.getContext("2d");
    const grad = ctx.createLinearGradient(100, 200, 100, 0);

    grad.addColorStop(0, "rgba(161,120,252,0.1)");
    grad.addColorStop(0.17, "rgba(161,120,252,0.2)");
    grad.addColorStop(0.81, "rgba(161,120,252,0.3)");
    grad.addColorStop(1, "rgba(161,120,252,0.3)");

    return {
      labels: dataset.map(el => el.time),
      datasets: [
        {
          fill: true,
          borderWidth: 2,
          backgroundColor: grad,
          lineTension: 0.0,
          borderColor: "rgba(161, 120, 252, 0.8)",
          borderJoinStyle: "miter",
          pointRadius: 0,
          data: dataset.map(el => el.close)
        }
      ]
    };
  };

  return <Line data={configure} options={lineOptions} width={100} height={120} />;
};

export default Chart;
