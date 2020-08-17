import {
  Box,
  Toolbar,
  Grid,
  TextField,
  InputAdornment,
  Button,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Back from '../../../assets/images/back.svg';
import client from '../../../services';
import { GET_COUNTRIES_BY_ID } from '../../../services/queries';
import { useStyles } from './styles';

const CountryDetails = () => {
  const classes = useStyles();
  const location = useLocation();

  const [id, setId] = useState(location.pathname.substring(9));
  const [country, setCountry] = useState([]);
  const [disabledField, setDisabledField] = useState(true);
  const [disabledEdit, setDisabledEdit] = useState(false);
  const [disabledSave, setDisabledSave] = useState(true);

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

  const enableEdit = () => {
    setDisabledField(!disabledField);
    setDisabledSave(!disabledSave);
    setDisabledEdit(!disabledEdit);
  };

  const saveEdit = () => {
    setDisabledField(!disabledField);
    setDisabledSave(!disabledSave);
    setDisabledEdit(!disabledEdit);
  };

  const changeField = (field, id, value) => {
    const newCountryInfo = [...country];
    newCountryInfo.forEach((c) => {
      if (c._id === id) {
        c[field] = value;
        return;
      }
      setCountry([...newCountryInfo]);
    });
  };

  return (
    <div className={classes.root}>
      <Box>
        <Toolbar />
        <div className={classes.cardHeader}>
          <Link to="/">
            <div className={classes.backImage}>
              <img src={Back} alt="back" />
            </div>
          </Link>
          <h1 className={classes.title}>Detalhes do País</h1>
        </div>
        <div className={classes.cardContent}>
          {country.map((item) => (
            <Grid key={item} container spacing={4}>
              <Grid item xs={3}>
                <div className={classes.countryFlag}>
                  <img
                    src={item.flag.svgFile}
                    alt="flag"
                    className={classes.flag}
                  />
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className={classes.countryInfos}>
                  <Box>
                    <div className={classes.contryCapital}>
                      <TextField
                        className={classes.field}
                        disabled={disabledField}
                        label="Nome"
                        defaultValue={item.name}
                        onChange={(event) =>
                          changeField('name', item._id, event.target.value)
                        }
                        variant="outlined"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <TextField
                        className={classes.field}
                        disabled={disabledField}
                        label="Capital"
                        defaultValue={item.capital}
                        onChange={(event) =>
                          changeField('capital', item._id, event.target.value)
                        }
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
                        label="Área"
                        className={classes.fieldInfos}
                        variant="outlined"
                        disabled={disabledField}
                        defaultValue={`${thousandsSeparators(item.area)}`}
                        onChange={(event) =>
                          changeField('area', item._id, event.target.value)
                        }
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              km²
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        className={classes.fieldInfos}
                        label="População"
                        variant="outlined"
                        defaultValue={`${thousandsSeparators(item.population)}`}
                        onChange={(event) =>
                          changeField(
                            'population',
                            item._id,
                            event.target.value
                          )
                        }
                        disabled={disabledField}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              {item.population < 1000000
                                ? 'mil / hab'
                                : 'mi / hab'}
                            </InputAdornment>
                          ),
                        }}
                      />
                      <TextField
                        className={classes.fieldInfos}
                        disabled={disabledField}
                        label="Top Level Domain"
                        variant="outlined"
                        defaultValue={item.topLevelDomains[0].name}
                        onChange={(event) =>
                          changeField('name', item._id, event.target.value)
                        }
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={3}>
                <div className={classes.cardButtons}>
                  <Button
                    onClick={enableEdit}
                    variant="contained"
                    color="primary"
                    disabled={disabledEdit}
                    className={classes.button}
                    startIcon={<EditIcon />}>
                    Editar
                  </Button>
                  <Button
                    onClick={saveEdit}
                    variant="contained"
                    color="primary"
                    disabled={disabledSave}
                    className={classes.button}
                    startIcon={<SaveIcon />}>
                    Salvar
                  </Button>
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
