import * as motion from 'motion/react-client';

export function ScienceHeroSection() {
	return (
		<section className='w-full py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white'>
			<div className='max-w-4xl mx-auto text-center'>
				<motion.h1
					className='text-4xl md:text-5xl font-bold text-blue-950 mb-6'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					The Science Behind{' '}
					<span className='text-blue-500'>Lifestyle Medicine</span>
				</motion.h1>
				<motion.p
					className='text-lg md:text-xl text-slate-700 mb-6 leading-relaxed'
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
					demonstrating its crucial role in preventing, treating, and
					often reversing chronic disease.
				</motion.p>
			</div>
		</section>
	);
}
