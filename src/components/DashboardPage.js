import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';


const DashboardPage = () => {
  return (
    <div>
      <h1 className="text">this  is my dashboard page</h1>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default DashboardPage;
