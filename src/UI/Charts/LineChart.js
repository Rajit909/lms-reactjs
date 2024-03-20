import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const LineChart = (props) => {
  // const [labels, setLabels] = useState(null);
  // const [data, setData] = useState(null);
  // const [config, setConfig] = useState(null);

  useEffect(() => {
    var xValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var yValues = [4, 6, 7, 9, 9, 9, 10, 11, 14, 14, 15];

    let data = {
      labels: xValues,
      datasets: [
        {
          fill: true,
          lineTension: 0,
          backgroundColor: "#1E0540",
          borderColor: "#93AAFA",
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
    let config = {
      type: "line",
      data: data,
      options: {}
    };

    const chart = new Chart(document.getElementById("lineChart"), config);
    // when component unmounts
    return () => {
      chart.destroy();
    };
  }, [props.stat]);

  // useEffect(() => {
  //   const chart = new Chart(document.getElementById("lineChart"), config);
  //   // when component unmounts
  //   return () => {
  //     chart.destroy();
  //   };
  // }, []);

  return (
    <div className="lineChart">
      <canvas
        id="lineChart"
        style={{ width: "100%", maxwidth: "600px" }}
      ></canvas>
    </div>
  );
};

export default LineChart;
