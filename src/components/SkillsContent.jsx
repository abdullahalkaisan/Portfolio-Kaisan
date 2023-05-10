import React from 'react'
import Chips from './Chips';


export default function SkillsContent() {
  return (
    <>
        <h1 className='text-gray-600 text-xl mt-10  mb-3'>
            <i class="uil uil-arrow mr-1"></i>
            Front-end 
        </h1>
        <div className="flex flex-wrap">


              <Chips tooltip="Everyone knows haha 🤣" variant="outlined" name="HTML" img="https://img.icons8.com/color/48/000000/html-5--v1.png" />
              <Chips tooltip="I'm Master on that 😪" variant="outlined" name="CSS" img="https://img.icons8.com/color/48/000000/css3.png" />
              <Chips tooltip="4y+ experience" name="Scss" img="https://img.icons8.com/color/48/000000/sass.png" />
              <Chips tooltip="Expart" name="Bootstrap" img="https://img.icons8.com/color/48/000000/bootstrap.png" />
              <Chips tooltip="I love it ❤🤐" name="Tailwind" img="https://img.icons8.com/color/48/000000/tailwindcss.png" />
              <Chips tooltip="Expart" name="Javascript" img="https://img.icons8.com/color/48/000000/javascript--v1.png" />
              <Chips tooltip="Expart" name="Typescript" img="https://img.icons8.com/color/48/000000/typescript.png" />
              <Chips tooltip="I know don't worry" name="Jquery" img="https://img.icons8.com/ios-filled/50/000000/jquery.png" />
              <Chips tooltip="My Main Tool" name="React.js" img="https://img.icons8.com/color/48/000000/react-native.png" />
              <Chips tooltip="My right hand" name="Vite.js" img="https://preview.redd.it/ddhpio05n9l61.png?width=410&format=png&auto=webp&s=9da01f746dbf4fac515155edf15bf9b7793ec0df" />
              <Chips tooltip="Deeply into it" name="MUI" img="https://mui.com/static/logo.png" />
              <Chips tooltip="upcoming" opacity="20" name="Angular" img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" />
              <Chips tooltip="upcoming" opacity="20" name="Vue.js" img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" />

            <div className=" opacity-1 hidden">
              <Chips name="" img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png" />
            </div>


        </div>



        <h1 className='text-gray-600 text-xl mt-10  mb-3'>
            <i class="uil uil-database mr-1"></i>
            Database
        </h1>
        <div className="flex flex-wrap">


            <Chips 
                name="MongoDB" 
                img="https://img.icons8.com/color/48/000000/mongodb.png"
                tooltip="upcoming" 
                opacity="20"
                variant="outlined"
            />

            <Chips 
                name="Firebase" 
                img="https://img.icons8.com/color/48/000000/firebase.png"
                tooltip="upcoming" 
                variant="outlined" 
                opacity="20"
            />

        </div>



        <h1 className='text-gray-600 text-xl mt-10  mb-3'>
            <i class="uil uil-brackets-curly mr-1"></i>
            Back-end
            
        </h1>
        <div className="flex flex-wrap">


            <Chips 
                name="Node.js" 
                img="https://img.icons8.com/fluency/48/000000/node-js.png"
                tooltip="upcoming" 
                variant="outlined" 
                opacity="20"

            />

            <Chips 
                name="Express.js" 
                img="https://img.icons8.com/color/48/000000/javascript--v1.png"
                tooltip="upcoming" 
                variant="outlined" 
                opacity="20"

            />

            <Chips 
                name="Python" 
                img="https://img.icons8.com/color/48/000000/python--v1.png"
                tooltip="upcoming" 
                variant="outlined" 
                opacity="20"

            />

            <Chips 
                name="Django" 
                img="https://www.svgrepo.com/show/353657/django-icon.svg"
                tooltip="upcoming" 
                variant="outlined" 
                opacity="20"

            />

        </div>


        <h1 className='text-gray-600 text-xl mt-10  mb-3'>
        <i class="uil uil-mobile-android mr-1"></i>
            Apk
        </h1>
        <div className="flex flex-wrap">


            <Chips 
                name="React Native" 
                img="https://img.icons8.com/color/48/000000/react-native.png"
                tooltip="upcoming" 
                variant="outlined" 
                opacity="20"

            />

        </div>




        <h1 className='text-gray-600 text-xl mt-10 mb-3'>
        <i class="uil uil-palette mr-1"></i>
          UX UI design
        </h1>
        <div className="flex flex-wrap">
              <Chips name="Figma" img="https://img.icons8.com/color/48/000000/figma--v1.png" />
              <Chips name="Photoshop" img="https://img.icons8.com/color/480/000000/adobe-photoshop--v1.png" />
              <Chips name="Adobe XD" img="https://img.icons8.com/color/48/000000/adobe-xd--v1.png" />
              <Chips name="Premiere Pro" img="https://img.icons8.com/color/48/000000/adobe-premiere-pro--v1.png" />
              <Chips name="After effects" img="https://img.icons8.com/color/48/000000/adobe-after-effects--v1.png" />
        </div>




        <h1 className='text-gray-600 text-xl mt-10  mb-3'>
        <i class="uil uil-rocket mr-1"></i>
            Other
        </h1>
        <div className="flex flex-wrap">

  
                <Chips opacity="20" tooltip="upcoming"  name="WebRTC" img="https://assets.stickpng.com/images/58482a75cef1014c0b5e4a15.png" />
                <Chips opacity="20" tooltip="upcoming"  name="Socket.io" img="https://cdn.freebiesupply.com/logos/thumbs/2x/socket-io-logo.png" />
                <Chips opacity="20" tooltip="upcoming"  name="AWS" img="https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png" />
                <Chips opacity="20" tooltip="upcoming"  name="Google cloud" img="https://cloud.google.com/_static/cloud/images/social-icon-google-cloud-1200-630.png" />




            <Chips 
                name="Exel" 
                img="https://play-lh.googleusercontent.com/37EzETO6gZyKmCg2kBIFX1e9gkubxZrVa5fHJ6yOaa7VvEShHjKv2RdtwnZt9Sk258s"
                tooltip="upcoming" 
                variant="outlined"
                opacity="20"

            />
            <Chips 
                name="Digital marketting" 
                img="https://img.icons8.com/?size=512&id=UJsUjL1uUZkp&format=png"
                tooltip="upcoming" 
                variant="outlined" 
                opacity="20"
            />


                <Chips tooltip="Advance" name="Linux, Terminal" img="https://cdn2.iconfinder.com/data/icons/user-interface-204/76/icon-61-512.png" />
                <Chips tooltip="Expart" name="Git, Github" img="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
                <Chips opacity="20" tooltip="upcoming"  name="Wordpress" img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png" />
                <Chips 
                    name="Google Analytics" 
                    tooltip="upcoming" 
                    img="https://img.icons8.com/?size=512&id=fcKpGwAbxxfP&format=png" 
                    opacity="20"
                    />

                <Chips 
                    name="SEO" 
                    tooltip="upcoming" 
                    img="https://img.icons8.com/?size=512&id=is7BiAMIXcpE&format=png" 
                    opacity="20"
                    />



        </div>

    </>
  )
}
