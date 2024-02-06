import React from "react";
import {Chart as ChartJS, defaults } from 'chart.js/auto';
import {Bar} from "react-chartjs-2"
import { chartData } from "../../data";

defaults.maintainAspectRatio = false
defaults.responsive = true

const BarChart = () => {
  return (
    <div className="w-full h-full">
      <Bar
        data={{
          labels: chartData.map((data) => data.lable),
          datasets: [
            {
              label: "Revenue",
              data: chartData.map((data) => data.data),
              backgroundColor: ["rgba(43, 63, 229, 0.8)", "rgba(43, 63, 229, 0.8)", "rgba(43, 63, 229, 0.8)"],
              borderRadius: 50
            }
          ]
        }}
      />
    </div>
  );
};

export default BarChart;
