/** @type {import('next').NextConfig} */

module.exports = {
  output: 'standalone',
  // for security outside sources of images must be specified TODO make the domain be the pocketbase ip
  images: {
    domains: ['127.0.0.1'],
  },
 }