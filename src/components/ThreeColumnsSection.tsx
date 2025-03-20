import { BookOpen, Layers, Users } from 'lucide-react';
import { IconCard } from './ui/icon-card';
import { ArrowDivider } from './ui/arrow-divider';
import { SectionTitle } from './ui/section-title';
import { LinkButton } from './ui/link-button';
import { MotionContainer } from './ui/motion-container';
import { SectionContainer } from './ui/section-container';

export function ThreeColumnsSection() {
	return (
		<SectionContainer background='white'>
			<SectionTitle
				title='A Better Way to THRIVE'
				description='THRIVE is a program built on science-backed strategies that
				support physical, mental, and emotional well-being, so you
				can improve your daily routine, make more sustainable
				lifestyle changes, reduce stress, and connect more deeply
				with your health goals and loved ones.'
			/>

			<div className='flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-0'>
				<IconCard
					icon={BookOpen}
					title='Education'
					subtitle='Learn a Healthier Way'
					className='w-full md:w-1/3'
				>
					<p className='text-slate-700 mb-3 leading-relaxed'>
						Video tutorials, downloadable resources, & interactive
						learning modules focused on Lifestyle Medicine &
						Behavior Design
					</p>
				</IconCard>

				{/* Arrow 1 */}
				<ArrowDivider animationDelay={0.3} />

				<IconCard
					icon={Layers}
					title='Integration'
					subtitle='Make Sustainable Change'
					className='w-full md:w-1/3'
					animationDelay={0.2}
				>
					<p className='text-slate-700 mb-3 leading-relaxed'>
						Participants use Behavior Design to create personalized
						habit plans aligned with their health goals.
					</p>
				</IconCard>

				{/* Arrow 2 */}
				<ArrowDivider animationDelay={0.4} />

				<IconCard
					icon={Users}
					title='Connection'
					subtitle='Maintain Success'
					className='w-full md:w-1/3'
					animationDelay={0.4}
				>
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
				</IconCard>
			</div>

			{/* Mobile arrows - visible only on small screens */}
			<ArrowDivider
				direction='vertical'
				className='flex md:hidden justify-center mt-4 mb-4'
				size={8}
			/>

			{/* Learn More Button */}
			<MotionContainer
				className='mt-12 flex justify-center'
				animationDelay={0.5}
			>
				<LinkButton href='/about'>
					Learn more about our approach
				</LinkButton>
			</MotionContainer>
		</SectionContainer>
	);
}
