import React from "react";
import "../RightMenu/rightMenu.css";
import { Avatar, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import a1 from "../../Assets/1.jpg";
import a2 from "../../Assets/2.jpg";
import a3 from "../../Assets/3.jpg";
import a4 from "../../Assets/4.jpg";
import a5 from "../../Assets/5.jpg";
import a7 from "../../Assets/7.jpg";

function RightMenu() {
  const avatarAndNames = [
    {
      avatar: a1,
      name: "Naveen Kumar",
    },
    {
      avatar: a2,
      name: "Akash Kulkarni",
    },
    {
      avatar: a3,
      name: "Sheetal Desai",
    },
    {
      avatar: a4,
      name: "Rashmika Mandanna",
    },
    {
      avatar: a5,
      name: "X yyd",
    },
    {
      avatar: a7,
      name: "Name Address",
    },
    {
      avatar: a4,
      name: "Rashmika Mandanna",
    },
    {
      avatar: a5,
      name: "X yyd",
    },
    {
      avatar: a5,
      name: "X yyd",
    },
    {
      avatar: a7,
      name: "Name Address",
    },
    {
      avatar: a4,
      name: "Rashmika Mandanna",
    },
    {
      avatar: a5,
      name: "X yyd",
    },
    {
      avatar: a7,
      name: "Name Address",
    },
    {
      avatar: a7,
      name: "AA ZZ",
    },
  ];
  return (
    <Grid container className="rightMenu-main-div">
      <Grid container className="right-contact-header">
        <Grid
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            marginRight: "135px",
            marginTop: "5px",
            color: "#dcdee3",
          }}
        >
          Conatcts
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <SearchIcon sx={{ color: "#dcdee3" }} />
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <MoreHorizIcon sx={{ color: "#dcdee3" }} />
        </Grid>
      </Grid>
      {avatarAndNames.map((item) => (
        <Grid container className="logo-contents-container">
          <Grid className="right-logos">
            <Avatar alt={item.name} src={item.avatar} />
          </Grid>
          <Grid className="right1-names">{item.name}</Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default RightMenu;
