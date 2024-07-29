import { Grid } from "@mui/material";
import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function LeftMenu() {
  const leftLogoAndData = [
    {
      lable: "Friends",
      icon: <PeopleAltIcon />,
    },
    {
      lable: "Memories",
      icon: <AccessTimeIcon />,
    },
    {
      lable: "Saved",
      icon: <PeopleAltIcon />,
    },
    {
      lable: "Group",
      icon: <AccountBalanceIcon />,
    },
    {
      lable: "Video",
      icon: <AddAPhotoIcon />,
    },
    {
      lable: "Group",
      icon: <AccountBalanceIcon />,
    },
    {
      lable: "Video",
      icon: <AddAPhotoIcon />,
    },
    {
      lable: "Market Place",
      icon: <AddAPhotoIcon />,
    },
    {
      lable: "Feed",
      icon: <PeopleAltIcon />,
    },
    {
      lable: "Events",
      icon: <PeopleAltIcon />,
    },
    {
      lable: "Feed",
      icon: <PeopleAltIcon />,
    },
    {
      lable: "Events",
      icon: <PeopleAltIcon />,
    },
    {
      lable: "Feed",
      icon: <PeopleAltIcon />,
    },
    {
      lable: "Events",
      icon: <PeopleAltIcon />,
    },
    {
      lable: "Ads Manager",
      icon: <PeopleAltIcon />,
    },
    {
      lable: "Foundaries",
      icon: <PeopleAltIcon />,
    },
    {
      lable: "See more",
      icon: <ArrowDropDownIcon />,
    },
    
  ];
  return (
    <Grid container className="leftmenu-spacing-canvas">
      {leftLogoAndData.map((item) => (
        <Grid container className="logo-discription-container">
          <Grid className="left-logos">{item.icon}</Grid>
          <Grid className="right-names">{item.lable}</Grid>
        </Grid>
      ))}
    </Grid>
  );
}

export default LeftMenu;
