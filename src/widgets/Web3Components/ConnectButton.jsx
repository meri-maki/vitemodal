import React, { useCallback, useState } from "react"
import ConnectModal from "./ConnectWidgets/ConnectModal/ConnectModal"
import Button from "../../shared/ui/Button/Button"
import { useWeb3Modal } from "@web3modal/wagmi/react"

export default function ConnectButton() {
	//const { open } = useWeb3Modal()
	const [connectModal, setConnectModal] = useState(false)
	const onCloseModal = useCallback(() => {
		setConnectModal(false)
		//track(ampli.closeModal)
	}, [])
	return (
		<>
			{connectModal && <ConnectModal isOpen={connectModal} onClose={onCloseModal} />}
			<w3m-button />
		</>
	)
}
