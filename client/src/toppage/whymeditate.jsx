import React, { Component } from 'react'
import {Divider, Hero, Column, Container, Title, Image, Level} from 'rbx'
import "./whymeditate.scss"
import Nav from "../toppage/nav.jsx"; 
import Bottom from "../footer/footer.jsx"; 
import SvgTop from "../assets/logotop.js";

export default class Whymeditate extends Component {
    render() {
        return (
          
            <div>  
  
                    <Nav/>

                <Hero className="whymed" >
                    <Column.Group>
                        <Column size={1} offset={1} >
                            <Level>
                                <Level.Item>
                                    
                                    <SvgTop/>

                                </Level.Item>
                            </Level>
                        </Column>

                        <Column size={3} offset={6}> 
                            <Title subtitle className="whytitle">
    
                                Why <strong>Meditate</strong> together?
    
                            </Title>
                        </Column>   
                    </Column.Group>
                </Hero>

                <Container className="statement">
                    <Column.Group >
                        <Column size="half" offset="one-quarter"> 
                            <Title>
                           
                                <br/>
                                We are one!
                      
                            </Title>
                        </Column>
                    </Column.Group>
                
                        <Divider color="black">.</Divider>
                
                    <Column.Group>
                        <Column size="10" offset="1"> 
                            <Title className="font" subtitle>
                        
                                Many of us feel insignificant and helpless when confronted with the enormity of the problems our planet faces. The good news is that <strong>we can</strong> effect change <strong>simply</strong>simply through the portal of our mind and our heart. Peer reviewed scientific studies show that when a relatively small fraction of a society engage in meditation <strong>together</strong>, with the intention of peace and harmony, they can significantly <strong>reduce</strong> crime, war, social stress and <strong>improve</strong> the effectiveness of governments. 
                                <br/>Although things may not change over night, the Global Union of Scientists for Peace (GUSP.org) have shown that groups <strong>epetitively</strong>r practicing meditation <strong>together</strong>, creates peace and harmony in their countries. Our own power <strong>amplified</strong> by uniting as a collective, enables us to create peace, coherence and harmony in the field of our surrounding world. 
                                source: https://www.gusp.org/brochure/?page=1 
                        
                            </Title>
                        </Column>     
                    </Column.Group>  
                
                    <Column.Group>
                        <Column size="6" offset="3"> 
                            <Image.Container size={200}>
                                
                                <Image src= {require("../assets/tableau gusp.png")}/>
                                * Sources: Global Union of Scientists for Peace
                
                            </Image.Container>
                        </Column>     
                    </Column.Group> 
                    
                    <Column.Group>
                        <Column size="10" offset="1"> 
                            <Title className="tuning" subtitle>
                        
                                Tuning in together according to our time zones
                        
                            </Title>
                        </Column>     
                    </Column.Group>
                
                    <Column.Group>
                        <Column size="10" offset="1"> 
                            <Title className="tuningmessage" subtitle>
                        
                                Due to the fact that we have 24 time zones, it would be very difficult for everyone to join the collective meditations, as it would force some of us to join in the middle of the night. In order to solve this problem and provide an ideal meditation time for as many people as possible on earth, there are <strong>two</strong> set times per <strong>day</strong> in your city to join the collective meditation. (AM & PM)
                                You can find the set local times of your city by using the searh tool located on the home page.
                        
                            </Title>
                        </Column>     
                    </Column.Group>
                
                    <Column.Group>
                        <Column size="4"> 
                            <Image.Container size={200}>
                                
                                <Title subtitle textAlign="centered">WEST of Greenwich Meridien</Title>
                                
                                <Title subtitle textAlign="centered">Two daily meditations</Title>
                                <Image src= {require("../assets/bloc A.jpg")}/>
                                * Sources: Global Union of Scientists for Peace
                
                            </Image.Container>
                        </Column>   
                    
                        <Column size="4"> 
                            <Image.Container size={200}>
                            
                                <Image src= {require("../assets/PLANETE_14827-NQ3ANC.png")}/>
                                * Sources: Global Union of Scientists for Peace
                
                            </Image.Container>
                        </Column>     
                        
                        <Column size="4" > 
                            <Image.Container size={200}>
                    
                                <Title subtitle textAlign="centered">EAST of Greenwich Meridien </Title>
                                
                                <Title subtitle textAlign="centered">Two daily meditations</Title>
                            
                            <Image src= {require("../assets/bloc B.jpg")}/>
                            * Sources: Global Union of Scientists for Peace
                
                            </Image.Container>
                        </Column>       
                    </Column.Group> 
                
                    <Column.Group>
                        <Column size="10" offset="1"> 
                            <Title className="tuning" subtitle>
                        
                                Feeling is the secret
                        
                            </Title>
                        </Column>     
                    </Column.Group>
                
                    <Column.Group>
                        <Column size="10" offset="1"> 
                            <Title className="tuningmessage" subtitle>
                        
                                You can meditate on your own and radiate the <strong>feeling</strong> of <strong>love, peace, kindness, fairness,  harmony and coherence</strong> for our Mother Earth and her living beings or listen to guided meditations that focus on these intentions.  

                            </Title>
                        </Column>     
                    </Column.Group>
                </Container>   

                    <Bottom/>

            </div>
            )
        }
    }

