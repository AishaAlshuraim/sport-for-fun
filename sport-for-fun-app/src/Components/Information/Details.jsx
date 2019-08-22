import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Details.scss';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: `#142840`,

    // backgroundColor: theme.palette.background.paper,
  },
}));

export default function Details(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className="Details">
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="contact us" icon={<PhoneIcon />} {...a11yProps(0)} />
          <Tab label="Comments" icon={<FavoriteIcon />} {...a11yProps(2)} />
          <Tab label="Visitors" icon={<PersonPinIcon />} {...a11yProps(3)} />
          <Tab label="Address" icon={<HelpIcon />} {...a11yProps(4)} />
            <Tab label="Opening Hours"icon={<HelpIcon />}   {...a11yProps(4)} />
          <Tab label="Activityes" icon={<HelpIcon />}  {...a11yProps(6)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <p>
         <a href={`tel:${props.contact}`}style={{textDecoration: 'none'}}>{`Click To Call ${props.contact}`}</a>
         <p></p>
        <a href={props.website} style={{textDecoration: 'none'}}>Click To Show Website</a>
      </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <p>{ props.comments}</p>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <p> {props.visitors} </p>

      </TabPanel>
      <TabPanel value={value} index={3}>
           <p> {props.address} </p>
            <p>  <a href={props.addressLink}> addressLink </a> </p>


      </TabPanel>
      <TabPanel value={value} index={4}>
      <p> {props.openingHours}</p>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <p> {props.activities}</p>
      </TabPanel>

    </div>
    </div>
  );
}
