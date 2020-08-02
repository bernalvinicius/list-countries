import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    padding: '30px',
  },
  title: {
    fontSize: '3rem',
    margin: '0 0 1rem',
  },
  search: {
    width: '90%',
    maxWidth: '900px',
    margin: '50px 0',
  },
  cardCountry: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid #ccc',
    borderRadius: '5px',
    height: '60px',
  },
  countryFlag: {
    width: '100%',
    maxWidth: '80px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryInfos: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  flag: {
    width: '64px',
    height: '48px',
  },
  countryName: {
    color: '#000',
    fontSize: '24px',
    letterSpacing: '0.3px',
    lineHeight: '20px',
  },
  countryCapital: {
    paddingTop: '5px',
    color: '#111',
    lineHeight: '16px',
    letterSpacing: '0.8px',
  },
});
