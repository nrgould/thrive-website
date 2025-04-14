import * as motion from 'motion/react-client';
import { BookOpen, Layers, Users, ArrowRight } from 'lucide-react';

const methodologyData = [
	{
		id: 'education',
		Icon: BookOpen,
		iconBgColor: 'bg-blue-500',
		title: 'Education',
		subtitle: 'Learn a Healthier Way',
		description1:
			'Understanding forms the foundation of lasting change. We provide scientifically-backed knowledge about Lifestyle Medicine and through theits six pillars of THRIVE: nutrition, physical activity, sleep, stress management, growth mindset, and social connection, and healthy habits.',
		description2: 'Our educational approach includes:',
		listItems: [
			'Evidence-based health and nutrition information for mind and body',
			'Practical learning modules on each pillar',
			'Debunking common health myths and misconceptions',
			'Real-world applications of scientific research',
		],
		accentColor: 'blue',
	},
	{
		id: 'integration',
		Icon: Layers,
		iconBgColor: 'bg-teal-500',
		title: 'Integration',
		subtitle: 'Make Sustainable Change',
		description1:
			"Knowledge alone isn't enough. We use proven Behavior Design principles to help you transform information into action through personalized habit formation that fits your life, values, and goals.",
		description2: 'Our integration process includes:',
		listItems: [
			'Personalized habit mapping and implementation plans',
			'Techniques to overcome the willpower gap and build more self-control',
			'Environmental design for easier healthy choices',
			'Progressive skill building through micro-habits',
		],
		accentColor: 'teal',
	},
	{
		id: 'connection',
		Icon: Users,
		iconBgColor: 'bg-green-500',
		title: 'Connection',
		subtitle: 'Engage in a Community of Support',
		description1:
			'Human beings are tribal and rResearch consistently shows that social support is crucial for lasting behavior change. Our approach embeds you in a supportive community with expert guidance to help you apply learning, navigate challenges and celebrate successes.',
		description2: 'Our connection framework includes:',
		listItems: [
			'Personalized 1:1 coaching with health experts',
			'Small group learning circles for peer support and sharing',
			'Community practice sessions and accountability',
			'Long-term maintenance strategies and support',
		],
		accentColor: 'green',
	},
];

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

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
					{methodologyData.map((item, index) => (
						<motion.div
							key={item.id}
							className='bg-blue-50 rounded-3xl p-8 flex flex-col'
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
						>
							<div
								className={`w-16 h-16 ${item.iconBgColor} rounded-full flex items-center justify-center mb-6 shadow-md`}
							>
								<item.Icon className='text-white' size={28} />
							</div>
							<h3
								className={`text-2xl font-bold text-${item.accentColor}-500 mb-2`}
							>
								{item.title}
							</h3>
							<h4 className='text-xl font-medium text-blue-900 mb-4'>
								{item.subtitle}
							</h4>
							<div className='flex-1'>
								<p className='text-slate-700 mb-6 leading-relaxed'>
									{item.description1}
								</p>
								<p className='text-slate-700 mb-6 leading-relaxed'>
									{item.description2}
								</p>
								<ul className='space-y-3 text-slate-700'>
									{item.listItems.map((listItem, i) => (
										<li
											key={i}
											className='flex items-start gap-2'
										>
											<ArrowRight
												className={`text-${item.accentColor}-400 mt-1 flex-shrink-0`}
												size={16}
											/>
											<span>{listItem}</span>
										</li>
									))}
								</ul>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
