import * as motion from 'motion/react-client';
import { Microscope } from 'lucide-react';

export function ScienceHeroSection() {
	return (
		<section className='w-full py-24 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white overflow-hidden relative'>
			{/* Decorative circles */}
			<div className='absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-100 opacity-20 blur-3xl -z-10'></div>
			<div className='absolute bottom-10 right-10 w-80 h-80 rounded-full bg-indigo-100 opacity-20 blur-3xl -z-10'></div>

			<div className='max-w-4xl mx-auto text-center'>
				<div className='mb-8 inline-flex justify-center'>
					<motion.div
						className='bg-blue-100 p-4 rounded-full'
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
					>
						<Microscope className='w-8 h-8 text-blue-600' />
					</motion.div>
				</div>
				<motion.h1
					className='text-4xl md:text-5xl font-bold text-blue-950 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					The Science Behind{' '}
					<span className='text-blue-600'>THRIVE</span>
				</motion.h1>

				<div className='max-w-2xl mx-auto'>
					{' '}
					{/* Narrower container for text */}
					<motion.p
						className='text-lg md:text-xl text-slate-700 mb-8 leading-relaxed'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
					>
						Discover the evidence-based research and scientific
						principles that form the foundation of our approach to
						health and wellness through the six pillars of Lifestyle
						Medicine.
					</motion.p>
					<motion.p
						className='text-lg md:text-xl text-slate-700 leading-relaxed'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.3 }}
					>
						Each pillar is supported by decades of research
						demonstrating its crucial role in preventing, treating,
						and often reversing chronic disease.
					</motion.p>
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
