import * as motion from 'motion/react-client'
import { CheckCircle } from 'lucide-react';

export function BehaviorDesignSection() {

	return (
		<section className='w-full py-24 px-4 md:px-8 bg-white'>
			<div className='max-w-6xl mx-auto'>
				<motion.p
					className='text-lg text-blue-600 font-medium text-center mb-3'
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
				>
					INTEGRATION
				</motion.p>

				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-16 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					THRIVE uses Behavior Design to simplify habit change.
				</motion.h2>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20'>
					<motion.div
						className='space-y-6'
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<p className='text-slate-700 text-lg leading-relaxed'>
							We take the guesswork out by offering a systems
							approach&mdash;giving you the tools, structure, and
							support needed to create lasting habits.
						</p>
						<p className='text-slate-700 text-lg leading-relaxed'>
							This isn&apos;t about willpower. It&apos;s about
							making it easier for healthy choices to become part
							of everyday life.
						</p>

						<motion.div
							className='mt-8 space-y-4'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
						>
							<motion.div
								className='flex items-start gap-3'
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<CheckCircle
									className='text-blue-500 mt-1 flex-shrink-0'
									size={22}
								/>
								<p className='text-slate-700'>
									Evidence-based tools for behavior change
								</p>
							</motion.div>

							<motion.div
								className='flex items-start gap-3'
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<CheckCircle
									className='text-blue-500 mt-1 flex-shrink-0'
									size={22}
								/>
								<p className='text-slate-700'>
									Personalized coaching to help you identify
									your goals and track progress
								</p>
							</motion.div>

							<motion.div
								className='flex items-start gap-3'
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<CheckCircle
									className='text-blue-500 mt-1 flex-shrink-0'
									size={22}
								/>
								<p className='text-slate-700'>
									Practical, actionable steps that fit into
									your daily routine
								</p>
							</motion.div>

							<motion.div
								className='flex items-start gap-3'
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								<CheckCircle
									className='text-blue-500 mt-1 flex-shrink-0'
									size={22}
								/>
								<p className='text-slate-700'>
									A focus on long-lasting change, not quick
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
							<h3 className='text-2xl font-bold text-blue-950 mb-8'>
								Building habits that last
							</h3>

							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div className='space-y-6'>
									<h4 className='text-xl font-bold text-blue-600'>
										Learn
									</h4>
									<ul className='space-y-4'>
										<li className='flex items-start gap-3'>
											<CheckCircle
												className='text-blue-500 mt-1 flex-shrink-0'
												size={18}
											/>
											<p className='text-slate-700 text-sm'>
												About the Willpower Gap and how
												to bridge it
											</p>
										</li>
										<li className='flex items-start gap-3'>
											<CheckCircle
												className='text-blue-500 mt-1 flex-shrink-0'
												size={18}
											/>
											<p className='text-slate-700 text-sm'>
												Why most unsuccessful behavior
												change is not a personal flaw
												but a system flaw
											</p>
										</li>
										<li className='flex items-start gap-3'>
											<CheckCircle
												className='text-blue-500 mt-1 flex-shrink-0'
												size={18}
											/>
											<p className='text-slate-700 text-sm'>
												The system that allows anyone to
												build any habit in any area of
												life
											</p>
										</li>
									</ul>
								</div>

								<div className='space-y-6'>
									<h4 className='text-xl font-bold text-blue-600'>
										Develop
									</h4>
									<ul className='space-y-4'>
										<li className='flex items-start gap-3'>
											<CheckCircle
												className='text-blue-500 mt-1 flex-shrink-0'
												size={18}
											/>
											<p className='text-slate-700 text-sm'>
												The Skills of Change
											</p>
										</li>
										<li className='flex items-start gap-3'>
											<CheckCircle
												className='text-blue-500 mt-1 flex-shrink-0'
												size={18}
											/>
											<p className='text-slate-700 text-sm'>
												Habit &apos;recipes&apos; for
												the behaviors you most want in
												your life
											</p>
										</li>
										<li className='flex items-start gap-3'>
											<CheckCircle
												className='text-blue-500 mt-1 flex-shrink-0'
												size={18}
											/>
											<p className='text-slate-700 text-sm'>
												Willpower using the most
												effective science-based
												practices
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				<motion.div
					className='max-w-3xl mx-auto text-center mt-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<blockquote className='italic text-blue-700 text-3xl'>
						&ldquo;We are what we repeatedly do; excellence, then,
						is not an act but a habit&rdquo;
						<footer className='text-sm text-blue-600 mt-2'>
							- Aristotle
						</footer>
					</blockquote>
				</motion.div>
			</div>
		</section>
	);
}
