// next.config.mjs

import { withSentryConfig } from '@sentry/nextjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
};

const sentryOptions = {
    silent: true,
    org: "javascript-mastery",
    project: "javascript-nextjs",
};

const sentryBuildOptions = {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
};

export default withSentryConfig(nextConfig, sentryOptions, sentryBuildOptions);
