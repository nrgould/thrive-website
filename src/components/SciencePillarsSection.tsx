import * as motion from 'motion/react-client';
import { Apple, Activity, Moon, Brain, Users } from 'lucide-react';

interface Pillar {
	title: string;
	subtitle: string;
	icon: React.ReactNode;
	description: string;
	evidence: string[];
	color: string;
	bgColor: string;
	id: string;
}

export function SciencePillarsSection() {
	const pillars: Pillar[] = [
		{
			id: 'nourish',
			title: 'Nourish',
			subtitle: 'Nutrition & Plant-Based Diet',
			icon: <Apple className='w-8 h-8' />,
			description:
				'A whole food, plant-predominant diet has been consistently shown to prevent, treat, and often reverse chronic disease. The scientific evidence supports minimizing processed foods and emphasizing nutrient-dense plant foods.',
			evidence: [
				'Plant-based diets are associated with a 30-40% lower risk of heart disease',
				'Dietary patterns rich in whole plant foods can reduce the risk of type 2 diabetes by up to 50%',
				"Mediterranean-style diets show up to 53% reduction in Alzheimer's disease risk",
				'Higher intake of fruits and vegetables is linked to reduced cancer risk across multiple studies',
			],
			color: 'text-green-500',
			bgColor: 'bg-green-500',
		},
		{
			id: 'move',
			title: 'Move',
			subtitle: 'Physical Activity',
			icon: <Activity className='w-8 h-8' />,
			description:
				'Regular physical activity is a cornerstone of health, with benefits extending far beyond weight management. Research demonstrates its crucial role in both physical and mental well-being.',
			evidence: [
				'150 minutes of moderate exercise weekly reduces all-cause mortality by 20%',
				'Regular physical activity decreases the risk of cardiovascular disease by up to 35%',
				'Exercise is as effective as medication for treating mild to moderate depression',
				'Strength training reduces the risk of age-related muscle loss by up to 30-50%',
			],
			color: 'text-blue-500',
			bgColor: 'bg-blue-500',
		},
		{
			id: 'sleep',
			title: 'Sleep',
			subtitle: 'Sleep & Recovery',
			icon: <Moon className='w-8 h-8' />,
			description:
				'Quality sleep is essential for physical repair, cognitive function, and emotional regulation. Research increasingly reveals its fundamental role in health maintenance and disease prevention.',
			evidence: [
				'7-9 hours of sleep per night is generally associated with optimal cognitive performance',
				'Chronic sleep deprivation can increase the risk of dementia by 30-50%',
				'Poor sleep quality is linked to a 45% increased risk of heart disease',
				'Adequate sleep improves immune function',
			],
			color: 'text-indigo-500',
			bgColor: 'bg-indigo-500',
		},
		{
			id: 'release',
			title: 'Release',
			subtitle: 'Stress Management',
			icon: <Brain className='w-8 h-8' />,
			description:
				'Chronic stress has wide-ranging negative effects on health. Evidence shows that stress management techniques can significantly improve both mental and physical health outcomes.',
			evidence: [
				'Regular meditation can reduce anxiety symptoms by 30%',
				'Stress reduction practices show up to a 40% decrease in chronic pain intensity',
				'Mindfulness-based interventions reduce inflammatory markers and inflammation related gene expression',
				'Stress management programs improve systolic blood pressure control by up to 10mmHg',
			],
			color: 'text-purple-500',
			bgColor: 'bg-purple-500',
		},
		{
			id: 'elevate',
			title: 'Elevate',
			subtitle: 'Growth Mindset & Purpose',
			icon: <Brain className='w-8 h-8' />,
			description:
				'Having a growth mindset and sense of purpose is crucial for long-term health and well-being. Research shows that psychological well-being has direct effects on physical health outcomes.',
			evidence: [
				'Living with a strong sense of purpose added 7 years of quality life in the Blue Zones',
				'Growth mindset interventions improve stress resilience by up to 30%',
				'Living with purpose is associated with a reduced risk of cardiovascular events',
				'Positive psychological well-being reduces cortisol levels and activates the parasympathetic "rest and digest" nervous system',
			],
			color: 'text-orange-500',
			bgColor: 'bg-orange-500',
		},
		{
			id: 'connect',
			title: 'Connect',
			subtitle: 'Social Connection',
			icon: <Users className='w-8 h-8' />,
			description:
				'Strong social relationships and community connections are perhaps the most powerful determinants of health. Research shows that social support significantly impacts both longevity and quality of life.',
			evidence: [
				'Strong social connections increase longevity by up to 50%',
				'Social isolation increases mortality risk comparable to smoking 15 cigarettes daily',
				'Group support programs improve diabetes management outcomes by 25-35%',
				'Social connections reduce the risk of depression by up to 50%',
			],
			color: 'text-pink-500',
			bgColor: 'bg-pink-500',
		},
	];

	return (
		<section className='w-full py-24 px-4 md:px-8 bg-white'>
			<div className='max-w-6xl mx-auto'>
				<motion.h2
					className='text-3xl md:text-4xl font-bold text-center mb-16 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
				>
					The Six Pillars of THRIVE Lifestyle Medicine
				</motion.h2>

				<div className='grid grid-cols-1 gap-12'>
					{pillars.map((pillar, index) => (
						<motion.div
							key={index}
							id={pillar.id}
							className='bg-white rounded-3xl shadow-sm p-8 border border-blue-100 scroll-mt-24'
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className='flex flex-col md:flex-row gap-8'>
								<div className='md:w-1/3'>
									<div className={`${pillar.color} mb-4`}>
										{pillar.icon}
									</div>
									<h3 className='text-2xl font-bold text-blue-950 mb-2'>
										{pillar.title}
									</h3>
									<h4 className='text-lg text-blue-600 mb-4'>
										{pillar.subtitle}
									</h4>
									<p className='text-slate-700 leading-relaxed'>
										{pillar.description}
									</p>
								</div>

								<div className='md:w-2/3'>
									<h4 className='text-lg font-semibold text-blue-950 mb-4'>
										Research Highlights
									</h4>
									<ul className='space-y-4'>
										{pillar.evidence.map((item, i) => (
											<li
												key={i}
												className='flex items-start gap-3'
											>
												<div
													className={`w-2 h-2 rounded-full ${pillar.bgColor} mt-2 flex-shrink-0`}
												/>
												<p className='text-slate-700'>
													{item}
												</p>
											</li>
										))}
									</ul>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
