import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "pavelpronin.com",
				pathname: "/wp-content/uploads/**",
			},
			{
				protocol: "https",
				hostname: "gratsielablog.me",
				pathname: "/wp-content/uploads/**",
			},
		],
	},
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
