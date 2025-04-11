'use client';

import * as motion from 'motion/react-client';
import { ChevronDown } from 'lucide-react';

type ScrollDownCTAProps = {
	label?: string;
	className?: string;
	targetId?: string;
};

export function ScrollDownCTA({
	label = 'Explore more',
	className = '',
	targetId,
}: ScrollDownCTAProps) {
	const handleScroll = () => {
		if (targetId) {
			// Scroll to specific element if targetId is provided
			const element = document.getElementById(targetId);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		} else {
			// Default behavior: scroll down by viewport height
			window.scrollBy({
				top: window.innerHeight,
				behavior: 'smooth',
			});
		}
	};

	return (
		<motion.div
			className={`flex flex-col items-center justify-center ${className}`}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, delay: 0.3 }}
		>
			<span className='text-blue-50 mb-2'>{label}</span>
			<motion.div
				className='bg-white/20 p-3 rounded-full cursor-pointer hover:bg-white/30 transition-colors'
				animate={{
					y: [0, 10, 0],
				}}
				transition={{
					duration: 1.5,
					repeat: Infinity,
					repeatType: 'loop',
				}}
				onClick={handleScroll}
			>
				<ChevronDown className='w-6 h-6 text-white' />
			</motion.div>
		</motion.div>
	);
}
