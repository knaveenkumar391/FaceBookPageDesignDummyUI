import React from 'react'
import '../MiddleData/middleData.css'
import { Grid } from '@mui/material'
import NewsFeedCard from '../NewsFeedCard/NewsFeedCard'
import { useSelector } from 'react-redux'

function MiddleData() {
  const data =useSelector((state)=>state.dataFeederSlice.dataFeederInfo)
  return (
    <Grid container className='middle-data-main' direction={'row'}>
      <Grid container className='main-card' md={8.5} my={2}>
        {/* {data.map((item)=>(
          <NewsFeedCard data={item}/>
        ))
        } */}
        <NewsFeedCard/>
      </Grid>  
    </Grid>
  )
}

export default MiddleData