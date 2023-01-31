import { Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { createStyles, makeStyles } from '@mui/styles';

export default {
  title: 'Material UI/DatePicker',
  component: TextField,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

const DatePickerInternal = () => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
};

export const DatePicker = () => <DatePickerInternal />;

const DateTimePickerInternal = () => {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
};

export const DateTimePicker = () => <DateTimePickerInternal />;
