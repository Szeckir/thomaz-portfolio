import HyperText from "../ui/hyper-text";
import { photosHero } from '../../constants'
import { Fade } from "react-awesome-reveal"
import { motion, useAnimate } from "framer-motion"

export default function Hero() {
    const changePhoto = () => {

        console.log("change photo")
    }
    
  return (
    <div className="text-white">
        <div className="flex items-center gap-12 w-full h-full p-8 justify-center">
            <div className="text-start mr-24">
                <span className="text-green-400 text-xl">Hello, my name is</span>
                <HyperText
                    text="Thomaz Szeckir"
                    className="text-4xl font-bold text-white"
                    animateOnLoad={true}
                    duration={3500}
                />
                <Fade>
                    <p>Hello my name is Thomaz Gomes Szeckir and I am 20y.</p>
                    <p>I am a software developer and I am passionate about technology.</p>
                    <p>I passionate by new technologies and innovations.</p>
                </Fade>
            </div>            
            {
                <img src={photosHero.photo2} alt="hero" className="rounded-lg w-1/3 cursor-pointer"/> 
            }
        </div>
    </div>
  )
}
