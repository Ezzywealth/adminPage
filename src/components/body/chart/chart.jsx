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
const drawerWidth = 240;

const charts = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width='95%' aspect={4 / 1} debounce={1}>
        <LineChart
          data={data}
          // margin={{ top: 5, right: 40, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <Tooltip />
          <Line type='monotone' dataKey='ActiveUsers' stroke='#8884d8' />
          <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default charts;
