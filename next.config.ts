import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume.pdf",
        destination: "/resumeUp.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
