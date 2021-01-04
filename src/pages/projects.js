import React from "react"
import Layout from "../components/layout"
import Item from "../components/item"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          projects {
            title
            when
            company
            where
            moreInfo
            # videoSrcUrl
            # videoTitle
          }
        }
      }
    }
  `)
  const projects = data.site.siteMetadata.projects.map((item, index) => (
    <Item
      key={index}
      name={item.title}
      when={item.when}
      where={item.where}
      org={item.company}
      moreInfo={item.moreInfo}
      // videoSrcUrl={item.videoSrcUrl}
      // videoTitle={item.videoTitle}
    />
  ))

  return (
    <Layout pageTitle="Projects" pageDescription="Learn more about my projects">
      {projects}
    </Layout>
  )
}
