export const ROOT_PATH = window.location.href

let injectedProvider = false

if (typeof window.ethereum !== "undefined") {
	injectedProvider = true
}

const isMetaMask = injectedProvider ? window.ethereum.isMetaMask : false
export const mainconfig = {
	isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
	isAndroid: /android/i.test(navigator.userAgent),
	isMobile: /iphone|ipad|android/i.test(window.navigator.userAgent),
	isMetaMask: isMetaMask,
	ethAmountQueryKey: "eth_amount",
	contract: {
		address: {
			//mainnet: "0xE8078B5198E572Be8D8D412511d48b7D0f5E9a1c",
			goerli: "0x7E3BA0bCD192155ac7b9E51613C639e4e026d2dD",
		},
		abiPath: "./R2d2V0Extended.abi.json",
	},
	services: {
		walletconnect: {
			key: "e02c07c4e6a5e7d7cb2c7e53b04c3990",
		},
		infura: {
			oldkey: "4c36a49cef8548e6b5707243c5ba36f3",
			key: "9dac313413d04fa2945eb7ffeec43b03",
		},
		alchemy: {
			key: "wg6wp8N_jgPqBLyx94PxLRrNLVer2Elb",
		},
		amplitude: {
			//EARLY ACCESS AMPLITUDE ORG
			key: "2acf973b95c5ee353d8e6f90f2b76cf9",
		},
	},
}
