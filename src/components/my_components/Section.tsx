import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
  className?: string
}

const Section = ({ id, eyebrow, title, children, className }: SectionProps) => {
  return (
    <section id={id} className={cn('scroll-mt-16 py-20 md:py-28', className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  )
}

export default Section
