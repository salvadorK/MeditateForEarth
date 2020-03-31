import React, { Component } from 'react'
import { Container, Column, Title, Hero } from 'rbx'
import "./steps.scss"

export default class Steps extends Component {
    render() {
        return (
            <Container className="steps">
                <Hero >
                    <Title>
                    How to meditate as one...
                    </Title>
                </Hero>
                <Column.Group >
                    <Column size={4}> 
                     <Title>
                                                    FIND OUT
                                                </Title>
                                                <Title subtitle>
                                                    in the section above, what are the sets times of your city to meditate simultaneously with the rest of the world.   
                                                </Title>
                                            
                         
                    </Column>
                    <Column size={4}>
                                        
                                                <Title>
                                                CONNECT SIMULTANEAOUSLY
                                                </Title>
                                                <Title subtitle>
                                                with the world to meditate for earth. Five minutes prior to the global meditation, you will have the possibility to click on the show your presence button to see on a live map, how many people are with you.       
                                                </Title>
                                    
                            </Column>
                            <Column size={4}>
                                       
                                        
                                                <Title>
                                                FEELING IS THE SECRET
                                                </Title>
                                                <Title subtitle>
                                                Sit with you eyes closed, meditate feeling  peace, love, harmony and coherence on our planet. Find guided meditation below.    
                                                </Title> 
                                     
                    </Column>
                </Column.Group>
            </Container>
        )
    }
}


