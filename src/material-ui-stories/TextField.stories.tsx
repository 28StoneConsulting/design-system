import AccountCircle from '@mui/icons-material/AccountCircle';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Theme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default {
  title: 'Material UI/TextField',
  component: TextField,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    wrapper: {
      display: 'flex',
      width: '100%',
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

const BasicTextFieldsInternal = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
};

export const BasicTextFields = () => <BasicTextFieldsInternal />;

const SizesInternal = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.wrapper}>
        <TextField label="Size" id="standard-size-small" defaultValue="Small" size="small" />
        <TextField label="Size" id="standard-size-normal" defaultValue="Normal" />
      </div>
      <div className={classes.wrapper}>
        <TextField label="Size" id="filled-size-small" defaultValue="Small" variant="filled" size="small" />
        <TextField label="Size" id="filled-size-normal" defaultValue="Normal" variant="filled" />
      </div>
      <div className={classes.wrapper}>
        <TextField label="Size" id="outlined-size-small" defaultValue="Small" variant="outlined" size="small" />
        <TextField label="Size" id="outlined-size-normal" defaultValue="Normal" variant="outlined" />
      </div>
    </form>
  );
};

export const Sizes = () => <SizesInternal />;

const ColorInternal = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.wrapper}>
        <TextField id="standard-primary" label="Standard primary" color="primary" />
        <TextField id="filled-primary" label="Filled primary" variant="filled" color="primary" />
        <TextField id="outlined-primary" label="Outlined primary" variant="outlined" color="primary" />
      </div>
      <div className={classes.wrapper}>
        <TextField id="standard-secondary" label="Standard secondary" color="secondary" />
        <TextField id="filled-secondary" label="Filled secondary" variant="filled" color="secondary" />
        <TextField id="outlined-secondary" label="Outlined secondary" variant="outlined" color="secondary" />
      </div>
    </form>
  );
};

export const Color = () => <ColorInternal />;

const WithIconInternal = () => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="TextField"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export const WithIcon = () => <WithIconInternal />;

const SelectInternal = () => {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.wrapper}>
        <TextField
          id="standard-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-select-currency-native"
          select
          label="Native select"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div className={classes.wrapper}>
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-select-currency-native"
          select
          label="Native select"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div className={classes.wrapper}>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="outlined"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="Native select"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
          variant="outlined"
        >
          {currencies.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
};

export const Select = () => <SelectInternal />;

const MultilineInternal = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.wrapper}>
        <TextField
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
        <TextField id="standard-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline />
        <TextField id="standard-multiline-static" label="Multiline" multiline rows={4} defaultValue="Default Value" />
      </div>
      <div className={classes.wrapper}>
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="filled"
        />
      </div>
      <div className={classes.wrapper}>
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
        />
      </div>
    </form>
  );
};

export const Multiline = () => <MultilineInternal />;
