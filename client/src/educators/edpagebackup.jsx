import React, { Component } from 'react'
import {Container, Column, Divider, Title, Image, Card, Media, Content} from 'rbx'
import "./edpage.scss"

export default class Edpage extends Component {
    render() {
        return (
            <Container className="humans">
                <Column.Group >
                    <Column size="half" offset="one-quarter"> 
                       <Title>
                       Human Potential Educators 
                      </Title>
                    </Column>
                </Column.Group>
                <Divider color="black">.</Divider>
               
                <Container>
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
                                    
                                        <div><svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="17" r="12" fill="#FBBA00"/>
                                        <path d="M18.1287 17.84H12.7767V23.24H11.2167V17.84H5.88872V16.4H11.2167V11H12.7767V16.4H18.1287V17.84Z" fill="white"/>
                                        </svg>
                                        </div>
                                    <Title as="p" size={4}>
                                    JOHN HAGELIN
                                    </Title>
                                    <Title as="p" align="center" subtitle size={6}>
                                    <a href="#@bulmaio">@JOHN HAGELIN </a>{' '}
                                    </Title>
                                    </Media.Item>
                                </Media>
                                    <Content align="center"> 
                                    We are all intimately connected by a unified field of consciousness.-
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
                                    <div><svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="17" r="12" fill="#FBBA00"/>
                                        <path d="M18.1287 17.84H12.7767V23.24H11.2167V17.84H5.88872V16.4H11.2167V11H12.7767V16.4H18.1287V17.84Z" fill="white"/>
                                        </svg>
                                        </div>
                                    <Title as="p" size={4}>
                                    
                                    DR JOE DISPENZA
                                    </Title>
                                    <Title as="p" align="center" subtitle size={6}>
                                    <a href="#@bulmaio">@DR JOE DISPENZA </a>{' '}
                                    </Title>
                                    </Media.Item>
                                </Media>
                                    <Content align="center"> 
                                    Imagine what we could collectively achieve if we became super coherent?
                                    </Content>
                                </Card.Content>
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
                                    <div><svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="17" r="12" fill="#FBBA00"/>
                                        <path d="M18.1287 17.84H12.7767V23.24H11.2167V17.84H5.88872V16.4H11.2167V11H12.7767V16.4H18.1287V17.84Z" fill="white"/>
                                        </svg>
                                        </div>
                                    <Title as="p" size={4}>
                                    
                                    BRUCE LIPTON
                                    </Title>
                                    <Title as="p" align="center" subtitle size={6}>
                                    <a href="#@bulmaio">@BRUCE LIPTON </a>{' '}
                                    </Title>
                                    </Media.Item>
                                </Media>
                                    <Content align="center"> 
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
                                    <div><svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="17" r="12" fill="#FBBA00"/>
                                        <path d="M18.1287 17.84H12.7767V23.24H11.2167V17.84H5.88872V16.4H11.2167V11H12.7767V16.4H18.1287V17.84Z" fill="white"/>
                                        </svg>
                                        </div>
                                    <Title as="p" size={4}>
                                    NASSIM-HARAMEIN
                                    </Title>
                                    <Title as="p" align="center" subtitle size={6}>
                                    <a href="#@bulmaio">@NASSIM-HARAMEIN </a>{' '}
                                    </Title>
                                    </Media.Item>
                                </Media>
                                    <Content align="center"> 
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
                                    <div><svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="17" r="12" fill="#FBBA00"/>
                                        <path d="M18.1287 17.84H12.7767V23.24H11.2167V17.84H5.88872V16.4H11.2167V11H12.7767V16.4H18.1287V17.84Z" fill="white"/>
                                        </svg>
                                        </div>
                                    <Title as="p" size={4}>
                                    Lynne McTaggart
                                    </Title>
                                    <Title as="p" align="center" subtitle size={6}>
                                    <a href="#@bulmaio">@Lynne McTaggart </a>{' '}
                                    </Title>
                                    </Media.Item>
                                </Media>
                                    <Content align="center"> 
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
                                    <div><svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="17" r="12" fill="#FBBA00"/>
                                        <path d="M18.1287 17.84H12.7767V23.24H11.2167V17.84H5.88872V16.4H11.2167V11H12.7767V16.4H18.1287V17.84Z" fill="white"/>
                                        </svg>
                                        </div>
                                    <Title as="p" size={4}>
                                    deepak chopra
                                    </Title>
                                    <Title as="p" align="center" subtitle size={6}>
                                    <a href="#@bulmaio">@deepak chopra </a>{' '}
                                    </Title>
                                    </Media.Item>
                                </Media>
                                    <Content align="center"> 
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
                                <Media >
                                
                                    <Media.Item>
                                    <Title as="p" size={4}>
                                    GREGG BRADEN
                                    </Title>
                                    <Title as="p" align="center" subtitle size={6}>
                                    <a href="#@bulmaio">@GREGG BRADEN </a>{' '}
                                    </Title>
                                    </Media.Item>
                                </Media>
                                    <Content align="center"> 
                                    We live in a world where everything is connected.
                                    We are one.
                                    </Content>
                                    
                                </Card.Content>
                                <div className="more"><svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="17" r="12" fill="#FBBA00"/>
                                        <path d="M18.1287 17.84H12.7767V23.24H11.2167V17.84H5.88872V16.4H11.2167V11H12.7767V16.4H18.1287V17.84Z" fill="white"/>
                                        </svg>
                                        </div>
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
                                    <Title as="p" size={4}>
                                    Eckhart Tolle
                                    </Title>
                                    <Title as="p" align="center" subtitle size={6}>
                                    <a href="#@bulmaio">@Eckhart Tolle </a>{' '}
                                    </Title>
                                    </Media.Item>
                                </Media>
                                    <Content align="center"> 
                                    We are all connected to the same universal energy.
                                    One consciousness.
                                    </Content>
                                </Card.Content>
                                <div className="more"><svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="17" r="12" fill="#FBBA00"/>
                                        <path d="M18.1287 17.84H12.7767V23.24H11.2167V17.84H5.88872V16.4H11.2167V11H12.7767V16.4H18.1287V17.84Z" fill="white"/>
                                        </svg>
                                        </div>
                            </Card>
                            <  br/>     
                            <Card>
                                <Card.Image>
                                    <Image.Container>
                                        <Image src= {require("../assets/don-miguel RUIZ.jpg")}/>
                                    </Image.Container>
                                </Card.Image>
                                <Card.Content>
                                <Media>                               
                                    <Media.Item>
                                    <Title as="p" size={4}>
                                    don-miguel RUIZ
                                    </Title>
                                    <Title as="p" align="center" subtitle size={6}>
                                    <a href="#@bulmaio">@don-miguel RUIZ </a>{' '}
                                    </Title>
                                    </Media.Item>
                                </Media>
                                    <Content align="center"> 
                                    We are all connected, we are all one.
                                    We are the same, you and I.
                                    </Content>

                                </Card.Content>
                                <div className="more"><svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="17" r="12" fill="#FBBA00"/>
                                        <path d="M18.1287 17.84H12.7767V23.24H11.2167V17.84H5.88872V16.4H11.2167V11H12.7767V16.4H18.1287V17.84Z" fill="white"/>
                                        </svg>
                                        </div>
                            </Card>
                        </Column>                             
                    </Column.Group>
                </Container>   
            </Container>

        )
    }
}

