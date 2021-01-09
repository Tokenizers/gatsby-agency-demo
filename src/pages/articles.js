import React from "react";
import Articles from "../components/articles";
import Layout from "../components/layout";

const ArticlePage = () => (
  <Layout>
    <Articles />
    <Articles numberPerSlide={1} />
  </Layout>
);

export default ArticlePage;
