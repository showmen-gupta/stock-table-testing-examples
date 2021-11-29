import React from 'react';
import ReactECharts from 'echarts-for-react';

export const CustomCharts = () => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      name: 'Dates',
      data: ['2010-01-04', '2010-01-05', '2010-01-06', '2010-01-07', '2010-01-08', '2010-01-09'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [12.885,14.098,14.364,14.653,14.885,10.645],
        type: 'line',
        name: 'High',
        smooth: true,
      },
      {
        data: [12.597,13.036, 13.951,14.189,14.597,18.597],
        type: 'line',
        name: 'Low',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };
  return <ReactECharts option={options} />;

};