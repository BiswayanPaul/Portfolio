export interface Project {
    title: string
    description: string
    tech: string[]
    image: string
    github?: string
    live?: string
}

export const projectList: Project[] = [
    {
        title: 'PujaPass',
        description: 'Discover Durga Puja pandals in Kolkata, reserve timed-entry slots across multiple pandals in a single checkout, and enter via QR passes. Includes a club dashboard for pandal profiles, slot capacity configuration and gate check-in scanning. Built and deployed solo, end-to-end.',
        tech: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
        image: '/pujapass.jpg',
        github: 'https://github.com/BiswayanPaul/puja_pass',
        live: 'https://puja-pass-orpin.vercel.app/',
    },
    {
        title: 'Real-Time Drawing App',
        description: 'Collaborative drawing on a shared canvas supporting 10+ concurrent users, with update latency reduced by 30ms through an optimized WebSocket event pipeline.',
        tech: ['Next.js', 'PostgreSQL', 'WebSocket', 'Auth.js v5'],
        image: '/drawapp.jpeg',
        github: 'https://github.com/BiswayanPaul/drawapp-Frontend',
        live: 'https://drawapp-frontend.vercel.app/',
    },
    {
        title: 'Healp - Healthcare Appointment Platform',
        description: 'Search doctors and hospitals, view real-time availability, and book appointments, with secure authentication via Clerk.',
        tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Clerk', 'Tailwind CSS'],
        image: '/healp.jpg',
        github: 'https://github.com/BiswayanPaul/healp',
        live: 'https://healp.vercel.app/',
    },
    {
        title: 'Green Cart - Grocery Platform',
        description: 'A MERN-stack e-commerce application for seamless grocery shopping with cart management and smooth checkout experience.',
        tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
        image: '/greencart.jpg',
        github: 'https://github.com/BiswayanPaul/PurpleMeritAssessment',
        live: 'https://purple-merit-assessment-bay.vercel.app/',
    },
]
