import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => (
  <div className={cn('mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8', className)}>
    {children}
  </div>
)
