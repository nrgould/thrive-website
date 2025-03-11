'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function ProgramStructureSection() {
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
					What is Lifestyle Medicine?
				</motion.h2>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
					<motion.div
						className='space-y-6'
						initial={{ opacity: 0, x: -30 }}
						animate={
							isInView
								? { opacity: 1, x: 0 }
								: { opacity: 0, x: -30 }
						}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<p className='text-slate-700 text-lg leading-relaxed'>
							Lifestyle Medicine is an evidence-based approach to
							preventing, treating, and even reversing chronic
							disease by making simple, sustainable changes to the
							way we live.
						</p>
						<p className='text-slate-700 text-lg leading-relaxed'>
							It focuses on six key areas—nutrition, physical
							activity, sleep, stress management, social
							connection, and healthy habits—that together form
							the foundation for long-term health and well-being.
						</p>
						<p className='text-slate-700 text-lg leading-relaxed'>
							Rather than relying on quick fixes, Lifestyle
							Medicine empowers individuals to take control of
							their health through small, meaningful actions that
							fit into daily life.
						</p>
					</motion.div>

					<motion.div
						className='relative h-[400px] rounded-3xl overflow-hidden shadow-xl bg-white'
						initial={{ opacity: 0, scale: 0.95 }}
						animate={
							isInView
								? { opacity: 1, scale: 1 }
								: { opacity: 0, scale: 0.95 }
						}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<Image
							src='/pyramid.png'
							alt='THRIVE Pyramid'
							fill
							style={{ objectFit: 'contain' }}
							className='p-6'
						/>
					</motion.div>
				</div>

				<motion.h3
					className='text-2xl md:text-3xl font-bold text-center mt-24 mb-12 text-blue-950'
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					A Framework for Life
				</motion.h3>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
					{[
						{
							title: 'Nourish',
							description:
								'Develop a healthier relationship with food',
						},
						{
							title: 'Move',
							description:
								'Improve strength, mobility & endurance',
						},
						{
							title: 'Sleep',
							description: 'Build better habits for more energy',
						},
						{
							title: 'Release',
							description:
								"Manage stress and let go of what's no longer serving you",
						},
						{
							title: 'Elevate',
							description:
								'Find purpose and maintain a growth mindset',
						},
						{
							title: 'Connect',
							description:
								'Strengthen relationships and build community',
						},
					].map((item, index) => (
						<motion.div
							key={index}
							className='bg-white p-6 rounded-3xl shadow-sm'
							custom={index}
							initial='hidden'
							animate={isInView ? 'visible' : 'hidden'}
							variants={fadeInUp}
						>
							<h4 className='text-xl font-bold text-blue-500 mb-2'>
								{item.title}
							</h4>
							<p className='text-slate-700'>{item.description}</p>
						</motion.div>
					))}
				</div>

				<motion.div
					className='bg-blue-600 rounded-3xl p-10 text-center text-white'
					initial={{ opacity: 0, y: 30 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
					}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<h3 className='text-2xl md:text-3xl font-bold mb-4'>
						Lifestyle is both the cause and the cure.
					</h3>
					<p className='text-blue-100 mb-8 max-w-2xl mx-auto'>
						By addressing these six areas, you can prevent and
						reverse chronic disease while cultivating a healthier,
						more meaningful life.
					</p>
					<button className='px-8 py-3 bg-white text-blue-600 rounded-full font-medium flex items-center gap-2 hover:bg-blue-50 transition-colors mx-auto'>
						Signup Today <ArrowRight size={18} />
					</button>
				</motion.div>
			</div>
		</section>
	);
}
