import * as motion from 'motion/react-client';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
	return (
		<main className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white px-4'>
			<div className='max-w-2xl text-center'>
				<motion.h1
					className='text-6xl font-bold text-blue-950 mb-6'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					404
				</motion.h1>

				<motion.h2
					className='text-3xl font-semibold text-blue-800 mb-4'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					Page Not Found
				</motion.h2>

				<motion.p
					className='text-lg text-slate-700 mb-10'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					The page you&apos;re looking for doesn&apos;t exist or has
					been moved.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<Link href='/'>
						<button className='px-8 py-3 bg-blue-500 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors mx-auto'>
							<Home size={18} />
							Return Home
						</button>
					</Link>
				</motion.div>
			</div>
		</main>
	);
}
