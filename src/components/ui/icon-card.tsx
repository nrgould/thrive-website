import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import * as motion from 'motion/react-client';
import { cn } from '@/lib/utils';

interface IconCardProps {
	icon: LucideIcon;
	title: string;
	subtitle: string;
	children: React.ReactNode;
	className?: string;
	animationDelay?: number;
}

export function IconCard({
	icon: Icon,
	title,
	subtitle,
	children,
	className,
	animationDelay = 0,
}: IconCardProps) {
	return (
		<motion.div
			className={cn(
				'bg-blue-50 rounded-3xl p-8 text-center flex flex-col items-center w-full h-full',
				className
			)}
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: animationDelay }}
			viewport={{ once: true }}
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
