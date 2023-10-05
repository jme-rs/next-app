/** @type {import('next').NextConfig} */

const branchName = process.env.BRANCH_NAME ? "/" + process.env.BRANCH_NAME : "";

const nextConfig = {
  output: 'export',
  experimental: { esmExternals: "loose" },
}

module.exports = nextConfig
