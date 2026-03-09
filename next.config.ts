import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "commons.wikimedia.org",
				pathname: "/wiki/Special:FilePath/**",
			},
			{
				protocol: "https",
				hostname: "upload.wikimedia.org",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
