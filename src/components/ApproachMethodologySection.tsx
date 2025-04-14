import * as motion from 'motion/react-client';
import { BookOpen, Layers, Users, ArrowRight } from 'lucide-react';

export function ApproachMethodologySection() {
	return (
		<section className='w-full py-24 px-4 md:px-8 bg-white'>
			<div className='max-w-6xl mx-auto'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-6 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					The THRIVE Methodology
				</motion.h2>

				<motion.p
					className='text-xl text-slate-700 text-center max-w-3xl mx-auto mb-16 leading-relaxed'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					Our approach combines three essential elements to create a
					comprehensive system for sustainable health transformation.
					Each component builds on the others to help you make changes
					that can last a lifetime.
				</motion.p>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
					<motion.div
						className='bg-blue-50 rounded-3xl p-8 flex flex-col'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
							<BookOpen className='text-blue-500' size={28} />
						</div>
						<h3 className='text-2xl font-bold text-blue-500 mb-2'>
							Education
						</h3>
						<h4 className='text-xl font-medium text-blue-900 mb-4'>
							Learn a Healthier Way
						</h4>
						<div className='flex-1'>
							<p className='text-slate-700 mb-6 leading-relaxed'>
								Understanding forms the foundation of lasting
								change. We provide scientifically-backed
								knowledge about Lifestyle Medicine and through
								theits six pillars of THRIVE: nutrition,
								physical activity, sleep, stress management,
								growth mindset, and social connection, and
								healthy habits.
							</p>
							<p className='text-slate-700 mb-6 leading-relaxed'>
								Our educational approach includes:
							</p>
							<ul className='space-y-3 text-slate-700'>
								<li className='flex items-start gap-2'>
									<ArrowRight
										className='text-blue-400 mt-1 flex-shrink-0'
										size={16}
									/>
									<span>
										Evidence-based health and nutrition
										information for mind and body
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<ArrowRight
										className='text-blue-400 mt-1 flex-shrink-0'
										size={16}
									/>
									<span>
										Practical learning modules on each
										pillar
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<ArrowRight
										className='text-blue-400 mt-1 flex-shrink-0'
										size={16}
									/>
									<span>
										Debunking common health myths and
										misconceptions
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<ArrowRight
										className='text-blue-400 mt-1 flex-shrink-0'
										size={16}
									/>
									<span>
										Real-world applications of scientific
										research
									</span>
								</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						className='bg-blue-50 rounded-3xl p-8 flex flex-col'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
							<Layers className='text-blue-500' size={28} />
						</div>
						<h3 className='text-2xl font-bold text-blue-500 mb-2'>
							Integration
						</h3>
						<h4 className='text-xl font-medium text-blue-900 mb-4'>
							Make Sustainable Change
						</h4>
						<div className='flex-1'>
							<p className='text-slate-700 mb-6 leading-relaxed'>
								Knowledge alone isn&apos;t enough. We use proven
								Behavior Design principles to help you transform
								information into action through personalized
								habit formation that fits your life, values, and
								goals.
							</p>
							<p className='text-slate-700 mb-6 leading-relaxed'>
								Our integration process includes:
							</p>
							<ul className='space-y-3 text-slate-700'>
								<li className='flex items-start gap-2'>
									<ArrowRight
										className='text-blue-400 mt-1 flex-shrink-0'
										size={16}
									/>
									<span>
										Personalized habit mapping and
										implementation plans
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<ArrowRight
										className='text-blue-400 mt-1 flex-shrink-0'
										size={16}
									/>
									<span>
										Techniques to overcome the willpower gap
										and build more self-control
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<ArrowRight
										className='text-blue-400 mt-1 flex-shrink-0'
										size={16}
									/>
									<span>
										Environmental design for easier healthy
										choices
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<ArrowRight
										className='text-blue-400 mt-1 flex-shrink-0'
										size={16}
									/>
									<span>
										Progressive skill building through
										micro-habits
									</span>
								</li>
							</ul>
						</div>
					</motion.div>

					<motion.div
						className='bg-blue-50 rounded-3xl p-8 flex flex-col'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
							<Users className='text-blue-500' size={28} />
						</div>
						<h3 className='text-2xl font-bold text-blue-500 mb-2'>
							Connection
						</h3>
						<h4 className='text-xl font-medium text-blue-900 mb-4'>
							Maintain Success
						</h4>
						<div className='flex-1'>
							<p className='text-slate-700 mb-6 leading-relaxed'>
								Human beings are tribal and rResearch
								consistently shows that social support is
								crucial for lasting behavior change. Our
								approach embeds you in a supportive community
								with expert guidance to help you apply learning,
								navigate challenges and celebrate successes.
							</p>
							<p className='text-slate-700 mb-6 leading-relaxed'>
								Our connection framework includes:
							</p>
							<ul className='space-y-3 text-slate-700'>
								<li className='flex items-start gap-2'>
									<ArrowRight
										className='text-blue-400 mt-1 flex-shrink-0'
										size={16}
									/>
									<span>
										Personalized 1:1 coaching with health
										experts
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<ArrowRight
										className='text-blue-400 mt-1 flex-shrink-0'
										size={16}
									/>
									<span>
										Small group learning circles for peer
										support and sharing
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<ArrowRight
										className='text-blue-400 mt-1 flex-shrink-0'
										size={16}
									/>
									<span>
										Community practice sessions and
										accountability
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<ArrowRight
										className='text-blue-400 mt-1 flex-shrink-0'
										size={16}
									/>
									<span>
										Long-term maintenance strategies and
										support
									</span>
								</li>
							</ul>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
