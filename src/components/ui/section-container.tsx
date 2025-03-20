import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
	children: React.ReactNode;
	className?: string;
	id?: string;
	maxWidth?:
		| 'sm'
		| 'md'
		| 'lg'
		| 'xl'
		| '2xl'
		| '3xl'
		| '4xl'
		| '5xl'
		| '6xl'
		| '7xl'
		| 'full'
		| 'none';
	paddingY?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
	paddingX?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
	background?: 'white' | 'light' | 'blue' | 'dark' | 'none';
}

export function SectionContainer({
	children,
	className,
	id,
	maxWidth = '6xl',
	paddingY = 'lg',
	paddingX = 'md',
	background = 'white',
}: SectionContainerProps) {
	const getMaxWidthClass = () => {
		if (maxWidth === 'none') return '';
		return `max-w-${maxWidth}`;
	};

	const getPaddingYClass = () => {
		switch (paddingY) {
			case 'none':
				return 'py-0';
			case 'sm':
				return 'py-8';
			case 'md':
				return 'py-12';
			case 'lg':
				return 'py-16';
			case 'xl':
				return 'py-24';
			default:
				return 'py-16';
		}
	};

	const getPaddingXClass = () => {
		switch (paddingX) {
			case 'none':
				return 'px-0';
			case 'sm':
				return 'px-2 md:px-4';
			case 'md':
				return 'px-4 md:px-8';
			case 'lg':
				return 'px-6 md:px-12';
			case 'xl':
				return 'px-8 md:px-16';
			default:
				return 'px-4 md:px-8';
		}
	};

	const getBackgroundClass = () => {
		switch (background) {
			case 'white':
				return 'bg-white';
			case 'light':
				return 'bg-blue-50';
			case 'blue':
				return 'bg-blue-100';
			case 'dark':
				return 'bg-blue-900';
			case 'none':
				return '';
			default:
				return 'bg-white';
		}
	};

	return (
		<section
			id={id}
			className={cn(
				'w-full',
				getPaddingYClass(),
				getPaddingXClass(),
				getBackgroundClass(),
				className
			)}
		>
			<div className={cn('mx-auto', getMaxWidthClass())}>{children}</div>
		</section>
	);
}
