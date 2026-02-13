import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  // Explicitly set turbopack root to prevent workspace root mis-detection
  // This ensures standalone output paths are correct in Docker builds
  turbopack: {
    root: process.cwd(),
  },

  // Security headers
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        {
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
      ],
    },
  ],
};

export default nextConfig;
