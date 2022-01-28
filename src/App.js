import React from 'react';
import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
// import { Grid } from '@material-ui/core'; // material ui has a grid component
import NavBar from './components/Navbar';
import Grid from './components/Grid';
import './App.css';
import Footer from './components/Footer';



import SecurityIcon from '@material-ui/icons/Security';
import EventNoteIcon from '@material-ui/icons/EventNote';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import ComputerIcon from '@material-ui/icons/Computer';
import HttpIcon from '@material-ui/icons/Http';



const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main:"#c7dd8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28, 
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      fontSize: 28,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "5rem",
  },
  littleSpace: {
    marginTop: "5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})


const App = () => {

  const classes = styles();
  return (
    <div className = "app">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className = { classes.wrapper }>
          <Typography variant='h4' className = { classes.bigSpace } color = "primary">
            At Rocket.io we are passionate about software
          </Typography>

          <Typography variant='h5' className = { classes.littleSpace } color = "primary">
            Some placeholder text -- lorem ipsum dolor sit amet, idek what that means lol
          </Typography>

        </div>
        <div className = {`${classes.grid} ${classes.bigSpace}`}>   {/* how to do 2 class names */}
          <Grid icon = {<SecurityIcon style = {{fill: "#4360A6", height: "125", width: "125"}}/>} title = "Security" btnTitle = "Learn More"/>
          <Grid icon = {<EventNoteIcon style = {{fill: "#449A76", height: "125", width: "125"}}/>} title = "Event" btnTitle = "Learn More"/>
          <Grid icon = {<TrendingUpIcon style = {{fill: "#D05B2D", height: "125", width: "125"}}/>} title = "TrendingUp" btnTitle = "Learn More"/>
        </div>

        <div className = {`${classes.grid} ${classes.littleSpace}`}>
          <Grid icon = {<ImportExportIcon style = {{fill: "#5EA780", height: "125", width: "125"}}/>} title = "ImportExport" btnTitle = "Learn More"/>
          <Grid icon = {<ComputerIcon style = {{fill: "#449A76", height: "125", width: "125"}}/>} title = "Computer" btnTitle = "Learn More"/>
          <Grid icon = {<HttpIcon style = {{fill: "#2EA09D", height: "125", width: "125"}}/>} title = "HTTP" btnTitle = "Learn More"/>
        </div>

        <div className = { classes.bigSpace }>
          <Footer/>
        </div>
        

      </ThemeProvider>
    </div>



  );
};

export default App;
