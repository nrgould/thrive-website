'use client';

import * as React from 'react';
import Link from 'next/link';
import {
	Menu,
	CalendarClock,
	Sparkles,
	Info,
	Mail,
	Home,
	Users,
	FlaskConical,
	Plus,
	UserPlus,
	Heart,
	Lightbulb,
	GraduationCap,
} from 'lucide-react';
import { usePathname } from 'next/navigation';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
} from '@/components/ui/sheet';

const programs: {
	title: string;
	href: string;
	description: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}[] = [
	{
		title: 'THRIVE Comprehensive',
		href: '/programs/six-week',
		description:
			'Our comprehensive lifestyle change program with guidance, structure, and community support.',
		icon: CalendarClock,
	},
	{
		title: 'THRIVE Essentials',
		href: '/programs/essentials',
		description:
			'A self-paced online course to explore Lifestyle Medicine and build healthier habits.',
		icon: Sparkles,
	},
];

// Define navigation links array
const navLinks = [
	{
		title: 'Approach',
		href: '/about',
		icon: Lightbulb,
		iconColor: 'text-white',
		groupId: 'approach',
	},
	{
		title: 'Science',
		href: '/about/science',
		icon: FlaskConical,
		iconClass: 'group-hover:rotate-[-6deg]',
		iconColor: 'text-blue-500',
		groupId: 'science',
	},
	{
		title: 'Programs',
		isDropdown: true,
		dropdownItems: programs,
		icon: GraduationCap,
		iconColor: 'text-white',
		groupId: 'programs',
	},
	{
		title: 'Team',
		href: '/about/team',
		icon: Users,
		iconColor: 'text-white',
		groupId: 'team',
	},
	{
		title: 'Contact',
		href: '/contact',
		icon: Mail,
		iconColor: 'text-white',
		groupId: 'contact',
	},
];

