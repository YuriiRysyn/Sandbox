import React from 'react';
import PropTypes from 'prop-types';

// import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
// var keyMirror = require('../../node_modules/keymirror');
// const keyMirror = require('keyMirror');

// const Constants = {
//   ScoreRubrics: keyMirror({
//     Speechace: null,
//     CERF: null,
//     IELTS: null,
//     PTE: null,
//     TOEFL: null,
//     TOEIC: null,
//   }),
// };

// export const RubricSelector = ({ activeScoreRubric, setActiveScoreRubric }) => {
//   return (
//     <ThemeSwitcherProvider
//       defaultTheme={Constants.ScoreRubrics.Speechace}
//       themeMap={Constants.ScoreRubrics}
//     >
//       <h2>dasdasd</h2>
//       {/* <Component /> */}
//     </ThemeSwitcherProvider>
//   );
// };

import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

export  function RubricSelector() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
  );
}
