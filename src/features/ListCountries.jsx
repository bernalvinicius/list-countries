import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CountryInfos from './pages/CountryInfos';
import HomePage from './pages/HomePage';

const ListCountries = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/country/:id" component={CountryInfos} />
      </Switch>
    </div>
  );
};

export default ListCountries;
