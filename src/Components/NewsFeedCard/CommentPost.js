import React from "react";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import SendIcon from "@mui/icons-material/Send";

import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import "../NewsFeedCard/commentPost.css";
import { Avatar, Grid, Typography } from "@mui/material";
import logo from '../../Assets/2.jpg'

function CommentPost() {
  return (
    <Grid container className="comment-sec-main">
      <Grid container>
        <Grid container md={9} sx={{ alignItems: "center" }}>
          <ThumbUpAltIcon fontSize="small" sx={{ color: "#dcdee3",opacity:0.6 }} />
          <Typography
            fontSize={"12px"}
            sx={{ fontWeight: 700, marginLeft: "5px", color: "#dcdee3",opacity:0.6 }}
            component="span"
          >
            50K
          </Typography>
        </Grid>
        <Grid container md={3} sx={{ alignItems: "center" }}>
          <Typography
            fontSize={"12px"}
            sx={{
              fontWeight: 700,
              marginLeft: "5px",
              color: "#dcdee3",
              marginRight: "5px",
              opacity:0.6
            }}
            component="span"
          >
            50K
          </Typography>
          <ModeCommentIcon fontSize="small" sx={{ color: "#dcdee3",opacity:0.6 }} />

          <Typography
            fontSize={"12px"}
            sx={{
              fontWeight: 700,
              marginLeft: "5px",
              color: "#dcdee3",
              marginRight: "5px",
              opacity:0.6
            }}
            component="span"
          >
            50K
          </Typography>
          <SendIcon fontSize="small" sx={{ color: "#dcdee3",opacity:0.6 }} />
        </Grid>
        <hr style={{width:'100%',color:'#dcdee3',opacity:0.2}}></hr>
      </Grid>
      <Grid container>
        <ThumbUpAltOutlinedIcon fontSize="medium" sx={{ color: "#dcdee3",opacity:0.6 }} />
        <Typography fontSize={"15px"} sx={{fontWeight: 500,marginLeft: "5px",color: "#dcdee3",marginRight: "5px",opacity:0.6}}component="span">
            Like
        </Typography>
        <SendOutlinedIcon fontSize="medium" sx={{ color: "#dcdee3",marginLeft:'58px',opacity:0.6}} />
        <Typography fontSize={"15px"} sx={{fontWeight: 500,marginLeft: "5px",color: "#dcdee3",marginRight: "5px",opacity:0.6}}component="span">
            Comment
        </Typography>
        <ChatBubbleOutlineOutlinedIcon fontSize="medium" sx={{ color: "#dcdee3",marginLeft:'58px',opacity:0.6 }} />
        <Typography fontSize={"15px"} sx={{fontWeight: 500,marginLeft: "5px",color: "#dcdee3",marginRight: "5px",opacity:0.6}}component="span">
            Send
        </Typography>
        <InsertCommentOutlinedIcon fontSize="medium" sx={{ color: "#dcdee3",marginLeft:'58px' ,opacity:0.6}} />
        <Typography fontSize={"15px"} sx={{fontWeight: 500,marginLeft: "5px",color: "#dcdee3",marginRight: "5px",opacity:0.6}}component="span">
            Share
        </Typography>
      </Grid>
      <hr style={{width:'100%',color:'#dcdee3',opacity:0.2}}></hr>
      <Grid container>
          <Typography fontSize={"15px"} sx={{fontWeight: 700,color: "#dcdee3",opacity:0.6}}component="span">
            View More Comments
          </Typography>
          <Grid container sx={{marginTop:'15px'}}>
            <Avatar src={logo} sx={{height:30,width:30}}/>
            <Grid className="comment-card">
                <Typography fontSize={"13px"} sx={{color: "#dcdee3",opacity:1}} component="body1">
                View More Comments 
                Here we can see the comments of the person View More Comments 
                Here we can see the comments of the person Here we can see the comments of the person 
                Here we can see the comments of the person 
                </Typography>
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}

export default CommentPost;

{
  /* <Grid conatiner>
          <Grid conatiner sx={{marginTop:'5px',backgroundColor:'red'}} md={8}>
            <ThumbUpAltIcon sx={{color:'#dcdee3', backgroundColor:'blue'}}/>
            <span style={{color:'#dcdee3',marginBottom:'-10px'}}>60K</span>
          </Grid>
          <Grid conatiner md={4} sx={{marginTop:'5px',backgroundColor:'blue'}}>
            <ModeCommentIcon/>
            <SendIcon/>
          </Grid> 
        </Grid> */
}
