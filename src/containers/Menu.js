import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { t } from 'utils/common';
import { privateRoute } from 'routes';

import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';

const MenuItem = ({ name, icon, path }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <ListItem button component={Link} to={path} className={classes.item} selected={location.pathname.startsWith(path)}>
      <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};

const Menu = () => {
  const { home, market } = privateRoute;
  return (
    <>
      <MenuItem {...home} name={t('Home')} icon={<DashboardOutlinedIcon />} />
      <MenuItem {...market} name={t('Market')} icon={<WorkOutlineOutlinedIcon />} />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  item: {
    width: 'unset',
  },
  icon: {
    minWidth: 'unset',
    marginRight: theme.spacing(1),
  },
}));

export default Menu;
