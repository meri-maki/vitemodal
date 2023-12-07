/* eslint-disable react/no-unescaped-entities */
import Story from "../../Story/Story"
import cls from "./TopTokenStory.module.scss"
import TopToken from "@/toptoken.webp"

import React, { PureComponent, useCallback, useContext, useMemo } from "react"

import Chip from "../../../../shared/ui/Chip/Chip"

import ReactEChartsCore from "echarts-for-react/lib/core"
import * as echarts from "echarts/core"
import { TitleComponent } from "echarts/components"
import { PieChart } from "echarts/charts"
import { LabelLayout } from "echarts/features"
import { CanvasRenderer } from "echarts/renderers"
import { DataContext } from "../../../../shared/context/DataContext"
import { getDisplayNumber } from "../../../../shared/helpers/helpers"
import { ROOT_PATH } from "../../../../config"

echarts.use([PieChart, CanvasRenderer, LabelLayout, TitleComponent])

const COLORS = ["#0029FF", "#ffffff", "#F79F1F", "#7B3DD1", "#00C6E0"]

const TopTokenStory = () => {
	const { amounts } = useContext(DataContext)
	const { topTokensByAmount, totalAmount } = amounts

	const sortedTokens = useMemo(() => topTokensByAmount.sort((a, b) => b.amountUSD - a.amountUSD), [topTokensByAmount])

	const options = useMemo(() => {
		return {
			label: {
				position: "insideLeft",
			},
			color: COLORS,
			series: [
				{
					type: "pie",
					silent: true,
					label: {
						position: "inner",
						//rotate: "radial",
						shadowColor: "black",
						shadowBlur: 10,
					},

					radius: ["75%", "100%"],
					itemStyle: {
						borderRadius: 50,
					},
					center: ["50%", "50%"],
					selectedMode: "single",
					data: sortedTokens.map((item, index) => ({
						value: item.amountUSD,
						name: item.name,

						label: {
							borderColor: "white",
							borderWidth: 2,
							formatter: [`{Sunny|}`].join("\n"), //{rate|${item.value}}
							borderRadius: 50,
							rich: {
								Sunny: {
									height: 20,
									width: 20,
									backgroundColor: {
										image: /* data.topTokensByAmount[index].logo */ `${ROOT_PATH}tokenIcons/${item.name}(${item.symbol}).webp`,
									},
								},
							},
						},
					})),
				},
			],
		}
	}, [sortedTokens])
	return (
		<Story>
			<div className={cls.TopTokenStory}>
				<img src={TopToken} data-back />
				<div className={cls.content} data-content>
					<div className={cls.tokensBlock}>
						<div data-small>Top {topTokensByAmount.length === 1 ? "Token" : "Tokens"}</div>
						<div className={cls.tokensChips}>
							{sortedTokens.map((token) => (
								<Chip key={token.symbol} text={token.name} className={cls.tokenChip} img={`${ROOT_PATH}tokenIcons/${token.name}(${token.symbol}).webp`} />
							))}
						</div>
					</div>
					<div className={cls.statsBlock}>
						<div className={cls.flex}>
							<div className={cls.total}>${getDisplayNumber(totalAmount)}</div>
							<div data-small>Total Volume of Transactions</div>
						</div>
						<div className={cls.donut}>
							<ReactEChartsCore echarts={echarts} option={options} />
						</div>
					</div>
					<p>
						You{" "}
						<b>
							outperformed <span className="accent">N%</span> of peers
						</b>{" "}
						in transaction volume on your wallet platform.
					</p>
				</div>
			</div>
		</Story>
	)
}

export default React.memo(TopTokenStory)
