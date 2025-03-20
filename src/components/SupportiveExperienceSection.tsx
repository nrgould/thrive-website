'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
	Book,
	Users,
	LineChart,
	Calendar,
	UserCircle,
	ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
	const team = [
		{
			name: 'Chasity Rice',
			role: 'C2Life Founder/CEO',
			image: '/team/chasity.webp',
		},
		{
			name: 'Brett Wells',
			role: 'Behavior Design Expert',
			image: '/team/brett.webp',
		},
		{
			name: 'Brian Asbill, MD',
			role: 'Plant-Powered Lifestyle Medicine Physician',
			image: '/team/brian.webp',
		},
		{
			name: 'Quez "Papa Plants" Little',
			role: 'Lifestyle Coach',
			image: '/team/quez.webp',
		},
		{
			name: 'Laurie Robinson, MD',
			role: 'Lifestyle Coach',
			image: '/team/laurie.webp',
		},
		{
			name: 'Leticia Nichols, ANP-C, CHWC',
			role: 'Lifestyle Coach',
			image: '/team/leticia.webp',
		},
		{
			name: 'Nicholas "the Wizard" Gould',
			role: 'Web Developer',
			image: '/team/nicholas.webp',
		},
	];

	return (
		<section
			ref={sectionRef}
			className='w-full py-24 px-4 md:px-8 bg-blue-50'
		>
			<div className='max-w-6xl mx-auto'>
				<motion.p
					className='text-lg text-blue-600 font-medium text-center mb-3'
					initial={{ opacity: 0, y: 10 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
					}
					transition={{ duration: 0.4 }}
				>
					CONNECTION
				</motion.p>

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
					{team.map((person, index) => (
						<div
							key={index}
							className='bg-white rounded-3xl p-6 text-center shadow-sm'
						>
							<div className='w-24 h-24 rounded-full overflow-hidden mx-auto mb-4'>
								{person.image ? (
									<Image
										src={person.image}
										alt={person.name}
										width={96}
										height={96}
										className='w-full h-full object-cover'
									/>
								) : (
									<div className='w-full h-full bg-blue-100 flex items-center justify-center'>
										<UserCircle
											className='text-blue-300'
											size={48}
										/>
									</div>
								)}
							</div>
							<h4 className='text-lg font-bold text-blue-950'>
								{person.name}
							</h4>
							<p className='text-slate-600 text-sm'>
								{person.role}
							</p>
						</div>
					))}
				</motion.div>

				<motion.div
					className='flex justify-center mt-12'
					initial={{ opacity: 0, y: 20 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.6, delay: 0.7 }}
				>
					<Link
						href='/about/team'
						className='flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors'
					>
						Meet Our Full Team
						<ArrowRight size={16} />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
