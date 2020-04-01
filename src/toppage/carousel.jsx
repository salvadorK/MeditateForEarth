import React, { Component } from 'react'
import { Column } from 'rbx'
import Swiper from 'react-id-swiper';
import "./carousel.scss"
import 'swiper/swiper.scss'

export default class Carousel extends Component {
    render() {
        const params = {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: true
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            },
           
          }
        return (
                <Column.Group className="carousel">
                    <Column >
                      <Swiper {...params} >
                        <div className="pic1"></div>
                        <div className="pic2"></div>
                        <div className="pic3"></div>
                      </Swiper>
                    </Column>
                </Column.Group>

        )
    }
}
