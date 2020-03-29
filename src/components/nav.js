import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import homeIcon from "../images/icons/home.svg"

const MenuItems = ({ items }) => {
	return items.map((item, i) =>
		<li key={i}>
			{item.url ? (
				<a href={item.url}>{item.label}</a>
			) : <Link to={item.slug} activeClassName="current-menu-item">{item.label}</Link>
			}
		</li >
	)
}

MenuItems.propTypes = {
	items: PropTypes.array.isRequired
}

const Nav = ({ className, label, items }) => {
	return (
		<nav className={className} aria-label={label}>
			<ul>
				<li className="icon icon--home">
					<Link to="/">
						<img alt="" aria-hidden="true" src={homeIcon} />
						<span className="icon__label">Home</span>
					</Link>
				</li>
				<MenuItems items={items} />
			</ul >
		</nav >
	)
}

Nav.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string,
	items: PropTypes.array.isRequired
}

Nav.defaultProps = {
	className: "",
	label: ""
}

export default Nav