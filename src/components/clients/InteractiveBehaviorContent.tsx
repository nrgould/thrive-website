'use client';

import { useState } from 'react';
import * as motion from 'motion/react-client';
import { PlusCircle, Edit2 } from 'lucide-react';
import { Button } from '../ui/button';

// Define habit building stages data
const stages = [
	{
		id: 'motivation',
		title: 'Motivation',
		description: 'Understanding your "why" behind habit change',
		color: 'blue',
		content:
			'Your motivation creates the initial spark, but systems make habits last. We help you identify your core values and translate them into daily actions.',
		sentence: 'because I want to improve my health',
	},
	{
		id: 'ability',
		title: 'Ability',
		description: 'Making behaviors easier to perform',
		color: 'green',
		content:
			"When behaviors feel difficult, they don't become habits. We break down complex behaviors into simple steps and remove barriers to make healthy choices the easy choices.",
		sentence: 'by starting with just 2 minutes per day',
	},
	{
		id: 'prompt',
		title: 'Prompt',
		description: 'Creating cues that trigger your habits',
		color: 'purple',
		content:
			'Every habit needs a reliable trigger. We help you design environmental cues and connect new habits to existing routines for consistent behavior change.',
		sentence: 'after I brush my teeth each morning',
	},
];

// Define behavior examples
const behaviorExamples = [
	'meditate',
	'exercise',
	'read',
	'drink water',
	'practice gratitude',
	'stretch',
];

export function InteractiveBehaviorContent() {
	const [currentBehavior, setCurrentBehavior] = useState(behaviorExamples[0]);
	const [isEditingBehavior, setIsEditingBehavior] = useState(false);
	const [behaviorInput, setBehaviorInput] = useState(behaviorExamples[0]);

	// Handle behavior input change
	const handleBehaviorInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setBehaviorInput(e.target.value);
	};

	// Submit behavior input
	const submitBehaviorInput = () => {
		if (behaviorInput.trim()) {
			setCurrentBehavior(behaviorInput.trim());
		}
		setIsEditingBehavior(false);
	};

	// Change behavior example
	const changeBehaviorExample = () => {
		const currentIndex = behaviorExamples.indexOf(currentBehavior);
		const nextIndex = (currentIndex + 1) % behaviorExamples.length;
		setCurrentBehavior(behaviorExamples[nextIndex]);
	};

	return (
		<div className='grid grid-cols-1 gap-16 items-start mb-20'>
			{/* B=MAP Interactive Sentence Builder */}
			<motion.div
				className='bg-white border-2 border-blue-100 rounded-xl p-8 shadow-sm'
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5 }}
			>
				<h3 className='text-2xl font-bold text-blue-900 mb-6'>
					B = MAP: The Behavior Formula
				</h3>

				<div className='mb-10'>
					<p className='text-lg text-slate-700 mb-4'>
						For a behavior to become a habit, three elements must
						converge at the same moment:
					</p>

					<div className='flex items-center justify-center text-2xl mb-2 font-medium'>
						<span className='text-blue-800'>B</span>
						<span className='mx-2'>=</span>
						<span className='text-blue-600'>M</span>
						<span className='mx-2'>+</span>
						<span className='text-green-600'>A</span>
						<span className='mx-2'>+</span>
						<span className='text-purple-600'>P</span>
					</div>

					<div className='flex justify-center gap-1 items-center mb-2 text-slate-500 text-sm'>
						<span>Behavior</span>
						<span className='mx-2'>=</span>
						<span>Motivation</span>
						<span className='mx-2'>+</span>
						<span>Ability</span>
						<span className='mx-2'>+</span>
						<span>Prompt</span>
					</div>
				</div>

				<div className='max-w-3xl mx-auto bg-blue-50 rounded-xl p-6 mb-8'>
					<div className='text-center mb-4'>
						<p className='text-lg text-slate-700'>
							See how the formula works with this example:
						</p>
					</div>

					<div className='flex flex-col md:flex-row items-center justify-center gap-2 text-xl mb-8'>
						<div className='flex items-center'>
							<span className='font-medium'>I will</span>
							<div className='relative mx-2 inline-block'>
								{isEditingBehavior ? (
									<div className='flex items-center'>
										<input
											type='text'
											value={behaviorInput}
											onChange={handleBehaviorInputChange}
											className='border-b-2 border-blue-800 bg-transparent text-center w-32 focus:outline-none'
											onBlur={submitBehaviorInput}
											onKeyDown={(e) =>
												e.key === 'Enter' &&
												submitBehaviorInput()
											}
											autoFocus
										/>
									</div>
								) : (
									<div
										className='group cursor-pointer flex items-center'
										onClick={() =>
											setIsEditingBehavior(true)
										}
									>
										<span className='border-b-4 border-blue-800 pb-1 font-semibold'>
											{currentBehavior}
										</span>
										<Edit2 className='ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity' />
									</div>
								)}
								<div className='text-xs text-center text-blue-800 font-semibold mt-1'>
									BEHAVIOR
								</div>
							</div>
						</div>

						{stages.map((stage) => (
							<div
								key={stage.id}
								className='flex items-center mt-2 md:mt-0'
							>
								<div className='relative mx-1 inline-block'>
									<span
										className={`border-b-4 border-${stage.color}-500 pb-1`}
									>
										{stage.sentence}
									</span>
									<div
										className={`text-xs text-center text-${stage.color}-500 font-semibold mt-1`}
									>
										{stage.title.toUpperCase()}
									</div>
								</div>
							</div>
						))}
					</div>

					<div className='flex justify-center'>
						<Button
							variant='outline'
							className='text-blue-600 border-blue-200 hover:border-blue-400 flex items-center gap-2'
							onClick={changeBehaviorExample}
						>
							<span>Try another example</span>
							<PlusCircle size={16} />
						</Button>
					</div>
				</div>
			</motion.div>
		</div>
	);
}
