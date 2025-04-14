'use client';

import * as motion from 'motion/react-client';
import { ToggleRight } from 'lucide-react';

export function BehaviorDesignIntroSection() {
	return (
		<section className='w-full py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden'>
			{/* Decorative Blobs */}
			<div className='absolute top-20 -left-20 w-72 h-72 rounded-full bg-indigo-100/40 blur-3xl -z-10'></div>
			<div className='absolute bottom-0 -right-20 w-80 h-80 rounded-full bg-blue-100/40 blur-3xl -z-10'></div>

			{/* Increased max-width */}
			<div className='max-w-6xl mx-auto'>
				{/* Main Content Wrapper - Adjusted text alignment and max-width for text */}
				<motion.div
					className='max-w-3xl mx-auto text-center md:text-left md:mx-0' // Center on mobile, left on md+, constrain width
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					{/* Tagline Wrapper - Allow block display for alignment */}
					<div className='mb-4 md:mb-5 flex justify-center md:justify-start'>
						<div className='inline-flex items-center justify-center bg-blue-100 px-5 py-2 rounded-full shadow-sm'>
							<ToggleRight
								className='text-blue-600 mr-2'
								size={18}
							/>
							<h3 className='text-md text-blue-600 font-medium uppercase tracking-wide'>
								Creating a Lifestyle of Consistency
							</h3>
						</div>
					</div>

					{/* Main Title - Adjusted margins */}
					<motion.h2
						className='text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-4 md:mb-6 leading-tight' // Added lg text size
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.05 }}
					>
						THRIVE{' '}
						<span className='text-blue-600'>Behavior Design</span>
					</motion.h2>

					{/* Paragraph - Adjusted max-width and margins */}
					<motion.p
						className='text-lg md:text-xl text-slate-700 max-w-none md:max-w-3xl leading-relaxed' // Allow full width on mobile within container, constrain on md+
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.1 }}
					>
						Behavior Design is the evidence-based approach of how to
						design for reliable and sustainable behavior change by
						providing a system - a comprehensive set of models,
						methods, and tools - for assessing and designing long
						lasting behaviors.
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
}
