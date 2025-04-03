import * as motion from 'motion/react-client';
import Image from 'next/image';
import { UserCircle } from 'lucide-react';

interface TeamMember {
	name: string;
	role: string;
	bio?: string;
	image?: string;
}

export function TeamSection() {
	const team: TeamMember[] = [
		{
			name: 'Dr. Brian Asbill, MD',
			role: 'Lifestyle Medicine Physician',
			bio: "Brian began his cardiology practice in Asheville, NC in 2001. After realizing that procedures and medications weren't enough to truly heal his patients, he shifted his focus to lifestyle medicine. Inspired by witnessing the transformational power of a whole food, plant-based diet, Brian left his cardiology role in 2020 to help others reclaim optimal health through simple, sustainable lifestyle changes. His wife, Sarah, is also a board-certified lifestyle medicine physician. Together they've raised two sons who thrive on a plant-forward lifestyle.",
			image: '/team/brian.webp',
		},
		{
			name: 'Quez "Papa Plants" Little',
			role: 'Heart Health Advocate | Coach',
			bio: "After a diagnosis of heart disease in 2012 followed by stents and bypass surgery, Quez knew he needed a new path. Twelve years later, he's still on a mission for optimal health. Quez shares his journey and passion for lifestyle transformation, helping others make health a permanent and empowering part of their lives.",
			image: '/team/quez.webp',
		},
		{
			name: 'Leticia A. Nichols, ANP-C, CHWC',
			role: 'Nurse Practitioner | Health & Well-being Coach',
			bio: 'Leticia brings over 35 years of clinical experience, now focusing on lifestyle medicine after addressing her own health challenges. Certified in Plant-based Nutrition (eCornell) and a Food for Life Instructor, she integrates her passion into both C2Life and her private practice, Healthy at Last! Leticia is dedicated to helping individuals finally achieve lasting wellness.',
			image: '/team/leticia.webp',
		},
		{
			name: 'Dr. Laurie Robinson, MD',
			role: 'Family Physician | Lifestyle Medicine Coach | Fall 2022 Alumni',
			bio: "Laurie has practiced Family Medicine for 23 years at Burke Primary Care. After participating in the FIM program, she became certified in Lifestyle Medicine, shifting her focus to helping patients embrace whole food, plant-based nutrition and other pillars of lifestyle medicine. Laurie recently started a separate Lifestyle Medicine practice and is furthering her expertise in women's health through certification with the Menopause Society. She enjoys hiking, cooking, and traveling with her husband Tim and their three children.",
			image: '/team/laurie.webp',
		},
		{
			name: 'Nicholas "The Wizard" Gould',
			role: 'Web Developer',
			bio: '(Bio Pending)',
			image: '/team/nicholas.webp',
		},
		{
			name: 'Chasity Poteat Rice',
			role: 'C2Life Founder/CEO',
			bio: '(Bio Pending)',
			image: '/team/chasity.webp',
		},
		{
			name: 'Charlie Rice',
			role: 'Coach',
			bio: '(Bio Pending)',
			image: '/team/charlie.webp',
		},
		{
			name: 'Brett Wells',
			role: 'Behavior Design Expert',
			bio: '(Bio Pending)',
			image: '/team/brett.webp',
		},
	];

	return (
		<section className='w-full py-24 px-4 md:px-8 bg-white'>
			<div className='max-w-6xl mx-auto'>
				<motion.h1
					className='text-4xl md:text-5xl font-bold text-center mb-6 text-blue-950'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					Meet Our Team
				</motion.h1>

				<motion.p
					className='text-xl text-slate-700 text-center max-w-3xl mx-auto mb-16 leading-relaxed'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					Meet the dedicated team guiding you on your journey to
					better health and well-being.
				</motion.p>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
					{team.map((person, index) => (
						<motion.div
							key={index}
							className='bg-white rounded-3xl shadow-sm p-6 lg:p-8 border border-blue-100 h-full'
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.05 }}
						>
							<div className='flex flex-col gap-6'>
								<div className='flex flex-col items-center'>
									<div className='w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden mx-auto'>
										{person.image ? (
											<Image
												src={person.image}
												alt={person.name}
												width={160}
												height={160}
												className='w-full h-full object-cover'
											/>
										) : (
											<div className='w-full h-full bg-blue-100 flex items-center justify-center'>
												<UserCircle
													className='text-blue-300'
													size={80}
												/>
											</div>
										)}
									</div>
									<h3 className='text-xl font-bold text-blue-950 mt-4 text-center'>
										{person.name}
									</h3>
									<p className='text-blue-600 text-center mt-1'>
										{person.role}
									</p>
								</div>

								<div>
									{person.bio && (
										<p className='text-slate-700 leading-relaxed'>
											{person.bio}
										</p>
									)}
								</div>
							</div>

							{index < team.length - 1 && index % 2 === 0 && (
								<div className='mt-6 pt-4 border-t border-blue-100 lg:hidden'>
									<div className='flex justify-center'>
										<div className='text-blue-300'>⸻</div>
									</div>
								</div>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
