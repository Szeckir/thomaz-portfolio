import { programmingLanguages_ } from "@/constants";
import { Fade } from "react-awesome-reveal";
 

function CardProject({ title, languages, date, description, link}) {
    return (
      <Fade duration={5000}>
        <div className="bg-neutral-900 rounded-md">
            <div className="p-6 text-start">
                <h2 className="text-xl bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent font-bold mb-2">{title}</h2>
                <p className="text-gray-400">{date}</p>
                <p className="text-sm text-gray-500 ">
                  <ul className="mt-4 justify-between flex items-center">
                    <div className="flex gap-3 ">
                      {
                        languages.map((element, index) => (
                          <li key={index} className="text-2xl p-2 rounded-md text-white" style={{ backgroundColor: element.color}}>
                            {element.class}
                          </li>
                        ))
                      }
                    </div>
                    <a className="text-2xl p-2 rounded-md text-white" target="_blank" style={{ backgroundColor: programmingLanguages_.github.color }} href={link}> 
                      {programmingLanguages_.github.class}
                    </a>
                  </ul>
                </p>
                
            </div>
        </div>
      </Fade>
    );
  }2
  
  export default CardProject;
  