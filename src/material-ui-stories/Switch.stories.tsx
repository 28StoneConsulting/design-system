import React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default {
  title: 'Material UI/Switch',
  component: Switch,
};

const BasicSwitchesInternal = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
      <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
      <Switch defaultChecked color="default" inputProps={{ 'aria-label': 'checkbox with default color' }} />
    </div>
  );
};

export const BasicSwitches = () => <BasicSwitchesInternal />;

const WithLabelsInternal = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Secondary"
      />
      <FormControlLabel
        control={<Switch checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />}
        label="Primary"
      />
      <FormControlLabel control={<Switch />} label="Uncontrolled" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
      <FormControlLabel disabled control={<Switch checked />} label="Disabled" />
    </FormGroup>
  );
};

export const WithLabels = () => <WithLabelsInternal />;

const SizesInternal = () => {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    setChecked(prev => !prev);
  };

  return (
    <FormGroup>
      <FormControlLabel control={<Switch size="small" checked={checked} onChange={toggleChecked} />} label="Small" />
      <FormControlLabel control={<Switch checked={checked} onChange={toggleChecked} />} label="Normal" />
    </FormGroup>
  );
};

export const Sizes = () => <SizesInternal />;
