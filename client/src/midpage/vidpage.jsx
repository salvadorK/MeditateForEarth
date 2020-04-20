import React, { Component } from 'react'
import {Container, Column, Divider, Title} from 'rbx'
import "./vidpage.scss"
import ReactPlayer from 'react-player'


export default class Vidpage extends Component {
    render() {
        return (
            <Container className="vidpage">
                <Column.Group>
                    <Column size="half" offset="one-quarter"> 
                       <Title className="titleguided" subtitle>
                       <strong>Guided</strong> Meditation
                      </Title>
                    </Column>
                </Column.Group>

                <Divider color="black">.</Divider>
                
                <Column.Group className="videotopspacing">
                    <Column size="half" offset="one-quarter"> 
                       
                    <ReactPlayer
          className='react-player'
          url='https://youtu.be/ASBJnfDSRhg'
          width='100%'
          playing
          controls
        />
                    </Column>      
                </Column.Group>
            </Container>   

        )
    }
}
