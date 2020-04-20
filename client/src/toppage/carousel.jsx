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
                  <Hero textAlign="centered">

                    <Swiper {...params} >
                      
                      <div className="pic1"></div>
                      <div className="pic2"></div>
                      <div className="pic3"></div>
                      
                    </Swiper>

                  
                    <Column.Group >
                    <Column size={4} offset={12} className="lets"> 
                    <Title  subtitle>
                    Let's <strong>meditate<br></br>simultaneously<br></br></strong>for Earth
                    </Title>
                    </Column>
                    </Column.Group>
                  
                    <Column.Group >  
                      <Column className="logolanding">
                        
                            <SvgTop/>
                       
                      
                      </Column>
                      </Column.Group>
                      
                   
                       
                        </Hero>
                </Container>
                 
                    
        

            

        )
    }
}
