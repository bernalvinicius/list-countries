import React, { useState } from 'react';
import { useStyles } from './styles';
import { Box, Toolbar, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

const CardCountries = ({ countries = [] }) => {
  const classes = useStyles();

  const [searchCountry, setSearchCountry] = useState('');

  console.log(countries);

  return (
    <div className={classes.root}>
      <Box>
        <Toolbar />
        <h1 className={classes.title}>Lista de Países</h1>
        <Box>
          <div className={classes.search}>
            <TextField
              onChange={(event) => setSearchCountry(event.target.value)}
              id="standard-basic"
              label="Procurar..."
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </Box>
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
            .map((item, index) => (
              <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <div className={classes.cardCountry}>
                    <div className={classes.countryFlag}>
                      <img
                        src={item.flag.svgFile}
                        alt="flag"
                        className={classes.flag}
                      />
                    </div>
                    <div className={classes.countryInfos}>
                      <div className={classes.countryName}>{item.name}</div>
                      <div className={classes.countryCapital}>
                        {item.capital}
                      </div>
                    </div>
                  </div>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
};

export default CardCountries;
