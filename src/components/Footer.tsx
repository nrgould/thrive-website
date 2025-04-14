import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
	return (
		<footer className='w-full bg-blue-50 py-12 px-4 md:px-8'>
			<div className='max-w-6xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
					<div className='space-y-4'>
						<h3 className='text-xl font-bold text-blue-950'>
							THRIVE
						</h3>
						<p className='text-slate-600 text-sm'>
							A better way to improve your health through
							Lifestyle Medicine and Behavior Design.
						</p>
						{/* <div className='flex items-center gap-4'>
							<Link
								href='#'
								className='text-blue-500 hover:text-blue-700'
							>
								<Facebook size={20} />
							</Link>
							<Link
								href='#'
								className='text-blue-500 hover:text-blue-700'
							>
								<Instagram size={20} />
							</Link>
							<Link
								href='#'
								className='text-blue-500 hover:text-blue-700'
							>
								<Twitter size={20} />
							</Link>
							<Link
								href='#'
								className='text-blue-500 hover:text-blue-700'
							>
								<Mail size={20} />
							</Link>
						</div> */}
					</div>

					<div className='space-y-4'>
						<h4 className='font-medium text-blue-950'>Programs</h4>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/programs/six-week'
									className='text-slate-600 hover:text-blue-500 text-sm'
								>
									THRIVE 6-Week Program
								</Link>
							</li>
							<li>
								<Link
									href='/programs/essentials'
									className='text-slate-600 hover:text-blue-500 text-sm'
								>
									THRIVE Essentials
								</Link>
							</li>
						</ul>
					</div>

					<div className='space-y-4'>
						<h4 className='font-medium text-blue-950'>About</h4>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/about'
									className='text-slate-600 hover:text-blue-500 text-sm'
								>
									Our Approach
								</Link>
							</li>
							<li>
								<Link
									href='/about/team'
									className='text-slate-600 hover:text-blue-500 text-sm'
								>
									Our Team
								</Link>
							</li>
							<li>
								<Link
									href='/about/science'
									className='text-slate-600 hover:text-blue-500 text-sm'
								>
									The Science
								</Link>
							</li>
						</ul>
					</div>

					<div className='space-y-4'>
						<h4 className='font-medium text-blue-950'>Contact</h4>
						<ul className='space-y-2'>
							<li>
								<Link
									href='/contact'
									className='text-slate-600 hover:text-blue-500 text-sm'
								>
									Get in Touch
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className='pt-8 border-t border-blue-100 flex flex-col md:flex-row items-center justify-between gap-4'>
					<div className='text-sm text-slate-500'>
						© {new Date().getFullYear()} C2Life Foundation. All
						rights reserved.
					</div>

					<div className='flex items-center gap-2'>
						<a
							href='https://c2life.org'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-2 hover:opacity-80 transition-opacity'
						>
							<span className='text-slate-600 text-sm'>
								Sponsored by
							</span>
							<div className='h-8 w-24 relative'>
								<Image
									src='/C2Life logo.png'
									alt='C2Life'
									className='h-full w-full object-contain'
									width={96}
									height={32}
								/>
							</div>
						</a>
					</div>

					{/* <div className='flex items-center gap-4'>
						<Link
							href='/privacy'
							className='text-sm text-slate-500 hover:text-blue-500'
						>
							Privacy Policy
						</Link>
						<Link
							href='/terms'
							className='text-sm text-slate-500 hover:text-blue-500'
						>
							Terms of Service
						</Link>
					</div> */}
				</div>
			</div>
		</footer>
	);
}
