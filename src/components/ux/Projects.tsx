import { Fade, Zoom } from "react-awesome-reveal"
import CardProject from "../ui/cardProject"
import { projects } from '../../constants'
import { ul } from "framer-motion/client"
import { useState } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { Slide } from "react-awesome-reveal";
import boogiesProject from '../../assets/pBoogies.jpg'
import { programmingLanguages_ } from "../../constants"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Projects() {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpen = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProject(null);
    };

  return (
    <div className="text-white mt-10 p-6">
        <div className="justify-center items-center text-center gap">
            <Fade>
                <h2 className="text-4xl font-bold">Projects</h2>
                <h3 className="text-xl mt-4">Click to learn more</h3>
            </Fade>
            <div className="mt-10">
                <ul className="flex items-center justify-center gap-4 flex-wrap">
                    {
                        Object.values(projects).map((element, index) => (
                            <li key={index} className="cursor-pointer max-w-96 w-96" onClick={() => handleOpen(element)}>
                                <CardProject
                                    title={element.title}
                                    date={element.date}
                                    description={element.description}
                                    languages={element.languages}
                                    link={element.link}
                                />    
                            </li>      
                        ))
                    }

                    {
                        selectedProject && (
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
                                                    {selectedProject.title}
                                                </Typography>
                                                <CloseIcon onClick={handleClose} className="hover:cursor-pointer hover:bg-gray-100 rounded-md"></CloseIcon>
                                            </div>

                                            <div>
                                                <Typography>
                                                    {selectedProject.date}
                                                </Typography>
                                            </div>
                                            
                                            <div className="mt-6">
                                                <Typography id="modal-modal-description" className="text-black">
                                                    {selectedProject.firstText}
                                                </Typography>
                                                <Typography id="modal-modal-description" className="text-gray-300">
                                                    {}
                                                </Typography>
                                            </div>

                                            <div className="p-6 items-center justify-center text-center flex">
                                                <img src={selectedProject.image} className="rounded-md max-w-96"/>
                                            </div>

                                            <div className="">
                                                <ul className="flex gap-2 mb-2">
                                                    {
                                                    selectedProject.languages.map((element, index) => (
                                                        <li key={index} className="text-2xl p-2 rounded-md text-white" style={{ backgroundColor: element.color}}>
                                                            {element.class}
                                                        </li>
                                                    ))
                                                    }
                                                </ul>
                                                <a style={{backgroundColor: programmingLanguages_.github.color}} className="text-white p-2 rounded-md items-center" href={selectedProject.link} target="_blank">
                                                    {programmingLanguages_.github.class} GitHub Repository <ArrowOutwardIcon />
                                                </a>
                                            </div>
                                        </div>
                                    </Box>
                                </Zoom>
                            </Modal>
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Projects