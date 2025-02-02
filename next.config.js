/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'abelling.sgp1.digitaloceanspaces.com',
			},
			{
				protocol: 'https',
				hostname: 'abelling.sgp1.cdn.digitaloceanspaces.com',
			},
		],
	},
};

module.exports = nextConfig;
