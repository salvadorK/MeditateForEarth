import React, { Component } from 'react'
import {Container, Column, Divider, Title, Image, Card, Media, Content, Level} from 'rbx'
import Nav from "../toppage/nav.jsx"; 
import Bottom from "../footer/footer.jsx"; 
import "./edpage.scss"
import SvgEdTop from "../assets/logoedtop.js";

export default class Edpage extends Component {
    render() {
        return (
            <div>
                
                    <Nav/>
            
                <Column size={1} offset={1} className="logoed">
                    <Level>
                        <Level.Item>
                           
                           <SvgEdTop/>


                        </Level.Item>
                    </Level>
                </Column>
          
                <Container className="humans">
               
                <Column.Group >
                    <Column size="8" offset="2"> 
                       <Title className="pagetitle">
                       
                            Human Potential Educators 
                      </Title>
                    </Column>
                </Column.Group>
                
                    <Divider color="black">.</Divider>
               
                <Container >
                    <Column.Group >
                        <Column size="4" >
                            <Card>
                                <Card.Image >
                                    <Image.Container>
                                        
                                        <Image src= {require("../assets/JOHN HAGELIN.jpg")}/>
                                    
                                    </Image.Container>
                                </Card.Image>
                                    <Card.Content>
                                        <Media>
                                            <Media.Item>
                                                <Title className="edname">
                                    
                                                    <a href="https://www.hagelin.org" target="_blank" rel="noopener noreferrer">JOHN HAGELIN</a>{''}
                                                        
                                                        {/* <div className="more"><svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="12" cy="17" r="12" fill="#FBBA00"/>
                                                        <path d="M18.1287 17.84H12.7767V23.24H11.2167V17.84H5.88872V16.4H11.2167V11H12.7767V16.4H18.1287V17.84Z" fill="white"/>
                                                        </svg>
                                                        </div> */}
                                                </Title>
                                            </Media.Item>
                                        </Media>
                                    
                                        <Content className="edmessage"> 
                                    
                                            We are all intimately connected by a unified field of consciousness.
                                    
                                        </Content>
                                    </Card.Content>
                            </Card>
                            <  br/>     
                            <Card>
                                <Card.Image>
                                    <Image.Container size="16">
                                        
                                        <Image src= {require("../assets/DR JOE DISPENZA.jpg")}/>
                                    
                                    </Image.Container>
                                </Card.Image>
                                
                                <Card.Content>
                                    <Media>                               
                                        <Media.Item>
                                            <Title className="edname">
                                    
                                                <a href="https://drjoedispenza.com/pages/about" target="_blank" rel="noopener noreferrer">DR JOE DISPENZA</a>{' '}
                                    
                                            </Title>
                                        </Media.Item>
                                    </Media>
                                    
                                    <Content className="edmessage"> 
                                        Imagine what we could collectively achieve if we became super coherent?
                                    </Content>
                                </Card.Content>
                                    
                                    {/* <div className="more"><svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="17" r="12" fill="#FBBA00"/>
                                    <path d="M18.1287 17.84H12.7767V23.24H11.2167V17.84H5.88872V16.4H11.2167V11H12.7767V16.4H18.1287V17.84Z" fill="white"/>
                                    </svg>
                                    </div> */}
                                
                            </Card>
                            <  br/>     
                            <Card>
                                <Card.Image>
                                    <Image.Container>
                                
                                        <Image src= {require("../assets/BRUCE LIPTON.jpg")}/>
                                
                                    </Image.Container>
                                </Card.Image>
                                <Card.Content>
                                    <Media>                               
                                        <Media.Item>
                                            <Title className="edname">
                                    
                                                <a href="https://www.brucelipton.com/about" target="_blank" rel="noopener noreferrer">BRUCE LIPTON</a>{' '}
                                            </Title>
                                    
                                        </Media.Item>
                                    </Media>
                                    
                                    <Content className="edmessage">
                                    
                                        Remember that we are all one super-organism sharing this world.
                                    
                                    </Content>
                                </Card.Content>            
                            </Card>
                        </Column>    

                        <Column size="4" >
                            <Card>
                                <Card.Image>
                                    <Image.Container >
                                       
                                        <Image src= {require("../assets/NASSIM-HARAMEIN-team-picture.jpg")}/>
                                    
                                    </Image.Container>
                                </Card.Image>
                                
                                <Card.Content>
                                <Media>
                                    <Media.Item>
                                        <Title className="edname">
                                    
                                            <a href="https://s3.amazonaws.com/kajabi-storefronts-production/sites/98768/themes/1764141/downloads/q0k8LHxfR3IeIowKUZgj_USMN.pdf" target="_blank" rel="noopener noreferrer">NASSIM-HARAMEIN</a>{' '}
                                        </Title>
                                    
                                    </Media.Item>
                                </Media>
                                    <Content className="edmessage">
                                    
                                        Everything emerges and returns to a fundamental field of information that connects us all.
                                    </Content>
                                
                                </Card.Content>   
                            </Card>
                            <  br/>     
                            <Card>
                                <Card.Image>
                                    <Image.Container>
                                        
                                        <Image src= {require("../assets/Lynne McTaggart copie.jpg")}/>
                                    
                                    </Image.Container>
                                </Card.Image>
                                
                                <Card.Content>
                                    <Media>                               
                                        <Media.Item>
                                            <Title className="edname">
                                                
                                                <a href="https://lynnemctaggart.com/about/" target="_blank" rel="noopener noreferrer">LYNNE McTAGGART</a>{' '}
                                            
                                            </Title>
                                        </Media.Item>
                                    </Media>
                                    
                                    <Content className="edmessage">
                                    
                                        A single collective directed thought is all it takes to change the world. 
                                    
                                    </Content>
                                </Card.Content>    
                            </Card>
                            <  br/>     
                            <Card>
                                <Card.Image>
                                    <Image.Container>
                                        <Image src= {require("../assets/deepak chopra.png")}/>
                                    </Image.Container>
                                </Card.Image>
                                
                                <Card.Content>
                                    <Media>                               
                                        <Media.Item>
                                    
                                            <Title className="edname">
                                    
                                                <a href="https://www.deepakchopra.com/blog/article/6372" target="_blank" rel="noopener noreferrer">DEEPAK CHOPRA</a>{' '}
                                            </Title>
                                        </Media.Item>
                                    </Media>
                                    
                                    <Content className="edmessage">
                                    
                                        We are part of one consciousness,
                                        there is only one being.
                                    </Content>
                                
                                </Card.Content>                               
                            </Card>
                        </Column> 

                        <Column size="4">
                            <Card>
                                <Card.Image>
                                    <Image.Container>
                                    
                                        <Image src= {require("../assets/GREGG BRADEN.jpg")}/>
                                    
                                    </Image.Container>
                                </Card.Image>
                                    <Card.Content>
                                        <Media>
                                            <Media.Item>
                                                <Title className="edname">
                                    
                                                    <a href="https://www.greggbraden.com/about-gregg-braden/" target="_blank" rel="noopener noreferrer">GREGG BRADEN</a>{' '}
                                    
                                                </Title>                                   
                                            </Media.Item>
                                        </Media>
                                    
                                        <Content className="edmessage">
                                            
                                            We live in a world where everything is connected.
                                            We are one.
                                    
                                        </Content>                   
                                    </Card.Content>  
                                </Card>
                                <  br/>     
                                <Card>
                                    <Card.Image>
                                        <Image.Container>
                                            
                                            <Image src= {require("../assets/Eckhart Tolle.jpg")}/>
                                    
                                        </Image.Container>
                                    </Card.Image>
                                <Card.Content>
                                
                                <Media>                               
                                    <Media.Item>
                                    <Title className="edname">
                                    
                                        <a href="https://www.eckharttolle.com/about/" target="_blank" rel="noopener noreferrer">ECKHART TOLLE</a>{' '}
                                    </Title>
                                    
                                    </Media.Item>
                                </Media>
                                    
                                    <Content className="edmessage">
                                    
                                        We are all connected to the same universal energy.
                                        One consciousness.
                                    
                                    </Content>
                                </Card.Content>             
                            </Card>
                            <  br/>     
                            <Card>
                                <Card.Image>
                                    <Image.Container>
                                        <Image 
                                        src= {require("../assets/don-miguel RUIZ.jpg")}/>
                                    
                                    </Image.Container>
                                
                                </Card.Image>
                                
                                <Card.Content>
                                    <Media>                               
                                        <Media.Item>
                                            <Title className="edname">
                                    
                                                <a href="https://www.miguelruiz.com/the-four-agreements" target="_blank" rel="noopener noreferrer">DON MIGUEL RUIZ</a>{' '}
                                    
                                            </Title>
                                        </Media.Item>
                                    </Media>
                                    
                                        <Content className="edmessage">
                                        
                                            We are all connected, we are all one.
                                            We are the same, you and I.
                                        
                                        </Content>
                                </Card.Content>
                            </Card>
                        </Column>                             
                    </Column.Group>
                </Container>     
            </Container>
            <Bottom/> 
            </div>
        )
    }
}

