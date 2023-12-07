import React, { useEffect } from "react"
import { useState } from "react"
import Lottie from "lottie-react"
import Crypto from "@/lottie/crypto.json"

import cls from "./FetchLoader.module.scss"
import { classNames } from "../../../shared/helpers/classNames"

export const FETCH_ANIMATION_DELAY = 300
export const FetchLoader = ({ isOpen, className }) => {
	const [isClosing, setIsClosing] = useState(false)

	useEffect(() => {
		if (isOpen) {
			setIsClosing(false)
		} else {
			setIsClosing(true)
			const timer = setTimeout(() => {
				setIsClosing(false)
			}, FETCH_ANIMATION_DELAY)
			return () => clearTimeout(timer)
		}
	}, [isOpen])

	const mods = {
		[cls.opened]: isOpen && !isClosing,
		[cls.isClosing]: !isOpen && isClosing,
	}

	return (
		<div className={classNames(cls.FetchLoader, mods, [className])}>
			<Lottie animationData={Crypto} loop={true} className={cls.animation} />
		</div>
	)
}
