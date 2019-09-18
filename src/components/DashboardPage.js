import React from 'react';
import ExpenseList from './ExpenseList';

const DashboardPage = (props) => {
  console.log(props);
  
  return (
    <div>
      <h1 className="text">this  is my dashboard page</h1>
      <ExpenseList />
    </div>
  );
};

export default DashboardPage;
