'use client';

import * as motion from 'motion/react-client';
import { AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
	Zap,
	Lightbulb,
	Cog,
	Clipboard,
	TrendingUp,
	Puzzle,
	X,
	ArrowRight,
	ChevronLeft,
	ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';

interface KeyPoint {
	title: string;
	description: string;
}

interface PrincipleCard {
	title: string;
	content: string;
	icon: React.ReactNode;
	color: string;
	bgColorLight: string;
	textColorDark: string;
	keyPoints: KeyPoint[];
}

export function ScienceBehaviorPrinciplesSection() {
	const [activeModal, setActiveModal] = useState<number | null>(null);
	const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	const openModal = (index: number) => {
		setActiveModal(index);
		document.body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		setActiveModal(null);
		document.body.style.overflow = '';
	};

	// Update carousel when active modal changes
	useEffect(() => {
		if (carouselApi && activeModal !== null) {
			carouselApi.scrollTo(activeModal);
		}
	}, [activeModal, carouselApi]);

	// Sync carousel with active modal
	const onCarouselSelect = () => {
		if (carouselApi) {
			setActiveModal(carouselApi.selectedScrollSnap());
		}
	};

	useEffect(() => {
		if (!carouselApi) return;

		carouselApi.on('select', onCarouselSelect);
		return () => {
			carouselApi.off('select', onCarouselSelect);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [carouselApi]);

	// Close modal when clicking outside
	const handleOutsideClick = (e: React.MouseEvent) => {
		if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
			closeModal();
		}
	};

	// Close modal with escape key
	useEffect(() => {
		const handleEscKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && activeModal !== null) {
				closeModal();
			}
		};

		window.addEventListener('keydown', handleEscKey);
		return () => window.removeEventListener('keydown', handleEscKey);
	}, [activeModal]);

	const principles: PrincipleCard[] = [
		{
			title: 'Willpower & Motivation',
			content:
				'Many people believe that a strong sense of willpower or motivation is the cornerstone to creating lasting change. Reality is that motivation is like a wave that constantly changes over time and is not the most reliable thing for us to use when designing our habits. There are much better places to start.',
			icon: <Zap size={24} />,
			color: 'bg-blue-400',
			bgColorLight: 'bg-blue-100',
			textColorDark: 'text-blue-600',
			keyPoints: [
				{
					title: 'Motivation is unreliable',
					description:
						'Motivation naturally ebbs and flows, making it a poor foundation to design for lasting habits.',
				},
				{
					title: 'Design for consistency',
					description:
						'Create systems that work regardless of motivation levels.',
				},
				{
					title: 'Use willpower wisely and build it strategically',
					description:
						'Use willpower to design and set up systems that build it, not just to power through tasks.',
				},
			],
		},
		{
			title: 'Skills of Change',
			content:
				'Changing our behavior is a skill and, like any skill, requires knowledge and practice. Driving a car is a skill that, in the beginning, feels very uncomfortable, but for most people becomes easy and automatic. Just like learning to drive a car, everyone can develop the skills of changing their habits.',
			icon: <Lightbulb size={24} />,
			color: 'bg-indigo-400',
			bgColorLight: 'bg-indigo-100',
			textColorDark: 'text-indigo-600',
			keyPoints: [
				{
					title: 'Change is learnable',
					description:
						'Behavior change is a specific skill set that can be developed through practice and guidance.',
				},
				{
					title: 'Master core principles',
					description:
						'Understanding the fundamental principles of habit formation accelerates your success.',
				},
				{
					title: 'Progress with practice',
					description:
						'Like any skill, your ability to create lasting change improves with each attempt.',
				},
			],
		},
		{
			title: 'Habit Systems',
			content:
				'Often we feel that our habits happen to us and that lasting behavior change is a mysterious process. Science-based habit systems provide us with reliable approaches for anyone to build any habit in any area of their life. Building these systems allows us to make our habits work For Us and not To Us.',
			icon: <Cog size={24} />,
			color: 'bg-purple-400',
			bgColorLight: 'bg-purple-100',
			textColorDark: 'text-purple-600',
			keyPoints: [
				{
					title: 'Systems over willpower',
					description:
						'Well-designed systems make behaviors automatic, removing the need for constant decision-making.',
				},
				{
					title: 'Address all habit components',
					description:
						'Effective systems address triggers, behaviors, rewards, and environmental factors.',
				},
				{
					title: 'Personalize your approach',
					description:
						'The best systems are tailored to your unique personality, preferences, and life circumstances.',
				},
			],
		},
		{
			title: 'Habit Recipes',
			content:
				'Habit Recipes are one of the most important and foundational habit systems that anyone can create. Learn how to establish the most reliable CUES, determine the right size for a new BEHAVIOR, and how to best CELEBRATE success, so that we get our brains working for us in making our new behaviors automatic.',
			icon: <Clipboard size={24} />,
			color: 'bg-cyan-400',
			bgColorLight: 'bg-cyan-100',
			textColorDark: 'text-cyan-600',
			keyPoints: [
				{
					title: 'Tiny habits grow naturally',
					description:
						"Starting with a behavior that's too small to fail creates momentum and builds consistency.",
				},
				{
					title: 'Anchor to existing habits',
					description:
						'Connecting new habits to established routines creates reliable cues for action.',
				},
				{
					title: 'Behaviors that get rewarded, get repeated',
					description:
						'Genuine celebration after completing a behavior wires your brain to crave that behavior.',
				},
			],
		},
		{
			title: '1% Better',
			content:
				"Habits are the compound interest of self-development. In a culture of 'Go Big or Go Home' marketing, it is often difficult for us to see the importance of small wins. But small + smart choices form the foundation of Compounding Effect - the system that allows us to get big rewards through small wins compounded over time.",
			icon: <TrendingUp size={24} />,
			color: 'bg-emerald-400',
			bgColorLight: 'bg-emerald-100',
			textColorDark: 'text-emerald-600',
			keyPoints: [
				{
					title: 'Embrace compound effect',
					description:
						'Small improvements compound dramatically over time, just like interest in a financial investment.',
				},
				{
					title: 'Celebrate progress',
					description:
						'Acknowledging small wins fuels motivation and reinforces your identity as someone who succeeds.',
				},
				{
					title: 'Concentrate on consistency',
					description:
						'By prioritizing consistency you master the arts of showing up and recovering quickly',
				},
			],
		},
		{
			title: 'Making the Right Choice the Easy Choice',
			content:
				'Our environment plays a huge role in triggering and supporting our habits. Setting up our environment in smart ways consistently nudges us in the directions we want to go and allows the choices we want to make to become the easiest choices for us to make.',
			icon: <Puzzle size={24} />,
			color: 'bg-green-400',
			bgColorLight: 'bg-green-100',
			textColorDark: 'text-green-600',
			keyPoints: [
				{
					title: 'Design your environment',
					description:
						'Restructure your physical surroundings to make good habits obvious and bad habits invisible.',
				},
				{
					title: 'Reduce friction',
					description:
						'Eliminate obstacles for desired behaviors and add barriers to unwanted behaviors.',
				},
				{
					title: 'Use choice architecture',
					description:
						'Our environment is like gravity pulling us in specific directions; make choices that pull you where you want to go.',
				},
			],
		},
	];

	return (
		<section className='w-full pt-20 bg-blue-50'>
			<div className='max-w-6xl mx-auto px-4 md:px-8'>
				<div className='mb-16 text-center'>
					<motion.h2
						className='text-3xl md:text-4xl font-bold mb-4 text-blue-950'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4 }}
					>
						Core Principles of{' '}
						<span className='text-blue-600'>Behavior Design</span>
					</motion.h2>

					<motion.p
						className='text-lg text-slate-700 max-w-2xl mx-auto mb-2'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: 0.1 }}
					>
						Understanding these key principles will help you create
						lasting changes in your life.
					</motion.p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{principles.map((principle, index) => (
						<motion.div
							key={index}
							className='bg-white rounded-3xl shadow-sm border border-blue-100 hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden'
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.3, delay: index * 0.05 }}
							onClick={() => openModal(index)}
							whileHover={{ scale: 1.015 }}
						>
							<div className='p-6'>
								<div className='flex items-center gap-4 mb-4'>
									<div
										className={cn(
											'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0',
											principle.bgColorLight
										)}
									>
										<span
											className={cn(
												principle.textColorDark
											)}
										>
											{principle.icon}
										</span>
									</div>
									<h4 className='text-xl font-bold text-blue-950 flex-1'>
										{principle.title}
									</h4>
								</div>

								<p className='text-slate-600 line-clamp-3'>
									{principle.content}
								</p>

								<div className='mt-3 text-blue-500 text-sm font-medium'>
									Read more
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* CTA Section - Moved outside max-w-6xl for full width background */}
			</div>

			{/* CTA Section */}
			<motion.div
				className='mt-20 w-full'
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, delay: 0.2 }}
			>
				<div className='bg-blue-600 w-full py-16'>
					{' '}
					{/* Full width blue background */}
					<div className='max-w-3xl mx-auto text-center'>
						{' '}
						{/* Constrained content */}
						<h3 className='text-3xl font-bold text-white mb-4'>
							{' '}
							{/* White text */}
							Ready to Apply These Principles?
						</h3>
						<p className='text-blue-100 max-w-2xl mx-auto mb-8 text-lg'>
							{' '}
							{/* Lighter blue text */}
							Join our 6-week program to learn how to implement
							these behavior design principles and create lasting
							positive changes in your life.
						</p>
						<Link
							href='/programs/six-week#waitlist-form'
							className='inline-flex items-center gap-2 bg-white hover:bg-blue-100 text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md text-lg' // Updated button style
						>
							Join Waitlist
							<ArrowRight size={20} />
						</Link>
					</div>
				</div>
			</motion.div>

			{/* Modal overlay with AnimatePresence and Carousel */}
			<AnimatePresence>
				{activeModal !== null && (
					<motion.div
						className='fixed inset-0 z-50 flex items-center justify-center p-4'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<motion.div
							className='fixed inset-0 bg-black/60 backdrop-blur-sm'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							onClick={handleOutsideClick}
						/>

						<motion.div
							ref={modalRef}
							className='bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden relative z-10'
							initial={{ opacity: 0, scale: 0.9, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.9, y: 20 }}
							transition={{
								type: 'spring',
								damping: 25,
								stiffness: 300,
								exit: { duration: 0.2 },
							}}
						>
							<div className='sticky top-0 bg-white z-10 px-6 py-4 flex justify-between items-center border-b'>
								<div className='flex-1'>
									<div className='flex items-center space-x-2 text-sm text-slate-500'>
										<span>Principle</span>
										<span className='font-medium'>
											{activeModal + 1}
										</span>
										<span>of</span>
										<span className='font-medium'>
											{principles.length}
										</span>
									</div>
								</div>

								<div className='flex gap-3 items-center'>
									<Button
										variant='ghost'
										size='icon'
										className='rounded-full'
										onClick={() => {
											if (carouselApi) {
												carouselApi.scrollPrev();
											}
										}}
										disabled={activeModal === 0}
									>
										<ChevronLeft
											size={20}
											className='text-slate-700'
										/>
									</Button>

									{/* Pagination dots */}
									<div className='flex gap-1.5 items-center'>
										{principles.map((_, index) => (
											<div
												key={index}
												className={cn(
													'w-2 h-2 rounded-full transition-colors duration-200',
													activeModal === index
														? 'bg-blue-600'
														: 'bg-slate-200 hover:bg-slate-300 cursor-pointer'
												)}
												onClick={() => {
													if (carouselApi) {
														carouselApi.scrollTo(
															index
														);
													}
												}}
											/>
										))}
									</div>

									<Button
										variant='ghost'
										size='icon'
										className='rounded-full'
										onClick={() => {
											if (carouselApi) {
												carouselApi.scrollNext();
											}
										}}
										disabled={
											activeModal ===
											principles.length - 1
										}
									>
										<ChevronRight
											size={20}
											className='text-slate-700'
										/>
									</Button>

									<Button
										variant='ghost'
										size='icon'
										className='rounded-full'
										onClick={closeModal}
									>
										<X
											size={20}
											className='text-slate-500'
										/>
									</Button>
								</div>
							</div>

							<Carousel
								setApi={setCarouselApi}
								opts={{
									align: 'start',
									loop: false,
									skipSnaps: false,
									startIndex: activeModal,
								}}
								className='w-full'
							>
								<CarouselContent>
									{principles.map((principle, index) => (
										<CarouselItem
											key={index}
											className='pt-0'
										>
											<div className='pt-4 px-6 pb-6 overflow-auto max-h-[calc(90vh-80px)]'>
												<div className='flex items-center gap-4 mb-4'>
													<div
														className={cn(
															'w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0',
															principle.bgColorLight
														)}
													>
														<span
															className={cn(
																principle.textColorDark
															)}
														>
															{principle.icon}
														</span>
													</div>
													<h3 className='text-2xl font-bold text-blue-950'>
														{principle.title}
													</h3>
												</div>

												<p className='text-slate-700 leading-relaxed mb-8'>
													{principle.content}
												</p>

												<div
													className={cn(
														'h-0.5 w-16 mb-6 rounded-full',
														principle.color
													)}
												></div>

												<div>
													<h4 className='text-lg font-semibold text-blue-950 mb-4'>
														Key Applications
													</h4>
													<ul className='space-y-4'>
														{principle.keyPoints.map(
															(point, idx) => (
																<li
																	key={idx}
																	className='flex gap-3'
																>
																	<div className='mt-1'>
																		<div
																			className={cn(
																				'w-6 h-6 rounded-full flex items-center justify-center',
																				principle.color
																			)}
																		>
																			<span className='text-white text-xs font-bold'>
																				{idx +
																					1}
																			</span>
																		</div>
																	</div>
																	<div>
																		<p className='font-medium text-slate-800 mb-1'>
																			{
																				point.title
																			}
																		</p>
																		<p className='text-sm text-slate-600'>
																			{
																				point.description
																			}
																		</p>
																	</div>
																</li>
															)
														)}
													</ul>
												</div>

												{/* Modal CTA */}
												<div className='mt-8 pt-6 border-t border-slate-100'>
													<Link
														href='/programs/six-week#waitlist-form'
														className='flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium transition-all duration-300 text-center w-full'
														onClick={() => {
															closeModal();
														}}
													>
														Apply these principles
														with our 6-week program
														<ArrowRight size={18} />
													</Link>
												</div>
											</div>
										</CarouselItem>
									))}
								</CarouselContent>
							</Carousel>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
