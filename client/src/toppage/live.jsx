import React, { Component } from 'react'
import { Column, Title, Container, Button, Numeric, Heading, Notification } from 'rbx';
// import axios from 'axios';
import moment from 'moment-timezone/builds/moment-timezone-with-data';
import "./live.scss"

export default class Live extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    // handleSubmit () {

    //     const payload = {
    //         counter: this.state.counter
    //     }
    //     axios({
    //         url: '',
    //         method: '',
    //         data: payload,
    //     })
    // }
    render() {

        let m = moment.tz("2020-04-05 08:00", "America/Los_Angeles");

        return (
                <Column.Group className="live" textAlign="centered" color="warning" vcentered>
                    <Column size={6}>
                        <Notification textAlign="centered">
                            <Title className="last">
                                <Heading > 
                              
                                    LAST WORLD MEDITATION AUDIENCE
                      
                                </Heading>
                            </Title>
                        </Notification>
    
                        <Column.Group breakpoint="mobile" vcentered> 
                            <Column>
                                <Notification textAlign="right"> 
                                    <Title className="counter" subtitle>

                                        <Numeric> {this.state.counter} </Numeric>
                           
                                    </Title> 
                                </Notification>
                            </Column>
      
                            <Column size={"half"}>
                                <Notification textAlign="left">
                                    <Button className="show" onClick={()=>{this.setState({counter: this.state.counter + 1})}}>
                               
                                        SHOW YOUR PRESENCE
                            
                                    </Button>                   
                                </Notification>
                            </Column>
                        </Column.Group>
                    </Column>
                    
                    <Column size={6} offset={1}>
                        <Container>
                            <Title className="next" >
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
