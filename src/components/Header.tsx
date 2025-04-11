'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
} from '@/components/ui/sheet';

const programs: { title: string; href: string; description: string }[] = [
	{
		title: 'THRIVE 6-Week Program',
		href: '/programs/six-week',
		description:
			'Our comprehensive lifestyle change program with guidance, structure, and community support.',
	},
	// {
	// 	title: 'THRIVE Essentials',
	// 	href: '/programs/essentials',
	// 	description:
	// 		'A self-paced online course to explore Lifestyle Medicine and build healthier habits.',
	// },
];

export function Header() {
	const pathname = usePathname();
	const [open, setOpen] = React.useState(false);

	const handleLinkClick = () => {
		setOpen(false);
	};

	return (
		<header className='w-full py-4 px-4 md:px-8 bg-white backdrop-blur-sm sticky top-0 z-50 border-b border-slate-100'>
			<div className='max-w-full mx-auto flex items-center justify-between'>
				<Link href='/' className='flex items-center gap-2'>
					<span className='flex flex-col items-center leading-tight'>
						<span className='text-3xl font-bold text-blue-500'>
							THRIVE
						</span>
						<span className='text-xs text-blue-500 -mt-1'>
							<span className='text-blue-800'>L</span>ifestyle
							<span className='text-blue-800 ml-1'>M</span>edicine
						</span>
					</span>
				</Link>

				{/* Desktop Navigation */}
				<div className='hidden md:block'>
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger>
									Programs
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px]'>
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
								<NavigationMenuTrigger>
									About
								</NavigationMenuTrigger>
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
														Learn how Lifestyle
														Medicine and Behavior
														Design can transform
														your health and
														well-being.
													</p>
												</a>
											</NavigationMenuLink>
										</li>
										<ListItem
											href='/about/team'
											title='Our Team'
										>
											Meet the experts behind
											THRIVE&apos;s evidence-based
											approach.
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
				</div>

				{/* Mobile Navigation */}
				<div className='md:hidden flex items-center'>
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger asChild>
							<button className='p-2 text-blue-800 hover:bg-blue-50 rounded-md'>
								<Menu size={24} />
								<span className='sr-only'>Menu</span>
							</button>
						</SheetTrigger>
						<SheetContent
							side='right'
							className='w-[350px] sm:w-[450px] border-l border-blue-100 px-4'
						>
							<SheetTitle className='sr-only'>
								Navigation Menu
							</SheetTitle>
							<div className='flex flex-col items-start mb-6 pt-2'>
								<span className='flex flex-col items-center leading-tight'>
									<span className='text-3xl font-bold text-blue-500'>
										THRIVE
									</span>
									{/* <span className='text-xs text-blue-500 -mt-1'>
										<span className='text-blue-800'>L</span>
										ifestyle
										<span className='text-blue-800 ml-1'>
											M
										</span>
										edicine
									</span> */}
								</span>
							</div>
							<div className='flex flex-col gap-8'>
								<div className='px-2'>
									<h2 className='text-lg font-semibold mb-3 text-blue-600 border-b border-blue-100 pb-2'>
										Navigation
									</h2>
									<div className='flex flex-col space-y-3 pl-1'>
										<Link
											href='/'
											className={`text-base py-1 transition-colors font-medium ${
												pathname === '/'
													? 'text-blue-700 border-b border-blue-500 inline-block'
													: 'hover:text-blue-600'
											}`}
											onClick={handleLinkClick}
										>
											Home
										</Link>
									</div>
								</div>

								<div className='px-2'>
									<h2 className='text-lg font-semibold mb-3 text-blue-600 border-b border-blue-100 pb-2'>
										Programs
									</h2>
									<div className='flex flex-col space-y-3 pl-1'>
										{programs.map((program) => (
											<Link
												key={program.title}
												href={program.href}
												className={`text-base py-1 transition-colors font-medium ${
													pathname === program.href
														? 'text-blue-700 border-b border-blue-500 inline-block'
														: 'hover:text-blue-600'
												}`}
												onClick={handleLinkClick}
											>
												{program.title}
											</Link>
										))}
									</div>
								</div>

								<div className='px-2'>
									<h2 className='text-lg font-semibold mb-3 text-blue-600 border-b border-blue-100 pb-2'>
										About
									</h2>
									<div className='flex flex-col space-y-3 pl-1'>
										<Link
											href='/about'
											className={`text-base py-1 transition-colors font-medium ${
												pathname === '/about'
													? 'text-blue-700 border-b border-blue-500 inline-block'
													: 'hover:text-blue-600'
											}`}
											onClick={handleLinkClick}
										>
											Our Approach
										</Link>
										<Link
											href='/about/team'
											className={`text-base py-1 transition-colors font-medium ${
												pathname === '/about/team'
													? 'text-blue-700 border-b border-blue-500 inline-block'
													: 'hover:text-blue-600'
											}`}
											onClick={handleLinkClick}
										>
											Our Team
										</Link>
										<Link
											href='/about/science'
											className={`text-base py-1 transition-colors font-medium ${
												pathname === '/about/science'
													? 'text-blue-700 border-b border-blue-500 inline-block'
													: 'hover:text-blue-600'
											}`}
											onClick={handleLinkClick}
										>
											The Science
										</Link>
									</div>
								</div>

								<div className='px-2'>
									<h2 className='text-lg font-semibold mb-3 text-blue-600 border-b border-blue-100 pb-2'>
										Contact
									</h2>
									<div className='flex flex-col space-y-3 pl-1'>
										<Link
											href='/contact'
											className={`text-base py-1 transition-colors font-medium ${
												pathname === '/contact'
													? 'text-blue-700 border-b border-blue-500 inline-block'
													: 'hover:text-blue-600'
											}`}
											onClick={handleLinkClick}
										>
											Get in Touch
										</Link>
									</div>
								</div>

								<div className='mt-4 px-2'>
									<Link
										href='/programs/six-week#waitlist-form'
										className='block w-full text-center px-4 py-3 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm'
										onClick={handleLinkClick}
									>
										Join Waitlist
									</Link>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>

				<Link
					href='/programs/six-week#waitlist-form'
					className='hidden md:flex px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors'
				>
					Join Waitlist
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
