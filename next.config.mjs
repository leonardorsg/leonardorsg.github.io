// next.config.mjs


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: 'https://leonardorsg.github.io/',
    images: {
        unoptimized: true,
    },
    typescript: {
        ignoreBuildErrors: true, // Ignore TypeScript errors during build
    },


};
