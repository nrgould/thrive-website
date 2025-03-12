import { ArrowLeft, Calendar, Users, CheckCircle, Zap } from 'lucide-react';
import Link from 'next/link';

export default function SixWeekPage() {
	return (
		<main className='min-h-screen flex flex-col'>
			{/* Hero Section */}
			<section className='w-full py-20 px-4 md:px-8 bg-gradient-to-b from-blue-600 to-blue-700 text-white'>
				<div className='max-w-6xl mx-auto'>
					<Link
						href='/'
						className='inline-flex items-center text-white hover:text-blue-100 mb-8 transition-colors'
					>
						<ArrowLeft size={20} className='mr-2' />
						Back to Home
					</Link>

					<div className='flex flex-col lg:flex-row items-center gap-12'>
						<div className='flex-1'>
							<h1 className='text-4xl md:text-5xl font-bold mb-6'>
								THRIVE{' '}
								<span className='text-blue-200'>
									6-Week Program
								</span>
							</h1>
							<p className='text-xl text-blue-100 mb-8'>
								A comprehensive, guided journey to transform
								your lifestyle with expert coaching and
								community support.
							</p>
							<div className='flex flex-wrap gap-4 mb-8'>
								<div className='flex items-center bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full'>
									<Calendar
										className='text-blue-200 mr-2'
										size={20}
									/>
									<span className='text-blue-50'>
										6-week structured program
									</span>
								</div>
								<div className='flex items-center bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full'>
									<Users
										className='text-blue-200 mr-2'
										size={20}
									/>
									<span className='text-blue-50'>
										Small group coaching
									</span>
								</div>
								<div className='flex items-center bg-blue-500 bg-opacity-30 px-4 py-2 rounded-full'>
									<Zap
										className='text-blue-200 mr-2'
										size={20}
									/>
									<span className='text-blue-50'>
										Evidence-based approach
									</span>
								</div>
							</div>
							<button className='px-8 py-4 bg-white text-blue-600 rounded-full font-medium text-lg hover:bg-blue-50 transition-colors shadow-md'>
								Register for Next Cohort - $497
							</button>
						</div>
						<div className='flex-1 relative h-[350px] w-full rounded-3xl overflow-hidden'>
							<div className='absolute inset-0 bg-blue-500 bg-opacity-30 rounded-3xl flex items-center justify-center'>
								<p className='text-white'>
									Program preview image
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Program Overview */}
			<section className='w-full py-16 px-4 md:px-8 bg-white'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl font-bold text-blue-950 mb-12 text-center'>
						Transform Your Life in Six Weeks
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
						<div className='space-y-6'>
							<p className='text-lg text-slate-700'>
								The THRIVE 6-Week Program is designed for those
								ready to make lasting changes through a
								structured, supportive approach to Lifestyle
								Medicine.
							</p>
							<p className='text-lg text-slate-700'>
								Each week focuses on a different pillar of
								health, with expert-led sessions, personalized
								coaching, and actionable steps to implement
								immediately.
							</p>
							<p className='text-lg text-slate-700'>
								What sets this program apart is our
								comprehensive system that combines education,
								implementation, and connection—the three
								essential components for lasting lifestyle
								change.
							</p>
						</div>

						<div className='bg-blue-50 p-8 rounded-3xl space-y-6'>
							<h3 className='text-2xl font-bold text-blue-950 mb-3'>
								Program Includes
							</h3>
							<ul className='space-y-4'>
								<li className='flex items-start gap-3'>
									<CheckCircle
										className='text-blue-500 mt-1 flex-shrink-0'
										size={22}
									/>
									<p className='text-slate-700'>
										Weekly live learning sessions with
										expert coaches
									</p>
								</li>
								<li className='flex items-start gap-3'>
									<CheckCircle
										className='text-blue-500 mt-1 flex-shrink-0'
										size={22}
									/>
									<p className='text-slate-700'>
										Small group learning circles (8-10
										participants)
									</p>
								</li>
								<li className='flex items-start gap-3'>
									<CheckCircle
										className='text-blue-500 mt-1 flex-shrink-0'
										size={22}
									/>
									<p className='text-slate-700'>
										Two 1:1 coaching sessions for
										personalized guidance
									</p>
								</li>
								<li className='flex items-start gap-3'>
									<CheckCircle
										className='text-blue-500 mt-1 flex-shrink-0'
										size={22}
									/>
									<p className='text-slate-700'>
										Habit tracking app and biometric
										monitoring tools
									</p>
								</li>
								<li className='flex items-start gap-3'>
									<CheckCircle
										className='text-blue-500 mt-1 flex-shrink-0'
										size={22}
									/>
									<p className='text-slate-700'>
										Lifetime access to program materials and
										video recordings
									</p>
								</li>
								<li className='flex items-start gap-3'>
									<CheckCircle
										className='text-blue-500 mt-1 flex-shrink-0'
										size={22}
									/>
									<p className='text-slate-700'>
										Ongoing community support through
										graduate network
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Weekly Breakdown */}
			<section className='w-full py-16 px-4 md:px-8 bg-blue-50'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl font-bold text-blue-950 mb-12 text-center'>
						Weekly Program Structure
					</h2>

					<div className='space-y-6'>
						{[
							{
								week: 'Week 1',
								title: 'Nourish: Developing a Healthier Relationship with Food',
								description:
									'Learn evidence-based nutrition principles and how food choices affect your health, energy, and wellbeing.',
								highlights: [
									'Food as medicine approach',
									'Building sustainable eating patterns',
									'Practical meal planning strategies',
								],
							},
							{
								week: 'Week 2',
								title: 'Move: Improving Strength, Mobility & Endurance',
								description:
									'Discover how to incorporate enjoyable movement into your daily routine regardless of your current fitness level.',
								highlights: [
									'Finding activities you enjoy',
									'Building consistency without burnout',
									'Creating a movement-friendly environment',
								],
							},
							{
								week: 'Week 3',
								title: 'Sleep: Building Better Habits for More Energy',
								description:
									'Explore the critical role of quality sleep in health and learn techniques to improve your sleep patterns.',
								highlights: [
									'Sleep hygiene fundamentals',
									'Evening wind-down routines',
									'Creating an optimal sleep environment',
								],
							},
							{
								week: 'Week 4',
								title: 'Release: Managing Stress and Letting Go',
								description:
									"Develop practical tools to manage stress and identify what's not serving your health and wellbeing.",
								highlights: [
									'Evidence-based stress reduction techniques',
									'Mindfulness practices for daily life',
									'Creating boundaries for wellbeing',
								],
							},
							{
								week: 'Week 5',
								title: 'Elevate: Finding Purpose and Growth Mindset',
								description:
									'Cultivate a mindset that supports your health goals and connect to deeper purpose in your wellness journey.',
								highlights: [
									'Identifying values and meaning',
									'Overcoming obstacles and setbacks',
									'Building intrinsic motivation',
								],
							},
							{
								week: 'Week 6',
								title: 'Connect: Strengthening Relationships and Community',
								description:
									'Understand the powerful impact of social connections on health and build supportive relationships.',
								highlights: [
									'Creating a health-supporting social environment',
									'Communication skills for better connections',
									'Building your support network',
								],
							},
						].map((week, index) => (
							<div
								key={index}
								className='bg-white p-8 rounded-3xl shadow-sm'
							>
								<div className='flex flex-col md:flex-row md:items-center gap-6'>
									<div className='md:w-1/4'>
										<div className='bg-blue-500 text-white py-2 px-4 rounded-full inline-block font-bold'>
											{week.week}
										</div>
										<h3 className='text-xl font-bold text-blue-950 mt-2'>
											{week.title}
										</h3>
									</div>
									<div className='md:w-3/4'>
										<p className='text-slate-700 mb-4'>
											{week.description}
										</p>
										<div className='flex flex-wrap gap-2'>
											{week.highlights.map(
												(highlight, i) => (
													<span
														key={i}
														className='bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm'
													>
														{highlight}
													</span>
												)
											)}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Results */}
			<section className='w-full py-16 px-4 md:px-8 bg-white'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl font-bold text-blue-950 mb-12 text-center'>
						Real Results from Real Participants
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
						<div className='bg-blue-50 rounded-3xl p-8 text-center'>
							<h3 className='text-5xl font-bold text-blue-500 mb-2'>
								91%
							</h3>
							<p className='text-slate-700'>
								lost weight and improved BMI
							</p>
						</div>
						<div className='bg-blue-50 rounded-3xl p-8 text-center'>
							<h3 className='text-5xl font-bold text-blue-500 mb-2'>
								100%
							</h3>
							<p className='text-slate-700'>
								of participants improved systolic blood pressure
							</p>
						</div>
						<div className='bg-blue-50 rounded-3xl p-8 text-center'>
							<h3 className='text-5xl font-bold text-blue-500 mb-2'>
								50%
							</h3>
							<p className='text-slate-700'>
								reduction in medication dependencies reported
							</p>
						</div>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div className='bg-blue-50 p-6 rounded-3xl'>
							<p className='text-slate-700 text-lg leading-relaxed'>
								&quot;This program has done wonders for how I
								feel about myself. I&apos;ve lost weight, I&apos;m
								sleeping better, and have a much more positive
								outlook on life.&quot;
							</p>
							<p className='text-blue-500 font-medium'>
								— Zach, 42
							</p>
						</div>
						<div className='bg-blue-50 p-6 rounded-3xl'>
							<p className='text-slate-700 text-lg leading-relaxed'>
								&quot;I truly understand the importance of eating
								nutrient-dense foods and making smart choices.
								My energy levels are through the roof!&quot;
							</p>
							<p className='text-blue-500 font-medium'>
								— Beverly, 56
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='w-full py-16 px-4 md:px-8 bg-blue-600 text-white'>
				<div className='max-w-3xl mx-auto text-center'>
					<h2 className='text-3xl font-bold mb-6'>
						Join the Next THRIVE Cohort
					</h2>
					<p className='text-lg text-blue-100 mb-8'>
						Transform your health and wellbeing with expert guidance
						and community support. Spots are limited to ensure
						personalized attention.
					</p>
					<button className='px-8 py-4 bg-white text-blue-600 rounded-full font-medium text-lg hover:bg-blue-50 transition-colors shadow-md mx-auto'>
						Register Now - $497
					</button>
					<p className='mt-4 text-blue-200'>
						Next cohort starts: September 15, 2023
					</p>
				</div>
			</section>
		</main>
	);
}
