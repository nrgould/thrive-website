import * as motion from 'motion/react-client';

export function ContactHeroSection() {
	return (
		<section className='w-full py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white'>
			<div className='max-w-4xl mx-auto text-center'>
				<motion.h1
					className='text-4xl md:text-5xl font-bold text-blue-950 mb-6'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					Get in Touch With{' '}
					<span className='text-blue-500'>THRIVE</span>
				</motion.h1>
				<motion.p
					className='text-lg md:text-xl text-slate-700 mb-6 leading-relaxed'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.2 }}
				>
					Have questions about our programs or approach? Want to learn
					more about how THRIVE can help you achieve lasting health
					changes? We&apos;re here to help.
				</motion.p>
				<motion.p
					className='text-lg md:text-xl text-slate-700 leading-relaxed'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.3 }}
				>
					Fill out the form below or use any of our contact methods to
					reach out. Our team is ready to support you on your health
					journey.
				</motion.p>
			</div>
		</section>
	);
}
