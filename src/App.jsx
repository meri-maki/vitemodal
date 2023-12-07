import React, { useCallback, useState } from "react"
import { useAccount } from "wagmi"
import "./App.scss"

import { useWeb3Modal } from "@web3modal/wagmi/react"

function ConnectButton() {
	const { open } = useWeb3Modal()

	return <button onClick={open}>Custom Connect Button</button>
}
function App() {
	const { isConnected } = useAccount({
		onConnect() {
			console.log("connected")
		},
	})

	return <div className="app">{isConnected ? <p>Connected</p> : <w3m-button />}</div>
}

export default App
