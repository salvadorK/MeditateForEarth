import React, { Component } from 'react'
import { Column, Title, Container, Button, Numeric, Heading } from 'rbx';
import moment from 'moment-timezone/builds/moment-timezone-with-data';
import "./live.scss"

export default class Live extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }
    render() {

        let m = moment.tz("2020-04-05 08:00", "America/Los_Angeles");

        return (
                <Column.Group className="live" textAlign="centered" color="warning">
                    <Column size={6}>
                      
                                <Container>
                       <Title>
                            <Heading>
                           LAST WORLD MEDITATION AUDIENCE
                           </Heading>
                      </Title>
                      <Title subtitle>
                           <Numeric> {this.state.counter} </Numeric>
                        </Title>
                        </Container>
                       
                            <Button onClick={()=>{this.setState({counter: this.state.counter + 1})}}>
                                SHOW YOUR PRESENCE
                            </Button>
                    
                    </Column>
                    <Column size={6} >
                        <Container>
                            <Title>
                            <Heading >
                                NEXT WORLD MEDITATION
                            </Heading>
                            </Title>
                            <Title subtitle>
                                {m.tz(moment.tz.guess()).format('LLLL')}
                            </Title>
                        </Container>
                    

                    </Column>
                </Column.Group>

        )
    }
}
