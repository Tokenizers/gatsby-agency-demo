import React from 'react'
import './articlebox.style.scss'




const ArticleBox = ({ imageUrl, alt, title, link, meta, children }) => (
  <div data-component="articlebox" className="box has-text-left">
    <div className="box-top">
      <div className="image-wrapper">
        {imageUrl && <img src={imageUrl} alt={alt} />}
      </div>
      <h3 className="mt-1">{title}</h3>

      <p className=" mt-1 description">{children}</p>
    </div>
    <p className="has-text-right article-link">
      <a target="_blank" rel="noopener, noreferrer" title={meta} href={link}>
        Lire la suite
      </a>
    </p>
  </div>
)

export default ArticleBox
