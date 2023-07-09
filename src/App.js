import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import MovieDetailsPage from './components/MovieDetailsPage';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:id" component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
