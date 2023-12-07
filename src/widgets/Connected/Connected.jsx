import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Lottie from "lottie-react"
import Crypto from "@/lottie/crypto.json"

import cls from "./Connected.module.scss"
import { DataContext } from "../../shared/context/DataContext"

import Button from "../../shared/ui/Button/Button"
import { Stories } from "../Stories/Stories/Stories"

import Img1 from "@/chainstory.webp"
import Img2 from "@/event.webp"
import Img3 from "@/3.webp"
import Img4 from "@/gas.webp"
import Img5 from "@/transmonth.webp"
import Img6 from "@/nftstory.webp"
import Img7 from "@/nfttrans.webp"
import Img8 from "@/preevents.webp"
import Img9 from "@/pregas.webp"
import Img10 from "@/prenft.webp"
import Img11 from "@/toptoken.webp"
import Img12 from "@/trans.webp"
import Img13 from "@/welcome.webp"
import Img14 from "@/prefinal.webp"

import { useImagePreloader } from "../../shared/hooks/useImagePreloader"
import { classNames } from "../../shared/helpers/classNames"
import { FETCH_ANIMATION_DELAY, FetchLoader } from "../Loaders/FetchLoader/FetchLoader"
import { useAccount, useDisconnect } from "wagmi"

const preloadSrcList = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img14, Img13]
const walletAddress = "0xa28B73303EDCc573B438Ca7174ba02bA7a418852"

const Connected = () => {
	const [showLoader, setShowLoader] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [data, setData] = useState(null)
	const [isOpen, setIsOpen] = useState(false)

	const { disconnect } = useDisconnect()
	const { address } = useAccount()

	useEffect(() => {
		if (!isLoading) {
			const timer = setTimeout(() => {
				setShowLoader(false)
			}, FETCH_ANIMATION_DELAY)
			return () => clearTimeout(timer)
		}
	}, [isLoading])

	const { imagesPreloaded } = useImagePreloader(preloadSrcList)

	const openStories = useCallback(() => {
		setIsOpen(true)
	}, [])

	const closeStories = useCallback(() => {
		setIsOpen(false)
	}, [])

	useEffect(() => {
		setShowLoader(true)
		setIsLoading(true)
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [address])

	const fetchData = async () => {
		try {
			const response = await /* fetch(`/api/statistics?address=${address}`) */ fetch("/vitalik.json")
			const result = await response.json()
			console.log(result)
			if (result.error) {
				throw new Error(result.error)
			}
			if (result.stats && result.stats.poap.length) {
				let randomThumbnails = []
				randomThumbnails = result.stats.poap
					.sort(() => 0.5 - Math.random())
					.slice(0, 4)
					.map((event) => event.image.thumbnailUrl)

				result.stats.poapURLs = randomThumbnails
			}
			setData(result.stats)
		} catch (error) {
			console.log(error)
			setIsError(true)
		} finally {
			setIsLoading(false)
		}
	}

	if (showLoader) return <FetchLoader isOpen={isLoading || !imagesPreloaded} />

	if (isError)
		return (
			<div className={cls.NoResultError}>
				<h2>Oops! We Couldn't Process Your Yearly Wrap</h2>
				<p>We hit a snag analyzing your yearly Web3 activities</p>

				<h3>🔍 Try a Different Wallet?</h3>
				<p>Switching wallets might help!</p>
				<Button type="button" onClick={disconnect}>
					Disconnect
				</Button>
			</div>
		)

	return (
		<DataContext.Provider value={data}>
			<div className={cls.Connected}>
				<Button type="button" onClick={openStories}>
					Ready?
				</Button>
				<Button type="button" onClick={disconnect}>
					Disconnect
				</Button>
				{isOpen && <Stories onClose={closeStories} isOpen={isOpen} />}
			</div>
		</DataContext.Provider>
	)
}

export default React.memo(Connected)
