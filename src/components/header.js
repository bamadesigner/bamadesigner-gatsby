import React from "react"
import { Link } from "gatsby"

import { SocialMediaNav } from "./social"
import Nav from "./nav"

const SiteTitle = () => {
  return (
    <Link to="/"><span className="rachel">Rachel</span> <span className="cherry">Cherry</span></Link>
  )
}

const SiteTitleElement = (props) => {
  const siteTitleClass = "site-title"
  if (props.isHome) {
    return (<h1 className={siteTitleClass}><SiteTitle /></h1>)
  }
  return (<div className={siteTitleClass}><SiteTitle /></div>)
}

const AddSubscribeButton = () => {
  return (
    <a href="http://eepurl.com/dpKp0P" className="button subscribe-open" title="Subscribe to Rachel's newsletter">Subscribe</a>
  )
}

const Header = (props) => {
  const navItems = [
    //{ slug: '/about', label: 'About' },
    //{ slug: '/blog', label: 'Blog' },
    { slug: '/accessibility/', label: 'Accessibility' },
    { slug: '/speaking/', label: 'Speaking' },
    { url: 'https://wpcampus.org/', label: 'WPCampus' },
    { slug: '/gatsby/', label: 'Gatsby' },
    { url: 'https://shop.spreadshirt.com/rachelcherry/', label: 'Shop' },
    { slug: '/partners/', label: 'Partners' },
    //{ slug: '/reading', label: 'Reading' },
    //{ slug: '/highered', label: 'Higher Ed' },
    { slug: '/contact/', label: 'Contact' },
  ];

  return (
    <header id="header">
      <div className="container">
        <SiteTitleElement isHome={props.isHome} />
        <div className="site-subtitle">Engineer. Accessibility. Open source. Higher ed. Community.</div>
        <div className="site-nav-wrapper">
          <button className="site-nav-toggle" aria-label="Toggle menu">
            <div className="toggle-icon">
              <div className="bar one"></div>
              <div className="bar two"></div>
              <div className="bar three"></div>
            </div>
            <span className="toggle-label open-menu-label">Menu</span>
          </button>
          <span className="site-nav-small-header">Rachel Cherry</span>
          <Nav className="site-nav" label="Primary" items={navItems} />
          <AddSubscribeButton />
          <SocialMediaNav />
        </div >
      </div >
    </header >
  )
}

export default Header
