## Agent instructions

-   Always prioritize server components over client components. Only use client components when necessary.
-   animations should be from motion/react, not framer-motion, so that they can run on the server. The import should look like: import \* as motion from 'motion/react-client'; and here's an example:
    <motion.span
    className='absolute -bottom-1 left-[0ch] h-[5px] bg-emerald-400'
    initial={{ width: 0 }}
    whileInView={{ width: '7.8ch' }}
    transition={{
    								duration: 0.8,
    								ease: 'easeOut',
    								delay: 0.2,
    							}}
-   Tech stack: Nextjs, shadcn, tailwind,
