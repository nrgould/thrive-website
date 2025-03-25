import * as motion from 'motion/react-client';
import {
	UserCircle,
	ArrowRight,
	MessageCircle,
	UserPlus,
	Globe,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function SupportiveExperienceSection() {
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
			id='connection-section'
			className='w-full py-32 px-4 md:px-8 bg-blue-50'
		>
			<div className='max-w-6xl mx-auto'>
				<motion.p
					className='text-xl text-blue-600 font-semibold text-center mb-4'
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
					viewport={{ once: true }}
				>
					CONNECTION
				</motion.p>

				<motion.h2
					className='text-4xl md:text-5xl font-bold text-center mb-16 text-blue-950 leading-tight'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Supported Every Step of the Way
				</motion.h2>

				{/* Lifestyle Medicine Class Image Section */}
				<motion.div
					className='mb-24 rounded-3xl overflow-hidden shadow-xl'
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
				>
					<div className='relative w-full aspect-[16/9]'>
						<Image
							src='/lifestyle/speaking.webp'
							alt='Lifestyle Medicine Class with Dr. Brian Asbill'
							fill
							className='object-cover'
							priority
						/>
					</div>
					<div className='bg-white p-6 md:p-8'>
						<h3 className='text-2xl font-bold text-blue-950 mb-3'>
							Lifestyle Medicine Education
						</h3>
						<p className='text-slate-700'>
							Our experts like Dr. Brian Asbill provide
							evidence-based lifestyle medicine education in a
							supportive group setting. Learn practical strategies
							to improve your health through plant-powered
							nutrition, physical activity, stress management, and
							more.
						</p>
					</div>
				</motion.div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
					<motion.div
						className='bg-white rounded-3xl p-10 shadow-md hover:shadow-lg transition-shadow'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-8'>
							<MessageCircle
								className='text-blue-600'
								size={32}
							/>
						</div>
						<h3 className='text-2xl font-bold text-blue-950 mb-6'>
							Small-Group Discussions
						</h3>
						<ul className='space-y-4 text-slate-700 text-lg'>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									Learn and grow with others on a similar
									health journey
								</p>
							</li>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									Share challenges and celebrate successes
									together
								</p>
							</li>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									Build meaningful connections that support
									lasting change
								</p>
							</li>
						</ul>
					</motion.div>

					<motion.div
						className='bg-white rounded-3xl p-10 shadow-md hover:shadow-lg transition-shadow'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						viewport={{ once: true }}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-8'>
							<UserPlus className='text-blue-600' size={32} />
						</div>
						<h3 className='text-2xl font-bold text-blue-950 mb-6'>
							One-on-One Coaching
						</h3>
						<ul className='space-y-4 text-slate-700 text-lg'>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									Personalized guidance for your unique health
									goals
								</p>
							</li>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									Regular check-ins to help overcome obstacles
								</p>
							</li>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									Accountability and encouragement when you
									need it most
								</p>
							</li>
						</ul>
					</motion.div>

					<motion.div
						className='bg-white rounded-3xl p-10 shadow-md hover:shadow-lg transition-shadow'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						viewport={{ once: true }}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-8'>
							<Globe className='text-blue-600' size={32} />
						</div>
						<h3 className='text-2xl font-bold text-blue-950 mb-6'>
							Social Opportunities
						</h3>
						<ul className='space-y-4 text-slate-700 text-lg'>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									Virtual meetings that fit into your busy
									schedule
								</p>
							</li>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									In-person events and workshops for hands-on
									learning
								</p>
							</li>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									Community activities that make healthy
									living enjoyable
								</p>
							</li>
						</ul>
					</motion.div>
				</div>

				{/* CTA Button */}
				<motion.div
					className='flex justify-center mb-20'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<Link
						href='/programs/six-week'
						className='flex items-center gap-3 px-10 py-5 bg-blue-600 text-white rounded-full font-semibold text-xl hover:bg-blue-700 transition-colors shadow-md'
					>
						Start Your Health Journey
						<ArrowRight size={20} />
					</Link>
				</motion.div>

				<motion.h3
					className='text-3xl md:text-4xl font-bold text-center mt-28 mb-16 text-blue-950'
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					viewport={{ once: true }}
				>
					The THRIVE Team
				</motion.h3>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
					{team.map((person, index) => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							key={index}
							className='bg-white rounded-3xl p-8 text-center shadow-md hover:shadow-lg transition-shadow'
						>
							<div className='w-28 h-28 rounded-full overflow-hidden mx-auto mb-6'>
								{person.image ? (
									<Image
										src={person.image}
										alt={person.name}
										width={112}
										height={112}
										className='w-full h-full object-cover'
									/>
								) : (
									<div className='w-full h-full bg-blue-100 flex items-center justify-center'>
										<UserCircle
											className='text-blue-300'
											size={56}
										/>
									</div>
								)}
							</div>
							<h4 className='text-xl font-bold text-blue-950 mb-1'>
								{person.name}
							</h4>
							<p className='text-slate-600 text-base'>
								{person.role}
							</p>
						</motion.div>
					))}
				</div>

				<motion.div
					className='flex justify-center mt-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<Link
						href='/about/team'
						className='flex items-center gap-3 px-8 py-4 bg-blue-500 text-white rounded-full font-semibold text-lg hover:bg-blue-600 transition-colors'
					>
						Meet Our Full Team
						<ArrowRight size={20} />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
