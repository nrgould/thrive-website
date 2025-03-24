import * as motion from 'motion/react-client';
import { CheckCircle } from 'lucide-react';
// import { InteractiveBehaviorContent } from './clients/InteractiveBehaviorContent';

export function BehaviorDesignSection() {
	return (
		<section
			id='integration-section'
			className='w-full py-24 px-4 md:px-8 bg-white'
		>
			<div className='max-w-6xl mx-auto'>
				<motion.p
					className='text-xl text-blue-600 font-medium text-center mb-3'
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
				>
					INTEGRATION
				</motion.p>

				<motion.h2
					className='text-4xl md:text-5xl font-bold text-center mb-16 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					Simplify Habit Change
				</motion.h2>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
					<motion.div
						className='space-y-8'
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<p className='text-slate-700 text-2xl leading-relaxed'>
							We take the guesswork out by offering tools,
							structure, and support needed to create lasting
							habits.
						</p>

						<motion.div
							className='mt-12 space-y-6'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<motion.div
								className='flex items-start gap-4'
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<CheckCircle
									className='text-blue-500 mt-1 flex-shrink-0'
									size={28}
								/>
								<p className='text-slate-700 text-xl'>
									Evidence-based tools for behavior change
								</p>
							</motion.div>

							<motion.div
								className='flex items-start gap-4'
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<CheckCircle
									className='text-blue-500 mt-1 flex-shrink-0'
									size={28}
								/>
								<p className='text-slate-700 text-xl'>
									Personalized coaching and progress tracking
								</p>
							</motion.div>

							<motion.div
								className='flex items-start gap-4'
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<CheckCircle
									className='text-blue-500 mt-1 flex-shrink-0'
									size={28}
								/>
								<p className='text-slate-700 text-xl'>
									Focus on long-lasting change, not quick
									fixes
								</p>
							</motion.div>
						</motion.div>
					</motion.div>

					<motion.div
						className='bg-blue-50 rounded-3xl p-10 relative overflow-hidden'
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<div className='absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 z-0' />
						<div className='absolute bottom-0 left-0 w-24 h-24 bg-blue-100 rounded-full -ml-12 -mb-12 z-0' />

						<div className='relative z-10'>
							<h3 className='text-3xl font-bold text-blue-950 mb-10'>
								Building habits that last
							</h3>

							<div className='grid grid-cols-1 gap-10'>
								<div className='space-y-6'>
									<h4 className='text-2xl font-bold text-blue-600'>
										Learn
									</h4>
									<p className='text-slate-700 text-xl'>
										Bridge the Willpower Gap with a system
										anyone can use to build habits in any
										area of life
									</p>
								</div>

								<div className='space-y-6'>
									<h4 className='text-2xl font-bold text-blue-600'>
										Develop
									</h4>
									<p className='text-slate-700 text-xl'>
										Master the Skills of Change and create
										habit &ldquo;recipes&rdquo; for
										behaviors you want
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				{/* <InteractiveBehaviorContent /> */}

				<motion.div
					className='w-full mx-auto text-center mt-16 bg-blue-600 rounded-3xl p-12'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<blockquote className='italic text-white text-3xl md:text-4xl font-medium'>
						&ldquo;We are what we repeatedly do; excellence, then,
						is not an act but a habit&rdquo;
						<footer className='text-blue-100 text-xl mt-4'>
							- Aristotle
						</footer>
					</blockquote>
				</motion.div>
			</div>
		</section>
	);
}
