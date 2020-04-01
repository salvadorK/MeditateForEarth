import React, { Component } from 'react'
import { Column, Title } from 'rbx'
import "./mid.scss"

export default class Mid extends Component {
    render() {
        return (
                <Column.Group className="mid">
                    <Column size={6} offset={6} >
                      
                       <Title>
                      
                            Why should we meditate for earth?
                      </Title>
                      <Title subtitle>
                        We are one.  Deep within each of us, lays a unified field of consciousness that pervades and connects us all. That is our profound nature.
According to the Global Union of Scientists for Peace, when a relatively small fraction of society engage in transcendental meditation together, they can significantly reduce crime, war, social stress and improve the effectivness of government. Radiating the feeling of love and harmony creates coherence in the field  and positively impacts our society.
                        </Title>
                     
                    </Column>
                </Column.Group>

        )
    }
}
