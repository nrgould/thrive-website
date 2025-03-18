import { BookOpen, Layers, Users, ArrowRight } from 'lucide-react';
import * as motion from 'motion/react-client';

export function ThreeColumnsSection() {
	return (
		<section className='w-full py-16 px-4 md:px-8 bg-white'>
			<div className='max-w-6xl mx-auto'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-6 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					A Better Way to THRIVE
				</motion.h2>

				<motion.p
					className='text-xl text-slate-700 text-center max-w-2xl mx-auto mb-12 leading-relaxed'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true }}
				>
					THRIVE is a program built on science-backed strategies that
					support physical, mental, and emotional well-being, so you
					can improve your daily routine, make more sustainable
					lifestyle changes, reduce stress, and connect more deeply
					with your health goals and loved ones.
				</motion.p>

				<div className='flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-0'>
					<motion.div
						className='bg-blue-50 rounded-3xl p-8 text-center flex flex-col items-center w-full md:w-1/3 h-full'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
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
						<div className='flex-1 flex flex-col'>
							<p className='text-slate-700 mb-3 leading-relaxed'>
								Video tutorials, downloadable resources, &
								interactive learning modules focused on
								Lifestyle Medicine & Behavior Design
							</p>
						</div>
					</motion.div>

					{/* Arrow 1 */}
					<motion.div
						className='hidden md:flex justify-center items-center'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						viewport={{ once: true }}
					>
						<div className='w-16 h-16 flex items-center justify-center'>
							<ArrowRight className='text-blue-400 w-12 h-12' />
						</div>
					</motion.div>

					<motion.div
						className='bg-blue-50 rounded-3xl p-8 text-center flex flex-col items-center w-full md:w-1/3 h-full'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
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
						<div className='flex-1 flex flex-col'>
							<p className='text-slate-700 mb-3 leading-relaxed'>
								Participants use Behavior Design to create
								personalized habit plans aligned with their
								health goals.
							</p>
						</div>
					</motion.div>

					{/* Arrow 2 */}
					<motion.div
						className='hidden md:flex justify-center items-center'
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<div className='w-16 h-16 flex items-center justify-center'>
							<ArrowRight className='text-blue-400 w-12 h-12' />
						</div>
					</motion.div>

					<motion.div
						className='bg-blue-50 rounded-3xl p-8 text-center flex flex-col items-center w-full md:w-1/3 h-full'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
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
						<div className='flex-1 flex flex-col justify-between'>
							<div>
								<p className='text-slate-700 mb-3'>
									1:1 coaching sessions
								</p>
								<p className='text-slate-700 mb-3'>
									Small group learning circles
								</p>
							</div>
							<p className='text-slate-700'>
								Larger, full cohort sessions
							</p>
						</div>
					</motion.div>
				</div>

				{/* Mobile arrows - visible only on small screens */}
				<div className='flex md:hidden justify-center mt-4 mb-4'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						viewport={{ once: true }}
					>
						<ArrowRight className='text-blue-400 w-8 h-8 transform rotate-90' />
					</motion.div>
				</div>
			</div>
		</section>
	);
}
