import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Profile, Img } from "./Styles/headerStyle"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#282c35`,
      marginBottom: `1.45rem`,
      marginTop: `1.45rem`,
    }}
  >
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: `42rem`,
        padding: `0.625rem 1.3125rem;`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Profile>
        <Img
          src="https://avatars1.githubusercontent.com/u/27022914?v=4"
          alt="Henrique Tavare"
          width="75px"
        />
        <span>
          i'm developer in love about Javascript, ReactJS, React Native, NodeJS
          and every ecosystem around these technologies.
        </span>
      </Profile>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
