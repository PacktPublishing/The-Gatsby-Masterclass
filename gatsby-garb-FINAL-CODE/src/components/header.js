import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'

import gatsbyLogo from '../images/gatsby-icon.png'

const isActive = ({ isCurrent }) => {
  return { className: isCurrent ? 'active' : 'navlink' }
}

const NavLink = props => <Link getProps={isActive} {...props} />

class Header extends React.Component {
  componentDidMount() {
    netlifyIdentity.init()
  }

  render() {
    const { siteTitle } = this.props

    return (
      <div
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          {/* Title / Logo */}
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={gatsbyLogo}
              alt="Gatsby Garb Logo"
              style={{
                borderRadius: '50%',
                border: '3px solid orange',
                margin: '0 5px',
                width: '50px',
              }}
            />
            <h1 style={{ margin: 0 }}>
              <NavLink to="/">{siteTitle}</NavLink>
            </h1>
          </span>

          <NavLink to="/blog">Blog</NavLink>

          <NavLink to="/products">Store</NavLink>

          <div data-netlify-identity-menu />

          {/* Shopping Cart Summary */}
          <div
            style={{ color: 'white', cursor: 'pointer' }}
            className="snipcart-summary snipcart-checkout"
          >
            <div>
              <strong>My Cart</strong>
            </div>
            <div>
              <span
                style={{ fontWeight: 'bold' }}
                className="snipcart-total-items"
              />{' '}
              Items in Cart
            </div>
            <div>
              Total price{' '}
              <span
                style={{ fontWeight: 'bold' }}
                className="snipcart-total-price"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
