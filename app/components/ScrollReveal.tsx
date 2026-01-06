'use client';

import { motion, MotionProps, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps extends Omit<MotionProps, 'children'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  className?: string;
}

/**
 * ScrollReveal Component
 * Reusable animation wrapper that triggers fade-in and slide animations
 * when elements enter the viewport.
 *
 * Features:
 * - Smooth fade-in and directional slide animations
 * - Professional viewport-based triggering (fires once)
 * - Customizable delay, duration, and direction
 * - Fully typed with TypeScript
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  direction = 'up',
  distance = 30,
  className = '',
  ...motionProps
}) => {
  // Define initial position based on direction
  const getInitialPosition = (): Record<string, number> => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const variants = {
    hidden: getInitialPosition(),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeInOut' as const, // Professional easing curve
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      variants={variants}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

/**
 * Staggered Container Component
 * Automatically staggers children animations
 */
interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  className = '',
}) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Staggered Item Component
 * Child of StaggerContainer for individual item animations
 */
interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
}) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
