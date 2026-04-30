import type { HTMLMotionProps } from 'framer-motion'
import { motion } from 'framer-motion'
import { cn } from '../../utils/cn'

interface AnimatedSectionProps extends HTMLMotionProps<'section'> {
  className?: string
}

export const AnimatedSection = ({
  children,
  className,
  ...props
}: AnimatedSectionProps) => (
  <motion.section
    className={cn(className)}
    animate={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.45, ease: 'easeOut' }}
    {...props}
  >
    {children}
  </motion.section>
)
