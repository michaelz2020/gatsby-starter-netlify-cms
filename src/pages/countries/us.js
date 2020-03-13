import React from "react"
import { Link, graphql } from "gatsby"
import Chart from "../../components/Chart"
import Layout from "../../components/Layout"
// import SEO from "../components/seo"

export default ({ data }) => {
  const csv = data.allCaseStatsCsv.edges

  return (
    <Layout>
      {/* <SEO title='Home' /> */}
      <Chart data={csv} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allCaseStatsCsv {
      edges {
        node {
          Date
          USNewCases
        }
      }
    }
  }
`
