import React from "react"
import PropTypes from "prop-types"

const Main = ({ children }) => {
	return (
		<div id="body">
			<div id="main">
				<div className="container">
					<main id="content">
						{children}
					</main>
				</div>
			</div>
		</div>
	)
}

Main.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Main