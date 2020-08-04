import { Box, Toolbar, Grid, TextField } from '@material-ui/core';
import React, { useState, useEffect } from 'react';

import client from '../../../services';
import { GET_COUNTRIES_BY_ID } from '../../../services/queries';
import { useStyles } from './styles';
import { useLocation } from 'react-router-dom';

const CountryDetails = () => {
  const classes = useStyles();
  const location = useLocation();

  const [id, setId] = useState(location.pathname.substring(9));
  const [country, setCountry] = useState([]);

  client
    .query({
      query: GET_COUNTRIES_BY_ID,
      variables: { _id: `${id}` },
    })
    .then((response) => setCountry(response.data.Country));

  const thousandsSeparators = (num) => {
    const num_parts = num.toString().split('.');
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return num_parts.join('.');
  };

  return (
    <div className={classes.root}>
      <Box>
        <Toolbar />
        <h1 className={classes.title}>Detalhes do País</h1>
        <div className={classes.cardContent}>
          {country.map((item) => (
            <Grid key={item} container>
              <Grid item xs={6}>
                <div className={classes.countryInfos}>
                  <Box>
                    <div className={classes.contryCapital}>
                      <TextField
                        className={classes.field}
                        label="Nome"
                        value={item.name}
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        className={classes.field}
                        label="Capital"
                        value={item.capital}
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </Box>
                  <Box>
                    <div className={classes.contryDetails}>
                      <TextField
                        className={classes.fieldInfos}
                        label="Área"
                        variant="outlined"
                        value={`${thousandsSeparators(item.area)}   ` + `Km²`}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        className={classes.fieldInfos}
                        label="População"
                        variant="outlined"
                        value={
                          `${thousandsSeparators(item.population)}   ` +
                          `milhões`
                        }
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        className={classes.fieldInfos}
                        label="Top Level Domain"
                        variant="outlined"
                        value={item.topLevelDomains[0].name}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.countryFlag}>
                  <img
                    src={item.flag.svgFile}
                    alt="flag"
                    className={classes.flag}
                  />
                </div>
              </Grid>
            </Grid>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default CountryDetails;
