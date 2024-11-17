import { desc } from 'framer-motion/client'
import photo1 from '../assets/foto1.jpeg'
import photo2 from '../assets/foto2.jpeg'
import photo3 from '../assets/foto3.jpeg'
import photo4 from '../assets/foto4.jpeg'
import { color } from 'framer-motion'

import boogiesProject from '../assets/pBoogies.jpg'
import pBuscaCep from '../assets/pBuscaCep.jpeg'

export const menuOptions = [
    "about", "projects", "contact"
]

export const photosHero = {
    photo1: photo1,
    photo2: photo2,
    photo3: photo3,
    photo4: photo4
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