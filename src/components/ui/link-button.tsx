import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LinkButtonProps extends React.ComponentProps<typeof Link> {
	children: React.ReactNode;
	className?: string;
}

export function LinkButton({ children, className, ...props }: LinkButtonProps) {
	return (
		<Link
			className={cn(
				'inline-flex items-center gap-2 text-blue-500 hover:text-blue-700 transition-colors cursor-pointer font-medium',
				className
			)}
			{...props}
		>
			{children}
			<ArrowRight className='w-4 h-4' />
		</Link>
	);
}