export function Header() {
	const pathname = usePathname();
	const [open, setOpen] = React.useState(false);
	// State to track which nav item is hovered
	const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);

	const handleLinkClick = () => {
		setOpen(false);
	};

	// Handle hover events
	const handleMouseEnter = (id: string) => {
		setHoveredItem(id);
	};

	const handleMouseLeave = () => {
		setHoveredItem(null);
	};

	return (
		<header className='w-full py-4 px-4 md:px-12 bg-slate-950 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-800'>
			<div className='max-w-full mx-auto flex items-center justify-between'>
				<Link href='/' className='flex items-center gap-2 group'>
					<span className='flex flex-col items-center leading-tight transition-transform duration-300 group-hover:scale-105'>
						<span className='relative text-3xl font-bold text-white'>
							THRIVE
							<Heart className='absolute -right-5 -top-0.5 h-4 w-4 text-red-500 fill-red-500 transition-all duration-300 ease-out opacity-0 scale-0 rotate-[30deg] translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:rotate-0 group-hover:translate-x-0' />
						</span>
						<span className='text-xs text-white -mt-1'>
							<span className='text-white '>L</span>
							ifestyle
							<span className='text-white ml-1'>M</span>
							edicine
						</span>
					</span>
				</Link>

				{/* Desktop Navigation */}
				<div className='hidden md:block'>
					<NavigationMenu>
						<NavigationMenuList className='text-white'>
							{navLinks.map((link) => (
								<NavigationMenuItem key={link.title}>
									{link.isDropdown ? (
										<>
											<NavigationMenuTrigger
												className='bg-transparent text-white hover:bg-transparent hover:text-slate-300 focus:bg-transparent focus:text-white data-[active]:bg-transparent data-[state=open]:bg-transparent'
												onMouseEnter={() =>
													handleMouseEnter(link.title)
												}
												onMouseLeave={handleMouseLeave}
											>
												{link.icon && (
													<span
														className={`inline-block transition-all duration-300 ease-out ${
															hoveredItem ===
															link.title
																? 'w-4 mr-2'
																: 'w-0 mr-0'
														} overflow-hidden`}
													>
														<link.icon
															className={`h-4 w-4 block ${
																link.iconColor
															} transition-all duration-300 ease-out ${
																hoveredItem ===
																link.title
																	? 'opacity-100 scale-100 translate-x-0 rotate-0'
																	: 'opacity-0 scale-75 translate-x-4 rotate-[30deg]'
															} ${
																link.iconClass ||
																''
															}`}
														/>
													</span>
												)}
												{link.title}
											</NavigationMenuTrigger>
											<NavigationMenuContent>
												<ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] bg-white text-black'>
													{link.dropdownItems?.map(
														(program) => (
															<ListItem
																key={
																	program.title
																}
																title={
																	program.title
																}
																href={
																	program.href
																}
																icon={
																	<program.icon className='mr-2 h-4 w-4 text-blue-600' />
																}
															>
																{
																	program.description
																}
															</ListItem>
														)
													)}
												</ul>
											</NavigationMenuContent>
										</>
									) : (
										<Link
											href={link.href!}
											legacyBehavior
											passHref
										>
											<NavigationMenuLink
												className='inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors bg-transparent text-white hover:bg-transparent hover:text-slate-300 focus:bg-transparent focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-transparent data-[state=open]:bg-transparent'
												onMouseEnter={() =>
													handleMouseEnter(link.title)
												}
												onMouseLeave={handleMouseLeave}
											>
												<span className='inline-flex items-center'>
													{link.icon && (
														<span
															className={`inline-block transition-all duration-300 ease-out ${
																hoveredItem ===
																link.title
																	? 'w-4 mr-2'
																	: 'w-0 mr-0'
															} overflow-hidden`}
														>
															<link.icon
																className={`h-4 w-4 block ${
																	link.iconColor
																} transition-all duration-300 ease-out ${
																	hoveredItem ===
																	link.title
																		? 'opacity-100 scale-100 translate-x-0 rotate-0'
																		: 'opacity-0 scale-75 translate-x-4 rotate-[30deg]'
																} ${
																	link.iconClass ||
																	''
																}`}
															/>
														</span>
													)}
													<span>{link.title}</span>
												</span>
											</NavigationMenuLink>
										</Link>
									)}
								</NavigationMenuItem>
							))}
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
									<h2 className='text-lg font-semibold mb-3 text-blue-600'>
										Navigation
									</h2>
									<div className='flex flex-col space-y-3 pl-1'>
										<Link
											href='/'
											className={`text-base py-1 transition-colors font-medium group flex items-center ${
												pathname === '/'
													? 'text-blue-700 border-b border-blue-500'
													: 'hover:text-blue-600'
											}`}
											onClick={handleLinkClick}
										>
											<Home className='mr-3 h-5 w-5 text-blue-500 transition-transform duration-200 group-hover:scale-110' />
											Home
										</Link>
									</div>
								</div>

								<div className='px-2'>
									<h2 className='text-lg font-semibold mb-3 text-blue-600'>
										Programs
									</h2>
									<div className='flex flex-col space-y-2'>
										{programs.map((program) => (
											<Link
												key={program.title}
												href={program.href}
												className={`text-base py-1 transition-colors font-medium group flex items-center ${
													pathname === program.href
														? 'text-blue-700 border-b border-blue-500 inline-block'
														: 'hover:text-blue-600'
												}`}
												onClick={handleLinkClick}
											>
												<program.icon className='mr-3 h-5 w-5 text-blue-500 transition-transform duration-200 group-hover:scale-110' />
												{program.title}
											</Link>
										))}
									</div>
								</div>

								<div className='px-2'>
									<h2 className='text-lg font-semibold mb-3 text-blue-600'>
										About
									</h2>
									<div className='flex flex-col space-y-3 pl-1'>
										<Link
											href='/about'
											className={`text-base py-1 transition-colors font-medium group flex items-center ${
												pathname === '/about'
													? 'text-blue-700 border-b border-blue-500 inline-block'
													: 'hover:text-blue-600'
											}`}
											onClick={handleLinkClick}
										>
											<Info className='mr-3 h-5 w-5 text-blue-500 transition-transform duration-200 group-hover:rotate-6' />
											Our Approach
										</Link>
										<Link
											href='/about/team'
											className={`text-base py-1 transition-colors font-medium group flex items-center ${
												pathname === '/about/team'
													? 'text-blue-700 border-b border-blue-500 inline-block'
													: 'hover:text-blue-600'
											}`}
											onClick={handleLinkClick}
										>
											<Users className='mr-3 h-5 w-5 text-blue-500 transition-transform duration-200 group-hover:scale-110' />
											Our Team
										</Link>
										<Link
											href='/about/science'
											className={`text-base py-1 transition-colors font-medium group flex items-center ${
												pathname === '/about/science'
													? 'text-blue-700 border-b border-blue-500 inline-block'
													: 'hover:text-blue-600'
											}`}
											onClick={handleLinkClick}
										>
											<FlaskConical className='mr-3 h-5 w-5 text-blue-500 transition-transform duration-200 group-hover:rotate-[-6deg]' />
											The Science
										</Link>
									</div>
								</div>

								<div className='px-2'>
									<h2 className='text-lg font-semibold mb-3 text-blue-600'>
										Contact
									</h2>
									<div className='flex flex-col space-y-3 pl-1'>
										<Link
											href='/contact'
											className={`text-base py-1 transition-colors font-medium group flex items-center ${
												pathname === '/contact'
													? 'text-blue-700 border-b border-blue-500 inline-block'
													: 'hover:text-blue-600'
											}`}
											onClick={handleLinkClick}
										>
											<Mail className='mr-3 h-5 w-5 text-blue-500 transition-transform duration-200 group-hover:-rotate-6' />
											Get in Touch
										</Link>
									</div>
								</div>

								<div className='mt-4 px-2'>
									<Link
										href='/programs/six-week#waitlist-form'
										className='block w-full text-center px-4 py-3 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors shadow-sm group flex items-center justify-center'
										onClick={handleLinkClick}
									>
										<Plus className='mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-125' />
										Join Waitlist
									</Link>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>

				<Link
					href='/programs/six-week#waitlist-form'
					className='hidden md:flex px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-medium hover:bg-blue-600 transition-colors items-center group'
				>
					<UserPlus className='mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-125' />
					Register Now
				</Link>
			</div>
		</header>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={`group flex select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-50 focus:text-blue-900 ${className}`}
					{...props}
				>
					<div className='flex flex-col w-full'>
						<div className='text-sm font-medium leading-none flex items-center'>
							{icon && (
								<span className='transition-transform duration-200 group-hover:scale-110'>
									{icon}
								</span>
							)}
							{title}
						</div>
						<p
							className={`line-clamp-2 text-sm leading-snug text-slate-600 ${
								icon ? 'ml-6' : ''
							}`}
						>
							{children}
						</p>
					</div>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
