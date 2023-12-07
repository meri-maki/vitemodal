import { useWeb3Modal } from "@web3modal/wagmi/react"
import React, { useState, useCallback } from "react"
import ConnectModal from "../ConnectModal/ConnectModal"
import cls from "./ConnectButton.module.scss"
import { classNames } from "../../../../shared/helpers/classNames"
import { mainconfig } from "../../../../config"
import Button, { ButtonColor } from "../../../../shared/ui/Button/Button"

export default function ConnectButton(props) {
	const { action, connect, header, className } = props

	const mods = {
		[cls.connect]: connect,
	}
	const { open } = useWeb3Modal()

	const isMetaMask = mainconfig.isMetaMask
	const isMobile = mainconfig.isMobile

	const [connectModal, setConnectModal] = useState(false)
	const onCloseModal = useCallback(() => {
		setConnectModal(false)
		//track(ampli.closeModal)
	}, [])
	return (
		<>
			<w3m-button />
			{/* <Button
				className={classNames(cls.ConnectButton, mods, [className])}
				header={header}
				color={ButtonColor.pink}
				onClick={() => {
					if (action) {
						action()
					}
					if (isMobile && !isMetaMask) {
						setConnectModal(true)
					} else {
						open()
					}
				}}
			>
				Connect Wallet
			</Button> */}
			{connectModal && <ConnectModal isOpen={connectModal} onClose={onCloseModal} />}
		</>
	)
}
