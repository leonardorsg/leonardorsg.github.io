// next.config.mjs


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true, // Ignore TypeScript errors during build
    },
};
