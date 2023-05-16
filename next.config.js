/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
		domains: [
			'api.houstongarden.click'
		],
	},
  async rewrites() {
    return [
      {
        source: '/danh-sach-villa',
        destination: '/villas',
      },
      {
        source: '/danh-sach-villa/:id',
        destination: '/villas/:id',
      },
    ]
  }
}
