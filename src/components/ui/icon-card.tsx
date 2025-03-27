'use client';

import * as React from 'react';
import { BookOpen, Layers, Users, Activity, Brain, Heart } from 'lucide-react';
import * as motion from 'motion/react-client';
import { cn } from '@/lib/utils';

interface IconCardProps {
	title: string;
	subtitle: string;
	children: React.ReactNode;
	className?: string;
	animationDelay?: number;
	targetSectionId?: string;
}

export function IconCard({
	title,
	subtitle,
	children,
	className,
	animationDelay = 0,
	targetSectionId,
}: IconCardProps) {
	const handleClick = React.useCallback(() => {
		if (targetSectionId) {
			const element = document.getElementById(targetSectionId);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	}, [targetSectionId]);

	// Determine which icon to use based on the title
	const getIcon = () => {
		switch (title) {
			case 'Education':
				return BookOpen;
			case 'Integration':
				return Layers;
			case 'Connection':
				return Users;
			case 'Movement':
				return Activity;
			case 'Mindfulness':
				return Brain;
			case 'Wellness':
				return Heart;
			default:
				return BookOpen; // Default icon
		}
	};

	const Icon = getIcon();

	return (
		<motion.div
			className={cn(
				'bg-blue-50 rounded-3xl p-8 text-center flex flex-col items-center w-full h-full min-h-[250px]',
				targetSectionId && 'cursor-pointer',
				className
			)}
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: animationDelay }}
			whileHover={{
				scale: 1.03,
				transition: { duration: 0.2 },
			}}
			onClick={handleClick}
		>
			<div
				className={cn(
					'w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 transition-transform',
					className?.includes('bg-blue-600') &&
						'bg-white bg-opacity-20'
				)}
			>
				<motion.div
					whileHover={{ y: -3 }}
					transition={{ type: 'spring', stiffness: 300 }}
				>
					<Icon
						className={cn(
							'text-blue-500',
							className?.includes('bg-blue-600') && 'text-white'
						)}
						size={36}
					/>
				</motion.div>
			</div>
			<h3
				className={cn(
					'text-3xl font-bold text-blue-500 mb-3',
					className?.includes('bg-blue-600') && 'text-white'
				)}
			>
				{title}
			</h3>
			<h4
				className={cn(
					'text-xl font-medium text-blue-900',
					className?.includes('bg-blue-600') && 'text-white'
				)}
			>
				{subtitle}
			</h4>
			<div className='flex-1 flex flex-col'>{children}</div>
		</motion.div>
	);
}
