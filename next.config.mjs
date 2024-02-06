/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	poweredByHead: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_API,
		APP_ENV: process.env.REACT_APP_ENV,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:4200/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:4200/uploads/:path*',
			},
		]
	},
}

export default nextConfig
