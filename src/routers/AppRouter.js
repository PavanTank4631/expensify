import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import '../styles/styles.scss';
import DashboardExpensePage from '../components/dashboardExpensePage';
import DashboardPage from '../components/dashboardPage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header.js';
import HelpPage from '../components/HelpPage.js';
import NotFound from '../components/NotFound.js';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/create" component={DashboardExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;