'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Layers, Users } from 'lucide-react';

export function ThreeColumnsSection() {
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

	const fadeIn = {
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
			className='w-full py-16 px-4 md:px-8 bg-white'
		>
			<div className='max-w-6xl mx-auto'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-6 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.5 }}
				>
					A Better Way to THRIVE
				</motion.h2>

				<motion.p
					className='text-lg text-slate-700 text-center max-w-3xl mx-auto mb-12'
					initial={{ opacity: 0, y: 20 }}
					animate={
						isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
					}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					THRIVE is a 6-week program built on science-backed
					strategies that support physical, mental, and emotional
					well-being, so you can improve your daily routine, make more
					sustainable lifestyle changes, reduce stress, and connect
					more deeply with your health goals and loved ones.
				</motion.p>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					<motion.div
						className='bg-blue-50 rounded-3xl p-8 text-center flex flex-col items-center'
						custom={0}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeIn}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
							<BookOpen className='text-blue-500' size={28} />
						</div>
						<h3 className='text-2xl font-bold text-blue-500 mb-2'>
							Education
						</h3>
						<h4 className='text-xl font-medium text-blue-900 mb-4'>
							Learn a Healthier Way
						</h4>
						<p className='text-slate-700 mb-3'>
							Video tutorials, downloadable resources, &
							interactive learning modules focused on Lifestyle
							Medicine & Behavior Design
						</p>
						<p className='text-slate-700'>
							Delivered through a user-friendly online platform &
							mobile app
						</p>
					</motion.div>

					<motion.div
						className='bg-blue-50 rounded-3xl p-8 text-center flex flex-col items-center'
						custom={1}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeIn}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
							<Layers className='text-blue-500' size={28} />
						</div>
						<h3 className='text-2xl font-bold text-blue-500 mb-2'>
							Integration
						</h3>
						<h4 className='text-xl font-medium text-blue-900 mb-4'>
							Make Sustainable Change
						</h4>
						<p className='text-slate-700 mb-3'>
							Participants use Behavior Design to create
							personalized habit plans aligned with their health
							goals.
						</p>
						<p className='text-slate-700'>
							Small, achievable steps build momentum for lasting
							change.
						</p>
					</motion.div>

					<motion.div
						className='bg-blue-50 rounded-3xl p-8 text-center flex flex-col items-center'
						custom={2}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeIn}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
							<Users className='text-blue-500' size={28} />
						</div>
						<h3 className='text-2xl font-bold text-blue-500 mb-2'>
							Connection
						</h3>
						<h4 className='text-xl font-medium text-blue-900 mb-4'>
							Maintain Success
						</h4>
						<p className='text-slate-700 mb-3'>
							1:1 coaching sessions
						</p>
						<p className='text-slate-700 mb-3'>
							Small group learning circles
						</p>
						<p className='text-slate-700'>
							Larger, full cohort sessions
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
