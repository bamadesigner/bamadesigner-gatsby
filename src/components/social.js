import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import wpcIcon from "../images/icons/wpcampus.svg"
import twitterIcon from "../images/icons/twitter.svg"
import githubIcon from "../images/icons/github.svg"
import wpIcon from "../images/icons/wordpress.svg"
import linkedinIcon from "../images/icons/linkedin.svg"

function getSiteMetadata() {
	const { site } = useStaticQuery(
		graphql`
          query {
            site {
              siteMetadata {
                title
                authorTwitter
              }
            }
          }
        `
	)
	return site.siteMetadata
}

function encode(str) {
	return encodeURIComponent(str)
}

function stripTags(str) {
	return str.replace(/(<([^>]+)>)/ig, "")
}

function SocialShareURL(title) {
	const siteMetadata = getSiteMetadata()
	const permalink = encode(window.location.href)
	const encodedTitle = encode(stripTags(title))

	let twitterURL = "https://twitter.com/intent/tweet"
	twitterURL += "?url=" + permalink
	twitterURL += "&text=" + encodedTitle
	twitterURL += "&via=" + encode(siteMetadata.authorTwitter)

	let linkedinURL = "https://www.linkedin.com/shareArticle"
	linkedinURL += "?url=" + permalink
	linkedinURL += "&title=" + encodedTitle
	linkedinURL += "&mini=true"
	//linkedinURL += '&summary=summary' //strip_tags( get_the_excerpt() )
	linkedinURL += "&source=" + encode(stripTags(siteMetadata.title))

	return { twitterURL, linkedinURL }
}

const SocialMediaNavItems = ({ items }) => {
	return items.map((item, i) =>
		<li key={i} className={"icon " + item.key}>
			<a href={item.url}>
				<img src={item.icon} alt="" aria-hidden="true"></img>
				<span className="screen-reader-text">{item.label}</span>
			</a>
		</li >
	)
}

SocialMediaNavItems.propTypes = {
	items: PropTypes.array.isRequired
}

const SocialMediaNav = () => {
	const items = [
		{ key: "wpcampus", url: "https://wpcampus.org", label: "Follow WPCampus", icon: wpcIcon },
		{ key: "twitter", url: "https://twitter.com/bamadesigner", label: "Follow Rachel on Twitter", icon: twitterIcon },
		{ key: "github", url: "https://github.com/bamadesigner", label: "Follow Rachel on GitHub", icon: githubIcon },
		{ key: "wordpress", url: "https://profiles.wordpress.org/bamadesigner/profile/", label: "Follow Rachel on WordPress", icon: wpIcon },
		{ key: "linkedin", url: "https://www.linkedin.com/in/rachelmcherry/", label: "Connect with Rachel on LinkedIn", icon: linkedinIcon },
	]
	return (
		<nav className="social-media-icons" aria-label="Social media">
			<ul>
				<SocialMediaNavItems items={items} />
			</ul>
		</nav>
	)
}

const SocialMediaShare = ({ title }) => {

	const { twitterURL, linkedinURL } = SocialShareURL(title)

	const items = []

	if (twitterURL) {
		items.push({ key: "twitter", url: twitterURL, label: "Share content on Twitter", icon: twitterIcon })
	}

	if (linkedinURL) {
		items.push({ key: "linkedin", url: linkedinURL, label: "Share content on LinkedIn", icon: linkedinIcon })
	}

	if (!items) {
		return ""
	}

	return (
		<nav className="article-social" aria-label="Share content on social media">
			<ul>
				<SocialMediaNavItems items={items} />
			</ul>
		</nav>
	)
}

SocialMediaShare.propTypes = {
	title: PropTypes.string.isRequired
}

export { SocialMediaNav, SocialMediaShare }