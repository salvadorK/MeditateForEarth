import React, { Component } from 'react'
import { Column, Title, Hero, Level} from 'rbx'
import "./carousel.scss"
import 'swiper/swiper.scss'
import SvgTop from "../assets/logotop.js";

export default class Carousel extends Component {
    render() {
        return (

                
          <Hero className="carousel">          
            <Column.Group>
              <Column size={1} offset={1} >
                <Level>
                  <Level.Item>
                    
                    <SvgTop/>

                  </Level.Item>
                </Level>
              </Column>
    
              <Column> 
                <Title subtitle className="lets">
    
                  Let's <strong>Meditate</strong><br/>for Earth<br/><strong>daily</strong>
                
                </Title>
              </Column>   
            </Column.Group>
          </Hero>
              
                 
                    
              

            

        )
    }
}
