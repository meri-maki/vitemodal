/* eslint-disable react/no-unescaped-entities */
import Story from "../../Story/Story"
import cls from "./NFTTransactionsStory.module.scss"
import Welcome from "@/nfttrans.webp"
import React, { useCallback, useContext } from "react"
import { DataContext } from "../../../../shared/context/DataContext"
import { getDisplayNumber } from "../../../../shared/helpers/helpers"
import Chip from "../../../../shared/ui/Chip/Chip"
import Lottie from "lottie-react"
import Line from "@/lottie/nfttrans.json"

const NFTTransactionsStory = () => {
	const { nft } = useContext(DataContext)
	const num = nft.tradesCount
	return (
		<Story>
			<div className={cls.NFTTransactionsStory}>
				<img src={Welcome} data-back />
				<div className={cls.content} data-content>
					<div className={cls.flex}>
						<div className={`${cls.textBlock} ${num < 10 ? cls.small : ""}`}>
							<span>{getDisplayNumber(num)}</span>

							<Chip big text={num === 1 ? "NFT transaction" : "NFT transactions"} className={cls.chip} />
						</div>
						<h3>
							surpassing <span className="primary-300">N%</span> of enthusiasts
						</h3>
					</div>
					<Lottie animationData={Line} loop={true} className={cls.line} />

					<h3>
						But one <span className="italics">NFT</span> outshone the rest...
					</h3>
				</div>
			</div>
		</Story>
	)
}

export default React.memo(NFTTransactionsStory)
