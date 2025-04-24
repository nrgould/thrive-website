'use client';

import { ArrowRight, BookOpen, Layers, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { MethodologyItem } from '../ApproachMethodologySection';

const methodologyData: MethodologyItem[] = [
	{
		id: 'education',
		Icon: BookOpen,
		iconBgColor: 'bg-blue-500',
		accentColor: 'blue',
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
	},
	{
		id: 'integration',
		Icon: Layers,
		iconBgColor: 'bg-teal-500',
		accentColor: 'teal',
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
	},
	{
		id: 'connection',
		Icon: Users,
		iconBgColor: 'bg-green-500',
		accentColor: 'green',
		title: 'Connection',
		subtitle: 'Engage in a Community of Support',
		description1:
			'Human beings are tribal and Research consistently shows that social support is crucial for lasting behavior change. Our approach embeds you in a supportive community with expert guidance to help you apply learning, navigate challenges and celebrate successes.',
		description2: 'Our connection framework includes:',
		listItems: [
			'Personalized 1:1 coaching with health experts',
			'Small group learning circles for peer support and sharing',
			'Community practice sessions and accountability',
			'Long-term maintenance strategies and support',
		],
	},
];

interface ApproachMethodologyTabsProps {
	colorMap: Record<string, string>;
	textColorMap: Record<string, string>;
	iconColorMap: Record<string, string>;
}

function ApproachMethodologyTabs({
	colorMap,
	textColorMap,
	iconColorMap,
}: ApproachMethodologyTabsProps) {
	const [activeTabId, setActiveTabId] = useState(methodologyData[0].id);
	const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
	const [underlineStyle, setUnderlineStyle] = useState({});

	const activeTab = methodologyData.find((item) => item.id === activeTabId)!;

	useEffect(() => {
		const activeTabIndex = methodologyData.findIndex(
			(item) => item.id === activeTabId
		);
		const activeTabElement = tabsRef.current[activeTabIndex];

		if (activeTabElement) {
			setUnderlineStyle({
				left: activeTabElement.offsetLeft,
				width: activeTabElement.offsetWidth,
				backgroundColor: colorMap[activeTab.iconBgColor],
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeTabId, activeTab.iconBgColor, methodologyData]); // Added methodologyData dependency

	return (
		<motion.div
			className='bg-white rounded-3xl shadow-xl overflow-hidden'
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			{/* Tab Navigation */}
			<div className='relative border-b border-slate-200'>
				<div className='flex justify-center px-4 sm:px-6'>
					{methodologyData.map((item, index) => (
						<button
							key={item.id}
							ref={(el) => {
								tabsRef.current[index] = el;
							}}
							onClick={() => setActiveTabId(item.id)}
							className={`cursor-pointer py-4 px-5 sm:px-6 text-base sm:text-lg font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 transition-colors duration-200 ease-in-out ${
								activeTabId === item.id
									? `${textColorMap[item.accentColor]}`
									: 'text-slate-500 hover:text-slate-700'
							}`}
						>
							{item.title}
						</button>
					))}
				</div>
				{/* Animated Underline */}
				<motion.div
					className='absolute bottom-0 h-1 rounded-t-full'
					style={{
						backgroundColor: colorMap[activeTab.iconBgColor],
					}}
					animate={underlineStyle}
					transition={{ type: 'spring', stiffness: 350, damping: 30 }}
				/>
			</div>

			{/* Content Area */}
			<div className='relative overflow-hidden'>
				<motion.div
					key={activeTab.id}
					className='p-8 md:p-10'
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -20 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
				>
					<div className='flex flex-col sm:flex-row items-start sm:items-center mb-6 md:mb-8'>
						<div
							className={`w-16 h-16 ${activeTab.iconBgColor} rounded-full flex items-center justify-center mr-0 sm:mr-6 mb-4 sm:mb-0 shadow-md flex-shrink-0`}
						>
							<activeTab.Icon className='text-white' size={28} />
						</div>
						<div className='flex-grow'>
							<h3
								className={`text-2xl font-bold ${textColorMap[activeTab.accentColor]} mb-1`}
							>
								{activeTab.title}
							</h3>
							<h4 className='text-xl font-medium text-blue-900'>
								{activeTab.subtitle}
							</h4>
						</div>
					</div>

					<div className='flex-1'>
						<p className='text-slate-700 mb-5 leading-relaxed'>
							{activeTab.description1}
						</p>
						<p className='text-slate-700 mb-6 leading-relaxed'>
							{activeTab.description2}
						</p>
						<ul className='space-y-3 text-slate-700'>
							{activeTab.listItems.map((listItem, i) => (
								<li key={i} className='flex items-start gap-3'>
									<ArrowRight
										className={`${iconColorMap[activeTab.accentColor]} mt-1 flex-shrink-0`}
										size={16}
									/>
									<span>{listItem}</span>
								</li>
							))}
						</ul>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}

export default ApproachMethodologyTabs;
