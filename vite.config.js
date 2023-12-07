import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react-swc"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: {
			"~": resolve(__dirname, "srс"),
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					wagmi: ["wagmi"],
					web3modal: ["@web3modal/wagmi"],
					stories: ["react-insta-stories"],
					lottie: ["lottie-react"],
					echarts: ["echarts"],
					echartsReact: ["echarts-for-react"],
					count: ["react-countup"],
				},
			},
		},
	},
	optimizeDeps: {
		include: ["wagmi", "viem"],
	},
})
