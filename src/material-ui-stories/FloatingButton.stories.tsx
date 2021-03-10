import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

export default {
  title: 'Material UI/FloatingActionButton',
  component: Fab,
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

export const FloatingActionButtons = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon className={classes.extendedIcon} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </div>
  );
};

export const Sizes = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
        <Fab size="medium" color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="add" className={classes.margin}>
          <AddIcon />
        </Fab>
      </div>
      <div>
        <Fab variant="extended" size="small" color="primary" aria-label="add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
        <Fab variant="extended" size="medium" color="primary" aria-label="add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
          <NavigationIcon className={classes.extendedIcon} />
          Extended
        </Fab>
      </div>
    </div>
  );
};
