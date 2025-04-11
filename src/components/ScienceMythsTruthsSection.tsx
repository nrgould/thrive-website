'use client';

import * as motion from 'motion/react-client';
import { AnimatePresence } from 'motion/react';
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
	ChevronDown,
	ChevronUp,
	ToggleRight,
} from 'lucide-react';
import { useState } from 'react';

interface MythTruthPair {
	myth: string;
	truth: string;
	mythIcon: React.ReactNode;
	truthIcon: React.ReactNode;
}

// Sub-component for a myth-truth card pair
const MythTruthCard = ({
	pair,
	index,
	isInitiallyVisible,
}: {
	pair: MythTruthPair;
	index: number;
	isInitiallyVisible: boolean;
}) => {
	return (
		<motion.div
			key={index}
			className='grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 bg-white rounded-3xl shadow-sm overflow-hidden border border-blue-100'
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{
				opacity: 0,
				y: -20,
				transition: { duration: 0.3 },
			}}
			transition={{
				duration: 0.5,
				delay: isInitiallyVisible ? index * 0.1 : index * 0.1 + 0.2,
			}}
			whileHover={{
				scale: 1.015,
				transition: { duration: 0.2 },
			}}
		>
			<div className='p-6 md:p-8 bg-gray-50 border-b md:border-b-0 md:border-r border-blue-100'>
				<div className='flex'>
					<motion.div
						className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4'
						initial={{ rotate: -30, scale: 0.8 }}
						animate={{ rotate: 0, scale: 1 }}
						whileHover={{
							rotate: -15,
							transition: { duration: 0.3 },
						}}
						transition={{
							type: 'spring',
							stiffness: 260,
							damping: 20,
							delay: isInitiallyVisible
								? index * 0.1
								: index * 0.1 + 0.2,
						}}
					>
						<motion.div
							whileHover={{
								rotate: 30,
								transition: { duration: 0.3 },
							}}
						>
							{pair.mythIcon}
						</motion.div>
					</motion.div>
					<div>
						<p className='text-sm font-light uppercase tracking-wider text-slate-500 mb-1'>
							Myth
						</p>
						<h3 className='text-xl font-bold text-slate-800'>
							{pair.myth}
						</h3>
					</div>
				</div>
			</div>

			<div className='p-6 md:p-8'>
				<div className='flex'>
					<motion.div
						className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4'
						initial={{ rotate: 30, scale: 0.8 }}
						animate={{ rotate: 0, scale: 1 }}
						whileHover={{
							rotate: 15,
							transition: { duration: 0.3 },
						}}
						transition={{
							type: 'spring',
							stiffness: 260,
							damping: 20,
							delay: isInitiallyVisible
								? index * 0.1
								: index * 0.1 + 0.2,
						}}
					>
						<motion.div
							whileHover={{
								rotate: -30,
								transition: { duration: 0.3 },
							}}
						>
							{pair.truthIcon}
						</motion.div>
					</motion.div>
					<div>
						<p className='text-sm font-light uppercase tracking-wider text-slate-500 mb-1'>
							Truth
						</p>
						<h3 className='text-xl font-bold text-slate-800'>
							{pair.truth}
						</h3>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

// Main component
export function ScienceMythsTruthsSection() {
	const [showAll, setShowAll] = useState(false);

	const mythTruthPairs: MythTruthPair[] = [
		{
			myth: 'The one with the most Willpower wins',
			truth: 'The one with the best Systems wins',
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
			truth: 'The power of recovering quickly',
			mythIcon: <Trophy className='text-blue-500' size={22} />,
			truthIcon: <RefreshCw className='text-green-500' size={22} />,
		},
	];

	// Divide the myth-truth pairs into initial and hidden sets
	const initialPairs = mythTruthPairs.slice(0, 3);
	const hiddenPairs = mythTruthPairs.slice(3);

	return (
		<section
			className='w-full py-4 px-4 md:px-8 relative'
			id='myths-truths'
		>
			{/* Decorative elements */}
			<div className='absolute top-40 right-0 w-64 h-64 rounded-full bg-blue-100/40 blur-3xl -z-10'></div>
			<div className='absolute bottom-20 left-0 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl -z-10'></div>

			<div className='max-w-6xl mx-auto space-y-4'>
				<motion.div
					className='text-center mt-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<div className='inline-flex items-center justify-center mb-2 bg-blue-100 px-5 py-2 rounded-full shadow-sm'>
						<ToggleRight className='text-blue-600 mr-2' size={18} />
						<h3 className='text-md text-blue-600 font-medium uppercase'>
							Creating a Lifestyle of Consistency
						</h3>
					</div>
				</motion.div>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					Myths & Truths of Behavior Design
				</motion.h2>

				<motion.p
					className='text-xl text-slate-700 text-center max-w-3xl mx-auto mb-10 leading-relaxed'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					Discover the most common misconceptions about behavior
					change and the evidence-based truths that lead to lasting
					results.
				</motion.p>

				<div className='grid grid-cols-1 gap-6'>
					{/* Initial pairs always visible */}
					{initialPairs.map((pair, index) => (
						<MythTruthCard
							key={`initial-${index}`}
							pair={pair}
							index={index}
							isInitiallyVisible={true}
						/>
					))}

					{/* Hidden pairs with AnimatePresence for exit animations */}
					<AnimatePresence>
						{showAll && (
							<motion.div
								className='grid grid-cols-1 gap-6'
								key='extra-content'
								initial={{ opacity: 0, height: 0 }}
								animate={{
									opacity: 1,
									height: 'auto',
									transition: {
										height: { duration: 0.4 },
										opacity: { duration: 0.6, delay: 0.1 },
									},
								}}
								exit={{
									opacity: 0,
									height: 0,
									transition: {
										height: { duration: 0.3 },
										opacity: { duration: 0.2 },
									},
								}}
							>
								{hiddenPairs.map((pair, index) => (
									<MythTruthCard
										key={`hidden-${index}`}
										pair={pair}
										index={index}
										isInitiallyVisible={false}
									/>
								))}
							</motion.div>
						)}
					</AnimatePresence>

					{/* Toggle Button - changes based on state */}
					<AnimatePresence mode='wait'>
						{!showAll ? (
							<motion.div
								key='see-more-button'
								className='flex justify-center mt-8 mb-8'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<button
									className='flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm cursor-pointer'
									onClick={() => setShowAll(true)}
								>
									See More
									<motion.div
										animate={{ y: [0, 3, 0] }}
										transition={{
											duration: 1.5,
											repeat: Infinity,
											repeatType: 'loop',
										}}
									>
										<ChevronDown size={20} />
									</motion.div>
								</button>
							</motion.div>
						) : (
							<motion.div
								key='hide-button'
								className='flex justify-center mt-8 mb-8'
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3 }}
							>
								<button
									className='flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-sm cursor-pointer'
									onClick={() => setShowAll(false)}
								>
									Hide
									<motion.div
										animate={{ y: [0, -3, 0] }}
										transition={{
											duration: 1.5,
											repeat: Infinity,
											repeatType: 'loop',
										}}
									>
										<ChevronUp size={20} />
									</motion.div>
								</button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
