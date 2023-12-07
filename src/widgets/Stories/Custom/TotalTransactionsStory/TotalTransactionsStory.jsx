/* eslint-disable react/no-unescaped-entities */
import Story from "../../Story/Story"
import cls from "./TotalTransactionsStory.module.scss"
import Welcome from "@/trans.webp"
import React, { useCallback, useContext } from "react"
import { DataContext } from "../../../../shared/context/DataContext"
import { getDisplayNumber } from "../../../../shared/helpers/helpers"

const TotalTransactionsStory = () => {
	const data = useContext(DataContext)
	const num = data.transactionsTotalCount
	return (
		<Story>
			<div className={cls.TotalTransactionsStory}>
				<img src={Welcome} data-back />
				<div className={cls.content} data-content>
					<div className={cls.flex}>
						<h2>WOW! You executed</h2>
						<div className={cls.gradient}>
							<span className="gradient-pink">{getDisplayNumber(num)}</span>
						</div>
						<h2>transactions this year!</h2>
					</div>
					<h3>But the real buzz was in...</h3>
				</div>
			</div>
		</Story>
	)
}

export default React.memo(TotalTransactionsStory)
