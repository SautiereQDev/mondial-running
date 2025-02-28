import type {NextConfig} from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.quentinsautiere.com',
				port: '',
				pathname: '/mondial-running/**',
			},
		],
	},
};

export default nextConfig;