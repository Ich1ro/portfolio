import { projectType } from "../interfaces";

export const projects = [
    {
        title: 'Weather Application',
        content: `Weather App is a web application that provides users with the ability to view weather forecasts for their region.`,
        link: 'https://ich1ro.github.io/react-weather-app/',
        image: 'WeatherApp.webp',
        stack: ['TypeScript', 'React', 'Redux', 'NextJS', 'Axios', 'Github', 'Babel', 'Jest'],
        github: 'https://github.com/Ich1ro/react-weather-app'
    } as projectType,
    {
        title: 'Full stack E-commerce',
        content: `This project is a full-stack e-commerce website built with React, Next.js, Sanity, and Stripe. The website allows users to browse and purchase products, and it also features a checkout system that allows users to pay for their purchases with credit cards.`,
        link: 'https://fullstack-ecommerce-project-z4cj.vercel.app/',
        image: 'ECommerce.webp',
        stack: ['JavaScript', 'React', 'NextJS', 'Github', 'Babel', 'Stripe', 'Vercel'],
        github: 'https://github.com/Ich1ro/fullstack-ecommerce-project'
    } as projectType,
    {
        title: 'Pinterest clone',
        content: `This project is a Pinterest clone built with React, Sanity, Google Auth, and Stripe. It allows users to create boards, pin images, and save pins from other users. The project is fully functional and can be used to create a Pinterest-like social media platform.`,
        link: 'https://pinterest-clone.netlify.app/',
        image: 'PinterestClone.webp',
        stack: ['JavaScript', 'React', 'TailwindCSS', 'Github', 'Netlify', 'GCP'],
        github: 'https://github.com/Ich1ro/pinterest-clone'
    } as projectType,
    {
        title: 'React form',
        content: `This project is a doctor appointment form built with TypeScript, React, Next.js, and React-hook-form. It allows users to book appointments with doctors, and it also features a search bar that allows users to find doctors by name, specialty, and location.`,
        link: 'https://react-form-ich1ro.vercel.app/',
        image: 'ReactForm.webp',
        stack: ['TypeScript', 'React', 'NextJS', 'Axios', 'Github', 'Vercel'],
        github: 'https://github.com/Ich1ro/react-form'
    } as projectType,
    {
        title: 'Salesforce Todo List',
        content: `This project is a to-do list app built with Salesforce, Apex, JavaScript, and Lightning Web Components. It allows users to create tasks, set deadlines, and track their progress.`,
        link: 'https://wise-unicorn-c1dtu5-dev-ed.my.site.com/',
        image: 'TodoList.webp',
        stack: ['JavaScript', 'Salesforce', 'Github'],
        github: 'https://github.com/Ich1ro/salesforce-todo-list'
    } as projectType,
    {
        title: 'Portfolio',
        content: `This project is a personal portfolio website built with TypeScript, React, Next.js, and SCSS. It showcases my work and experience.`,
        link: '',
        image: 'Portfolio.webp',
        stack: ['TypeScript', 'React', 'NextJS', 'Saas', 'Github', 'Vercel'],
        github: 'https://github.com/Ich1ro/portfolio'
    } as projectType,
]