import { Slide } from "react-awesome-reveal"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import { Fade, Zoom } from "react-awesome-reveal"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { log } from "console";

function experienceItem({ professionalExperience }) {
    const [open, setOpen] = useState(false);
  
      const handleOpen = () => {
          setOpen(true);
      };
  
      const handleClose = () => {
        console.log('trying close');
        setOpen(false);
      };

    return (
        <TimelineItem onClick={() => handleOpen()} className="hover:cursor-pointer">
            <TimelineOppositeContent className="text-gray-400 font-bold"
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
            >
                {professionalExperience.position}
            </TimelineOppositeContent>

            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>

                    {professionalExperience.icon}

                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" className="text-white" fontWeight={600}>
                    {professionalExperience.position}
                </Typography>
                <Typography className="text-gray-300">
                    {professionalExperience.description}
                </Typography>
            </TimelineContent>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className="text-center items-center justify-center flex"
            >
                <Zoom>
                    <Box borderColor={"white"} padding={3} bgcolor={"white"} borderRadius={4}>
                        <div className="max-w-4xl items-start text-start">
                            <div className="flex justify-between">
                                <Typography className="text-black font-bold" fontSize={24} fontWeight={600}>
                                    {professionalExperience.position}
                                </Typography>
                                <CloseIcon onClick={handleClose} className="hover:cursor-pointer hover:bg-gray-100 rounded-md"></CloseIcon>
                            </div>

                            <div>
                                <Typography>
                                    teste
                                </Typography>
                            </div>
                        </div>
                    </Box>
                </Zoom>
            </Modal>
        </TimelineItem>

    )
}

export default experienceItem