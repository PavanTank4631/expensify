import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

import ExpenseListItem from './ExpenseListItem';
const DashboardPage = (props) => {
  console.log(props);
  
  return (
    <div>
      <h1 className="text">this  is my dashboard page</h1>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default DashboardPage;
