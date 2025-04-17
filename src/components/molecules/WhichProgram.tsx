import React from 'react';
import * as motion from 'motion/react-client';
import { Info, Zap, Mail } from 'lucide-react';
import Link from 'next/link';

function WhichProgram() {
	return (
		<section className='w-full py-24 px-4 md:px-8 bg-white'>
			<div className='max-w-6xl mx-auto' id='programs'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-16 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Which THRIVE Program is Right for You?
				</motion.h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-24'>
					<motion.div
						className='bg-gradient-to-b from-blue-50 to-white rounded-3xl p-8 border border-blue-100 shadow-sm'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<div className='w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
							<Info className='text-blue-500' size={28} />
						</div>
						<h3 className='text-2xl font-bold text-blue-950 mb-3'>
							THRIVE Essentials: Self-Paced Online Course (complete in a week)
						</h3>
						<p className='text-slate-700 mb-6'>
							Perfect for those who want to explore Lifestyle
							Medicine and start building healthier habits at
							their own pace.
						</p>

						<div className='space-y-6 mb-8'>
							<div>
								<h4 className='text-lg font-bold text-blue-700 mb-2'>
									Short and Accessible
								</h4>
								<ul className='space-y-2 text-slate-700'>
									<li className='flex items-start gap-2'>
										<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
										<p>
											Self-paced, online format—learn on
											your schedule
										</p>
									</li>
									<li className='flex items-start gap-2'>
										<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
										<p>
											Ideal for anyone curious about
											Lifestyle Medicine but not ready to
											commit to a full program
										</p>
									</li>
									<li className='flex items-start gap-2'>
										<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
										<p>Complete the course in a week</p>
									</li>
								</ul>
							</div>

							<div>
								<h4 className='text-lg font-bold text-blue-700 mb-2'>
									Foundational Learning
								</h4>
								<ul className='space-y-2 text-slate-700'>
									<li className='flex items-start gap-2'>
										<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
										<p>
											Introductory lessons on the core
											pillars of health: Nutrition,
											Movement, Sleep, Stress, Mindset,
											and Connection
										</p>
									</li>
									<li className='flex items-start gap-2'>
										<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
										<p>
											Practical tips and strategies you
											can implement right away
										</p>
									</li>
								</ul>
							</div>

							<div>
								<h4 className='text-lg font-bold text-blue-700 mb-2'>
									Get Ready for What&apos;s Next
								</h4>
								<ul className='space-y-2 text-slate-700'>
									<li className='flex items-start gap-2'>
										<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
										<p>
											A great first step if you&apos;re
											thinking about joining the full
											THRIVE 6-Week Program in the future
										</p>
									</li>
								</ul>
							</div>
						</div>

						<div className='w-full block'>
							<button className='cursor-pointer w-full py-3 bg-blue-100 text-blue-700 rounded-full font-medium hover:bg-blue-200 transition-colors opacity-75'>
								Coming Soon
							</button>
						</div>

						{/* <Link
							href='/programs/essentials'
							className='w-full block'
						>
							<button className='cursor-pointer w-full py-3 bg-blue-100 text-blue-700 rounded-full font-medium hover:bg-blue-200 transition-colors'>
								Learn More
							</button>
						</Link> */}
					</motion.div>

					<motion.div
						className='bg-gradient-to-b from-blue-500 to-blue-600 rounded-3xl p-8 text-white shadow-lg'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<div className='w-14 h-14 bg-blue-400 bg-opacity-30 rounded-full flex items-center justify-center mb-6'>
							<Zap className='text-white' size={28} />
						</div>
						<h3 className='text-2xl font-bold mb-3'>
							THRIVE Comprehensive: Lifestyle
							Change in a 6-Week Program
						</h3>
						<p className='text-blue-100 mb-6'>
							For those ready to commit to making sustainable
							changes with guidance, structure, and community
							support.
						</p>

						<div className='space-y-6 mb-8'>
							<div>
								<h4 className='text-lg font-bold text-white mb-2'>
									Guided Learning & Support
								</h4>
								<ul className='space-y-2 text-blue-50'>
									<li className='flex items-start gap-2'>
										<div className='w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0' />
										<p>
											Weekly live learning sessions with
											expert coaches
										</p>
									</li>
									<li className='flex items-start gap-2'>
										<div className='w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0' />
										<p>
											Small Group Learning Circles and
											one-on-one coaching for personalized
											support
										</p>
									</li>
								</ul>
							</div>

							<div>
								<h4 className='text-lg font-bold text-white mb-2'>
									Behavior Design for Long-Lasting Change
								</h4>
								<ul className='space-y-2 text-blue-50'>
									<li className='flex items-start gap-2'>
										<div className='w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0' />
										<p>
											Evidence-based tools and a systems
											approach to create habits that stick
										</p>
									</li>
									<li className='flex items-start gap-2'>
										<div className='w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0' />
										<p>
											Habit tracking, biometric
											monitoring, and real-time feedback
										</p>
									</li>
								</ul>
							</div>

							<div>
								<h4 className='text-lg font-bold text-white mb-2'>
									Holistic Focus on Physical, Psychological,
									and Social Fitness
								</h4>
								<ul className='space-y-2 text-blue-50'>
									<li className='flex items-start gap-2'>
										<div className='w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0' />
										<p>
											Dive deeper into the six pillars of
											the THRIVE Pyramid
										</p>
									</li>
									<li className='flex items-start gap-2'>
										<div className='w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0' />
										<p>
											Build a personalized plan that
											addresses all aspects of your health
											and well-being
										</p>
									</li>
								</ul>
							</div>
						</div>

						<Link
							href='/programs/six-week'
							className='w-full block'
						>
							<button className='cursor-pointer w-full py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors'>
								Register for Next Cohort
							</button>
						</Link>
					</motion.div>
				</div>

				<motion.div
					className='bg-blue-50 rounded-3xl p-8 mb-20 text-center'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					viewport={{ once: true }}
				>
					<h3 className='text-2xl font-bold text-blue-950 mb-4'>
						Not Sure Where to Start?
					</h3>
					<div className='flex items-center justify-center'>
						<Link href='/contact'>
							<button className='cursor-pointer px-8 py-3 bg-blue-500 text-white rounded-full font-medium flex items-center gap-2 hover:bg-blue-600 transition-colors mx-auto'>
								<Mail size={18} /> Talk with one of our coaches
							</button>
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default WhichProgram;
