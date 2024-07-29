import React, { useState } from "react";
import "../DataFeederForMidSection/dataFeeder.css";
import { Grid, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { setPersonFeederInfo } from "./DataFeederSlice";

const DataFeeder = () => {
  const dispatch = useDispatch();
  
  const [mainData, setMainData] = useState([
    {
      name: "Profile Picture Path",
      value: "",
      id:'profileImage'
    },
    {
      name: "User Name",
      value: "",
      id:'user_name'
    },
    {
      name: "Active Time",
      value: "",
      id:'time_stamp'
    },
    {
      name: "Discription",
      value: "",
      id:'disp'
    },
    {
      name: "Main Image Path",
      value: "",
      id:'main_img'
    },
    {
      name: "likes",
      value: "",
      id:'likes'
    },
    {
      name: "Comments",
      value: "",
      id:'comments'
    },
    {
      name: "Shares",
      value: "",
      id:'share'
    },

  ]);
  const commentData = ["Profile Picture Path", "Headding", "Comments"];

  const func1 = (field, e) => {
    const tempData = [...mainData];
    tempData.map((item) => {
      if (item.name === field.name) {
        item.value = e.target.value;
      }
    });
    setMainData(tempData);
  };

  const handleSubmit = () =>{
    const tempdata ={}
    mainData.map((item)=>(
      tempdata[item.id]=item.value
    ))
    
    dispatch(setPersonFeederInfo(tempdata))
  }


  return (
    <Grid container className="input-box-main-grid">
      <Grid
        container
        direction={"column"}
        className="data-input-box"
        md={5.9}
        sx={{ height: "500px" }}
      >
        {mainData.map((item) => (
          <TextField
            id="outlined-multiline-static"
            label={item.name}
            value={item.value}
            onChange={(e) => func1(item,e)}
            sx={{ marginBottom: "8px", marginRight: "3px" }}
          />
        ))}
      </Grid>
      
      <Grid
        container
        direction={"column"}
        className="data-input-box"
        md={5.9}
        sx={{ height: "500px" }}
      >
        {commentData.map((item) => (
          <TextField
            id="standard-basic"
            label={item}
            variant="outlined"
            sx={{ marginBottom: "5px" }}
          />
        ))}
      </Grid>
      <button onClick={()=>handleSubmit()}>Submit</button>
    </Grid>
  );
};

export default DataFeeder;
