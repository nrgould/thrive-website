import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import * as motion from 'motion/react-client';
import { cn } from '@/lib/utils';

interface ArrowDividerProps {
	className?: string;
	direction?: 'horizontal' | 'vertical';
	animationDelay?: number;
	size?: number;
}

export function ArrowDivider({
	className,
	direction = 'horizontal',
	animationDelay = 0.3,
	size = 28,
}: ArrowDividerProps) {
	return (
		<motion.div
			className={cn(
				direction === 'horizontal'
					? 'hidden md:flex justify-center items-center'
					: 'flex justify-center',
				className
			)}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5, delay: animationDelay }}
		>
			<div className='w-16 h-16 flex items-center justify-center'>
				<ArrowRight
					className={cn(
						'text-blue-400',
						direction === 'vertical' && 'transform rotate-90'
					)}
					width={size}
					height={size}
				/>
			</div>
		</motion.div>
	);
}
