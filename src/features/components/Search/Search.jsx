import { Box } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';

import { useStyles } from './styles';

const Search = ({ setSearchCountry }) => {
  const classes = useStyles();

  return (
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
  );
};

export default Search;
