/* eslint-disable react/no-unescaped-entities */
import Story from "../../Story/Story"
import cls from "./PreFinalStory.module.scss"
import Welcome from "@/prefinal.webp"
import React from "react"
import Lottie from "lottie-react"
import Loader from "@/lottie/prefinal.json"

const PreFinalStory = () => {
	return (
		<Story>
			<div className={cls.PreFinalStory}>
				<img src={Welcome} data-back />
				<div className={cls.content} data-content>
					<h3>From deploying contracts to releasing NFTs, you've done it all</h3>
					<Lottie animationData={Loader} loop={true} className={cls.loader} />

					<h3>
						Now, meet your unique <br />
						<span className="italics">Web3</span> persona...
					</h3>
				</div> 
			</div>
		</Story>
	)
}

export default React.memo(PreFinalStory)
