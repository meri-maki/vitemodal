/* eslint-disable react/no-unescaped-entities */
import Story from "../../Story/Story"
import cls from "./PreEventsStory.module.scss"
import Welcome from "@/preevents.webp"

import React, { useEffect, useRef } from "react"
import Lottie from "lottie-react"
import Rocket from "@/lottie/rocketx2.json"

const PreEventsStory = () => {
	const lottieRef = useRef()
	useEffect(() => {
		lottieRef.current.setSpeed(2)
	}, [])

	return (
		<Story>
			<div className={cls.PreEventsStory}>
				<img src={Welcome} data-back />
				<div className={cls.content} data-content>
					<Lottie animationData={Rocket} loop={true} className={cls.rocket} lottieRef={lottieRef} />
					<h3 data-reveal="1">
						Now, let's recap the digital events that marked your <span className="italics">Web3</span> journey this year
					</h3>
				</div>
			</div>
		</Story>
	)
}

export default React.memo(PreEventsStory)
