import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../ContextUser";
import "./CashFlowRanking.css";
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

const CashFlowRanking = () => {
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
        text: "€",
        position: "bottom",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "€",
        data: userdata.map((a) =>
          parseFloat(
            a?.cashFlowMonthlyNoTax * 12 -
              parseFloat(a?.monthlyRevenue * a?.emptyMonths)
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

export default CashFlowRanking;
