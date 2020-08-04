import { Box, Toolbar, Grid } from '@material-ui/core';
import React, { useState } from 'react';

import client from '../../../services';
import { GET_COUNTRIES } from '../../../services/queries';
import Country from '../Country';
import Search from '../Search';
import { useStyles } from './styles';

const CardCountries = () => {
  const classes = useStyles();

  const [searchCountry, setSearchCountry] = useState('');
  const [countries, setCountries] = useState([]);

  client
    .query({
      query: GET_COUNTRIES,
    })
    .then((response) => setCountries(response.data.Country));

  return (
    <div className={classes.root}>
      <Box>
        <Toolbar />
        <h1 className={classes.title}>Lista de Países</h1>
        <Search setSearchCountry={setSearchCountry} />
        <Grid container spacing={4}>
          {countries
            .filter((country) => {
              return (
                country.name
                  .toLowerCase()
                  .indexOf(searchCountry.toLowerCase()) >= 0 ||
                country.capital
                  .toLowerCase()
                  .indexOf(searchCountry.toLowerCase()) >= 0
              );
            })
            .map((item) => (
              <Country key={item} item={item} />
            ))}
        </Grid>
      </Box>
    </div>
  );
};

export default CardCountries;
