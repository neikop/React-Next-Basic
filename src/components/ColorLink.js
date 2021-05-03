import React from 'react';
import { useHistory } from 'react-router';
import { Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const CustomLink = ({ to, onClick, children, ...props }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = (event) => {
    event.preventDefault();
    if (typeof onClick === 'function') {
      onClick(event);
    } else if (to) {
      history.push(to);
    }
  };

  return (
    <Link component={Typography} onClick={handleClick} underline="none" className={classes.link} {...props}>
      {children ?? ''}
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  link: {
    cursor: 'pointer',
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
}));

export default CustomLink;
