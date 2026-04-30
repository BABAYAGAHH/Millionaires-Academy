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
    initial={{ opacity: 0, y: 28 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.2 }}
    whileInView={{ opacity: 1, y: 0 }}
    {...props}
  >
    {children}
  </motion.section>
)
