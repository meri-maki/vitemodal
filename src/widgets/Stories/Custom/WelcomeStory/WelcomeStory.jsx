/* eslint-disable react/no-unescaped-entities */
import Story from "../../Story/Story"
import cls from "./WelcomeStory.module.scss"
import Welcome from "@/welcome.webp"
import Arrow from "@/arrow.svg?react"
import React, { useCallback, useContext } from "react"
import { DataContext } from "../../../../shared/context/DataContext"

const WelcomeStory = () => {
	const data = useContext(DataContext)
	return (
		<Story>
			<div className={cls.WelcomeStory}>
				<img src={Welcome} data-back />
				<div className={`${cls.content} ${data.ens ? cls.ens : ""}`} data-content>
					<h2>
						{data.ens && (
							<span className="italics">
								{data.ens},<br />
							</span>
						)}
						Welcome to Your Web3 Wrapped!
					</h2>
					<p>
						Let's take a journey through your blockchain highlights from the past year. Discover your impact, investments, and interactions in the ever-evolving world of Web3!
					</p>
					<Arrow />
				</div>
			</div>
		</Story>
	)
}

export default React.memo(WelcomeStory)
