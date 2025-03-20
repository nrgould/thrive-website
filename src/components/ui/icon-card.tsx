'use client';

import * as React from 'react';
import {
	BookOpen,
	Layers,
	Users,
	Activity,
	Brain,
	Heart,
} from 'lucide-react';
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
				'bg-blue-50 rounded-3xl p-8 text-center flex flex-col items-center w-full h-full min-h-[350px]',
				targetSectionId && 'cursor-pointer',
				className
			)}
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: animationDelay }}
			onClick={handleClick}
		>
			<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
				<Icon className='text-blue-500' size={28} />
			</div>
			<h3 className='text-2xl font-bold text-blue-500 mb-2'>{title}</h3>
			<h4 className='text-xl font-medium text-blue-900 mb-4'>
				{subtitle}
			</h4>
			<div className='flex-1 flex flex-col'>{children}</div>
		</motion.div>
	);
}
