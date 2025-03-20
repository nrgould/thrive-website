import * as React from 'react';
import * as motion from 'motion/react-client';
import { cn } from '@/lib/utils';

interface MotionContainerProps {
	children: React.ReactNode;
	className?: string;
	animationType?: 'fade' | 'slide-up' | 'fade-slide-up';
	animationDelay?: number;
	animationDuration?: number;
}

export function MotionContainer({
	children,
	className,
	animationType = 'fade-slide-up',
	animationDelay = 0,
	animationDuration = 0.5,
}: MotionContainerProps) {
	const getInitialAnimation = () => {
		switch (animationType) {
			case 'fade':
				return { opacity: 0 };
			case 'slide-up':
				return { y: 30 };
			case 'fade-slide-up':
			default:
				return { opacity: 0, y: 20 };
		}
	};

	const getAnimationTarget = () => {
		switch (animationType) {
			case 'fade':
				return { opacity: 1 };
			case 'slide-up':
				return { y: 0 };
			case 'fade-slide-up':
			default:
				return { opacity: 1, y: 0 };
		}
	};

	return (
		<motion.div
			className={className}
			initial={getInitialAnimation()}
			animate={getAnimationTarget()}
			transition={{ duration: animationDuration, delay: animationDelay }}
		>
			{children}
		</motion.div>
	);
}
