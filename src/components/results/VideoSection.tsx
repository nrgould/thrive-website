export function VideoSection() {
	return (
		<div className='mb-20 opacity-0 scale-95 animate-fade-scale'>
			<div className='aspect-video relative overflow-hidden rounded-2xl shadow-xl'>
				<iframe
					className='absolute top-0 left-0 w-full h-full'
					src='https://www.youtube.com/embed/dQw4w9WgXcQ'
					title='Thrive Lifestyle Medicine Program'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
				></iframe>
			</div>
		</div>
	);
}
