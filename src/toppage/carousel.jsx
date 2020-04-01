import React, { Component } from 'react'
import {Column, Level } from 'rbx'
import "./carousel.scss"

export default class Carousel extends Component {
    render() {
        return (
            
                <Column.Group className="top" >
                    <Column size={6} offset={6} >
                       <Level>
                           <Level.Item>
                        </Level.Item>
                    </Level>
                    </Column>
                </Column.Group>
           
            

        )
    }
}
