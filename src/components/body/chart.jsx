import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";

const charts = () => {
  const data = [
    {
      name: "Jan",
      uv: 4000,
    },
    {
      name: "Feb",
      uv: 3700,
    },
    {
      name: "Mar",
      uv: 5000,
    },
    {
      name: "Apr",
      uv: 4100,
    },
    {
      name: "May",
      uv: 6000,
    },
    {
      name: "Jun",
      uv: 7000,
    },
    {
      name: "Jul",
      uv: 5000,
    },
    {
      name: "Aug",
      uv: 6900,
    },
    {
      name: "Sept",
      uv: 9000,
    },
    {
      name: "Oct",
      uv: 4000,
    },
    {
      name: "Nov",
      uv: 5500,
    },
    {
      name: "Dec",
      uv: 10000,
    },
  ];
  return (
    <>
      <ResponsiveContainer aspect={4 / 1}>
        <LineChart
          width='100%'
          height='100%'
          data={data}
          margin={{ top: 5, right: 40, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='ActiveUsers' stroke='#8884d8' />
          <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default charts;
