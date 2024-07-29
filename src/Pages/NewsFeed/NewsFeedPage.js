import React from "react";
// import Header from "../../Components/Header/Header";
import LeftMenu from "../../Components/LeftMenu/LeftMenu";
import "../../Components/LeftMenu/leftMenu.css";
import MiddleData from "../../Components/MiddleData/MiddleData";
import RightMenu from "../../Components/RightMenu/RightMenu";
import { Grid } from "@mui/material";

function NewsFeedPage() {
  return (
    <div>
      <Grid container sx={{backgroundColor:'#18191a'}}>
        <Grid md={2.7} >
          <LeftMenu />
        </Grid>
        <Grid  md={6.8} sx={{}}>
          <MiddleData/>
        </Grid>
        <Grid md={2.5} >
          <RightMenu/>
        </Grid>
      </Grid>
    </div>
  );
}

export default NewsFeedPage;
