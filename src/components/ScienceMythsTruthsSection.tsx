'use client';

import * as motion from 'motion/react-client';
// Remove AnimatePresence from motion/react import if no longer needed elsewhere, but keep it for now
// import { AnimatePresence } from 'motion/react';
import {
	Brain,
	Cog,
	Mountain,
	Sparkles,
	Target,
	Calendar,
	Flame,
	RotateCcw,
	Clock,
	Heart,
	Trophy,
	RefreshCw,
	// Remove ChevronDown, ChevronUp as buttons are removed
	// ChevronDown,
	// ChevronUp,
	// ToggleRight, // No longer used here
} from 'lucide-react';
// Add useEffect import
import { useState, useEffect } from 'react';

interface MythTruthPair {
	myth: string;
	truth: string;
	mythIcon: React.ReactNode;
	truthIcon: React.ReactNode;
}

// Renamed and Simplified Sub-component for a myth-truth card pair display
// Removed motion wrappers and animation logic from here
const MythTruthCardDisplay = ({ pair }: { pair: MythTruthPair }) => {
	return (
		<div
			// Use pair.myth as key if needed upstream, or index if stable
			className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 bg-white rounded-3xl shadow-lg overflow-hidden border border-blue-100 mx-auto w-full max-w-3xl'
			// Removed motion props: key, initial, animate, exit, transition, whileHover
		>
			<div className='p-6 md:p-8 bg-gray-50 border-b md:border-b-0 md:border-r border-blue-100'>
				<div className='flex items-center'>
					{/* Removed motion.div wrapper around icon */}
					<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4'>
						{pair.mythIcon}
					</div>
					{/* Removed inner motion.div */}
					<div>
						<p className='text-sm font-light uppercase tracking-wider text-slate-500 mb-1'>
							Myth
						</p>
						<h3 className='text-lg md:text-xl font-bold text-slate-800'>
							{pair.myth}
						</h3>
					</div>
				</div>
			</div>

			<div className='p-6 md:p-8'>
				<div className='flex items-center'>
					{/* Removed motion.div wrapper around icon */}
					<div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4'>
						{pair.truthIcon}
					</div>
					{/* Removed inner motion.div */}
					<div>
						<p className='text-sm font-light uppercase tracking-wider text-slate-500 mb-1'>
							Truth
						</p>
						<h3 className='text-lg md:text-xl font-bold text-slate-800'>
							{pair.truth}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

// Main component
export function ScienceMythsTruthsSection() {
	// Remove showAll state
	// const [showAll, setShowAll] = useState(false);
	// Add state for current carousel index
	const [currentIndex, setCurrentIndex] = useState(0);

	const mythTruthPairs: MythTruthPair[] = [
		{
			myth: 'The one with the most Willpower wins',
			truth: 'The one with the best Systems succeeds',
			mythIcon: <Brain className='text-blue-500' size={22} />,
			truthIcon: <Cog className='text-green-500' size={22} />,
		},
		{
			myth: 'Big changes lead to big results',
			truth: 'Tiny is transformative',
			mythIcon: <Mountain className='text-blue-500' size={22} />,
			truthIcon: <Sparkles className='text-green-500' size={22} />,
		},
		{
			myth: 'Master the Art of Setting Great Goals',
			truth: 'Master the Art of Showing Up',
			mythIcon: <Target className='text-blue-500' size={22} />,
			truthIcon: <Calendar className='text-green-500' size={22} />,
		},
		{
			myth: 'Intensity is King',
			truth: 'Consistency is Queen',
			mythIcon: <Flame className='text-blue-500' size={22} />,
			truthIcon: <RotateCcw className='text-green-500' size={22} />,
		},
		{
			myth: 'Just repeat this for 21 days (or 30, or 60, or 90...) to build habits',
			truth: 'Emotions build habits',
			mythIcon: <Clock className='text-blue-500' size={22} />,
			truthIcon: <Heart className='text-green-500' size={22} />,
		},
		{
			myth: 'The power of perfection',
			truth: 'The power of progress',
			mythIcon: <Trophy className='text-blue-500' size={22} />,
			truthIcon: <RefreshCw className='text-green-500' size={22} />,
		},
	];

	const totalItems = mythTruthPairs.length;

	// Add useEffect for automatic rotation
	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
		}, 3000); // Rotate every 3 seconds (adjust as needed)

		return () => clearInterval(intervalId); // Cleanup interval on unmount
	}, [totalItems]);

	// Remove division into initial/hidden pairs
	// const initialPairs = mythTruthPairs.slice(0, 3);
	// const hiddenPairs = mythTruthPairs.slice(3);

	// Estimate card height for positioning calculations
	// This might need adjustment based on actual rendering and responsiveness
	const cardHeightEstimate = 180; // px

	return (
		<section
			className='w-full py-12 px-4 md:px-8 relative'
			id='myths-truths'
		>
			{/* Decorative elements */}
			<div className='absolute top-40 right-0 w-64 h-64 rounded-full bg-blue-100/40 blur-3xl -z-10'></div>
			<div className='absolute bottom-20 left-0 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl -z-10'></div>

			{/* Use Grid for layout */}
			<div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
				{/* Left Column: Text Content */}
				<div className='md:pr-8 max-w-[75%]'>
					{' '}
					{/* Add padding to the right on medium+ screens */}
					<motion.h2
						// Change text alignment to left on medium+ screens
						className='text-3xl md:text-4xl font-bold text-center md:text-left text-blue-950 mb-4 md:mb-6'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						Myths & Truths of{' '}
						<span className='text-blue-600'>Behavior Change</span>
					</motion.h2>
					<motion.p
						// Change text alignment and max-width
						className='text-lg md:text-xl text-slate-700 text-center md:text-left max-w-xl mx-auto md:mx-0 mb-8 md:mb-0 leading-relaxed'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						Discover the most common misconceptions about behavior
						change and the evidence-based truths that lead to
						lasting results.
					</motion.p>
				</div>

				{/* Right Column: Carousel Container */}
				{/* Adjust height and remove top/bottom margin, adjust width if needed */}
				<div className='relative h-[450px] md:h-[550px] w-full flex items-center justify-center overflow-hidden'>
					{mythTruthPairs.map((pair, index) => {
						const distance = index - currentIndex;
						// Normalize distance to handle wrapping around the array
						const normalizedDistance =
							((distance +
								totalItems +
								Math.floor(totalItems / 2)) %
								totalItems) -
							Math.floor(totalItems / 2);

						let y = 0;
						let scale = 0.7;
						let opacity = 0;
						let zIndex = 0;

						if (normalizedDistance === -1) {
							// Top item
							y = -cardHeightEstimate * 0.65;
							scale = 0.85;
							opacity = 0.8; // Slightly faded
							zIndex = 1;
						} else if (normalizedDistance === 0) {
							// Middle item
							y = 0;
							scale = 1;
							opacity = 1;
							zIndex = 2; // On top
						} else if (normalizedDistance === 1) {
							// Bottom item
							y = cardHeightEstimate * 0.65;
							scale = 0.85;
							opacity = 0.8; // Slightly faded
							zIndex = 1;
						} else if (
							normalizedDistance === -2 ||
							normalizedDistance === 2
						) {
							// Items further away (barely visible or preparing to enter)
							y =
								normalizedDistance === -2
									? -cardHeightEstimate * 1.3
									: cardHeightEstimate * 1.3;
							scale = 0.7;
							opacity = 0.2; // More faded
							zIndex = 0;
						}
						// Items even further away will have default opacity 0 and zIndex 0

						return (
							<motion.div
								key={pair.myth} // Use a stable key like the myth text
								className='absolute w-full top-1/2 left-0 px-4' // Position absolutely, centered V, allow padding
								style={{ originY: '50%', originX: '50%' }} // Scale from center
								initial={false} // Avoid initial animation on mount
								animate={{
									// translate Y needs calc to offset the initial top-1/2
									translateY: `calc(-50% + ${y}px)`,
									scale: scale,
									opacity: opacity,
									zIndex: zIndex,
								}}
								transition={{
									type: 'spring',
									stiffness: 200,
									damping: 25,
									// duration: 0.6 // Adjust transition
								}}
							>
								{/* Render the simplified display card */}
								<MythTruthCardDisplay pair={pair} />
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
