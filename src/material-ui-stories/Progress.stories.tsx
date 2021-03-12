import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    linearRoot: {
      width: '100%',
      marginTop: theme.spacing(2),
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    fabProgress: {
      color: green[500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  }),
);

export default {
  title: 'Material UI/Progress',
  component: CircularProgress,
};

const CircularIndeterminateInternal = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </div>
  );
};

export const CircularIndeterminate = () => <CircularIndeterminateInternal />;

const CircularDeterminateInternal = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <CircularProgress variant="determinate" value={25} />
      <CircularProgress variant="determinate" value={50} />
      <CircularProgress variant="determinate" value={75} />
      <CircularProgress variant="determinate" value={100} />
      <CircularProgress variant="determinate" value={progress} />
    </div>
  );
};

export const CircularDeterminate = () => <CircularDeterminateInternal />;

const CircularIntegrationInternal = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef<number>();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Fab aria-label="save" color="primary" className={buttonClassname} onClick={handleButtonClick}>
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && <CircularProgress size={68} className={classes.fabProgress} />}
      </div>
      <div className={classes.wrapper}>
        <Button
          variant="contained"
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Accept terms
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
  );
};

export const CircularIntegration = () => <CircularIntegrationInternal />;

const CircularProgressWithLabel = (props: CircularProgressProps & { value: number }) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

const CircularWithLabelInternal = () => {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
};

export const CircularWithLabel = () => <CircularWithLabelInternal />;

const LinearIndeterminateInternal = () => {
  const classes = useStyles();

  return (
    <div className={classes.linearRoot}>
      <LinearProgress />
      <LinearProgress color="secondary" />
    </div>
  );
};

export const LinearIndeterminate = () => <LinearIndeterminateInternal />;

const LinearDeterminateInternal = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.linearRoot}>
      <LinearProgress variant="determinate" value={progress} />
    </div>
  );
};

export const LinearDeterminate = () => <LinearDeterminateInternal />;


LinearDeterminate.parameters = {
  chromatic: { disable: true },
};


const LinearBufferInternal = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => true);
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
      return true;
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.linearRoot}>
      <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
    </div>
  );
};

export const LinearBuffer = () => <LinearBufferInternal />;


LinearBuffer.parameters = {
chromatic: { disable: true },
};


function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const LinearWithValueLabelInternal = () => {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prevProgress => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.linearRoot}>
      <LinearProgressWithLabel value={progress} />
    </div>
  );
};

export const LinearWithValueLabel = () => <LinearWithValueLabelInternal />;
