import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    padding: '30px',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottom: '1px solid #CCC',
    marginBottom: '50px',
  },
  backImage: {
    height: '50px',
    width: '50px',
    backgroundColor: '#f4f4f4',
    borderRadius: '50%',
    border: '1px solid #ccc',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#02482b',
    marginLeft: '40px',
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
    width: '300px',
  },
  contryDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fieldInfos: {
    width: '190px',
  },
  countryFlag: {
    border: '1px solid #CCC',
    borderRadius: '5px',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flag: {
    width: '160px',
    height: '128px',
  },
  cardButtons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: '100%',
    width: '100%',
  },
  button: {
    backgroundColor: '#02482b',
    color: '#fff',
    width: '150px',
  },
});
