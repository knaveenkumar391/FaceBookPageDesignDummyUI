import React from 'react'
import CommentPost from './CommentPost'
import { Avatar, Grid } from '@mui/material'
import avatar from '../../Assets/2.jpg'
import '../NewsFeedCard/newsFeedCard.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SettingsIcon from '@mui/icons-material/Settings';
import middleSecImage from '../../Assets/MiddleSecImage.jpg'
import { useSelector } from 'react-redux'

function NewsFeedCard(props) {
  const {data}=props;
//   const {profileImage,user_name,time_stamp,disp,main_img,likes,comments,share}=data;
  return (
    <Grid container direction={'column'} className='card-main-section'>
       <Grid container className='card-header-section' >
            <Grid container md={1.2}>
                <Avatar src={avatar} sx={{height:40,width:40,border:'2px solid #0866ff'}}/> 
            </Grid>
            <Grid container md={8.8} sx={{color:'#dcdee3'}}>
                
                    <Grid container>
                         <p style={{margin:'0px',fontWeight:700,opacity:0.9}}> Name of the Person</p> 
                         <VerifiedIcon  sx={{fill:'#0866ff',fontSize:'15px',marginTop:'2px',marginLeft:'2px'}}/>
                    </Grid>
                
                <Grid container>
                    <span className='sub-content-header'>54</span>
                    <span className='sub-content-header'>minutes Ago</span>
                    <SettingsIcon   sx={{fill:'#dcdee3',fontSize:'16px', marginTop:'3px',opacity:0.9}}/>        
                </Grid>             
            </Grid>
            <Grid container md={2} sx={{color:'#dcdee3'}}>
                <ClearIcon fontSize='large' sx={{marginRight:'4px'}}/>
                <MoreHorizIcon fontSize='large'/>
            </Grid>
       </Grid>
       <Grid container className='card-discription-section' >
            <p className='discription-content'>This is Discription section with more and more data will appear here with lines are Broken ....</p>
       </Grid>
       <Grid container className='card-middle-section' >
             <img className='middle-section-image' src={middleSecImage}/>
       </Grid>
        <Grid container className='card-comment-section'>
            <CommentPost/>
        </Grid>
    </Grid>
  )
}

export default NewsFeedCard