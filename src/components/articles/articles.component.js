import React from "react";
import { splitEvery, map } from "ramda";
import "./articles.style.scss";
import CustomCarousel from "../common/custom-carousel";
import ArticleBox from "../articlebox";

const createArticleBox = map(({ id, title, svg, body, link, meta }) => (
  <div key={id} className="column is-5-desktop is-10-mobile">
    <ArticleBox
      id={id}
      key={id}
      imageUrl={svg}
      alt={id}
      title={title}
      link={link}
      meta={meta}
    >
      {body}
    </ArticleBox>
  </div>
));

export default ({ articles = [], numberPerSlide = 2 }) => (
  <section data-component="articles" className="section">
    <div className="fixed-container">
      <div className="columns is-centered is-multiline mt-1">
        <div className="column is-10">
          <h2 className="has-text-centered has-text-left-mobile">Carousel</h2>
        </div>
      </div>

      <CustomCarousel
        className="mt-3"
        elementList={splitEvery(numberPerSlide, articles)}
        mapper={createArticleBox}
      />
    </div>
  </section>
);
