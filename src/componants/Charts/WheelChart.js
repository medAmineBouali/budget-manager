import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import {convertToPercentageByCategory} from "../../Data/Calculations"

const WheelChart = ({ data }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF6E40', '#4CAF50', '#F50057'];
  const Data = convertToPercentageByCategory(data.expenses)
  return (
    <PieChart  width={400} height={400}>
      <Pie
        data={Data}
        dataKey="percentage"
        nameKey="category"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {Data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default WheelChart;
