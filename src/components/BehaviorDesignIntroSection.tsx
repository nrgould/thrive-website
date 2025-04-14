'use client';

import * as motion from 'motion/react-client';
import { ToggleRight } from 'lucide-react';

export function BehaviorDesignIntroSection() {
	return (
		<section className='w-full py-16 px-4 md:px-8 bg-gradient-to-b from-blue-50/50 to-white'>
			{' '}
			{/* Added a subtle background */}
			<div className='max-w-4xl mx-auto'>
				{' '}
				{/* Adjusted max-width */}
				<motion.div
					className='text-center' // Removed mt-16, handled by section padding
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					<div className='inline-flex items-center justify-center mb-4 bg-blue-100 px-5 py-2 rounded-full shadow-sm'>
						{' '}
						{/* Adjusted mb */}
						<ToggleRight className='text-blue-600 mr-2' size={18} />
						<h3 className='text-md text-blue-600 font-medium uppercase tracking-wide'>
							{' '}
							{/* Adjusted tracking */}
							Creating a Lifestyle of Consistency
						</h3>
					</div>
					{/* Added H2 title */}
					<motion.h2
						className='text-3xl md:text-4xl font-bold text-blue-950 mt-2 mb-4' // Added styles similar to ScienceMythsTruthsSection
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.05 }} // Slightly delayed
					>
						THRIVE <span className='text-blue-600'>Behavior Design</span>
					</motion.h2>
					<motion.p
						className='text-lg md:text-xl text-slate-700 max-w-3xl mx-auto my-4 leading-relaxed' // Adjusted text size and max-width
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.1 }}
					>
						Behavior Design is the evidence-based approach of how to
						design for reliable and sustainable behavior change by
						providing a system - a comprehensive set of models,
						methods, and tools - for assessing and designing long
						lasting behaviors. {/* Minor text tweak */}
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
}
