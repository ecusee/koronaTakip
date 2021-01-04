import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../api/index";

import styles from "./Chart.module.css";

import { Line, Bar } from "react-chartjs-2";

const Chart = ({ data: { confirmed, recovered, deaths}, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchDailyApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchDailyApi();
  }, []);

  const barChart = (
    confirmed ? (
      <Bar 
        data={{
          labels:['Hasta', 'Iyilesen', 'Olum'],
          datasets: [
            {
              label: 'Insan',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed.value,recovered.value,deaths.value]
            }
          ]
        }}
        options={{
          legend: {display: false},
          title:{ display: true, text: `${country} deki durum`}
        }}
      />
    )
    : null 
  )

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData
          .slice(0)
          .reverse()
          .map(({ date }) => new Date(date).toLocaleDateString()),
        datasets: [
          {
            data: dailyData
              .slice(0)
              .reverse()
              .map((data) => data.confirmed),
            label: "Hasta",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData
              .slice(0)
              .reverse()
              .map((data) => data.deaths),
            label: "Olum",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
          {
            data: dailyData
              .slice(0)
              .reverse()
              .map((data) => data.recovered),
            label: "Iyilesen",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{country ? barChart : lineChart}</div>;
};

export default Chart;
