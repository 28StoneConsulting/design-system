import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import { green } from '@mui/material/colors';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles, withStyles } from '@mui/styles';
import React from 'react';

export default {
  title: 'Material UI/Checkbox',
  component: Checkbox,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const BasicCheckboxesInternal = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Checkbox defaultChecked color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
      <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
      <Checkbox defaultChecked indeterminate inputProps={{ 'aria-label': 'indeterminate checkbox' }} />
      <Checkbox defaultChecked color="default" inputProps={{ 'aria-label': 'checkbox with default color' }} />
      <Checkbox defaultChecked size="small" inputProps={{ 'aria-label': 'checkbox with small size' }} />
    </div>
  );
};

export const BasicCheckboxes = () => <BasicCheckboxesInternal />;

const CheckboxWithFormControlLabelInternal = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <FormGroup row>
        <FormControlLabel
          control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
          label="Secondary"
        />
        <FormControlLabel
          control={<Checkbox checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />}
          label="Primary"
        />
        <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
        <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
        <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
        <FormControlLabel
          control={<Checkbox checked={state.checkedF} onChange={handleChange} name="checkedF" indeterminate />}
          label="Indeterminate"
        />
        <FormControlLabel
          control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
          label="Custom color"
        />
        <FormControlLabel
          control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
          label="Custom icon"
        />
        <FormControlLabel
          control={
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              name="checkedI"
            />
          }
          label="Custom size"
        />
      </FormGroup>
    </div>
  );
};

export const CheckboxWithFormControlLabel = () => <CheckboxWithFormControlLabelInternal />;

const CheckboxesGrouplInternal = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter(v => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl required error={error} component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </div>
  );
};

export const CheckboxesGroup = () => <CheckboxesGrouplInternal />;

const FormControlLabelPositionInternal = () => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Label Placement</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel value="top" control={<Checkbox color="primary" />} label="Top" labelPlacement="top" />
        <FormControlLabel value="start" control={<Checkbox color="primary" />} label="Start" labelPlacement="start" />
        <FormControlLabel
          value="bottom"
          control={<Checkbox color="primary" />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel value="end" control={<Checkbox color="primary" />} label="End" labelPlacement="end" />
      </FormGroup>
    </FormControl>
  );
};

export const FormControlLabelPosition = () => <FormControlLabelPositionInternal />;
