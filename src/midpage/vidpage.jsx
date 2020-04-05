import React, { Component } from 'react'
import {Container, Column, Divider, Title, Image} from 'rbx'
import "./vidpage.scss"

export default class Vidpage extends Component {
    render() {
        return (
            <Container className="vidpage">
                <Column.Group>
                    <Column size="half" offset="one-quarter"> 
                       <Title>
                       Guided Meditation
                      </Title>
                    </Column>
                </Column.Group>
                <Divider color="black">.</Divider>
                <Column.Group>
                    <Column size="half" offset="one-quarter"> 
                       
                        <Image.Container size={100}>
                    <Image src= {require("../assets/bloc B.jpg")}/>
                    * Sources: Global Union of Scientists for Peace
                </Image.Container>
                        
                    </Column>      
                </Column.Group>
            </Container>   

        )
    }
}
