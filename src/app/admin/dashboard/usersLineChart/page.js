"use client";
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const UsersLineChart = () => {
  const [chartOptions, setChartOptions] = useState({
    title: {
      text: 'Users Over Time'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date'
      },
      dateTimeLabelFormats: {
        day: '%e %b %Y',
        week: '%e %b %Y',
        month: '%b %Y',
        year: '%Y'
      }
    },
    yAxis: {
      title: {
        text: 'Number of Registered Users (x10^7)'
      }
    },
    series: [{
      name: 'Users',
      data: [],
      marker: {
        enabled: true
      }
    }],
    plotOptions: {
      series: {
        marker: {
          enabled: true
        }
      }
    },
    tooltip: {
      xDateFormat: '%e %b %Y',
      shared: true
    }
  });

  useEffect(() => {
    // Fetch users data
    fetch('/api/users')
      .then(response => response.json())
      .then(data => {
        // Assuming data is sorted by createdAt
        let cumulativeUsers = 0;
        const formattedData = data.map(user => {
          cumulativeUsers += 1; // Increment user count
          return [new Date(user.createdAt).setHours(0, 0, 0, 0), cumulativeUsers]; // Set time to 00:00:00
        });

        const lastDate = new Date(data[data.length - 1].createdAt);
        const extendedLastDate = new Date(lastDate.setDate(lastDate.getDate() + 5));

        setChartOptions(prevOptions => ({
          ...prevOptions,
          series: [{
            name: 'Users',
            data: formattedData
          }],
          xAxis: {
            ...prevOptions.xAxis,
            max: extendedLastDate.getTime() // Extend x-axis to 5 days ahead of last registration date
          }
        }));
      });
  }, []);

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default UsersLineChart;
