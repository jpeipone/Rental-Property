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
  const { UIDinvestor, setUserdata, setPortfolioUser, logged, userdata } =
    useContext(UserContext);

  const labels = userdata.map((a) => a?.address);
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 4,
      },
    },

    /*  responsive: true, */
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Vertailu: Vuokratuoton prosentti %",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "asunto",
        data: userdata.map(
          (a) =>
            (((a?.monthlyRevenue -
              a?.monthlyMaintenanceCharge -
              a?.loanMonthlyCost) *
              12) /
              a.originalCost) *
            100
        ),
        borderColor: "rgb(0,0,255,1)",
        backgroundColor: "rgba(82, 179, 217,1)",
      },
    ],
  };
  return <Bar options={options} data={data} className="bar-chart" />;
};

export default CashFlowRanking;
