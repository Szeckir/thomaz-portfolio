import { desc } from 'framer-motion/client'
import photo1 from '../assets/foto1.jpeg'
import photo2 from '../assets/foto2.jpeg'
import photo3 from '../assets/foto3.jpeg'
import photo4 from '../assets/foto4.jpeg'
import { color } from 'framer-motion'

import boogiesProject from '../assets/pBoogies.jpg'
import pBuscaCep from '../assets/pBuscaCep.jpeg'
import YouTubeIcon from '@mui/icons-material/YouTube';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

export const menuOptions = [
    "about", "projects", "contact"
]

export const photosHero = {
    photo1: photo1,
    photo2: photo2,
    photo3: photo3,
    photo4: photo4
}

export const experiences = {
    1: {
        position: "Content Creator",
        date: "Jul 2024 - Present",
        company: "Youtube",
        description: "Creator of programming and lifestyle content. Currently +5000 subscribers on the channel.",
        icon: <YouTubeIcon style={{color: "#FF0034"}}></YouTubeIcon>
    },
    2: {
        position: "Front-End Developer",
        date: "Apr 2024 - Jun 2024",
        company: "Orpen",
        description: "I moved to the Front-End, where I was able to develop a page completely from scratch and solve problems that included HTML, CSS and mainly JavaScript.",
        icon: <CodeIcon style={{color: '#028901'}}></CodeIcon>
    },
    3: {
        position: "Developer Internship",
        date: "Jul 2023 - May 2024",
        company: "Orpen",
        description: " I worked in the support and development area, using Zabbix to manage dashboards and monitor systems in real time. Docker to manage data and create isolated development environments. SQL for data analysis, while PM2 allowed me to manage Node.js applications. With daily use, I had a lot of contact with Linux, WSL and Git.",
        icon: <TerminalIcon></TerminalIcon>
    
    },
    4: {
        position: "Treasurer",
        date: "Feb 2021 - Dec 2021",
        company: "Colégio Marista Ipanema",
        description: "Treasurer for the management of the College's Student Union.",
        icon: <MonetizationOnIcon style={{color: "#E79610"}}></MonetizationOnIcon>
    }
}

export const programmingLanguages_ = {
    react: {
        class: <i class="devicon-react-original"></i>,
        color: '#5ED2F3'
    },
    tailwind: {
        class: <i class="devicon-tailwindcss-original"></i>,
        color: '#5ED2F3'
    },
    github: {
        class: <i class="devicon-github-original"></i>,
        color: '#595959'
    },
    java: {
        class: <i class="devicon-java-plain-wordmark"></i>,
        color: '#F1921C'
    },
    cpp: {
        class: <i class="devicon-cplusplus-plain"></i>,
        color: '#00427E'
    },
    typescript: <i class="devicon-typescript-plain"></i>,
}

export const projects = {
    project1: {
        title: "Website Barbearia Boogies",
        description: "Landing-page para minha barbearia dos Estados Unidos.",
        date: "October 2024",
        firstText: "Fiz um projeto do zero para minha barbearia aqui dos Estados Unidos, o projeto está em inglês, pois atualmente está sendo utilizada pela barbearia.",
        languages: [
            programmingLanguages_.react, programmingLanguages_.tailwind
        ],
        link: 'https://github.com/Szeckir/Boogies-barbershop',
        image: boogiesProject
    },
    project2: {
        title: "Busca por CEP",
        description: "Página de verificação de CEP com integração API,",
        date: "April 2024",
        firstText: "Realizei uma pequena página de verificação de CEP com integração API, onde, se o CEP existir, irá trazer todas as informações necessárias à respeito da região. Para realização da simples página, utilizei conhecimentos de JS para integrar com a API, CSS para estilizar a página e o HTML para fazer o layout da página.",
        languages: [
            programmingLanguages_.cpp, programmingLanguages_.java
        ],
        link: 'https://github.com/Szeckir/Boogies-barbershop',
        image: pBuscaCep
    },
    project3: {
        title: "Project 3",
        description: "This is a project description",
        date: "2021",
        firstText: "very big 3 - ",
        languages: [
            programmingLanguages_.react, programmingLanguages_.tailwind
        ],
        link: 'https://github.com/Szeckir/Boogies-barbershop'
    },
}

