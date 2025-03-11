'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
	return (
		<section className='w-full min-h-[90vh] flex flex-col items-center justify-center px-4 md:px-8 py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden'>
			<div className='max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12'>
				<motion.div
					className='flex-1 space-y-6'
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.2 }}
				>
					<motion.h1
						className='text-4xl md:text-6xl font-bold text-blue-950 leading-tight'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						Lifestyle is the{' '}
						<span className='text-blue-500'>Cause</span>.<br />
						Lifestyle is also the{' '}
						<span className='text-blue-500'>Cure</span>.
					</motion.h1>

					<motion.p
						className='text-lg md:text-xl text-slate-700 max-w-2xl'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						A Better Way to THRIVE
					</motion.p>

					<motion.p
						className='text-base md:text-lg text-slate-600 max-w-2xl'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						Many health programs focus on quick fixes and fads, but
						real change happens when small, consistent steps build a
						solid foundation of well-being.
					</motion.p>

					<motion.p
						className='text-base md:text-lg text-slate-600 max-w-2xl'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						THRIVE is a 6-week program built on science-backed
						strategies that support physical, mental, and emotional
						well-being, so you can improve your daily routine, make
						more sustainable lifestyle changes, reduce stress, and
						connect more deeply with your health goals and loved
						ones.
					</motion.p>

					<motion.button
						className='mt-8 px-8 py-4 bg-blue-500 text-white rounded-full font-medium text-lg flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Register for next cohort{' '}
						<ArrowRight className='ml-1' size={20} />
					</motion.button>
				</motion.div>

				<motion.div
					className='flex-1 relative h-[400px] w-full lg:h-[500px] rounded-3xl overflow-hidden'
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.7, delay: 0.5 }}
				>
					<div className='absolute inset-0 bg-blue-200 bg-opacity-50 rounded-3xl flex items-center justify-center'>
						<p className='text-blue-800 text-lg'>
							Healthy, active lifestyle image
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
