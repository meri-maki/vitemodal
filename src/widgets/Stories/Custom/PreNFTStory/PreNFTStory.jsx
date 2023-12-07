/* eslint-disable react/no-unescaped-entities */
import Story from "../../Story/Story"
import cls from "./PreNFTStory.module.scss"
import Welcome from "@/prenft.webp"
import Arrow from "@/arrow.svg?react"
import React from "react"
import Lottie from "lottie-react"
import Pre from "@/lottie/prenft.json"

const PreNFTStory = () => {
	return (
		<Story>
			<div className={cls.PreNFTStory}>
				<img src={Welcome} data-back />
				<div className={cls.content} data-content>
					<h3>Diving into your NFT adventures</h3>
					<p>
						Here’s how you shaped your collection in <b>2023</b>
					</p>
					<Arrow />
					<Lottie animationData={Pre} loop={true} className={cls.pre} />
				</div>
			</div>
		</Story>
	)
}

export default React.memo(PreNFTStory)
