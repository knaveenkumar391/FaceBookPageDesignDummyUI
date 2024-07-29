import React from "react";
import "../Header/headder.css";
import fbLogo from "../../Assets/facebookLogo.png";
import { Grid, Input, TextField } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import Navigation from "./Navigator/Navigation";
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
    <Grid container className="menu-headder-main">
      <Grid container className="menu-headder-left-grid" md={3}>
        <img src={fbLogo} className="fb-logo" />
        <FaSearch className="searchIcon"/>
        <input className="search-bar"></input>
      </Grid>
      <Grid className="menu-headder-middle-grid" md={6}>
        <Navigation/>
      </Grid>
      <Grid container className="menu-headder-right-grid" md={3} alignItems={'center'} justifyContent={'center'} >
         <ReplyAllIcon fontSize="large" sx={{marginRight:5,color:'#b0b3b8'}} />
         <ChatBubbleIcon fontSize="large" sx={{marginRight:5,color:'#b0b3b8'}}/>
         <NotificationsIcon fontSize="large" sx={{marginRight:5,color:'#b0b3b8'}}/>
      </Grid>
    </Grid>
  );
}

export default Header;
