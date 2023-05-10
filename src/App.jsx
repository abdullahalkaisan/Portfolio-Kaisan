import './App.css'
// import About from './components/About'
import BasicTabs from './components/BasicTabs'
import MediaCard from './components/MediaCard'
import Collapse from '@mui/material/Collapse';
import About from './components/About'
// import Stack from '@mui/material/Stack';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material/Button';
import UserAvatar from './components/UserAvatar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

function App() {

  // const randomVidoes = ["https://assets.mixkit.co/videos/preview/mixkit-top-aerial-shot-of-seashore-with-rocks-1090-large.mp4"]



  return (
    <>

        {/* <div className="flex h-[150px] bg-white">
          <video className='h-full w-full object-cover' autoPlay loop muted src={randomVidoes[0]}></video>
        </div> */}

        {/* <div className="p-10">
          <BasicTabs></BasicTabs>
        </div> */}

    <div className="flex h-screen overflow-hidden">
      <div className="flex flex-col lg:w-[500px] w-full overflow-x-hidden overflow-y-auto">
        
        {/* <div className="flex h-[120px] w-full bg-white">
          <video className='h-full w-full object-cover' autoPlay loop muted src={randomVidoes[0]}></video>
        </div> */}

        <div className="">

        <div className="p-8 ">
          <UserAvatar></UserAvatar>
        </div>

          <div className="pb-60">
            <BasicTabs></BasicTabs>
          </div>

        </div>


      </div>
      <div className="lg:flex flex-wrap justify-center hidden overflow-y-auto bg-zinc-200 w-full p-3">
        {/* <span className='bg-white px-4 p-2 rounded-lg text-sky-600'>
          45 Projects Available
        </span> */}





      {/* <Collapse in={open}>

        <Stack sx={{ width: '100%',padding:"25px" }} spacing={2}>
          <Alert 

          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <i class="uil uil-times"></i>
            </IconButton>
          }
          
          variant="filled" severity="warning">5 Projects Available</Alert>
        </Stack>

        </Collapse> */}


        <div className="h-max w-full flex flex-wrap justify-center">
        <div className="w-[420px]">
            <MediaCard 
            url="./projects/dashboard/public/index.html" 
            title="Admin dashboard" 
            discription="#Tailwind" 
            img="https://www.opendrive.com/s/MjdfMTY5ODIxNDRfQzdCSmM?preview=1&folder_id=MjdfMTMxNDg4OF9PSGZYTw" icon="https://img.icons8.com/fluency/48/null/admin-settings-male.png" 
            />
          </div>

          <div className="w-[420px]">
            <MediaCard 
            url="./projects/veterinary-landing-pages/index.html" 
            title="Veterinary" 
            discription="#Bootsrap" 
            img="https://www.opendrive.com/s/MjdfMTY3NzM5MTNfVEZwdVY?preview=1&folder_id=MjdfMTI0MzE5M19SeGN1bw" icon="https://img.icons8.com/fluency/48/000000/veterinarian.png" 
            />
          </div>


          <div className="w-[420px]">
            <MediaCard 
            url="./projects/branding-website/index.html" 
            title="Branding products" 
            discription="#Tailwind" 
            img="https://www.opendrive.com/s/MjdfMTY5ODIxMTZfVVJwam8?preview=1&folder_id=MjdfMTMxNDg4N19TakxXQQ" icon="https://img.icons8.com/fluency/48/null/software-box.png" 
            />
          </div>

          <div className="w-[420px]">
            <MediaCard 
            url="./projects/landing_page/index.html" 
            title="Landing page" 
            discription="#Bootsrap" 
            img="https://www.opendrive.com/s/MjdfMTcwMTgzNDVfUmNGbkc?preview=1&folder_id=MjdfMTMxNTU3Ml8zUDN1RQ" icon="https://img.icons8.com/?size=512&id=VJz2Ob51dvZJ&format=png" 
            />
          </div>


        </div>


      </div>

    </div>



    </>
  )
}

export default App
