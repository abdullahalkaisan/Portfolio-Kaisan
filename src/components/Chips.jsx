import * as React from 'react';
import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import ClickAwayListener from '@mui/material/ClickAwayListener';

export default function Chips(props) {

  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };



  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (

      <div className='text-white m-1'>

          <ClickAwayListener  onClickAway={handleTooltipClose}>
            <div onClick={handleTooltipOpen}>
              <Tooltip 
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                TransitionComponent={Zoom}
                arrow
                placement="top" 
                title={props.tooltip}
              >
                <Chip 
                  variant="outlined" 
                  sx={{
                    borderColor:"#0000001a", 
                    borderRadius:"777px", 
                    fontSize:"15px", 
                    padding:"5px", 
                    minHeight:"", 
                    height:"40px", 
                    opacity:`${props.opacity}%`
                    }} 
                    icon={<img className='h-6' src={props.img}></img>} 
                    label={props.name} 
                    onClick={handleClick} />
              </Tooltip>
            </div>
          </ClickAwayListener>


      </div>
  );
}