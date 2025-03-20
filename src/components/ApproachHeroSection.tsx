import * as motion from 'motion/react-client';

export function ApproachHeroSection() {
	return (
		<section className='w-full py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white'>
			<div className='max-w-4xl mx-auto text-center'>
				<motion.h1
					className='text-4xl md:text-5xl font-bold text-blue-950 mb-6'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					Our Approach to{' '}
					<span className='text-blue-500'>Lasting Change</span>
				</motion.h1>
				<motion.p
					className='text-lg md:text-xl text-slate-700 mb-6 leading-relaxed'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.2 }}
				>
					Most health programs focus on quick fixes and fads, but real
					transformation requires a fundamentally different approach.
					At THRIVE, we combine evidence-based Lifestyle Medicine with
					proven Behavior Design principles to help you create lasting
					change.
				</motion.p>
				<motion.p
					className='text-lg md:text-xl text-slate-700 leading-relaxed'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.3 }}
				>
					Our methodology is built on a simple truth:{' '}
					<span className='font-semibold'>
						Lifestyle is both the cause and the cure
					</span>
					. We help you build sustainable habits that address the root
					causes of chronic disease while enhancing your overall
					wellbeing.
				</motion.p>
			</div>
		</section>
	);
}
