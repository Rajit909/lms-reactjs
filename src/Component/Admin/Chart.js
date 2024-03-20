import React from "react";
import $ from "jquery";
import LineChart from "../../UI/Charts/LineChart";
import PieChart from "../../UI/Charts/PieChart";

const AdminChart = () => {
  $("#close-sidebar").click(function () {
    $(".htmlBody").removeClass("toggled");
  });
  $("#show-sidebar").click(function () {
    $(".htmlBody").addClass("toggled");
  });
  $("#collapsible").click(function () {
    $(".content").toggle();
  });
  // End sidebar toggler//

  return (
    <div class="row">
      <div class="col-md-6">
        <div class="graph">
          <div class="header">
            <div class="title">Sales Report</div>
            <ul class="nav">
              <li class="nav-item">
                <a href="0" class="active nav-link">
                  Last
                </a>
              </li>
              <li class="nav-item">
                <a href="0" class="nav-link">
                  Current
                </a>
              </li>
            </ul>
          </div>
          <div class="body">
            <LineChart />
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="graph">
          <div class="header">
            <div class="title">Bandwith Report</div>
            <ul class="nav">
              <li class="nav-item">
                <a href="0" class="active nav-link">
                  Last
                </a>
              </li>
              <li class="nav-item">
                <a href="0" class="nav-link">
                  Current
                </a>
              </li>
            </ul>
          </div>
          <div
            class="body"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminChart;
