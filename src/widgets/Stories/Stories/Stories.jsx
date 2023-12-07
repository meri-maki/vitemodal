import React, { Suspense, lazy, useCallback, useContext, useRef, useState } from "react"
import Lottie from "lottie-react"

import Confetti from "@/lottie/confetti.json"
import { DataContext } from "../../../shared/context/DataContext"
import { URLContext } from "../../../shared/context/URLContext"
import cls from "./Stories.module.scss"

import Button from "../../../shared/ui/Button/Button"

import WelcomeStory from "../Custom/WelcomeStory/WelcomeStory"
import TopTokenStory from "../Custom/TopTokenStory/TopTokenStory"
import GasStory from "../Custom/GasStory/GasStory"
import NFTStory from "../Custom/NFTStory/NFTStory"
import FavoriteStory from "../Custom/FavoriteStory/FavoriteStory"
import EventStory from "../Custom/EventStory/EventStory"
import TotalTransactionsStory from "../Custom/TotalTransactionsStory/TotalTransactionsStory"
import MonthTransactionsStory from "../Custom/MonthTransactionsStory/MonthTransactionsStory"
import ChainStory from "../Custom/ChainStory/ChainStory"
import PreGasStory from "../Custom/PreGasStory/PreGasStory"
import PreNFTStory from "../Custom/PreNFTStory/PreNFTStory"
import NFTTransactionsStory from "../Custom/NFTTransactionsStory/NFTTransactionsStory"
import PreEventsStory from "../Custom/PreEventsStory/PreEventsStory"
import PreFinalStory from "../Custom/PreFinalStory/PreFinalStory"

/* const WelcomeStory = React.lazy(() => import("../Custom/WelcomeStory/WelcomeStory"))
const TopTokenStory = React.lazy(() => import("../Custom/TopTokenStory/TopTokenStory"))
const GasStory = React.lazy(() => import("../Custom/GasStory/GasStory"))
const NFTStory = React.lazy(() => import("../Custom/NFTStory/NFTStory"))
const FavoriteStory = React.lazy(() => import("../Custom/FavoriteStory/FavoriteStory"))
const EventStory = React.lazy(() => import("../Custom/EventStory/EventStory"))
const TotalTransactionsStory = React.lazy(() => import("../Custom/TotalTransactionsStory/TotalTransactionsStory"))
const MonthTransactionsStory = React.lazy(() => import("../Custom/MonthTransactionsStory/MonthTransactionsStory"))
const ChainStory = React.lazy(() => import("../Custom/ChainStory/ChainStory"))
const PreGasStory = React.lazy(() => import("../Custom/PreGasStory/PreGasStory"))
const PreNFTStory = React.lazy(() => import("../Custom/PreNFTStory/PreNFTStory"))
const NFTTransactionsStory = React.lazy(() => import("../Custom/NFTTransactionsStory/NFTTransactionsStory"))
const PreEventsStory = React.lazy(() => import("../Custom/PreEventsStory/PreEventsStory"))
const PreFinalStory = React.lazy(() => import("../Custom/PreFinalStory/PreFinalStory")) */

import { classNames } from "../../../shared/helpers/classNames"
import coins from "@/lottie/coins.json"
const StoriesLazy = lazy(() => import("react-insta-stories"))

const CloseButton = (props) => {
	const { onClose } = props

	return (
		<button onClick={onClose} className={cls.close} type="button">
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
				<path d="M10.8574 3.14307L3.14307 10.8574" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M10.8574 10.8574L3.14307 3.14307" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</button>
	)
}
const ANIMATION_DELAY = 300

function StoriesLoader() {
	return (
		<div className={cls.StoriesLoader}>
			<Lottie animationData={coins} loop />
		</div>
	)
}

