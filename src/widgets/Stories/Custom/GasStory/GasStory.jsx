/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useContext } from "react"

import cls from "./GasStory.module.scss"
import Welcome from "@/gas.webp"
import Arrow from "@/arrow.svg?react"

import * as echarts from "echarts/core"
import { GaugeChart } from "echarts/charts"
import { CanvasRenderer } from "echarts/renderers"
import ReactEChartsCore from "echarts-for-react/lib/core"
import { DataContext } from "../../../../shared/context/DataContext"
import { getDisplayNumber } from "../../../../shared/helpers/helpers"
import Story from "../../Story/Story"
import Card from "../../../../shared/ui/Card/Card"
echarts.use([GaugeChart, CanvasRenderer])

const GasStory = () => {
	const { gas } = useContext(DataContext)
	const option = {
		series: [
			{
				type: "gauge",
				silent: true,
				startAngle: 180,
				endAngle: 0,
				min: 0,
				max: 10000,
				splitNumber: 12,
				itemStyle: {
					color: {
						type: "linear",
						x: 0,
						y: 0,
						x2: 0,
						y2: 1,
						colorStops: [
							{
								offset: 0,
								color: "#CC33CC",
							},
							{
								offset: 1,
								color: "#0066FF",
							},
						],
					},
				},
				progress: {
					show: true,
					roundCap: true,
					width: 18,
				},
				pointer: {
					icon: "path://M21.4542 23.5856C21.4542 28.7403 16.6786 32.9189 10.7875 32.9189C4.89648 32.9189 0.12085 28.7403 0.12085 23.5856C0.12085 18.431 10.7875 0.918945 10.7875 0.918945C10.7875 0.918945 21.4542 18.431 21.4542 23.5856Z",
					length: "18%",
					width: 15,
					itemStyle: {
						color: "white",
					},
					offsetCenter: [0, "5%"],
				},
				axisLine: {
					roundCap: true,
					lineStyle: {
						width: 18,
						color: [[1, "#18181B"]],
					},
				},
				splitLine: {
					show: false,
				},
				axisTick: {
					show: true,
					length: 2,
					distance: 20,
					splitNumber: 2,
					lineStyle: {
						width: 2,
						color: "#3F3F46",
					},
				},
				axisLabel: {
					show: false,
				},
				title: {
					show: false,
				},
				detail: {
					show: false,
				},
				data: [
					{
						value: gas.amountUSD,
					},
				],
			},
		],
	}
	return (
		<Story>
			<div className={cls.GasStory}>
				<img src={Welcome} data-back />
				<div className={cls.content} data-content>
					<div>
						<h3>2023 Gas Contribution</h3>
						<div className={cls.gauge} id="gauge">
							<ReactEChartsCore option={option} echarts={echarts} style={{ height: "320px" }} />
						</div>
						<div className={cls.stats}>
							<div data-small>This year, you've contributed a total of</div>
							<div className={cls.flex}>
								<h2>~${getDisplayNumber(gas.amountUSD)}</h2>
								<p>
									in <b>GAS</b> fees
								</p>
							</div>
						</div>
					</div>
					<div className={cls.cardsBlock}>
						<Card>
							<b>
								Surpassing <span className="accent">N%</span> of traders
							</b>{" "}
							in your crypto
						</Card>
						<Card>
							<b>
								Outperforming <span className="accent">N%</span> of users
							</b>{" "}
							on your wallet
						</Card>
						<Card>
							<b>
								Leading <span className="accent">N%</span> of portfolios
							</b>{" "}
							like yours
						</Card>
					</div>
				</div>
			</div>
		</Story>
	)
}

export default React.memo(GasStory)
