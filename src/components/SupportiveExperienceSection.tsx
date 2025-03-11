'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Book, Users, LineChart, Calendar, UserCircle } from 'lucide-react';

export function SupportiveExperienceSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

	const fadeInUp = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.1 * i,
				duration: 0.5,
			},
		}),
	};

	// Sample coach data - would be replaced with actual data in a real implementation
	const coaches = [
		{
			name: 'Coach Sarah',
			role: 'Lifestyle Medicine Specialist',
			image: null,
		},
		{ name: 'Coach Michael', role: 'Nutrition Expert', image: null },
		{ name: 'Coach Emma', role: 'Movement Specialist', image: null },
		{ name: 'Coach David', role: 'Behavioral Health Coach', image: null },
	];

	return (
		<section
			ref={sectionRef}
			className='w-full py-24 px-4 md:px-8 bg-blue-50'
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
					Supported Every Step of the Way
				</motion.h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-20'>
					<motion.div
						className='bg-white rounded-3xl p-8 shadow-sm'
						custom={0}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeInUp}
					>
						<div className='w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
							<Book className='text-blue-500' size={28} />
						</div>
						<h3 className='text-xl font-bold text-blue-950 mb-4'>
							Comprehensive Learning
						</h3>
						<ul className='space-y-3 text-slate-700'>
							<li className='flex items-start gap-2'>
								<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
								<p>
									Weekly learning sessions covering key
									aspects of lifestyle medicine
								</p>
							</li>
							<li className='flex items-start gap-2'>
								<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
								<p>Practical strategies backed by research</p>
							</li>
							<li className='flex items-start gap-2'>
								<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
								<p>
									Downloadable resources and video tutorials
								</p>
							</li>
						</ul>
					</motion.div>

					<motion.div
						className='bg-white rounded-3xl p-8 shadow-sm'
						custom={1}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeInUp}
					>
						<div className='w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
							<Users className='text-blue-500' size={28} />
						</div>
						<h3 className='text-xl font-bold text-blue-950 mb-4'>
							Community & Support
						</h3>
						<ul className='space-y-3 text-slate-700'>
							<li className='flex items-start gap-2'>
								<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
								<p>
									Small-group discussions for shared learning
									and encouragement
								</p>
							</li>
							<li className='flex items-start gap-2'>
								<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
								<p>
									One-on-one coaching to personalize your
									approach
								</p>
							</li>
							<li className='flex items-start gap-2'>
								<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
								<p>
									Virtual and in-person opportunities to
									connect
								</p>
							</li>
						</ul>
					</motion.div>

					<motion.div
						className='bg-white rounded-3xl p-8 shadow-sm'
						custom={2}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeInUp}
					>
						<div className='w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
							<LineChart className='text-blue-500' size={28} />
						</div>
						<h3 className='text-xl font-bold text-blue-950 mb-4'>
							Measurable Progress
						</h3>
						<ul className='space-y-3 text-slate-700'>
							<li className='flex items-start gap-2'>
								<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
								<p>
									Habit tracking tools to help reinforce small
									wins
								</p>
							</li>
							<li className='flex items-start gap-2'>
								<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
								<p>Personalized behavior change strategies</p>
							</li>
							<li className='flex items-start gap-2'>
								<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
								<p>
									Biometric tracking to monitor key health
									improvements
								</p>
							</li>
						</ul>
					</motion.div>

					<motion.div
						className='bg-white rounded-3xl p-8 shadow-sm'
						custom={3}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeInUp}
					>
						<div className='w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
							<Calendar className='text-blue-500' size={28} />
						</div>
						<h3 className='text-xl font-bold text-blue-950 mb-4'>
							Flexible & Practical
						</h3>
						<ul className='space-y-3 text-slate-700'>
							<li className='flex items-start gap-2'>
								<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
								<p>
									No rigid rules—focus on gradual, sustainable
									change
								</p>
							</li>
							<li className='flex items-start gap-2'>
								<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
								<p>
									Adaptable to different lifestyles and
									schedules
								</p>
							</li>
							<li className='flex items-start gap-2'>
								<div className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0' />
								<p>Designed for real people with real lives</p>
							</li>
						</ul>
					</motion.div>
				</div>

				<motion.h3
					className='text-2xl md:text-3xl font-bold text-center mt-24 mb-12 text-blue-950'
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					The THRIVE Team
				</motion.h3>

				<motion.div
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
					initial={{ opacity: 0, y: 20 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.6, delay: 0.5 }}
				>
					{coaches.map((coach, index) => (
						<div
							key={index}
							className='bg-white rounded-3xl p-6 text-center shadow-sm'
						>
							<div className='w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<UserCircle
									className='text-blue-300'
									size={48}
								/>
							</div>
							<h4 className='text-lg font-bold text-blue-950'>
								{coach.name}
							</h4>
							<p className='text-slate-600 text-sm'>
								{coach.role}
							</p>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
