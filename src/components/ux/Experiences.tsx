import Timeline from "@mui/lab/Timeline";
import { experiences } from "@/constants";
import ExperienceItem from "../ui/experienceItem";
import { Fade, Zoom } from "react-awesome-reveal";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

function Experiences() {
  const [open, setOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleOpen = (element) => {
    setSelectedExperience(element);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log("trying close");
  };

  return (
    <div className="mt-12">
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold">Experience</h2>
        <h3 className="text-xl mt-4">
          Click on any element to learn more about my role
        </h3>
      </div>

      <div className="mt-12">
        <Fade>
          <Timeline position="alternate">
            <ul>
              {Object.values(experiences).map((element, index) => (
                <li key={index} onClick={() => handleOpen(element)}>
                  <ExperienceItem
                    professionalExperience={element}
                  ></ExperienceItem>
                </li>
              ))}
              {selectedExperience && (
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                  className="text-center items-center justify-center flex"
                >
                  <Zoom>
                    <Box
                      borderColor={"white"}
                      padding={3}
                      bgcolor={"white"}
                      borderRadius={4}
                    >
                      <div className="max-w-4xl items-start text-start">
                        <div className="flex justify-between">
                          <Typography
                            className="text-black font-bold"
                            fontSize={24}
                            fontWeight={600}
                          >
                            {selectedExperience.position}
                          </Typography>
                          <CloseIcon
                            onClick={() => handleClose()}
                            className="hover:cursor-pointer hover:bg-gray-100 rounded-md"
                          ></CloseIcon>
                        </div>

                        <div>
                          <Typography>teste</Typography>
                        </div>
                      </div>
                    </Box>
                  </Zoom>
                </Modal>
              )}
            </ul>
          </Timeline>
        </Fade>
      </div>
    </div>
  );
}

export default Experiences;
