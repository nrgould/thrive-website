'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp, Info, Zap, Mail } from 'lucide-react';

export function FAQSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	const toggleFaq = (index: number) => {
		setOpenFaq(openFaq === index ? null : index);
	};

	const faqs = [
		{
			question: 'Is this a diet or fitness plan?',
			answer: 'No. THRIVE is not about restrictive dieting or intense exercise routines. Instead, it helps you develop a balanced approach to food, movement, and daily habits that fit into your lifestyle.',
		},
		{
			question: 'What results can I expect?',
			answer: 'Results vary based on individual effort and participation, but past participants have reported: reduced stress and improved energy levels, better sleep and mental clarity, healthier eating habits and healthier weight management, increased motivation and sense of purpose.',
		},
		{
			question: 'How do I get started?',
			answer: 'Spots in THRIVE are limited, so we recommend joining the waiting list to be notified when the next cohort opens.',
		},
	];

	return (
		<section
			ref={sectionRef}
			className='w-full py-24 px-4 md:px-8 bg-white'
		>
			<div className='max-w-6xl mx-auto'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-16 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.5 }}
				>
					Which THRIVE Program is Right for You?
				</motion.h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-24'>
					<motion.div
						className='bg-gradient-to-b from-blue-50 to-white rounded-3xl p-8 border border-blue-100 shadow-sm'
						initial={{ opacity: 0, y: 30 }}
						animate={
							isInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 30 }
						}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<div className='w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
							<Info className='text-blue-500' size={28} />
						</div>
						<h3 className='text-2xl font-bold text-blue-950 mb-3'>
							THRIVE Essentials: Self-Paced Online Course
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

						<button className='w-full py-3 bg-blue-100 text-blue-700 rounded-full font-medium hover:bg-blue-200 transition-colors'>
							Learn More
						</button>
					</motion.div>

					<motion.div
						className='bg-gradient-to-b from-blue-500 to-blue-600 rounded-3xl p-8 text-white shadow-lg'
						initial={{ opacity: 0, y: 30 }}
						animate={
							isInView
								? { opacity: 1, y: 0 }
								: { opacity: 0, y: 30 }
						}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<div className='w-14 h-14 bg-blue-400 bg-opacity-30 rounded-full flex items-center justify-center mb-6'>
							<Zap className='text-white' size={28} />
						</div>
						<h3 className='text-2xl font-bold mb-3'>
							THRIVE 6-Week Program: Comprehensive Lifestyle
							Change
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

						<button className='w-full py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-colors'>
							Register for Next Cohort
						</button>
					</motion.div>
				</div>

				<motion.div
					className='bg-blue-50 rounded-3xl p-8 mb-20 text-center'
					initial={{ opacity: 0, y: 20 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.5, delay: 0.6 }}
				>
					<h3 className='text-2xl font-bold text-blue-950 mb-4'>
						Not Sure Where to Start?
					</h3>
					<div className='flex items-center justify-center'>
						<button className='px-8 py-3 bg-blue-500 text-white rounded-full font-medium flex items-center gap-2 hover:bg-blue-600 transition-colors mx-auto'>
							<Mail size={18} /> Contact Us
						</button>
					</div>
				</motion.div>

				<motion.h3
					className='text-2xl md:text-3xl font-bold text-center mb-10 text-blue-950'
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					Frequently Asked Questions
				</motion.h3>

				<motion.p
					className='text-center text-slate-600 mb-12 max-w-2xl mx-auto'
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					Please reach us at{' '}
					<a
						href='mailto:info@thrive.com'
						className='text-blue-500 underline'
					>
						info@thrive.com
					</a>{' '}
					if you cannot find an answer to your question.
				</motion.p>

				<div className='max-w-3xl mx-auto space-y-4'>
					{faqs.map((faq, index) => (
						<motion.div
							key={index}
							className='border border-blue-100 rounded-2xl overflow-hidden'
							initial={{ opacity: 0, y: 20 }}
							animate={
								isInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 20 }
							}
							transition={{
								duration: 0.4,
								delay: 0.1 * index + 0.6,
							}}
						>
							<button
								className='w-full p-5 text-left flex items-center justify-between bg-white hover:bg-blue-50 transition-colors'
								onClick={() => toggleFaq(index)}
							>
								<span className='text-lg font-medium text-blue-950'>
									{faq.question}
								</span>
								{openFaq === index ? (
									<ChevronUp
										className='text-blue-500'
										size={20}
									/>
								) : (
									<ChevronDown
										className='text-blue-500'
										size={20}
									/>
								)}
							</button>
							<AnimatePresence>
								{openFaq === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: 'auto', opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.2 }}
										className='overflow-hidden'
									>
										<div className='p-5 pt-0 text-slate-700 bg-white'>
											<p>{faq.answer}</p>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>

				<motion.div
					className='text-center mt-16'
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
				>
					<button className='px-8 py-4 bg-blue-500 text-white rounded-full font-medium text-lg hover:bg-blue-600 transition-colors shadow-lg'>
						Sign up for the waiting list
					</button>
				</motion.div>
			</div>
		</section>
	);
}
