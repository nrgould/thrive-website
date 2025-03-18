'use client';

import * as React from 'react';
import Link from 'next/link';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const programs: { title: string; href: string; description: string }[] = [
	{
		title: 'THRIVE 6-Week Program',
		href: '/programs/six-week',
		description:
			'Our comprehensive lifestyle change program with guidance, structure, and community support.',
	},
	{
		title: 'THRIVE Essentials',
		href: '/programs/essentials',
		description:
			'A self-paced online course to explore Lifestyle Medicine and build healthier habits.',
	},
];

export function Header() {
	return (
		<header className='w-full py-4 px-4 md:px-8 bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-100'>
			<div className='max-w-full mx-auto flex items-center justify-between'>
				<Link href='/' className='flex items-center gap-2'>
					<span className='text-2xl font-bold text-blue-500'>
						THRIVE
					</span>
				</Link>

				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>
								Programs
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
									{programs.map((program) => (
										<ListItem
											key={program.title}
											title={program.title}
											href={program.href}
										>
											{program.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>About</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
									<li className='row-span-3'>
										<NavigationMenuLink asChild>
											<a
												className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-50 to-blue-100 p-6 no-underline outline-none focus:shadow-md'
												href='/about'
											>
												<div className='mb-2 mt-4 text-lg font-medium text-blue-900'>
													Our Approach
												</div>
												<p className='text-sm leading-tight text-slate-700'>
													Learn how Lifestyle Medicine
													and Behavior Design can
													transform your health and
													well-being.
												</p>
											</a>
										</NavigationMenuLink>
									</li>
									<ListItem
										href='/about/team'
										title='Our Team'
									>
										Meet the experts behind THRIVE&apos;s
										evidence-based approach.
									</ListItem>
									<ListItem
										href='/about/science'
										title='The Science'
									>
										Research and evidence supporting
										Lifestyle Medicine.
									</ListItem>
									{/* <ListItem
										href='/about/results'
										title='Results'
									>
										Real outcomes from real participants in
										our programs.
									</ListItem> */}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href='/contact' legacyBehavior passHref>
								<NavigationMenuLink
									className={navigationMenuTriggerStyle()}
								>
									Contact
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>

				<Link
					href='/programs/six-week#waitlist-form'
					className='hidden md:flex px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors'
				>
					Become a Member
				</Link>
			</div>
		</header>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-50 focus:text-blue-900 ${className}`}
					{...props}
				>
					<div className='text-sm font-medium leading-none'>
						{title}
					</div>
					<p className='line-clamp-2 text-sm leading-snug text-slate-600'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
