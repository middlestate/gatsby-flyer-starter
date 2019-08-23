import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
// import SearchBox from '../SearchBox'

class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isActive: false,
    }
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar () {
    this.setState({ isActive: !this.state.isActive })
  }

  render () {
    const slug = this.props.slug
    const logo = this.props.logo
    return (
      <StaticQuery
        query={graphql`
          query SearchIndexQuery {
            siteSearchIndex {
              index
            }
          }
        `}
        render={data => (
          <nav className='navbar' aria-label='main navigation'>
            <div className='navbar-brand is-centered' style={{ flex: 1, justifyContent: 'center', marginTop: -10 }}>
              <Link to={`/brand/${slug}`} className='navbar-item'>
                <img src={logo} alt='logo' />
              </Link>
              <div
                className={`navbar-burger ${this.state.isActive ? 'is-active' : ''}`}
                style={{ padding: 10, marginRight: 10, marginTop: 5 }}
                data-target='navMenu'
                onClick={this.toggleNavbar}>
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className={`navbar-menu ${this.state.isActive ? 'is-active' : ''}`} id='navMenu'>
              <div className='navbar-end' style={{ flex: 1, justifyContent: 'center' }}>
                <Link to='/' className='navbar-item'>
                  Brands
                </Link>
                <a href={`/brand/${slug}`} target='_self' className='navbar-item'>
                  Products
                </a>
                <a href='#contact' target='_self' className='navbar-item'>
                  Contact
                </a>
              </div>
            </div>
          </nav>
        )}
      />
    )
  }
}

export default NavBar
