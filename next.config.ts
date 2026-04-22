import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Browsers and crawlers request /favicon.ico before the HTML link; run before Next’s static /favicon handling
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/favicon.ico", destination: "/favicon.png" },
      ],
    };
  },
};

export default nextConfig;
