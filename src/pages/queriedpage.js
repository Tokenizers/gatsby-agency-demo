import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby"

const QueriedPage = ({ data }) => (
  <Layout>
    <section className="section mt-5">
      <div className="container">
        <div className="columns">
          <div className="column has-text-centered">
            <h1>{data.agencesJson.name}</h1>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export const query = graphql`
  query HomePageQuery {
    agencesJson(id: { eq: "orleans" }) {
      id
      city
      name
    }
  }
`;

export default QueriedPage;
