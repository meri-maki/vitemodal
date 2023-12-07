/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from "react"
import Story from "../../Story/Story"
import cls from "./NFTStory.module.scss"
import Welcome from "@/nftstory.webp"
import Chip from "../../../../shared/ui/Chip/Chip"
import { getDisplayNumber, shortenName } from "../../../../shared/helpers/helpers"
import { DataContext } from "../../../../shared/context/DataContext"
import Lottie from "lottie-react"
import Hearts from "@/lottie/hearts.json"

const NFTStory = () => {
	const { nft } = useContext(DataContext)
	const { topTradedNFTPriceUSD, topTradedNFT } = nft
	const src = topTradedNFT.nft_details.image_url
	const name = topTradedNFT.nft_details.collection.name
	return (
		<Story>
			<div className={cls.NFTStory}>
				<img src={Welcome} data-back />
				<div className={cls.content} data-content>
					<h3>Your NFT Spotlight!</h3>
					<Chip big text={shortenName(name)} className={cls.name} />
					<div className={cls.NFT}>
						<img src={src} />
						<Lottie animationData={Hearts} loop={true} className={cls.hearts} />
					</div>
					<div className={cls.priceBlock}>
						<div>
							<b>acquired</b> for
						</div>
						{topTradedNFTPriceUSD === 0 ? <div className={cls.price}>FREE</div> : <div className={cls.price}>${getDisplayNumber(topTradedNFTPriceUSD)}</div>}
					</div>
				</div>
			</div>
		</Story>
	)
}

export default React.memo(NFTStory)
