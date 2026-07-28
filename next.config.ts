import type { NextConfig } from "next";

// Keep browsers and static assets on the same release during a rolling deploy.
// Next.js deployment IDs are limited to 32 characters, while a Git SHA is 40.
const deploymentId = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 32);

const nextConfig: NextConfig = {
  ...(deploymentId ? { deploymentId } : {}),
};

export default nextConfig;
