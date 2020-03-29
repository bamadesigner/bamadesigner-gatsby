import React from "react"

import { SocialMediaNav } from "./social"

const Footer = () => {
	return (
		<footer id="footer">
			<div className="container">
				<div className="container-item social">
					<SocialMediaNav />
				</div>
				<div className="container-item copyright">&copy; 2012-{(new Date().getFullYear())} - Rachel Cherry, y&apos;all. She/her.</div>
			</div>
		</footer>
	)
}

export default Footer