import React, { Component } from 'react'
import { Column, Title, Generic} from 'rbx'
import "./steps.scss"

export default class Steps extends Component {
    render() {
        return (

            <div >
                <Generic className="steps">
                    <Column size={3} offset={3}> 
                        <Title subtitle className="how">

                            How to <strong>meditate as one</strong>

                        </Title>
                    </Column>  
                </Generic>
                
                <Generic className="messagecontent">
                    <Column.Group >              
                        <Column size={4} align="center"> 
                            <Title>
                        
                                <svg width="80" height="117" viewBox="0 0 80 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="40" cy="40" r="40" fill="#FBBA00"/>
                        <path d="M32.717 30.592V22.96H46.013V58H37.469V30.592H32.717Z" fill="white"/>
                        </svg>
                        
                            </Title>
                  
                            <Title className="stepstitle">
                         
                                YOUR LOCAL TIME
                                
                            </Title>
                                                
                            <Title className="stepscontent" subtitle>
                                                
                                Find your two <strong>local</strong> time options located on our home page and join the collective Global Meditation. 
                                                
                            </Title>
                        </Column>                
                         
                        <Column size={4} align="center">
                            <Title>
                    
                                <svg width="80" height="117" viewBox="0 0 80 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="40" cy="40" r="40" fill="#FBBA00"/>
                                <path d="M28.6055 51.424C29.6935 50.56 30.1895 50.16 30.0935 50.224C33.2295 47.632 35.6935 45.504 37.4855 43.84C39.3095 42.176 40.8455 40.432 42.0935 38.608C43.3415 36.784 43.9655 35.008 43.9655 33.28C43.9655 31.968 43.6615 30.944 43.0535 30.208C42.4455 29.472 41.5335 29.104 40.3175 29.104C39.1015 29.104 38.1415 29.568 37.4375 30.496C36.7655 31.392 36.4295 32.672 36.4295 34.336H28.5095C28.5735 31.616 29.1495 29.344 30.2375 27.52C31.3575 25.696 32.8135 24.352 34.6055 23.488C36.4295 22.624 38.4455 22.192 40.6535 22.192C44.4615 22.192 47.3255 23.168 49.2455 25.12C51.1975 27.072 52.1735 29.616 52.1735 32.752C52.1735 36.176 51.0055 39.36 48.6695 42.304C46.3335 45.216 43.3575 48.064 39.7415 50.848H52.7015V57.52H28.6055V51.424Z" fill="white"/>
                                </svg>
                    
                            </Title>
                    
                            <Title className="stepstitle" >
                                                                
                                CONNECT SIMULTANEOUSLY
                        
                            </Title>
                                                
                            <Title className="stepscontent" subtitle>
                                                
                            Ten minutes prior to the Global Meditation, <strong>show your presence</strong> by clicking on the button located on the home page.
                            By doing so, you’ll show meditaters around the world that you’re present with them. This will also encourage more people to join this loving exercise.      
                                
                            </Title>
                                    
                        </Column>
                            
                        <Column size={4} align="center">
                            <Title>
                              
                                <svg width="80" height="117" viewBox="0 0 80 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="40" cy="40" r="40" fill="#FBBA00"/>
                                <path d="M28.3612 32.848C28.4892 29.424 29.6092 26.784 31.7212 24.928C33.8332 23.072 36.6972 22.144 40.3132 22.144C42.7132 22.144 44.7612 22.56 46.4572 23.392C48.1852 24.224 49.4812 25.36 50.3452 26.8C51.2412 28.24 51.6892 29.856 51.6892 31.648C51.6892 33.76 51.1612 35.488 50.1052 36.832C49.0492 38.144 47.8172 39.04 46.4092 39.52V39.712C48.2332 40.32 49.6732 41.328 50.7292 42.736C51.7852 44.144 52.3132 45.952 52.3132 48.16C52.3132 50.144 51.8492 51.904 50.9212 53.44C50.0252 54.944 48.6972 56.128 46.9372 56.992C45.2092 57.856 43.1452 58.288 40.7452 58.288C36.9052 58.288 33.8332 57.344 31.5292 55.456C29.2572 53.568 28.0572 50.72 27.9292 46.912H35.8972C35.9292 48.32 36.3292 49.44 37.0972 50.272C37.8652 51.072 38.9852 51.472 40.4572 51.472C41.7052 51.472 42.6652 51.12 43.3372 50.416C44.0412 49.68 44.3932 48.72 44.3932 47.536C44.3932 46 43.8972 44.896 42.9052 44.224C41.9452 43.52 40.3932 43.168 38.2492 43.168H36.7132V36.496H38.2492C39.8812 36.496 41.1932 36.224 42.1852 35.68C43.2092 35.104 43.7212 34.096 43.7212 32.656C43.7212 31.504 43.4012 30.608 42.7612 29.968C42.1212 29.328 41.2412 29.008 40.1212 29.008C38.9052 29.008 37.9932 29.376 37.3852 30.112C36.8092 30.848 36.4732 31.76 36.3772 32.848H28.3612Z" fill="white"/>
                                </svg>
                            
                            </Title> 
                                       
                            <Title className="stepstitle">
                                                
                                MEDITATE
                                                
                            </Title>
                                                
                            <Title className="stepscontent" subtitle>
            
                                Sit in a comfortable and relaxing environment. Slowly and gently inhale and exhale several times. Imagine earth shrinking to the size where she can fit in the palm of your hand. Gently place her in the center of your heart and feel your loving connection. Let her know: "My heart is your heart, Your heart is my heart, We are one." Repeat this exercise, as she’s a living being and will feel this love. Conduct the rest of the meditation with your heart.
   
                            </Title>                  
                        </Column>
                    </Column.Group>
                </Generic>
            </div>
                    )
                }
            }


