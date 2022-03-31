import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
          name: 'SuplierA',
          price: 4000,
          sales: 2400,
          amt: 2400,
        },
        {
          name: 'SuplierB',
          price: 3000,
          sales: 1398,
          amt: 2210,
        },
        {
          name: 'SuplierC',
          price: 2000,
          sales: 9800,
          amt: 2290,
        },
        {
          name: 'SuplierD',
          price: 2780,
          sales: 3908,
          amt: 2000,
        },
        {
          name: 'SuplierE',
          price: 1890,
          sales: 4800,
          amt: 2181,
        },
        {
          name: 'SuplierF',
          price: 2390,
          sales: 3800,
          amt: 2500,
        },
        {
          name: 'SuplierG',
          price: 3490,
          sales: 4300,
          amt: 2100,
        },
      ];
    return (
       <LineChart width={800} height={500} data={data}>
           <Line dataKey={'price'}></Line>
           <Line dataKey={'sales'}  ></Line>
           <XAxis></XAxis>   
           <YAxis></YAxis>
           <Tooltip></Tooltip>   
           <CartesianGrid></CartesianGrid>
       </LineChart>
    );
};

export default MyLineChart;