/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

import { Container, Main, Footer } from "./Layout/styles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <Helmet>
            <title>Henrique Tavares - think different.</title>
          </Helmet>
          <Main>{children}</Main>
          <Footer>
            <a href="http://github.com/tavareshenrique">github</a> •{" "}
            <a href="https://www.linkedin.com/in/tavareshenrique/">linkedin</a>{" "}
            © {new Date().getFullYear()}
          </Footer>
        </div>
      </Container>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
