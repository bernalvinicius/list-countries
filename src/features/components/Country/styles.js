import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
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
  flag: {
    width: '64px',
    height: '48px',
  },
  countryInfos: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'center',
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
