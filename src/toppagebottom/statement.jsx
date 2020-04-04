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
                        Meditate for Earth is a tool that allows anyone from around the world to find a <strong>common set time</strong> and join a collective of meditators who wish to meditate for Earth <strong>simultaneously</strong> in the objective to common set time <strong>amplify</strong> the effect. 
                        By using the power of our collective energy, we can fuel the unified field with the feeling of love, peace and harmony and make a positive change for this world. 
                        It‘s as simple as that and much needed in this present time. 
                        By typing in your city in the search bar above,  you will find the <strong>two daily</strong> set times to join the collective and Meditate for Earth in the comfort of your home. 
                        </Title>
                    </Column>      
                </Column.Group>
            </Container>   

        )
    }
}
