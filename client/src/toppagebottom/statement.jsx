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
                        
                            {/* Meditate for Earth is a Global Meditation tool that helps people around the world find a <strong>common time</strong> to meditate for Earth together and everyday. By uniting and using our collective power <strong>daily</strong>, we can <strong>amplify</strong> the effect and make a positive change for this world.
                            We believe that we are all one being. Although we have used the word <strong>Meditate</strong> on this website, we want to emphasize that we believe in the equal value of the word <strong>Prayer</strong>, as our only objective is to bring people around the world to unite and feel love and compassion for our planet Earth and her beings.
                         */}

                            Meditate for Earth is a platform that allows you to tap into a community of meditators from all around the globe who want to share in the power of meditating <strong>together</strong>, at the same time, no matter where they are in the world. The time displayed on this website automatically adapts to your location so everyone can be connected <strong>simultaneously</strong>.
                            By uniting and using our collective power daily, we can <strong>amplify</strong> the effect and make a positive change for this world.
                            Although we have used the word Meditate, if you feel more comfortable with the word prayer, please make the substitution.
                        </Title>
                    </Column>      
                </Column.Group>
            </Container>   
        )
    }
}
