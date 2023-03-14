// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sentry: {
    hideSourceMaps: true
  }
}

/**
 * @see https://github.com/getsentry/sentry-webpack-plugin#options
 */
const SentryWebpackPluginOptions = {
  silent: false, // Suppresses all logs
  // finalize: false, // Finalizes the release after uploading artifacts in github actions
  debug: true,
  dryRun: !process.env.CI
};

module.exports = withSentryConfig(nextConfig, SentryWebpackPluginOptions);
