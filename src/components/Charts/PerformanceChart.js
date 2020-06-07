import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Bar, Line, Pie } from 'react-chartjs-2';

const PerformanceChart = ({ fill, back }) => {
  const [chartData, setChartData] = useState({ labels: ['', '', '', '', ''] });

  useEffect(() => {
    setChartData({
      ...chartData,
      datasets: [
        {
          data: [0, 1, 4, 7, 8],
          backgroundColor: back,
          fill: true,
          pointBackgroundColor: fill,
          hoverBackgroundColor: fill,
        },
      ],
    });
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      let arr = [];
      for (let i = 0; i < 5; i++) {
        arr.push(Math.round(Math.random() * 10));
      }
      setChartData({
        ...chartData,
        datasets: [
          {
            data: arr,
          },
        ],
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const options = {
    title: {
      display: false,
    },
    label: {
      display: false,
    },
    legend: {
      display: false,
    },

    layout: {
      padding: {
        left: 15,
        right: 20,
        bottom: -20,
        top: 10,
      },
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            display: false,
            autoSkip: true,
            maxTicksLimit: 10,
            beginAtZero: true,
          },
          gridLines: { display: false },
        },
      ],
      xAxes: [
        {
          gridLines: { display: false },
        },
      ],
    },
  };

  return (
    <>
      <Line data={chartData} options={options} />
    </>
  );
};

export default PerformanceChart;
