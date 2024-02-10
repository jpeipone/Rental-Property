import React from "react";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../ContextUser";
import "./RentalincomePercentage.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const RentalincomePercentage = () => {
  const { setUserdata, setPortfolioUser, userdata, isLightMode } =
    useContext(UserContext);

  const labels = userdata.map((a) => a?.address.slice(0, 10));
  const options = {
    indexAxis: "y",
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Vuokratuottoprosentti %",
        position: "bottom",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "%",
        data: userdata.map((a) =>
          parseFloat(
            (((a?.monthlyRevenue - a?.monthlyMaintenanceCharge) * 12) /
              (a?.originalCost +
                parseFloat(a?.totalCostWithTransferTax) +
                parseFloat(a?.renovationTotalM2))) *
              100
          ).toFixed(2)
        ),

        backgroundColor: (apar) => {
          const value = apar.dataset.data[apar.dataIndex];
          return value < 0 ? "red" : "rgba(31, 81, 255)";
        },
      },
    ],
  };

  return <Bar options={options} data={data} className="bar-chart" />;
};

export default RentalincomePercentage;
