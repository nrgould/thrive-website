import { Quote } from 'lucide-react';
import * as motion from 'motion/react-client';

export function TestimonialsSection() {
	const testimonials = [
		{
			quote: "I haven't felt this good on a daily basis in years.",
			author: 'Michael',
			role: 'Program Graduate',
		},
		{
			quote: 'This program has done wonders for how I feel about myself.',
			author: 'Zach',
			role: 'Program Graduate',
		},

		{
			quote: 'I truly understand the importance of eating nutrient-dense foods and making smart choices.',
			author: 'Beverly',
			role: 'Program Graduate',
		},
	];

	return (
		<div className='mb-20'>
			<h2 className='text-3xl font-bold text-center mb-8 text-slate-800'>
				What participants are saying
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{testimonials.map((testimonial, index) => (
					<motion.div
						key={index}
						className='bg-blue-500 rounded-2xl shadow-md p-6 relative text-white'
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.4, delay: index * 0.2 }}
						whileHover={{ scale: 1.03 }}
					>
						<div className='absolute top-3 left-3'>
							<Quote className='text-white' size={20} />
						</div>
						<p className='mb-4 mt-4 italic text-2xl font-bold'>
							{testimonial.quote}
						</p>
						<div className='pt-3 mt-4'>
							<p className='font-semibold'>
								— {testimonial.author}
							</p>
							<p className='text-sm text-blue-100'>
								{testimonial.role}
							</p>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
