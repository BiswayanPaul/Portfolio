import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

export interface SocialLink {
    label: string
    href: string
    icon: IconType
}

export const profile = {
    name: 'Biswayan Paul',
    role: 'Full Stack Developer',
    company: 'TCS Digital',
    location: 'Kolkata, India',
    email: 'codebiswayan@gmail.com',
    resume: 'https://drive.google.com/file/d/12Vir-un5Mm6odZ96zTZHZ3eOrMzX3A6t/view?usp=sharing',
}

export const socialLinks: SocialLink[] = [
    { label: 'GitHub', href: 'https://github.com/BiswayanPaul', icon: FaGithub },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/biswayan-paul-8852411ba/', icon: FaLinkedin },
    { label: 'X (Twitter)', href: 'https://x.com/paul_biswayan', icon: FaXTwitter },
]
