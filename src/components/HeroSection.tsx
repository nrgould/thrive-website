import * as motion from 'motion/react-client';
import {
	ArrowRight,
	Apple,
	Activity,
	Moon,
	Sparkles,
	Brain,
	Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
	return (
		<section className='w-full min-h-[60vh] relative flex flex-col items-center justify-center px-4 md:px-8 py-16 md:py-24 overflow-hidden bg-gradient-to-b from-blue-50 to-white'>
			{/* Content */}
			<div className='relative z-10 max-w-4xl mx-auto w-full text-center'>
				{/* Decorative Elements */}
				<div className='absolute inset-0 pointer-events-none'>
					{/* Top Left Circle */}
					<motion.div
						className='absolute top-0 left-0 w-32 h-32 rounded-full bg-blue-100/70'
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					/>

					{/* Bottom Right Circle */}
					<motion.div
						className='absolute bottom-0 right-0 w-40 h-40 rounded-full bg-blue-100/70'
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.5 }}
					/>

					{/* Floating Icons from Program Pillars */}
					<motion.div
						className='absolute top-5 right-10 text-blue-400/70'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 0.8, y: 0 }}
						transition={{
							duration: 2,
							delay: 0.3,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<Apple size={40} />
					</motion.div>

					<motion.div
						className='absolute bottom-10 left-0 text-blue-500/70'
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 0.7, y: 0 }}
						transition={{
							duration: 2.5,
							delay: 0.5,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<Activity size={48} />
					</motion.div>

					<motion.div
						className='absolute top-1/4 right-0 text-blue-600/70'
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 0.7, x: 0 }}
						transition={{
							duration: 3,
							delay: 0.7,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<Moon size={42} />
					</motion.div>

					<motion.div
						className='absolute bottom-1/4 left-5 text-blue-400/70'
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 0.8, scale: 1 }}
						transition={{
							duration: 2.3,
							delay: 0.9,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<Sparkles size={44} />
					</motion.div>

					<motion.div
						className='absolute bottom-20 right-0 text-blue-500/70'
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 0.7, y: 0 }}
						transition={{
							duration: 2.7,
							delay: 1.1,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<Brain size={46} />
					</motion.div>

					<motion.div
						className='absolute top-1/4 left-0 text-blue-600/60'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 0.7, scale: 1 }}
						transition={{
							duration: 2.4,
							delay: 1.3,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					>
						<Users size={45} />
					</motion.div>
				</div>

				<motion.div
					className='space-y-6 md:space-y-8 relative'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
				>
					<motion.span
						className='text-blue-600 font-semibold tracking-wide block'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						THRIVE
					</motion.span>

					{/* Headline with decorative underline */}
					<div className='relative inline-block'>
						<motion.h1
							className='text-4xl sm:text-5xl md:text-6xl font-bold text-blue-950 leading-tight'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							<span className='block mb-2'>
								Lifestyle is the{' '}
								<span className='text-blue-500 relative'>
									Cause
									<motion.span
										className='absolute -bottom-2 left-0 w-full h-1 bg-blue-300'
										initial={{ width: 0 }}
										animate={{ width: '100%' }}
										transition={{ duration: 0.6, delay: 1 }}
									/>
								</span>
							</span>
							<span className='block'>
								Lifestyle is also the{' '}
								<span className='text-blue-500 relative'>
									Cure
									<motion.span
										className='absolute -bottom-2 left-0 w-full h-1 bg-blue-300'
										initial={{ width: 0 }}
										animate={{ width: '100%' }}
										transition={{
											duration: 0.6,
											delay: 1.2,
										}}
									/>
								</span>
							</span>
						</motion.h1>
					</div>

					<motion.p
						className='text-lg sm:text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						A program built on science-backed strategies so you can
						improve your daily routine, make more sustainable
						lifestyle changes.
					</motion.p>

					<motion.div
						className='flex items-center justify-center gap-4 mt-8'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.7 }}
					>
						<Link href='/programs/six-week#waitlist-form'>
							<motion.button
								className='px-8 py-4 bg-blue-500 text-white rounded-full font-medium text-lg flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl'
								whileTap={{ scale: 0.95 }}
							>
								Register for next cohort{' '}
								<ArrowRight className='ml-1' size={20} />
							</motion.button>
						</Link>
					</motion.div>

					<motion.div
						className='flex items-center gap-3 justify-center mt-8'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
					>
						<span className='text-slate-600 text-sm'>
							Sponsored by
						</span>
						<a
							href='https://c2life.org'
							target='_blank'
							rel='noopener noreferrer'
							className='hover:opacity-80 transition-opacity'
						>
							<div className='h-10 w-32 relative'>
								<Image
									src='/C2Life logo.png'
									alt='C2Life'
									className='h-full w-full object-contain'
									width={128}
									height={40}
									priority
								/>
							</div>
						</a>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
