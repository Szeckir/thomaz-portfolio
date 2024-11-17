import Timeline from '@mui/lab/Timeline';
import { experiences } from "@/constants";
import ExperienceItem from '../ui/experienceItem';
import { Fade } from 'react-awesome-reveal';

function Experiences() {
  return (
    <div className="mt-12">
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold">Experience</h2>
        <h3 className="text-xl mt-4">Click on any element to learn more about my role</h3>
      </div>
      
      <div className="mt-12">
        
        <Fade>
          <Timeline position="alternate">
            {
              Object.values(experiences).map((element, index) => (
                  <ExperienceItem professionalExperience={element} key={element}></ExperienceItem> 
              ))
            }
          </Timeline>
        </Fade>
      </div>
    </div>
  )
}

export default Experiences