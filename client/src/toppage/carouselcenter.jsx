import React, { Component } from 'react'
import { Column, Title, Hero } from 'rbx'
import Swiper from 'react-id-swiper';
import "./carousel.scss"
import 'swiper/swiper.scss'
import SvgTop from "../assets/logotop.js";


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
            <div className="simulmessage">
                <Hero >



                <Column.Group >
                    <Column size={1} offset={1}> 
                    <Title subtitle className="logoposition" >
                    <SvgTop/>
                    </Title>
                    
                                                
                                               
                                            
                         
                    </Column>
                    
                           
                </Column.Group>


                <Column.Group className="carousel">
                  <Column >
                      <Swiper {...params} >
                      
                        <div className="pic1"></div>
                        <div className="pic2"></div>
                        <div className="pic3"></div>
                        
                      </Swiper>

                      
                  </Column>

                </Column.Group>

               


                <Column.Group >
                    <Column size={4} offset={7}> 
                    <Title>
                    Let's <strong>meditate<br></br>simultaneously<br></br></strong>for Earth
                    </Title>
                    </Column>
                    </Column.Group>
                
                
               
                </Hero>
            </div>
        )
     }
}


