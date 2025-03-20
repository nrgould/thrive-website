import { Heart, TrendingUp, Award } from 'lucide-react';

export function AdditionalStats() {
	return (
		<div className='bg-blue-50 rounded-3xl p-8 mb-20 opacity-0 transform translate-y-4 animate-fade-up'>
			<h3 className='text-2xl font-bold text-blue-500 mb-6 text-center'>
				And so much more...
			</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				<div className='flex items-center'>
					<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0'>
						<Heart className='text-blue-500' size={20} />
					</div>
					<p className='text-slate-700'>
						50% reduction in depression medication reported
					</p>
				</div>
				<div className='flex items-center'>
					<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0'>
						<Heart className='text-blue-500' size={20} />
					</div>
					<p className='text-slate-700'>
						50% reduction in diabetes medication reported
					</p>
				</div>
				<div className='flex items-center'>
					<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0'>
						<TrendingUp className='text-blue-500' size={20} />
					</div>
					<p className='text-slate-700'>
						100% of participants showed improved systolic blood
						pressure
					</p>
				</div>
				<div className='flex items-center'>
					<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0'>
						<Award className='text-blue-500' size={20} />
					</div>
					<p className='text-slate-700'>
						4.3&quot; average decrease in waistline
					</p>
				</div>
				<div className='flex items-center'>
					<div className='w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0'>
						<Heart className='text-blue-500' size={20} />
					</div>
					<p className='text-slate-700'>7.4lbs average weight loss</p>
				</div>
			</div>
		</div>
	);
}
