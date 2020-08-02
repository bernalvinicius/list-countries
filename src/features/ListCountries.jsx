import React, { useState } from 'react';

import './styles.scss';
import client from '../services';
import { GET_COUNTRIES_BY_ID } from '../services/requests';
import CardCountries from './components/CardCountries/CardCountries';

const ListCountries = () => {
  const [id, setId] = useState('Brazil');
  const [country, setCountry] = useState([]);

  client
    .query({
      query: GET_COUNTRIES_BY_ID,
      variables: { _id: '661' },
    })
    .then((response) => setCountry(response.data.Country));

  // console.log(country);

  return (
    <div>
      <CardCountries />
    </div>
  );
};

export default ListCountries;
