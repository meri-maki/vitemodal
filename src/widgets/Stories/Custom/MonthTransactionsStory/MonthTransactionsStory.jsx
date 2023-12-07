/* eslint-disable react/no-unescaped-entities */
import Story from "../../Story/Story"
import cls from "./MonthTransactionsStory.module.scss"
import Welcome from "@/transmonth.webp"
import React, { useCallback, useContext } from "react"
import { DataContext } from "../../../../shared/context/DataContext"
import { getDisplayNumber, monthsFull } from "../../../../shared/helpers/helpers"
import Lottie from "lottie-react"
import Calendar from "@/lottie/calendar.json"
import Stars from "@/lottie/stars.json"

import Card from "../../../../shared/ui/Card/Card"
import Chip from "../../../../shared/ui/Chip/Chip"

const MonthTransactionsStory = () => {
	const { topMonth } = useContext(DataContext)
	const { transactionsCount, monthIndex } = topMonth
	return (
		<Story>
			<div className={cls.MonthTransactionsStory}>
				<img src={Welcome} data-back />
				<div className={cls.content} data-content>
					<div className={cls.flex}>
						<Lottie animationData={Calendar} loop={false} className={cls.calendar} />
						<div data-small>Your transaction hotspot!</div>
						<Chip big text={monthsFull[monthIndex]} className={cls.chip} />
						<Lottie animationData={Stars} loop={true} className={cls.stars} />
					</div>
					<div className={cls.flex}>
						<h3>You made a total of</h3>
						<div className={cls.gradient}>
							<span className="gradient-blue">{getDisplayNumber(transactionsCount)}</span>
						</div>
						<h3>{transactionsCount === 1 ? "transaction" : "transactions"}</h3>
					</div>
					<Card>
						<b>
							<span className="primary-300">N%</span> busier
						</b>{" "}
						than peers
					</Card>
				</div>
			</div>
		</Story>
	)
}

export default React.memo(MonthTransactionsStory)
