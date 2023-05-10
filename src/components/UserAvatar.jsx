import React from 'react'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { CardActionArea } from '@mui/material';



const CustomButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#333",
  '&:hover': {
    backgroundColor: "#444",
  },
}));



export default function UserAvatar(props) {
  
  let playState = "play";
  function playVoice(){
    const playMyVoice = document.querySelector('#playMyVoice')
    playMyVoice.play();
    playState = "pause";

  }



  return (
    <>
        <div className="flex flex-col lg:items-start items-center">
        


                <div className="ml-2 cursor-pointer">
                  <CardActionArea sx={{borderRadius:"10px"}}>
                    <Avatar
                      alt="Abdullah Al Kaisan"
                      src="https://pbs.twimg.com/profile_images/1544305803888566272/7uAiIOYR_400x400.jpg"
                      sx={{ width: 150, height:150, borderRadius:"10px",pointerEvent:"none" }}
                    />
                  </CardActionArea>

                </div>

                <div className=''>
                  <div className='mx-1 my-4 lg:text-start text-center'>

                  <div data-cursor="-opaque">
                    <h1 className='text-2xl dark:text-white'>
                      Abdullah Al Kaisan
                    <CustomButton size="small"   sx={{margin:"0 15px", borderRadius:"999px", padding:"5px 14px", minWidth:"", backgroundColor:"#333" }}  variant="contained">Hire</CustomButton>

                    </h1>

                  </div>


                  
                    <h6  className='text-gray-500 text-lg'>
                        #Front-end | UX UI
                    </h6>
                  </div>

                  <audio id='playMyVoice' src="https://od.lk/s/MjdfMTcwMTg2NDZf/portfuio_4.mp3">
                  </audio>

                  <div className='ml-0 my-3 hidden'>
                    {/* <IconButton aria-label="delete">
                      <i class="uil uil-at fs-4 fw-bold mx-2 text-secondary text-secondary-theme"></i>
                    </IconButton> */}
                    <IconButton onClick={playVoice} aria-label="play">
                      <i class={`uil uil-${playState} fs-4 fw-bold mx-2 text-secondary text-secondary-theme`}></i>
                    </IconButton>
                    <CustomButton size="small"   sx={{margin:"0 10px", borderRadius:"999px", padding:"7px 14px", minWidth:"", backgroundColor:"#333" }}  variant="contained">Hire</CustomButton>
                  </div>


                  <div className='text-gray-600 mt-10  mb-3'>
                    I am a senior 
                    <span className="font-bold p-1 py-0 rounded-md cursor-pointer text-white bg-sky-500 hover:bg-sky-600 transition select-none mx-2">
                      UX/UI 
                    </span>
                    
                    designer with more than 6 years of experience.
                    <br />
                    <br />
                    I'll provide you with a 

                    clean-looking 

                    user interface to 
                    <span className="font-bold p-1 py-0 rounded-md cursor-pointer bg-yellow-100 hover:bg-yellow-100 transition select-none mx-2">
                    attract
                    </span>
                    your customers, convince them to stay with your website, enrich your products or services, and 
                    <span className="font-bold p-1 py-0 rounded-md cursor-pointer bg-gray-50 hover:bg-green-100 transition select-none mx-2">
                    grow your business fast.
                    <i class="uil uil-analysis pl-1"></i>
                    </span>
                    
                    {/* your business fast. */}
                    

                    <br />
                    <br />
                    
                  
                    Contact me to get the best design for your website.
                    Thank you
                        {/* <img className='h-6 mx-2' src="https://img.icons8.com/?size=512&id=C4ndMMswtT2A&format=png" alt="" srcset="" /> */}

                  </div>

                </div>
          </div>

    </>
  )
}
