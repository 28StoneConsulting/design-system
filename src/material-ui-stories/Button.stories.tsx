import styled from '@emotion/styled';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    button: {
      margin: theme.spacing(1),
    },
  }),
);

export default {
  title: 'Material UI/Button',
  component: Button,
};

const ContainedButtonsInternal = () => (
  <ButtonsWrapper>
    <Button variant="contained">Default</Button>
    <Button variant="contained" color="primary">
      Primary
    </Button>
    <Button variant="contained" color="secondary">
      Secondary
    </Button>
    <Button variant="contained" disabled>
      Disabled
    </Button>
    <Button variant="contained" color="primary" href="#contained-buttons">
      Link
    </Button>
    <br />
  </ButtonsWrapper>
);

export const ContainedButtons = () => <ContainedButtonsInternal />;

const OutlinedButtonsInternal = () => (
  <ButtonsWrapper>
    <Button variant="outlined">Default</Button>
    <Button variant="outlined" color="primary">
      Primary
    </Button>
    <Button variant="outlined" color="secondary">
      Secondary
    </Button>
    <Button variant="outlined" disabled>
      Disabled
    </Button>
    <Button variant="outlined" color="primary" href="#outlined-buttons">
      Link
    </Button>
    <br />
  </ButtonsWrapper>
);

export const OutlinedButtons = () => <OutlinedButtonsInternal />;

const TextButtonsInternal = () => (
  <ButtonsWrapper>
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button disabled>Disabled</Button>
    <Button href="#text-buttons" color="primary">
      Link
    </Button>
    <br />
  </ButtonsWrapper>
);

export const TextButtons = () => <TextButtonsInternal />;

const SizesInternal = () => {
  const classes = useStyles();
  return (
    <ButtonsWrapper>
      <div>
        <Button size="small" className={classes.margin}>
          Small
        </Button>
        <Button size="medium" className={classes.margin}>
          Medium
        </Button>
        <Button size="large" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="small" color="primary" className={classes.margin}>
          Small
        </Button>
        <Button variant="outlined" size="medium" color="primary" className={classes.margin}>
          Medium
        </Button>
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small" color="primary" className={classes.margin}>
          Small
        </Button>
        <Button variant="contained" size="medium" color="primary" className={classes.margin}>
          Medium
        </Button>
        <Button variant="contained" size="large" color="primary" className={classes.margin}>
          Large
        </Button>
      </div>
      <div>
        <IconButton aria-label="delete" className={classes.margin} size="small">
          <ArrowDownwardIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin} size="large">
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin} size="large">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" className={classes.margin} size="large">
          <DeleteIcon fontSize="large" />
        </IconButton>
      </div>
    </ButtonsWrapper>
  );
};

export const Sizes = () => <SizesInternal />;

const UploadButtonInternal = () => {
  const classes = useStyles();
  return (
    <ButtonsWrapper>
      <input accept="image/*" className={classes.input} id="contained-button-file" multiple type="file" />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span" size="large">
          <PhotoCamera />
        </IconButton>
      </label>
      <br />
    </ButtonsWrapper>
  );
};

export const UploadButton = () => <UploadButtonInternal />;

const ButtonsWithIconsAndLabelInternal = () => {
  const classes = useStyles();
  return (
    <ButtonsWrapper>
      <Button variant="contained" color="secondary" className={classes.button} startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" color="primary" className={classes.button} endIcon={<SendIcon />}>
        Send
      </Button>
      <Button variant="contained" className={classes.button} startIcon={<CloudUploadIcon />}>
        Upload
      </Button>
      <Button
        variant="contained"
        disabled
        color="secondary"
        className={classes.button}
        startIcon={<KeyboardVoiceIcon />}
      >
        Talk
      </Button>
      <Button variant="contained" color="primary" size="small" className={classes.button} startIcon={<SaveIcon />}>
        Save
      </Button>
      <Button variant="contained" color="primary" size="large" className={classes.button} startIcon={<SaveIcon />}>
        Save
      </Button>
    </ButtonsWrapper>
  );
};

export const ButtonsWithIconsAndLabel = () => <ButtonsWithIconsAndLabelInternal />;

const ButtonsWrapper = styled.div`
  & > * {
    margin-right: ${p => p.theme.spacing(1)};
    margin-bottom: ${p => p.theme.spacing(1)};
  }
`;
