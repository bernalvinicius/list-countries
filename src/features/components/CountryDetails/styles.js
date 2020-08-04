import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    padding: '30px',
  },
  cardContent: {
    height: '50vh',
    minHeight: '450px',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '5px',
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
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: '50px',
    marginTop: '10px',
  },
  flag: {
    width: '160px',
    height: '128px',
  },
});