export const Stories = React.memo(function Stories(props) {
	const { className, isOpen, onClose } = props
	const [isClosing, setIsClosing] = useState(false)
	const timerRef = useRef()
	const closeHandler = useCallback(() => {
		if (onClose) {
			setIsClosing(true)
			timerRef.current = setTimeout(() => {
				onClose()
				setIsClosing(false)
			}, ANIMATION_DELAY)
		}
	}, [onClose])

	const mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing,
	}
	const lottieRef = useRef()

	const { poap, nft } = useContext(DataContext)

	const [allEnded, setAllEnded] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(null)

	const stories = [
		{ content: WelcomeStory, preloadResource: true },
		{ content: TopTokenStory, preloadResource: true },
		{ content: TotalTransactionsStory, preloadResource: true },
		{ content: MonthTransactionsStory, preloadResource: true },
		{ content: ChainStory, preloadResource: true },
		{ content: FavoriteStory, preloadResource: true },
		{ content: PreGasStory, preloadResource: true },
		{ content: GasStory, preloadResource: true },
		...(nft.tradesCount
			? [
					{ content: PreNFTStory, preloadResource: true },
					{ content: NFTTransactionsStory, preloadResource: true },
					{ content: NFTStory, preloadResource: true },
			  ]
			: []),

		...(poap.length
			? [
					{ content: PreEventsStory, preloadResource: true },
					{ content: EventStory, preloadResource: true },
			  ]
			: []),

		{ content: PreFinalStory, preloadResource: true },
	]

	const length = stories?.length
	/* const handleShare = async () => {
			const lastImageURL = url[url.length - 1]
			if (navigator.share) {
				const response = await fetch(lastImageURL)
				const blob = await response.blob()
	
				const file = new File([blob], "image.jpg", { type: blob.type })
	
				const data = {
					title: "Check this out!",
					text: "Here is a cool cat image for you.",
					files: [file],
					//url: lastImageURL,
				}
	
				if (navigator.canShare && navigator.canShare(data)) {
					try {
						await navigator.share(data)
					} catch (error) {
						console.error("Something went wrong sharing the file", error)
					}
				} else {
					console.log("File sharing is not supported on your browser.")
				}
			} else {
				console.log("Web Share API is not supported in your browser.")
			}
		} */

	return (
		<div className={classNames(cls.Stories, mods, [className])}>
			<div className={cls.storiesWrapper}>
				<div className={cls.stories}>
					<Suspense fallback={<StoriesLoader />}>
						<CloseButton onClose={closeHandler} />
						<StoriesLazy
							//loader={StoriesLoader}
							preloadCount={5}
							currentIndex={currentIndex}
							height="100%"
							width="100%"
							keyboardNavigation
							defaultInterval={1500000}
							stories={stories}
							onStoryEnd={(s, st) => console.log("story ended", s, st)}
							onAllStoriesEnd={(s, st) => {
								console.log("all stories ended", s, st)
							}}
							onStoryStart={(s, st) => {
								console.log("story started", s, st)
								if (s === 0) {
									lottieRef.current.goToAndPlay(0)
								}
								if (s === length - 1) {
									//lottieRef.current.goToAndPlay(0)
									setCurrentIndex(s)
									setAllEnded(true)
								} else setAllEnded(false)
							}}
							onNext={() => console.log("next Button pressed")}
							onPrevious={() => console.log("previous Button pressed")}
							progressContainerStyles={{ paddingTop: "24px", width: "calc(100% - 38px)" }}
							progressWrapperStyles={{ background: "rgba(255, 255, 255, 0.15)" }}
							storyContainerStyles={{ borderRadius: 0, overflow: "hidden", background: "#101012" }}
						/>
					</Suspense>
					<Lottie animationData={Confetti} autoplay={false} loop={false} lottieRef={lottieRef} className={cls.confetti} />

					{/* {allEnded && (
						<div className="endBlock">
							<Button type="Button" onClick={() => setCurrentIndex(0)}>
								Again?
							</Button>
							<Button type="Button">Twitter</Button>
							<Button type="Button">Facebook</Button>
							 {navigator.share && (
									<Button type="Button" onClick={handleShare}>
										Share
									</Button>
								)}
		 
							<Button type="Button">Mint NFT</Button>
						</div>
					)} */}
				</div>
			</div>
		</div>
	)
})
