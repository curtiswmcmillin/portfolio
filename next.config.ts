import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1dxfc-a0bEvnicIxFUTa2y4T0wx6mtkYs/view?usp=sharing",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
