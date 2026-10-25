export interface Experience {
    role: string
    company: string
    location: string
    period: string
    points: string[]
}

export interface Education {
    institution: string
    degree: string
    period: string
    grade: string
}

export const experienceList: Experience[] = [
    {
        role: 'Full Stack Developer',
        company: 'Tata Consultancy Services (TCS Digital)',
        location: 'Kolkata, India',
        period: 'Nov 2025 – Present',
        points: [
            'Own the frontend of a 24x7 monitoring system built with React and Redux, shipping real-time dashboards that give operations teams continuous visibility into system health.',
            'Designed and integrated the authentication and access-control layer securing inference endpoints for a production predictive-model service.',
            'Building a point-of-sale application end-to-end across frontend and backend as part of a small cross-functional team.',
        ],
    },
    {
        role: 'Full Stack Developer Intern',
        company: 'Xempla',
        location: 'Kolkata, India',
        period: 'Jun 2024 – Jul 2024',
        points: [
            'Optimized a transaction handling system using FastAPI, boosting processing efficiency by 20% and service delivery speed by 15%.',
            'Designed a versioning system for LLM prompts, ensuring consistency and reliability across services and improving scalability by 25%.',
        ],
    },
]

export const education: Education = {
    institution: 'Jadavpur University, Kolkata',
    degree: 'Bachelor of Engineering, Chemical Engineering',
    period: '2021 – 2025',
    grade: 'CGPA: 7.53',
}

export const achievements: string[] = [
    "2nd position, Business Case Study event at SRIJAN, Jadavpur University's annual tech fest.",
    'Placed in the top 50 of intern screening coding tests.',
]
