import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import SimpleAccordion from './SimpleAccordion';
import Chips from './Chips';
import Stack from '@mui/material/Stack';
import MediaCard from './MediaCard';



export default function About() {


  const handleClick = () => {
    console.info('You clicked the Chip.');
  };



  return (
    <>

<div className="flex ">
          <div className="">

              <p className='text-gray-500 '>

              {/* <div className="flex w-full text-2xl justify-center my-5">
                  About me!
                </div> */}

                {/* <h1 className='text-gray-600 text-xl mt-10  mb-3'>
                About me!
                </h1>

                My name is Kaisan and I've been working on UX UI design and Front-end development for several years and have designed many projects such as Business & Corporate, E-commerce, Blogs, Portfuio and many more. Watch the demo of all my projects :)
                
                I am a senior UX/UI designer with more than 6 years of experience.
                <br />
                <br />
                I'll provide you with a clean-looking user interface to attract your customers, convince them to stay with your website, enrich your products or services, and grow your business fast.
                <br />
                <br />
                Contact me to get the best design for your website. Thank you
                
                <br />
                <br /> */}


                {/* <div className="flex w-full text-2xl justify-center my-5">
                  My hobbies!
                </div> */}

                <h1 className='text-gray-600 text-xl mt-10  mb-3'>
                  My hobbies! 
                </h1>

                <div className="flex flex-wrap">
                  <Chips name="Codding" img="https://img.icons8.com/fluency/48/000000/console.png"></Chips>
                  <Chips name="Astronomy" img="https://img.icons8.com/fluency/48/000000/beach.png"></Chips>
                  <Chips name="Drawing" img="https://img.icons8.com/fluency/48/000000/pencil-tip.png"></Chips>
                  <Chips name="Books" img="https://img.icons8.com/?size=512&id=RtVsNpVhmJeJ&format=png"></Chips>
                  <Chips name="Travelling" img="https://img.icons8.com/fluency/48/000000/telescope.png"></Chips>
                  <Chips name="Rubik's cube" img="https://img.icons8.com/fluency/48/000000/rubiks-cube.png"></Chips>
                  <Chips name="Badminton" img="https://img.icons8.com/fluency/48/000000/shuttercock.png"></Chips>
                  <Chips name="Martial art" img="https://img.icons8.com/external-icongeek26-flat-icongeek26/64/000000/external-martial-art-martial-arts-icongeek26-flat-icongeek26.png"></Chips>
                  <Chips name="Body building" img="https://img.icons8.com/external-gradient-icons-maxicons/85/000000/external-body-fitness-gradient-gradient-icons-maxicons-2.png"></Chips>
                </div>




                {/* <div className="flex w-full text-2xl justify-center my-5">
                  Why me?
                </div> */}

                <h1 className='text-gray-600 text-xl mt-10  mb-3'>
                  Services
                </h1>

                <div className="flex flex-wrap">
                  <Button color='info' sx={{ justifyContent:"start"}} fullWidth  variant="text">
                      <i class="uil uil-lightbulb-alt text-xl m-2"></i>Clean Interface.
                  </Button>

                  <Button color='info' sx={{ justifyContent:"start"}} fullWidth  variant="text">
                      <i class="uil uil-palette text-xl m-2"></i>Premium color shade.
                  </Button>

                  <Button color='info' sx={{ justifyContent:"start"}} fullWidth  variant="text">
                      <i class="uil uil-spinner-alt text-xl m-2 "></i>Fast-loading.
                  </Button>

                  <Button color='info' sx={{ justifyContent:"start"}} fullWidth  variant="text">
                  <i class="uil uil-tachometer-fast text-xl m-2 "></i>light-weight and compresed.

                  </Button>

                  <Button color='info' sx={{ justifyContent:"start"}} fullWidth  variant="text">
                    <i class="uil uil-arrow-resize-diagonal text-xl m-2 "></i>Accurate scal sizing.
                  
                  </Button>

                  <Button color='info' sx={{ justifyContent:"start"}} fullWidth  variant="text">
                    <i class="uil uil-mobile-android text-xl m-2 "></i>Responsive all devices.

                  
                  </Button>

                  <Button color='info' sx={{ justifyContent:"start"}} fullWidth  variant="text">
                    <i class="uil uil-search-alt text-xl m-2 "></i>SEO optimised.
                
                  </Button>

                  <Button color='info' sx={{ justifyContent:"start"}} fullWidth  variant="text">
                    <i class="uil uil-bolt text-xl m-2 "></i>Fast delevery.
                  </Button>

                </div>



                
              </p>
          </div>
      </div>

    </>
  )
}


// ​▎ 