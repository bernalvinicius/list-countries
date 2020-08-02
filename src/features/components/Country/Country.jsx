import { Box, Grid } from '@material-ui/core';
import React from 'react';

import { useStyles } from './styles';

const Country = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Box>
        <div className={classes.cardCountry}>
          <div className={classes.countryFlag}>
            <img src={item.flag.svgFile} alt="flag" className={classes.flag} />
          </div>
          <div className={classes.countryInfos}>
            <div className={classes.countryName}>{item.name}</div>
            <div className={classes.countryCapital}>{item.capital}</div>
          </div>
        </div>
      </Box>
    </Grid>
  );
};

export default Country;
