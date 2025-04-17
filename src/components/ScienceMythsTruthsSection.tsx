'use client';

import * as motion from 'motion/react-client';
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
	ChevronUp,
	ChevronDown,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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
					<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4'>
						{pair.mythIcon}
					</div>
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
					<div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4'>
						{pair.truthIcon}
					</div>
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
	const [currentIndex, setCurrentIndex] = useState(0);
	// State to track if rotation is currently paused due to user interaction
	const [isInteractionPaused, setIsInteractionPaused] = useState(false);
	// Ref to hold the auto-rotation interval ID
	const intervalRef = useRef<NodeJS.Timeout | null>(null);
	// Ref to hold the inactivity timeout ID (for resuming auto-rotation)
	const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

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
	const autoRotationDelay = 3000; // ms
	const interactionPauseDuration = 7000; // ms before resuming auto-rotation

	// Function to go to the next slide
	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
	};

	// Function to go to the previous slide
	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + totalItems) % totalItems
		);
	};

	// Function to handle user interaction (button clicks)
	const handleInteraction = (action: 'next' | 'prev') => {
		// 1. Perform the slide change
		if (action === 'next') {
			nextSlide();
		} else {
			prevSlide();
		}

		// 2. Pause auto-rotation
		setIsInteractionPaused(true);

		// 3. Clear any existing inactivity timer
		if (inactivityTimerRef.current) {
			clearTimeout(inactivityTimerRef.current);
		}

		// 4. Set a new timer to resume auto-rotation
		inactivityTimerRef.current = setTimeout(() => {
			setIsInteractionPaused(false);
		}, interactionPauseDuration);
	};

	// Automatic rotation effect
	useEffect(() => {
		// Function to start the interval
		const startAutoRotate = () => {
			// Clear existing interval before starting a new one
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
			intervalRef.current = setInterval(nextSlide, autoRotationDelay);
		};

		// Function to stop the interval
		const stopAutoRotate = () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
				intervalRef.current = null;
			}
		};

		if (!isInteractionPaused) {
			startAutoRotate(); // Start if not paused
		} else {
			stopAutoRotate(); // Stop if paused
		}

		// Cleanup function for component unmount
		return () => {
			stopAutoRotate(); // Clear interval
			// Clear inactivity timer as well
			if (inactivityTimerRef.current) {
				clearTimeout(inactivityTimerRef.current);
			}
		};
		// Rerun effect when pause state changes or totalItems changes
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInteractionPaused, totalItems]);

	// Removed handleDragEnd function

	const cardHeightEstimate = 180; // px

	return (
		<section
			className='w-full my-12 px-4 md:px-8 relative pb-24'
			id='myths-truths'
		>
			{/* Decorative elements */}
			<div className='absolute top-40 right-0 w-64 h-64 rounded-full bg-blue-100/40 blur-3xl -z-10'></div>
			<div className='absolute bottom-20 left-0 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl -z-10'></div>

			{/* Use Grid for layout - change to 3 columns for 1/3 + 2/3 split */}
			<div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center'>
				{/* Left Column: Text Content - Span 1 column */}
				<div className='md:pr-8 md:col-span-1'>
					{' '}
					{/* Add padding to the right on medium+ screens */}
					<motion.h2
						// Change text alignment to left on medium+ screens
						className='text-3xl md:text-4xl font-bold text-center md:text-left text-blue-950 mb-4 md:mb-6 leading-tight'
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

				{/* Right Column: Carousel Container + Controls - Span 2 columns */}
				<div className='relative w-full md:col-span-2'>
					{' '}
					{/* Make this relative for absolute button positioning */}
					{/* Up Button */}
					<motion.button
						className='absolute top-[-10px] left-1/2 -translate-x-1/2 z-10 p-2 bg-white/70 backdrop-blur-sm rounded-full shadow-md hover:bg-blue-100 transition-colors duration-200 cursor-pointer'
						// Use the interaction handler
						onClick={() => handleInteraction('prev')}
						aria-label='Previous Myth/Truth'
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<ChevronUp className='text-blue-600' size={20} />
					</motion.button>
					{/* Carousel Display Area (No longer draggable) */}
					<div
						className='relative h-[450px] md:h-[550px] w-full flex items-center justify-center overflow-hidden'
						// Removed drag props: drag, dragConstraints, onDragEnd
						// Removed cursor classes: cursor-grab active:cursor-grabbing
					>
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
					{/* Down Button */}
					<motion.button
						className='absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-10 p-2 bg-white/70 backdrop-blur-sm rounded-full shadow-md hover:bg-blue-100 transition-colors duration-200 cursor-pointer'
						// Use the interaction handler
						onClick={() => handleInteraction('next')}
						aria-label='Next Myth/Truth'
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						<ChevronDown className='text-blue-600' size={20} />
					</motion.button>
				</div>
			</div>
		</section>
	);
}
