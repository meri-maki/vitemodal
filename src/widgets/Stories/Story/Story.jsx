import React from "react"
import cls from "./Story.module.scss"
const Story = (props)=> {
	const { children } = props
	return (
		<div className={cls.Story}>
			<div className={cls.logo}>ToON.ORG</div>
			{children}
		</div>
	)
}

export default React.memo(Story)

