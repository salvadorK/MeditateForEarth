import React, { Component } from 'react'
import {Container, Column, Divider, Title} from 'rbx'
import "./statement.scss"

export default class Toppagebottom extends Component {
    render() {
        return (
            <Container className="statement">
                <Column.Group >
                    <Column size="half" offset="one-quarter"> 
                       <Title className="titlewhat"subtitle>
                       
                        <strong>What is</strong> Meditate For Earth?
                      
                      </Title>
                    </Column>
                </Column.Group>
            
                    <Divider color="black">.</Divider>
                
                <Column.Group>
                    <Column size="8"offset="2"> 
                        <Title className="insidemessage" subtitle>
                        
                            Meditate for Earth is a tool that allows anyone from around the world to find a <strong>common set time</strong> and join a collective of meditators who wish to meditate for Earth <strong>simultaneously</strong>. It‘s about finding a common time where eveyone can be connected.
                            By using the power of our collective energy, we can <strong>amplify</strong> the effect and fuel the unified field with the feeling of love, peace and harmony and make a positive change for this world.  The more we are meditating at the same moment on earth, the greater the effect we’ll see.
                            Find your <strong>daily</strong> local set time to join the collective and Meditate for Earth in the comfort of your home. 
                        
                        </Title>
                    </Column>      
                </Column.Group>
            </Container>   
        )
    }
}
