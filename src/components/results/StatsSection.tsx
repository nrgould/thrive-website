'use client';

import { useEffect, useRef } from 'react';
import {
	motion,
	useMotionValue,
	useTransform,
	animate,
	useInView,
} from 'framer-motion';
import { TrendingDown, Heart, Dumbbell } from 'lucide-react';

export function StatsSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	// Create motion values for each stat
	const ldlCount = useMotionValue(0);
	const a1cCount = useMotionValue(0);
	const bmiCount = useMotionValue(0);

	// Transform the motion values to rounded numbers
	const roundedLdl = useTransform(ldlCount, (latest) => Math.round(latest));
	const roundedA1c = useTransform(a1cCount, (latest) => Math.round(latest));
	const roundedBmi = useTransform(bmiCount, (latest) => Math.round(latest));

	useEffect(() => {
		// Only animate when the section comes into view
		if (isInView) {
			const ldlAnimation = animate(ldlCount, 21, {
				duration: 2,
				ease: 'easeOut',
			});

			const a1cAnimation = animate(a1cCount, 59, {
				duration: 2,
				ease: 'easeOut',
			});

			const bmiAnimation = animate(bmiCount, 91, {
				duration: 2,
				ease: 'easeOut',
			});

			return () => {
				ldlAnimation.stop();
				a1cAnimation.stop();
				bmiAnimation.stop();
			};
		}
	}, [isInView, ldlCount, a1cCount, bmiCount]);

	const fadeIn = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.5 * i,
				duration: 0.5,
			},
		}),
	};

	return (
		<div ref={ref} className='md:grid md:grid-cols-3 md:gap-8 mb-12'>
			<div className='md:hidden bg-blue-50 rounded-xl p-6 mb-8'>
				<div className='space-y-8'>
					<motion.div
						className='flex flex-col items-center text-center'
						custom={0}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeIn}
					>
						<div className='flex items-center gap-4 mb-2'>
							<TrendingDown className='text-blue-500' size={28} />
							<div className='flex items-baseline'>
								<motion.span className='text-6xl font-bold text-blue-500'>
									{roundedLdl}
								</motion.span>
								<span className='text-4xl font-bold text-blue-500'>
									%
								</span>
							</div>
						</div>
						<p className='text-zinc-600 text-lg max-w-[350px] font-medium'>
							Average reduction in LDL cholesterol
						</p>
					</motion.div>

					<motion.div
						className='flex flex-col items-center text-center'
						custom={1}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeIn}
					>
						<div className='flex items-center gap-4 mb-2'>
							<Heart className='text-blue-500' size={28} />
							<div className='flex items-baseline'>
								<motion.span className='text-6xl font-bold text-blue-500'>
									{roundedA1c}
								</motion.span>
								<span className='text-4xl font-bold text-blue-500'>
									%
								</span>
							</div>
						</div>
						<p className='text-zinc-600 text-lg max-w-[350px] font-medium'>
							of participants improved A1C levels
						</p>
					</motion.div>

					<motion.div
						className='flex flex-col items-center text-center'
						custom={2}
						initial='hidden'
						animate={isInView ? 'visible' : 'hidden'}
						variants={fadeIn}
					>
						<div className='flex items-center gap-4 mb-2'>
							<Dumbbell className='text-blue-500' size={28} />
							<div className='flex items-baseline'>
								<motion.span className='text-6xl font-bold text-blue-500'>
									{roundedBmi}
								</motion.span>
								<span className='text-4xl font-bold text-blue-500'>
									%
								</span>
							</div>
						</div>
						<p className='text-zinc-600 text-lg max-w-[350px] font-medium'>
							lost weight and improved BMI
						</p>
					</motion.div>
				</div>
			</div>

			{/* Desktop layout */}
			<motion.div
				className='hidden md:flex md:flex-col md:items-start'
				custom={0}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				variants={fadeIn}
			>
				<div className='flex items-center gap-4 mb-2'>
					<TrendingDown className='text-blue-500' size={28} />
					<div className='flex items-baseline'>
						<motion.span className='text-6xl font-bold text-blue-500'>
							{roundedLdl}
						</motion.span>
						<span className='text-4xl font-bold text-blue-500'>
							%
						</span>
					</div>
				</div>
				<p className='text-zinc-600 text-lg max-w-[350px] font-medium'>
					Average reduction in LDL cholesterol
				</p>
			</motion.div>

			<motion.div
				className='hidden md:flex md:flex-col md:items-start'
				custom={1}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				variants={fadeIn}
			>
				<div className='flex items-center gap-4 mb-2'>
					<Heart className='text-blue-500' size={28} />
					<div className='flex items-baseline'>
						<motion.span className='text-6xl font-bold text-blue-500'>
							{roundedA1c}
						</motion.span>
						<span className='text-4xl font-bold text-blue-500'>
							%
						</span>
					</div>
				</div>
				<p className='text-zinc-600 text-lg max-w-[350px] font-medium'>
					of participants improved A1C levels
				</p>
			</motion.div>

			<motion.div
				className='hidden md:flex md:flex-col md:items-start'
				custom={2}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
				variants={fadeIn}
			>
				<div className='flex items-center gap-4 mb-2'>
					<Dumbbell className='text-blue-500' size={28} />
					<div className='flex items-baseline'>
						<motion.span className='text-6xl font-bold text-blue-500'>
							{roundedBmi}
						</motion.span>
						<span className='text-4xl font-bold text-blue-500'>
							%
						</span>
					</div>
				</div>
				<p className='text-zinc-600 text-lg max-w-[350px] font-medium'>
					lost weight and improved BMI
				</p>
			</motion.div>
		</div>
	);
}
