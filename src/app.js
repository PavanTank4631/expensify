import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const initialState = {};
const store = configureStore(initialState);
store.dispatch(addExpense({ description: 'Water bill' }));
store.dispatch(addExpense({ description: 'Gas bill' }));
store.dispatch(setTextFilter('Water'));

const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(VisibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
