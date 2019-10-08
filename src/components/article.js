import React from "react"

import headshot from "../images/rachel-cherry-600.jpg"

const PageTitle = (props) => {
    return (
        <h1 className="article-title page-title">{props.title}</h1>
    )
    /*if ( archive ) : <h2 class="article-title"><a href="<?php the_permalink(); ?>"><?php echo $page_title; ?></a></h2>*/
}

const HomePageImage = () => {
    return (
        <div className="front-headshot not-bamadesigner-pic-small">
            <img src={headshot} alt="Headshot of Rachel Cherry" />
        </div>
    )
}

const Article = (props) => {
    return (
        <article className="main-article">
            {props.isHome ? <HomePageImage /> : <PageTitle title={props.pageTitle} />}
            <div className="article-content"
                dangerouslySetInnerHTML={{ __html: props.html }} />
        </article>
    )
}

export default Article