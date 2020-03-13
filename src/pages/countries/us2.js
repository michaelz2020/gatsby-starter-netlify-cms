import React from "react"
import { Link, graphql } from "gatsby"
import Chart from "../../components/Chart"
import Layout from "../../components/Layout"
// import SEO from "../components/seo"

export default ({ data }) => {
  const csv = data.allCaseStatsCsv.edges

  return (
    <Layout>
      <section className='section'>
        <div className='container'>
          <div className='content'>
            <h1
              className='has-text-weight-bold is-size-1'
              style={{
                boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
                backgroundColor: "#f40",
                color: "red",
                padding: "1rem"
              }}>
              Hi people
            </h1>
            <p>
              This is an example site integrating Netlify’s form handling with
              Gatsby
            </p>

            <h1
              className='has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-text-centered'
              style={{
                boxShadow:
                  "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
                backgroundColor: "rgb(255, 68, 0)",
                color: "white",
                lineHeight: "1",
                padding: "0.25em"
              }}>
              TEST TITLE
            </h1>
            <br></br>
            <div>
              <Chart data={csv} />
            </div>

            <h2>Troubleshooting</h2>
            <h3>Forms stop working after upgrading to Gatsby v2</h3>
            <p>
              This can be caused by the offline-plugin.{" "}
              <a href='https://github.com/gatsbyjs/gatsby/issues/7997#issuecomment-419749232'>
                Workaround
              </a>{" "}
              is to use <code>?no-cache=1</code> in the POST url to prevent the
              service worker from handling form submissions
            </p>
            <h3>Adding reCAPTCHA</h3>
            <p>
              If you are planning to add reCAPTCHA please go to{" "}
              <a href='https://github.com/imorente/gatsby-netlify-form-example'>
                imorente/gatsby-netlify-form-example
              </a>{" "}
              for a working example.
            </p>
          </div>
        </div>
      </section>
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
