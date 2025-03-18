'use client';

import React from 'react';
import Script from 'next/script';
import { Label } from '../../../components/ui/label';
import { Input } from '../../../components/ui/input';
import { Button } from '../../../components/ui/button';

export default function WaitlistForm() {
	return (
		<>
			<div id='mc_embed_shell' className='w-full max-w-[600px] mx-auto'>
				{/* <link
					href='//cdn-images.mailchimp.com/embedcode/classic-061523.css'
					rel='stylesheet'
					type='text/css'
				/> */}
				{/* <style jsx>{`
					#mc_embed_signup {
						background: #fff;
						clear: left;
						font: 14px Helvetica, Arial, sans-serif;
						width: 100%;
						max-width: 600px;
						border-radius: 1rem;
						padding: 1.5rem;
						box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
							0 2px 4px -1px rgba(0, 0, 0, 0.06);
					}
				`}</style> */}
				<div
					id='mc_embed_signup'
					className='bg-white p-8 rounded-3xl shadow-sm'
				>
					<form
						action='https://c2life.us14.list-manage.com/subscribe/post?u=4d40c5d56cf0308211b8a5c33&amp;id=da73e0c72c&amp;f_id=00a85ce5f0'
						method='post'
						id='mc-embedded-subscribe-form'
						name='mc-embedded-subscribe-form'
						className='validate'
						target='_blank'
					>
						<div id='mc_embed_signup_scroll' className='space-y-4'>
							{/* <h2>Join the Waitlist</h2> */}
							<div className='indicates-required text-slate-500 text-sm text-right'>
								<span className='asterisk text-blue-500'>
									*
								</span>{' '}
								indicates required
							</div>
							<div className='mc-field-group space-y-2'>
								<Label
									htmlFor='mce-EMAIL'
									className='text-slate-700'
								>
									Email Address{' '}
									<span className='asterisk text-blue-500'>
										*
									</span>
								</Label>
								<Input
									type='email'
									name='EMAIL'
									className='required email'
									id='mce-EMAIL'
									required
									defaultValue=''
								/>
							</div>
							<div className='mc-field-group space-y-2'>
								<Label
									htmlFor='mce-FNAME'
									className='text-slate-700'
								>
									First Name{' '}
								</Label>
								<Input
									type='text'
									name='FNAME'
									className='text'
									id='mce-FNAME'
									defaultValue=''
								/>
							</div>
							<div className='mc-field-group space-y-2'>
								<Label
									htmlFor='mce-LNAME'
									className='text-slate-700'
								>
									Last Name{' '}
								</Label>
								<Input
									type='text'
									name='LNAME'
									className='text'
									id='mce-LNAME'
									defaultValue=''
								/>
							</div>
							<div className='mc-field-group space-y-2'>
								<Label
									htmlFor='mce-PHONE'
									className='text-slate-700'
								>
									Phone Number{' '}
								</Label>
								<Input
									type='text'
									name='PHONE'
									className='REQ_CSS'
									id='mce-PHONE'
									defaultValue=''
								/>
							</div>
							<div id='mce-responses' className='clear'>
								<div
									className='response'
									id='mce-error-response'
									style={{ display: 'none' }}
								></div>
								<div
									className='response'
									id='mce-success-response'
									style={{ display: 'none' }}
								></div>
							</div>
							<div
								aria-hidden='true'
								style={{
									position: 'absolute',
									left: '-5000px',
								}}
							>
								<Input
									type='text'
									name='b_4d40c5d56cf0308211b8a5c33_da73e0c72c'
									tabIndex={-1}
									defaultValue=''
								/>
							</div>
							<div className='clear pt-2'>
								<Button
									type='submit'
									name='subscribe'
									id='mc-embedded-subscribe'
									className='bg-blue-500 text-white px-4 py-2 rounded-full w-full font-bold'
									size='lg'
								>
									Subscribe
								</Button>
							</div>
						</div>
					</form>
				</div>
			</div>

			<Script
				type='text/javascript'
				src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
				strategy='lazyOnload'
			/>
			<Script id='mailchimp-js' strategy='lazyOnload'>
				{`(function($) {
          window.fnames = new Array();
          window.ftypes = new Array();
          fnames[0]='EMAIL';
          ftypes[0]='email';
          fnames[1]='FNAME';
          ftypes[1]='text';
          fnames[2]='LNAME';
          ftypes[2]='text';
          fnames[4]='PHONE';
          ftypes[4]='phone';
          fnames[3]='ADDRESS';
          ftypes[3]='address';
          fnames[5]='BIRTHDAY';
          ftypes[5]='birthday';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);`}
			</Script>
		</>
	);
}
