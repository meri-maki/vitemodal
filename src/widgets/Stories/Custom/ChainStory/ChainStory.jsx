/* eslint-disable react/no-unescaped-entities */
import Story from "../../Story/Story"
import cls from "./ChainStory.module.scss"
import Welcome from "@/chainstory.webp"
import React, { useCallback, useContext } from "react"
import { DataContext } from "../../../../shared/context/DataContext"
import { getDisplayNumber, monthsFull } from "../../../../shared/helpers/helpers"
import Lottie from "lottie-react"

import Server from "@/lottie/server.json"

import Chip from "../../../../shared/ui/Chip/Chip"

const ChainStory = () => {
	const { chains } = useContext(DataContext)

	const num = chains.activeCount

	return (
		<Story>
			<div className={cls.ChainStory}>
				<img src={Welcome} data-back />
				<div className={cls.content} data-content>
					<div className={cls.flex}>
						<h3>You explored</h3>
						<div className={`${cls.textBlock} ${num > 99 ? cls.big : ""} ${num < 10 ? cls.small : ""}`}>
							<span>{getDisplayNumber(num)}</span>

							<Chip big text={num === 1 ? "blockchain" : "blockchains"} className={cls.chip} />
						</div>
						<h3>
							and interacted with <span className="purple">{getDisplayNumber(chains.tokensCount)}</span> different tokens
						</h3>
					</div>
					<Lottie animationData={Server} loop={true} className={cls.server} />

					<h3>And your top token is...</h3>
				</div>
			</div>
		</Story>
	)
}

export default React.memo(ChainStory)
