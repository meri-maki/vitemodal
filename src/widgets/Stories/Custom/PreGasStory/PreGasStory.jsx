/* eslint-disable react/no-unescaped-entities */
import Story from "../../Story/Story"
import cls from "./PreGasStory.module.scss"
import Welcome from "@/pregas.webp"
import Arrow from "@/arrow.svg?react"
import React, { useCallback, useContext } from "react"
import { DataContext } from "../../../../shared/context/DataContext"

const PreGasStory = () => {
	return (
		<Story>
			<div className={cls.PreGasStory}>
				<img src={Welcome} data-back />
				<div className={cls.content} data-content>
					<h3 data-reveal="1">As an ETH Network contributor, ever wondered about your yearly gas footprint?</h3>
					<Arrow />
				</div>
			</div>
		</Story>
	)
}

export default React.memo(PreGasStory)
