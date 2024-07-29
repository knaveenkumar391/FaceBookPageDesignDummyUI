import { Grid } from "@mui/material";
import '../Navigator/navigation.css'
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import { useNavigate } from "react-router-dom";
function Navigation() {
  const navigate= useNavigate();
  const handleBoxClick = (x) =>{
    navigate(x)
  }
  return (
    <Grid container className="navigation-div-main" style={{height:'100%'}}>
      <Grid onClick={()=>handleBoxClick('/page1')} container md={2}  alignItems={'center'} justifyContent={'center'} className="common-nav-icons">
        <HomeIcon fontSize="large" sx={{ color: '#0866ff' }}/>
      </Grid>
      <Grid onClick={()=>handleBoxClick('/page2')}  container md={2} alignItems={'center'} justifyContent={'center'} className="common-nav-icons">
        <OndemandVideoIcon fontSize="large" sx={{ color: '#b0b3b8' }}/>
      </Grid>
      <Grid on container md={2} alignItems={'center'} justifyContent={'center'} className="common-nav-icons">
        <StorefrontIcon fontSize="large" sx={{ color: '#b0b3b8' }}/>
      </Grid>
      <Grid container md={2} alignItems={'center'} justifyContent={'center'} className="common-nav-icons">
        <GroupsIcon fontSize="large" sx={{ color: '#b0b3b8' }}/>
      </Grid>
      <Grid container md={2} alignItems={'center'} justifyContent={'center'} className="common-nav-icons">
        <VideogameAssetIcon fontSize="large" sx={{ color: '#b0b3b8' }}/>
      </Grid>
    </Grid>
  );
}

export default Navigation;
