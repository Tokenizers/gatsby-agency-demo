import React from 'react'
import { always, addIndex, map } from 'ramda'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './custom-carousel.style.scss'

const imap = addIndex(map)

const CustomCarousel = ({
  elementList = [],
  mapper = always(),
  columnSpace = '',
  className = '',
}) => (
  <div data-component="Carousel" className={`${className}`}>
    <Carousel
      className="grabbable"
      infiniteLoop
      emulateTouch
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      {imap((element, i) => (
        <div
          key={`carousel-${element.ressource}-${i}`}
          className={`columns is-mobile is-multiline is-centered is-variable ${
            columnSpace || ''
          } item-${i}`}
        >
          {mapper(element)}
        </div>
      ))(elementList)}
    </Carousel>
  </div>
)

export default CustomCarousel
