import React, { Component } from 'react'
import { Column, Container,Title, Hero } from 'rbx'
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

            


                <Container className="carousel"> 
                  <Hero>

                    <Swiper {...params} >
                      
                      <div className="pic1"></div>
                      <div className="pic2"></div>
                      <div className="pic3"></div>
                      
                    </Swiper>

                  </Hero>

                  <Container >
                    <Column.Group>  
                      <Column>
                        
                        <Title className="logolanding" ><SvgTop/>
                        </Title>
                      
                      </Column>
                      
                      <Column size="full">
                        
                        <Title subtitle>Let's <strong>meditate<br></br>simultaneously</strong><br></br>for Earth</Title>
                      
                      </Column>                                          
                    </Column.Group>
                  </Container>        
                </Container>
                 
                    
                 

            

        )
    }
}
