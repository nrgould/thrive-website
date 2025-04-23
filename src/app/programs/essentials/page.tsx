import { CTASection } from '@/components/CTASection';
import { ArrowLeft, BookOpen, Clock, Award } from 'lucide-react';
import Link from 'next/link';
import WaitlistForm from './WaitlistForm';

export default function EssentialsPage() {
	return (
		<main className='min-h-screen flex flex-col'>
			{/* Hero Section */}
			<section className='w-full py-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white'>
				<div className='max-w-6xl mx-auto'>
					<Link
						href='/'
						className='inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors'
					>
						<ArrowLeft size={20} className='mr-2' />
						Back to Home
					</Link>

					<div className='flex flex-col lg:flex-row items-start gap-12'>
						<div className='flex-1'>
							<h1 className='text-4xl md:text-5xl font-bold text-blue-950 mb-6'>
								THRIVE{' '}
								<span className='text-blue-500'>
									Essentials
								</span>
							</h1>
							<p className='text-xl text-slate-700 mb-8'>
								A self-paced introduction to the fundamentals of
								Lifestyle Medicine and behavior design - perfect
								for those just beginning their wellness journey.
							</p>
							<div className='flex flex-wrap gap-4 mb-8'>
								<div className='flex items-center bg-blue-50 px-4 py-2 rounded-full'>
									<Clock
										className='text-blue-500 mr-2'
										size={20}
									/>
									<span className='text-slate-700'>
										Self-paced learning
									</span>
								</div>
								<div className='flex items-center bg-blue-50 px-4 py-2 rounded-full'>
									<BookOpen
										className='text-blue-500 mr-2'
										size={20}
									/>
									<span className='text-slate-700'>
										Foundational concepts
									</span>
								</div>
								<div className='flex items-center bg-blue-50 px-4 py-2 rounded-full'>
									<Award
										className='text-blue-500 mr-2'
										size={20}
									/>
									<span className='text-slate-700'>
										Practice writing Habit Recipes
									</span>
								</div>
							</div>
						</div>
						<div className='flex-1 w-full'>
							<WaitlistForm />
						</div>
					</div>
				</div>
			</section>

			{/* Course Overview */}
			<section className='w-full py-16 px-4 md:px-8 bg-white'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl font-bold text-blue-950 mb-12 text-center'>
						Program Overview
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
						<div className='space-y-6'>
							<p className='text-lg text-slate-700'>
								THRIVE Essentials introduces you to the
								fundamental principles of Lifestyle Medicine and
								Behavior Design, helping you understand what
								changes to make and how to make them in the most
								reliable and sustainable ways that will lead to
								meaningful improvements in your health and
								wellbeing.
							</p>
							<p className='text-lg text-slate-700'>
								This self-paced online course is perfect for
								beginners who want to explore evidence-based
								approaches to wellness without the pressure of a
								structured program.
							</p>
							<p className='text-lg text-slate-700'>
								You&apos;ll learn about the six pillars of
								health—nutrition, physical activity, sleep,
								stress management, mindset, and social
								connection—and how they form the foundation for
								long-term wellbeing. Plus, you will get an
								opportunity to write your own habit recipes with
								guidance from our coaches.
							</p>
						</div>

						<div className='bg-blue-50 p-8 rounded-3xl space-y-6'>
							<h3 className='text-2xl font-bold text-blue-950 mb-3'>
								What You&apos;ll Get
							</h3>
							<ul className='space-y-4'>
								<li className='flex items-start gap-3'>
									<div className='w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0'>
										<div className='w-2 h-2 rounded-full bg-blue-500'></div>
									</div>
									<p className='text-slate-700'>
										3-month access to all course materials
									</p>
								</li>
								<li className='flex items-start gap-3'>
									<div className='w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0'>
										<div className='w-2 h-2 rounded-full bg-blue-500'></div>
									</div>
									<p className='text-slate-700'>
										8 core video lessons with downloadable
										resources
									</p>
								</li>
								<li className='flex items-start gap-3'>
									<div className='w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0'>
										<div className='w-2 h-2 rounded-full bg-blue-500'></div>
									</div>
									<p className='text-slate-700'>
										Foundational habit-building tools and templates
									</p>
								</li>
								<li className='flex items-start gap-3'>
									<div className='w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0'>
										<div className='w-2 h-2 rounded-full bg-blue-500'></div>
									</div>
									<p className='text-slate-700'>
										Simple, actionable steps to implement
										immediately
									</p>
								</li>
								<li className='flex items-start gap-3'>
									<div className='w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0'>
										<div className='w-2 h-2 rounded-full bg-blue-500'></div>
									</div>
									<p className='text-slate-700'>
										Certificate of completion
									</p>
								</li>
								<li className='flex items-start gap-3'>
									<div className='w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0'>
										<div className='w-2 h-2 rounded-full bg-blue-500'></div>
									</div>
									<p className='text-slate-700'>
										Apply towards 6-week program
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Waitlist Form Section - Removed */}

			{/* Course Modules
			<section className='w-full py-16 px-4 md:px-8 bg-blue-50'>
				<div className='max-w-6xl mx-auto'>
					<h2 className='text-3xl font-bold text-blue-950 mb-12 text-center'>
						Course Modules
					</h2>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						{[
							{
								title: 'Module 1: Foundations of Lifestyle Medicine',
								lessons: [
									'What is Lifestyle Medicine?',
									'The Six Pillars of Health',
									'Science-Backed Benefits',
								],
							},
							{
								title: 'Module 2: Nourishing Your Body',
								lessons: [
									'Food as Medicine',
									'Simple Nutrition Principles',
									'Starting Small with Food Choices',
								],
							},
							{
								title: 'Module 3: Movement for Life',
								lessons: [
									'Benefits of Regular Movement',
									'Finding Activities You Enjoy',
									'Building a Sustainable Routine',
								],
							},
							{
								title: 'Module 4: Rest & Recovery',
								lessons: [
									'Sleep Fundamentals',
									'Stress Management Techniques',
									'Creating Restorative Routines',
								],
							},
						].map((module, index) => (
							<div
								key={index}
								className='bg-white p-8 rounded-3xl shadow-sm'
							>
								<h3 className='text-xl font-bold text-blue-950 mb-4'>
									{module.title}
								</h3>
								<ul className='space-y-3'>
									{module.lessons.map((lesson, i) => (
										<li
											key={i}
											className='flex items-start gap-3'
										>
											<div className='w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0'>
												<div className='w-2 h-2 rounded-full bg-blue-500'></div>
											</div>
											<p className='text-slate-700'>
												{lesson}
											</p>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section> */}

			{/* CTA Section */}
			{/* <section className='w-full py-16 px-4 md:px-8 bg-white'>
				<div className='max-w-3xl mx-auto text-center'>
					<h2 className='text-3xl font-bold text-blue-950 mb-6'>
						Ready to Begin Your Journey?
					</h2>
					<p className='text-lg text-slate-700 mb-8'>
						THRIVE Essentials gives you the foundation to start
						making meaningful changes to your lifestyle. Begin your
						wellness journey today.
					</p>
					<button className='px-8 py-4 bg-blue-500 text-white rounded-full font-medium text-lg hover:bg-blue-600 transition-colors shadow-md mx-auto'>
						Enroll Now - $97
					</button>
					<p className='mt-4 text-slate-500'>
						30-day satisfaction guarantee or your money back
					</p>
				</div>
			</section> */}
			<CTASection />
		</main>
	);
}
