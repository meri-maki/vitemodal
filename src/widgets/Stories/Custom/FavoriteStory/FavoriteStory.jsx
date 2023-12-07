/* eslint-disable react/no-unescaped-entities */
import Story from "../../Story/Story"
import cls from "./FavoriteStory.module.scss"
import Welcome from "@/3.webp"
import Lottie from "lottie-react"

import coin from "@/lottie/coin.json"
import Chip from "../../../../shared/ui/Chip/Chip"

import * as echarts from "echarts/core"
import { GridComponent } from "echarts/components"
import { BarChart } from "echarts/charts"
import { CanvasRenderer } from "echarts/renderers"
import ReactEChartsCore from "echarts-for-react/lib/core"
import { ROOT_PATH } from "../../../../config"
import React, { useContext, useMemo } from "react"
import { DataContext } from "../../../../shared/context/DataContext"
import { getDisplayNumber, getMaxStyledData, months, monthsFull } from "../../../../shared/helpers/helpers"

echarts.use([GridComponent, BarChart, CanvasRenderer])

const FavoriteStory = () => {
	const { topToken } = useContext(DataContext)
	const { amountByMonthUSD, tokenData } = topToken

	const max = useMemo(() => Math.max(...amountByMonthUSD), [amountByMonthUSD])
	let maxIndex = amountByMonthUSD.indexOf(max)

	const transformedData = useMemo(() => getMaxStyledData(max, amountByMonthUSD), [max, amountByMonthUSD])

	const options = {
		silent: true,
		xAxis: {
			data: months,
			axisLabel: {
				inside: false,
				color: "white",
				fontFamily: "Inter",
				fontSize: "11px",
				fontWeight: 700,
			},
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			z: 12,
		},
		yAxis: {
			show: true,
			name: `${tokenData.symbol} Income`,
			max: max,
			nameTextStyle: {
				color: "white",
				fontFamily: "Inter",
				fontSize: "12px",
				fontWeight: 700,
			},
			nameGap: 4,
			nameRotate: 90,
			nameLocation: "middle",
			axisLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				show: false,
			},
			splitLine: {
				show: false,
			},
		},
		series: [
			{
				type: "bar",
				barCategoryGap: "12px",
				barGap: "12px",
				barWidth: "16px",
				showBackground: true,
				itemStyle: {
					color: "#F79F1F",
					borderRadius: 50,
				},
				backgroundStyle: {
					color: "#18181B",
					borderRadius: 50,
				},
				data: transformedData,
			},
		],
	}
	return (
		<Story>
			<div className={cls.FavoriteStory}>
				<img src={Welcome} data-back />
				<div className={cls.content} data-content>
					<div className={cls.favToken}>
						<Lottie animationData={coin} loop={true} className={cls.coin} />
						<div data-small>Favourite Token</div>
						<Chip big text={tokenData.name} className={cls.chip} img={`${ROOT_PATH}tokenIcons/${tokenData.name}(${tokenData.symbol}).webp`} />
					</div>
					<div className={cls.bestMonth}>
						<div data-small>Best Month</div>
						<Chip big text={monthsFull[maxIndex]} className={cls.chip} sub={getDisplayNumber(max)} />
					</div>
					<div className={cls.bars}>
						<ReactEChartsCore echarts={echarts} option={options} style={{ height: 270 }} />
					</div>
				</div>
			</div>
		</Story>
	)
}

export default React.memo(FavoriteStory)
