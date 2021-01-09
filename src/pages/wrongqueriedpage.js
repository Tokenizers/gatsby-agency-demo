import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby"

const agencyArray = ["orleans", "angouleme"];

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

const WrongQueriedPage = ({ data }) => (
  <Layout>
    <section className="section mt-5">
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered">
            {data && <h1>{data.agencesJson.name}</h1>}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

// u can't do that, just go to see createPage
// export const query = graphql`
//   query HomePageQuery {
//     agencesJson(id: { eq: "${agencyArray[getRandomInt(1)]}" }) {
//       id
//       city
//       name
//     }
//   }
// `;

export default WrongQueriedPage;
