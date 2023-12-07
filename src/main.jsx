import React from "react"
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"

import { InjectedConnector } from "wagmi/connectors/injected"

import { WalletConnectConnector } from "wagmi/connectors/walletConnect"
import ReactDOM from "react-dom/client"
import "./styles/helpers/resetNew.scss"
import "./styles/ui/index.scss"

import App from "./App.jsx"

import { createWeb3Modal } from "@web3modal/wagmi"

const { chains, publicClient, webSocketPublicClient } = configureChains([mainnet], [alchemyProvider({ apiKey: "wg6wp8N_jgPqBLyx94PxLRrNLVer2Elb" }), publicProvider()])

const projectId = "cc52e468243becfa0d98aa9eb74afe63"

const wagmiConfig = createConfig({
	autoConnect: false,
	connectors: [
		new WalletConnectConnector({
			chains,
			options: {
				projectId,
				showQrModal: false,
			},
		}),
		new InjectedConnector({
			chains,
			options: {
				name: "Injected",
				shimDisconnect: true,
			},
		}),
	],
	publicClient,
	webSocketPublicClient,
})

createWeb3Modal({
	defaultChain: mainnet,
	wagmiConfig,
	projectId,
	chains,
})

ReactDOM.createRoot(document.getElementById("root")).render(
	<WagmiConfig config={wagmiConfig}>
		<App />
	</WagmiConfig>
)
