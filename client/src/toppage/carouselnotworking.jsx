import React, { Component } from 'react'
import { Column, Title, Hero, Level } from 'rbx'
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
            // <Container className="simulmessage">
                <Hero className="carousel">




                
                  
                      <Swiper {...params} >
                        
                      
                        <div className="pic1"></div>
                        <div className="pic2"></div>
                        <div className="pic3"></div>
                        
                      </Swiper>

              

                

               

                      <Column.Group >
                    <Column className="logoposition" size={1} offset={1}> 
                    <Level>
                           <Level.Item>
                  
                    <SvgTop/>
                    </Level.Item>
                    </Level>
                    </Column>
                    

       
                    </Column.Group>
               
                    <Column.Group >
                    <Column size={4} offset={7}> 
                    <Title className="lets" subtitle>
                    Let's <strong>meditate<br></br>simultaneously<br></br></strong>for Earth
                    </Title>
                    </Column>
                    
                           
                    </Column.Group>
                
                
               
                </Hero>
                // </Container>
            
        )
     }
}


