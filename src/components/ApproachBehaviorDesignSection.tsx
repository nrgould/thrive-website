import * as motion from 'motion/react-client';
import { Check, CheckCircle, Zap, Target, RefreshCw, Cog } from 'lucide-react';

export function ApproachBehaviorDesignSection() {
	return (
		<section className='w-full py-24 px-4 md:px-8 bg-blue-50'>
			<div className='max-w-6xl mx-auto'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-6 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Behavior Design: The Science of Lasting Change
				</motion.h2>

				<motion.p
					className='text-xl text-slate-700 text-center max-w-3xl mx-auto mb-16 leading-relaxed'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true }}
				>
					THRIVE uses Behavior Design to simplify habit change and
					bridge the gap between intentions and actions. This
					evidence-based approach focuses on making healthy choices
					easier, not just relying on willpower.
				</motion.p>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center'>
					<motion.div
						className='space-y-6'
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<h3 className='text-2xl font-bold text-blue-600 mb-4'>
							Why most health programs fail
						</h3>
						<p className='text-slate-700 text-lg leading-relaxed'>
							Traditional approaches to behavior change often rely
							on willpower alone, without addressing the
							underlying systems that drive our habits and
							routines.
						</p>
						<p className='text-slate-700 text-lg leading-relaxed'>
							The problem isn&apos;t you—it&apos;s the approach.
							Most programs create a &quot;willpower gap&quot; that
							eventually leads to failure when motivation
							inevitably fades.
						</p>
						<p className='text-slate-700 text-lg leading-relaxed'>
							Our approach bridges this gap by creating systems
							that make healthy behaviors easier, more automatic,
							and aligned with your values and goals.
						</p>
					</motion.div>

					<motion.div
						className='bg-white rounded-3xl p-8 shadow-sm'
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<h3 className='text-2xl font-bold text-blue-950 mb-6'>
							The Willpower Gap
						</h3>
						<div className='space-y-5'>
							<div className='flex items-start gap-4'>
								<div className='w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0'>
									<Check className='text-red-500' size={22} />
								</div>
								<div>
									<h4 className='text-lg font-semibold text-slate-800 mb-1'>
										Motivation fades
									</h4>
									<p className='text-slate-600'>
										Initial enthusiasm naturally decreases
										over time, making it hard to maintain
										new habits.
									</p>
								</div>
							</div>

							<div className='flex items-start gap-4'>
								<div className='w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0'>
									<Check className='text-red-500' size={22} />
								</div>
								<div>
									<h4 className='text-lg font-semibold text-slate-800 mb-1'>
										Systems beat willpower
									</h4>
									<p className='text-slate-600'>
										Effective habit change comes from
										designing better systems, not just
										trying harder.
									</p>
								</div>
							</div>

							<div className='flex items-start gap-4'>
								<div className='w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0'>
									<Check className='text-red-500' size={22} />
								</div>
								<div>
									<h4 className='text-lg font-semibold text-slate-800 mb-1'>
										Complexity causes failure
									</h4>
									<p className='text-slate-600'>
										Too many changes at once overwhelms the
										brain and leads to abandoning new
										habits.
									</p>
								</div>
							</div>

							<div className='flex items-start gap-4'>
								<div className='w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0'>
									<Check
										className='text-green-500'
										size={22}
									/>
								</div>
								<div>
									<h4 className='text-lg font-semibold text-slate-800 mb-1'>
										THRIVE bridges the gap
									</h4>
									<p className='text-slate-600'>
										Our approach creates systems and
										environments that make healthy behaviors
										the path of least resistance.
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>

				<motion.h3
					className='text-2xl md:text-3xl font-bold text-center mt-20 mb-12 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Key Behavior Design Principles
				</motion.h3>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					<motion.div
						className='bg-white p-8 rounded-3xl shadow-sm'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
							<Target className='text-blue-500' size={24} />
						</div>
						<h4 className='text-xl font-bold text-blue-950 mb-3'>
							Clarity comes first
						</h4>
						<p className='text-slate-700 leading-relaxed'>
							We help you identify specific, concrete behaviors to
							focus on instead of vague goals. This precision
							creates a clear path forward and measurable
							progress.
						</p>
					</motion.div>

					<motion.div
						className='bg-white p-8 rounded-3xl shadow-sm'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
							<Zap className='text-blue-500' size={24} />
						</div>
						<h4 className='text-xl font-bold text-blue-950 mb-3'>
							Make it easy
						</h4>
						<p className='text-slate-700 leading-relaxed'>
							We focus on reducing friction for healthy behaviors
							and increasing friction for unhealthy ones. Small
							environmental changes can dramatically impact your
							daily choices.
						</p>
					</motion.div>

					<motion.div
						className='bg-white p-8 rounded-3xl shadow-sm'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
							<RefreshCw className='text-blue-500' size={24} />
						</div>
						<h4 className='text-xl font-bold text-blue-950 mb-3'>
							Build habit chains
						</h4>
						<p className='text-slate-700 leading-relaxed'>
							By attaching new behaviors to existing routines, we
							help you create powerful habit chains that become
							automatic over time, requiring less conscious
							effort.
						</p>
					</motion.div>

					<motion.div
						className='bg-white p-8 rounded-3xl shadow-sm'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						viewport={{ once: true }}
					>
						<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
							<Cog className='text-blue-500' size={24} />
						</div>
						<h4 className='text-xl font-bold text-blue-950 mb-3'>
							Design for consistency
						</h4>
						<p className='text-slate-700 leading-relaxed'>
							We prioritize consistency over intensity, focusing
							on small, sustainable actions that build momentum
							over time rather than dramatic changes that are
							difficult to maintain.
						</p>
					</motion.div>

					<motion.div
						className='bg-white p-8 rounded-3xl shadow-sm md:col-span-2 lg:col-span-1'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
							<CheckCircle className='text-blue-500' size={24} />
						</div>
						<h4 className='text-xl font-bold text-blue-950 mb-3'>
							Celebrate small wins
						</h4>
						<p className='text-slate-700 leading-relaxed'>
							We emphasize recognizing and celebrating progress,
							no matter how small. This positive reinforcement
							builds motivation and creates a sense of momentum
							that sustains long-term change.
						</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
