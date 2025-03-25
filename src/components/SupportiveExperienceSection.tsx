import * as motion from 'motion/react-client';
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
					className='text-4xl md:text-5xl font-bold text-center mb-20 text-blue-950 leading-tight'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Supported Every Step of the Way
				</motion.h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-24'>
					<motion.div
						className='bg-white rounded-3xl p-10 shadow-md hover:shadow-lg transition-shadow'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-8'>
							<Book className='text-blue-600' size={32} />
						</div>
						<h3 className='text-2xl font-bold text-blue-950 mb-6'>
							Comprehensive Learning
						</h3>
						<ul className='space-y-4 text-slate-700 text-lg'>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									Weekly learning sessions covering key
									aspects of lifestyle medicine
								</p>
							</li>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>Practical strategies backed by research</p>
							</li>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									Downloadable resources and video tutorials
								</p>
							</li>
						</ul>
					</motion.div>

					<motion.div
						className='bg-white rounded-3xl p-10 shadow-md hover:shadow-lg transition-shadow'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-8'>
							<Users className='text-blue-600' size={32} />
						</div>
						<h3 className='text-2xl font-bold text-blue-950 mb-6'>
							Community & Support
						</h3>
						<ul className='space-y-4 text-slate-700 text-lg'>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									Small-group discussions for shared learning
									and encouragement
								</p>
							</li>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									One-on-one coaching to personalize your
									approach
								</p>
							</li>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									Virtual and in-person opportunities to
									connect
								</p>
							</li>
						</ul>
					</motion.div>

					<motion.div
						className='bg-white rounded-3xl p-10 shadow-md hover:shadow-lg transition-shadow'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-8'>
							<LineChart className='text-blue-600' size={32} />
						</div>
						<h3 className='text-2xl font-bold text-blue-950 mb-6'>
							Measurable Progress
						</h3>
						<ul className='space-y-4 text-slate-700 text-lg'>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									Habit tracking tools to help reinforce small
									wins
								</p>
							</li>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>Personalized behavior change strategies</p>
							</li>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									Biometric tracking to monitor key health
									improvements
								</p>
							</li>
						</ul>
					</motion.div>

					<motion.div
						className='bg-white rounded-3xl p-10 shadow-md hover:shadow-lg transition-shadow'
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-8'>
							<Calendar className='text-blue-600' size={32} />
						</div>
						<h3 className='text-2xl font-bold text-blue-950 mb-6'>
							Flexible & Practical
						</h3>
						<ul className='space-y-4 text-slate-700 text-lg'>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									No rigid rules—focus on gradual, sustainable
									change
								</p>
							</li>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>
									Adaptable to different lifestyles and
									schedules
								</p>
							</li>
							<li className='flex items-start gap-3'>
								<div className='w-2 h-2 rounded-full bg-blue-500 mt-2.5 flex-shrink-0' />
								<p>Designed for real people with real lives</p>
							</li>
						</ul>
					</motion.div>
				</div>

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
							whileHover={{ scale: 1.05 }}
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
					transition={{ duration: 0.6, delay: 0.7 }}
					viewport={{ once: true }}
				>
					<Link
						href='/about/team'
						className='flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors'
					>
						Meet Our Full Team
						<ArrowRight size={20} />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
