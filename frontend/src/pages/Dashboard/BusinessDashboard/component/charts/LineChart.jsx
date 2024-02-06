import React from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { LineChartData } from "../../data";

const LineChart = () => {
  return (
    <div className="w-full h-full">
      <Line
        data={{
          labels: LineChartData.map((data) => data.lable),
          datasets: [
            {
                label: "Car Park Total Booking",
                data: LineChartData.map((data) => data.data),
           
            }
          ]
        }}
      />
    </div>
  );
};

export default LineChart;
