import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const PieChart = (props) => {
  // const [labels, setLabels] = useState(null);
  // const [data, setData] = useState(null);
  // const [config, setConfig] = useState(null);

  useEffect(() => {
    var xValues = ["week", "month", "year"];
    var yValues = [55, 49, 44];
    var barColors = ["#F0A69F", "#E0B2D7", "#012063"];

    let data = {
      labels: xValues,
      datasets: [
        {
          fill: true,
          lineTension: 0,
          backgroundColor: barColors,
          data: yValues
        }
      ],
      options: {
        legend: { display: false },
        scales: {
          yAxes: [{ ticks: { min: 6, max: 16 } }]
        }
      }
    };
    // setConfig();
    const config = {
      type: "pie",
      data: data,
      options: {}
    };

    const chart = new Chart(document.getElementById("PieChart"), config);
    // when component unmounts
    return () => {
      chart.destroy();
    };
  }, [props.stat]);

  // useEffect(() => {
  //   const chart = new Chart(document.getElementById("PieChart"), config);
  //   // when component unmounts
  //   return () => {
  //     chart.destroy();
  //   };
  // }, []);

  return (
    <div
      className="PieChart"
      style={{
        width: "50%",
        maxWidth: "400px"
      }}
    >
      <canvas id="PieChart"></canvas>
    </div>
  );
};

export default PieChart;
