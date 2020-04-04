import React, { Component } from 'react'
import {Container, Column, Divider, Title, Image} from 'rbx'
import "./vidpage.scss"

export default class Vidpage extends Component {
    render() {
        return (
            <Container className="vidpage">
                <Column.Group >
                    <Column size="half" offset="one-quarter"> 
                       <Title>
                       Guided Meditation
                      </Title>
                    </Column>
                </Column.Group>
                <Divider color="black">.</Divider>
                <Column.Group>
                    <Column size="10"offset="5"> 
                       
                        <Image.Container size={128}>
                    <Image src= {require("../assets/PLANETE_14827-NQ3ANC.png")}/>
                    * Sources: Global Union of Scientists for Peace
                </Image.Container>
                        
                    </Column>      
                </Column.Group>
            </Container>   

        )
    }
}
