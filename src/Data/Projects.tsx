// data/projects.ts
import DrawAPP from '../../public/drawapp.jpeg'
import Blinkit from '../../public/blinkit.png'
import PizzaSales from '../../public/pizzasales.png'
import Healp from '../../public/healp.jpg' // Make sure you have this image in /public

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
        image: Healp,
        github: 'https://github.com/BiswayanPaul/Healp',
        live: 'https://healp.vercel.app/',
    },
    {
        title: 'RealTime Collaborative Drawing App',
        description: 'Collaborate in real-time on a shared canvas.',
        image: DrawAPP,
        github: 'https://github.com/BiswayanPaul/drawapp-Frontend',
        live: 'https://drawapp-frontend.vercel.app/',
    },
    {
        title: 'BlinkIt Backend Project',
        description: 'Node.js/Express backend for an e-commerce platform.',
        image: Blinkit,
        github: 'https://github.com/BiswayanPaul/BlinkIt-Backend-Xempla',
    },
    {
        title: 'Pizza Sales Report',
        description: 'Analyze pizza sales data with PowerBI.',
        image: PizzaSales,
        github: 'https://github.com/BiswayanPaul/Pizza-Sales-Analysis-Report',
    },
]
