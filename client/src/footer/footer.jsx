import React, { Component } from 'react'
import {Container,Column, Title} from 'rbx'
import "./footer.scss"
import SvgBottom from "../assets/logobottom.js";

export default class Bottom extends Component {
    render() {
        return (
     
                <Container className="bottomcolor">
                    <Column.Group vcentered >
                        <Column className="yellowmargintop" size="2" offset="1">
                        
                            <SvgBottom/>

                        </Column>                              
                    
                        <Column className="social"  size="1" offset="2">
                
                            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook fa-2x"></i></a>
                        
                        </Column> 
                
                        
                        <Column className="social" size="1" >
                        
                            <a href="http://twitter.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter fa-2x"></i></a>
                        
                        </Column> 
                        
                        <Column className="social" size="1" >
                            
                            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram fa-2x"></i></a>
                        
                        </Column> 
                        
                        <Column className="website" size="2" offset="1">
                            <Title className="contactus">
                           
                                Contact us:
                        
                            </Title>
                               
                            <Title className="emailaddress" subtitle>
                                   
                                <a href="mailto:info@meditateforearth.com">info@meditateforearth.com</a>
                               
                            </Title> 
                        </Column>                                                
                    </Column.Group>           
                </Container>   






    

        )
    }
}
