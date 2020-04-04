import React, { Component } from 'react'
import {Container, Column, Divider, Title} from 'rbx'
import "./statement.scss"

export default class Toppagebottom extends Component {
    render() {
        return (
            <Container className="statement">
                <Column.Group >
                    <Column size="half" offset="one-quarter"> 
                       <Title>
                       What is Meditate For Earth?
                      </Title>
                    </Column>
                </Column.Group>
                <Divider color="black">.</Divider>
                <Column.Group>
                    <Column size="three-fifths"offset="one-fifth"> 
                        <Title className="font" subtitle>
                        Meditate for Earth is a tool that allows anyone from around the world to find a common set time and join a collective of meditators who wish to meditate for Earth simultaneously. It‘s about finding a common time where eveyone can be connected.
By using the power of our collective energy, we can amplify the effect and fuel the unified field with the feeling of love, peace and harmony and make a positive change for this world.  The more we are meditating at the same moment on earth, the greater the effect we’ll see.
Find your daily local set time to join the collective and Meditate for Earth in the comfort of your home. 
                        </Title>
                    </Column>      
                </Column.Group>
            </Container>   

        )
    }
}
