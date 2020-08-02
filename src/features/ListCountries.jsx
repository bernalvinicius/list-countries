import React, { useState } from 'react';

import './styles.scss';
import client from '../services';
import { GET_COUNTRIES, GET_COUNTRIES_BY_ID } from '../services/requests';

const ListCountries = () => {
  const [id, setId] = useState('Brazil');
  const [country, setCountry] = useState([]);
  const [countries, setCountries] = useState([]);

  client
    .query({
      query: GET_COUNTRIES,
    })
    .then((response) => setCountries(response.data.Country));

  client
    .query({
      query: GET_COUNTRIES_BY_ID,
      variables: { _id: '661' },
    })
    .then((response) => setCountry(response.data.Country));

  console.log(country);
  // console.log(countries);

  return <div>List Countries</div>;
};

export default ListCountries;
