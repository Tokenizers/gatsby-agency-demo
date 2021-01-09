import React from "react";
import Agences from "../components/agences";
import Layout from "../components/layout";
import Map from "../components/map";

const IndexPage = () => (
  <Layout>
    <Map />
    <Agences />
  </Layout>
);

export default IndexPage;
