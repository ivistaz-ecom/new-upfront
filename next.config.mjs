/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["beta.upfront.global"], // Add your domain here
  },
  async redirects() {
    return [
    //     {
    //     source: "/v-life",
    //     destination: "/",
    //     permanent: false,
    //   },
    ];
  },
};

export default nextConfig;
