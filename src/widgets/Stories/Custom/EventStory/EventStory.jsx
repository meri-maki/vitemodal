/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useContext, useMemo, useState } from "react"
import Story from "../../Story/Story"
import cls from "./EventStory.module.scss"
import Welcome from "@/event.webp"
import { getDisplayNumber } from "../../../../shared/helpers/helpers"
import { DataContext } from "../../../../shared/context/DataContext"
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
	return array
}

const EventStory = () => {
	const { poap, poapURLs } = useContext(DataContext)

	return (
		<Story>
			<div className={cls.EventStory}>
				<img src={Welcome} data-back />
				<div className={cls.content} data-content>
					<div>
						<h3>In 2023, you earned</h3>
						<div className={`${cls.textBlock} ${poap.length > 99 ? cls.big : ""}`}>
							<div className={cls.gradient}>
								<span className="gradient-blue">{getDisplayNumber(poap.length)}</span>
							</div>
							<div className={cls.poap}>{poap.length > 1 ? "POAPs" : "POAP"}</div>
						</div>
						<h3>from premier crypto events</h3>
						<div className={cls.pro}>
							You are a <span className="italics">Web3</span> event pro!
						</div>
					</div>
					<div className={cls.images}>
						{poapURLs.map((event, index) => (
							<img key={index} src={event} alt={`POAP ${index + 1}`} className={cls.image} />
						))}
					</div>
				</div>
			</div>
		</Story>
	)
}
export default React.memo(EventStory)
