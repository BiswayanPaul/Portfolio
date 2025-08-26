export interface Project {
    title: string
    description: string
    image: string
    github?: string
    live?: string
}

export const projectList: Project[] = [
    {
        title: 'Healp - Healthcare Booking App',
        description: 'A modern full-stack platform to find doctors and hospitals, with appointment booking and dark mode support.',
        image: '/healp.jpg',
        github: 'https://github.com/BiswayanPaul/Healp',
        live: 'https://healp.vercel.app/',
    },
    {
        title: 'Green Cart - Grocery Platform',
        description: 'A MERN-stack e-commerce application for seamless grocery shopping with cart management and smooth checkout experience.',
        image: '/greencart.jpg',
        github: 'https://github.com/BiswayanPaul/PurpleMeritAssessment',
        live: 'https://purple-merit-assessment-bay.vercel.app/',
    },
    {
        title: 'RealTime Collaborative Drawing App',
        description: 'Collaborate in real-time on a shared canvas.',
        image: '/drawapp.jpeg',
        github: 'https://github.com/BiswayanPaul/drawapp-Frontend',
        live: 'https://drawapp-frontend.vercel.app/',
    },
    {
        title: 'BlinkIt Backend Project',
        description: 'Node.js/Express backend for an e-commerce platform.',
        image: '/blinkit.png',
        github: 'https://github.com/BiswayanPaul/BlinkIt-Backend-Xempla',
    },
]
