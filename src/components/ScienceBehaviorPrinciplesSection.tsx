import * as motion from 'motion/react-client';
import {
	Zap,
	Lightbulb,
	Cog,
	Clipboard,
	TrendingUp,
	Puzzle,
} from 'lucide-react';

interface PrincipleCard {
	title: string;
	content: string;
	icon: React.ReactNode;
}

export function ScienceBehaviorPrinciplesSection() {
	const principles: PrincipleCard[] = [
		{
			title: 'Motivation & Willpower',
			content:
				'Many people believe that a strong sense of willpower or motivation is the cornerstone to creating lasting change. Reality is that motivation is like a wave that constantly changes over time and is not the most reliable thing for us to use when designing our habits. There are much better places to start.',
			icon: <Zap className='text-blue-500' size={24} />,
		},
		{
			title: 'Skills of Change',
			content:
				'Changing our behavior is a skill and, like any skill, requires some knowledge and practice. Driving a car is a skill that, in the beginning, feels very uncomfortable, but for most becomes easy and automatic. Just like learning to drive a car, everyone can develop the skills of changing their habits.',
			icon: <Lightbulb className='text-blue-500' size={24} />,
		},
		{
			title: 'Habit Systems',
			content:
				'Often we feel that our habits happen to us and that lasting behavior change is a mysterious process. Science-based habit systems provide us with reliable approaches for anyone to build any habit in any domain. Building these systems allows us to make our habits work For Us and not To Us.',
			icon: <Cog className='text-blue-500' size={24} />,
		},
		{
			title: 'Habit Recipes',
			content:
				'Habit Recipes are one of the most important and foundational habit systems that anyone can create. Learn how to establish the most reliable Cues, determine the right size to start a new Behavior, and how to best Celebrate success, so that we get our brains working for us in making our new behaviors Automatic.',
			icon: <Clipboard className='text-blue-500' size={24} />,
		},
		{
			title: 'Small Wins & 1% Better',
			content:
				"Habits are the compound interest of self-development. In a culture of 'Go Big or Go Home' marketing, it is often difficult for us to recognize the importance of small wins. But small + smart wins form the foundation of the operating system of Compounding Effect - the system that allows us to reap huge rewards thru small wins compounded over time.",
			icon: <TrendingUp className='text-blue-500' size={24} />,
		},
		{
			title: 'Making the Right Choice the Easy Choice',
			content:
				'Our environment plays a huge role in triggering and supporting our habits. Setting up our environment in smart ways consistently nudges us in the directions we want to go and allows the choices we want to make to become the easiest choices for us to make.',
			icon: <Puzzle className='text-blue-500' size={24} />,
		},
	];

	return (
		<section className='w-full py-24 px-4 md:px-8 bg-blue-50'>
			<div className='max-w-6xl mx-auto'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-6 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					Core Principles of Behavior Design
				</motion.h2>

				<motion.p
					className='text-xl text-slate-700 text-center max-w-3xl mx-auto mb-16 leading-relaxed'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					Understanding these key principles will help you create
					lasting changes in your life through evidence-based
					approaches to behavior design.
				</motion.p>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{principles.map((principle, index) => (
						<motion.div
							key={index}
							className='bg-white p-8 rounded-3xl shadow-sm'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{
								scale: 1.03,
								transition: { duration: 0.2 },
							}}
						>
							<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6'>
								<motion.div
									whileHover={{ rotate: 15 }}
									transition={{ duration: 0.3 }}
								>
									{principle.icon}
								</motion.div>
							</div>
							<h4 className='text-xl font-bold text-blue-950 mb-3'>
								{principle.title}
							</h4>
							<p className='text-slate-700 leading-relaxed'>
								{principle.content}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
