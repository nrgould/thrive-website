import * as React from 'react';
import * as motion from 'motion/react-client';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
	title: string;
	description?: string;
	className?: string;
	titleClassName?: string;
	descriptionClassName?: string;
	centered?: boolean;
}

export function SectionTitle({
	title,
	description,
	className,
	titleClassName,
	descriptionClassName,
	centered = true,
}: SectionTitleProps) {
	return (
		<div className={cn(centered && 'text-center', className)}>
			<motion.h2
				className={cn(
					'text-3xl md:text-4xl font-bold mb-6 text-blue-950',
					centered && 'text-center',
					titleClassName
				)}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
			>
				{title}
			</motion.h2>

			{description && (
				<motion.p
					className={cn(
						'text-xl text-slate-700 max-w-2xl leading-relaxed',
						centered && 'text-center mx-auto',
						'mb-12',
						descriptionClassName
					)}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true }}
				>
					{description}
				</motion.p>
			)}
		</div>
	);
}
