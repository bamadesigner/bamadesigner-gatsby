import React from "react"
import PropTypes from "prop-types"

import headshot from "../images/rachel-cherry-600.jpg"

const PageTitle = ({ title }) => {
	return (
		<h1 className="article-title page-title">{title}</h1>
	)
	/*if ( archive ) : <h2 class="article-title"><a href="<?php the_permalink(); ?>"><?php echo $page_title; ?></a></h2>*/
}

PageTitle.propTypes = {
	title: PropTypes.string.isRequired
}

const HomePageImage = () => {
	return (
		<div className="front-headshot not-bamadesigner-pic-small">
			<img src={headshot} alt="Headshot of Rachel Cherry" />
		</div>
	)
}

const Article = ({ isHome, pageTitle, html }) => {
	return (
		<article className="main-article">
			{isHome ? <HomePageImage /> : <PageTitle title={pageTitle} />}
			<div className="article-content"
				dangerouslySetInnerHTML={{ __html: html }} />
		</article>
	)
}

Article.propTypes = {
	isHome: PropTypes.bool,
	pageTitle: PropTypes.string,
	html: PropTypes.string.isRequired
}

Article.defaultProps = {
	isHome: false,
	pageTitle: "",
}

export default Article