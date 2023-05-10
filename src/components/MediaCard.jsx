import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Chips from './Chips';
import { CardActionArea } from '@mui/material';
// import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';





export default function MediaCard(props) {
  return (

    <>


<Card sx={{height:390, weight:100, margin:2, borderRadius:2, backgroundColor:"#fff"}}>
    <CardActionArea >
              <a href={props.url} target="_blank" rel="noopener noreferrer">
                <CardMedia
                  sx={{ height: 250 , margin:2, borderRadius:2, brightness:"0.4", display:"flex items-start"}}
                  image={props.img}
                  title="green iguana"
                />
              </a>
    </CardActionArea>

    <div className="flex justify-between items-end px-4">
    <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <div className="flex items-center text-lg font-bold text-gray-600">
                <img className='h-6 mr-2' src={props.icon} />
                {props.title}
              </div>
            </Typography>
            <Typography variant="body2">
            <div className="text-gray-500">
              {props.discription}
            </div>

            </Typography>
          </CardContent>

          <CardActions>
            <Button sx={{borderRadius:"999px", minWidth:""}} href={props.url} target='_blank' color='primary' variant="outlined" size="small">
            <i class="uil uil-eye text-xl mr-1"></i>
            DEMO
            </Button>
          </CardActions>
      </div>




</Card>





    </>



  );
}

// color="text.secondary" 
// contained 