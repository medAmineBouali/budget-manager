import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartComponent = ({ data }) => {
  const expenseData = data.expenses.map(expense => ({
    date: new Date(expense.date).toISOString().substr(0, 10),
    "amount-spent": expense.amount,
  }));

  return (
    <ResponsiveContainer width={700} height={400}>
      <LineChart data={expenseData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="amount-spent" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartComponent;

