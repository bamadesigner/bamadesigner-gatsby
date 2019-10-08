import React from "react"
import { Link } from "gatsby"

import homeIcon from "../images/icons/home.svg"

const MenuItems = (props) => {
    return props.items.map((item, i) =>
        <li key={i}>
            {item.url ? (
                <a href={item.url}>{item.label}</a>
            ) : (
                    <Link to={item.slug} activeClassName="current-menu-item">{item.label}</Link>
                )}
        </li >
    )
}

const Nav = (props) => {
    return (
        <nav className={props.className} aria-label={props.label}>
            <ul>
                <li className="icon icon--home">
                    <Link to="/">
                        <img alt="" aria-hidden="true" src={homeIcon} />
                        <span className="icon__label">Home</span>
                    </Link>
                </li>
                <MenuItems items={props.items} />
            </ul >
        </nav >
    )
}

export default Nav