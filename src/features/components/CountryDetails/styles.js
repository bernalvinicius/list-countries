import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    padding: '30px',
  },
  title: {
    fontSize: '3rem',
    margin: '0 0 1rem',
  },
  cardContent: {
    height: '50vh',
    minHeight: '450px',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  countryInfos: {
    border: '1px solid #CCC',
    borderRadius: '5px',
    padding: '10px',
  },
  contryCapital: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '30px 0',
  },
  field: {
    width: '315px',
  },
  contryDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fieldInfos: {
    width: '200px',
  },
  countryFlag: {
    border: '1px solid #CCC',
    borderRadius: '5px',
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '50px',
  },
  flag: {
    width: '160px',
    height: '128px',
  },
});
