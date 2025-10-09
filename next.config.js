/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['jwlblqgkhpxztiswqahj.supabase.co'], // ✅ ใส่โดเมนตรงนี้
  },
}

module.exports = nextConfig
