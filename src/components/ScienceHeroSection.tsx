import * as motion from 'motion/react-client';
import { Microscope } from 'lucide-react';
import { ScrollDownCTA } from './ScrollDownCTA';

export function ScienceHeroSection() {
	return (
		<section className='w-full min-h-[50vh] py-24 px-4 md:px-8 bg-gradient-to-b from-blue-500 to-blue-600 overflow-hidden relative text-white'>
			{/* Decorative elements */}
			<div className='absolute top-20 left-10 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl -z-10'></div>
			<div className='absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-300 opacity-10 blur-3xl -z-10'></div>

			<div className='max-w-4xl mx-auto text-center'>
				<div className='mb-8 inline-flex justify-center'>
					<motion.div
						className='bg-white/20 p-4 rounded-full'
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						<Microscope className='w-8 h-8 text-white' />
					</motion.div>
				</div>
				<motion.h1
					className='text-4xl md:text-5xl font-bold text-white mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					The Science Behind{' '}
					<span className='text-blue-100'>THRIVE</span>
				</motion.h1>

				<div className='max-w-2xl mx-auto'>
					{' '}
					{/* Narrower container for text */}
					<motion.p
						className='text-lg md:text-xl text-blue-50 mb-12 leading-relaxed'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
					>
						Discover the evidence-based research and scientific
						principles that form the foundation of our approach to
						health and wellness through the six pillars of Lifestyle
						Medicine.
					</motion.p>
					{/* Scroll down animation */}
					<ScrollDownCTA className='mt-8' targetId='myths-truths' />
				</div>

				{/* Feature icons */}
				{/* <motion.div
					className='flex justify-center gap-8 mt-12'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.4 }}
				>
					<div className='flex flex-col items-center'>
						<div className='bg-green-100 p-3 rounded-full mb-2'>
							<Lightbulb className='w-6 h-6 text-green-600' />
						</div>
						<span className='text-sm font-medium text-slate-700'>
							Evidence-Based
						</span>
					</div>
					<div className='flex flex-col items-center'>
						<div className='bg-indigo-100 p-3 rounded-full mb-2'>
							<BookOpen className='w-6 h-6 text-indigo-600' />
						</div>
						<span className='text-sm font-medium text-slate-700'>
							Research-Backed
						</span>
					</div>
				</motion.div> */}
			</div>
		</section>
	);
}
