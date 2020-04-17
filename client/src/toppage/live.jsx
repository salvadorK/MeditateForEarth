import React, { Component } from 'react'
import { Column, Title, Container, Button, Numeric, Heading } from 'rbx';
import * as moment from 'moment-timezone/builds/moment-timezone-with-data';
import socketIOClient from 'socket.io-client';
import "./live.scss"


export default class Live extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 0,
            counter: 0,
            post: []
        }
    }

    componentDidMount() {
        this.socket = socketIOClient('http://localhost:5000/');
        this.socket.on('init',(data)=>{
            this.setState({
                post: data
            })
        });
        this.interval = setInterval(() => this.socket.on('init',(data)=>{
            this.setState({
                post: data
            })
        }), 1000);
      }
    
    componentWillUnmount() {
        clearInterval(this.interval);
      }

    handleSubmit () {
        this.setState({counter:this.state.counter +1})
        const date = moment.tz("Europe/London");
        const payload = {
            location: moment.tz.guess(),
            date: date
        }
        this.socket.emit('clicks', payload )
    }
    render() {
        let now = moment.tz("Europe/London");
        let meditate = moment(`${now.format('YYYY-MM-DD')}T09:00:00+01:00`);
        let meditate2 = moment(`${now.format('YYYY-MM-DD')}T21:00:00+01:00`);
        let am1 = moment(`${now.format('YYYY-MM-DD')}T08:50:00+01:00`);
        let am2 = moment(`${now.format('YYYY-MM-DD')}T09:30:00+01:00`);
        let pm1 = moment(`${now.format('YYYY-MM-DD')}T19:50:00+01:00`);
        let pm2 = moment(`${now.format('YYYY-MM-DD')}T20:30:00+01:00`);
     
        let am = moment(now).isBetween(am1,am2);
        let pm = moment(now).isBetween(pm1,pm2);

        let amresult = moment(now).isBetween(am1,pm1);


        let start2 = new Date('2020-04-16T17:00:00.000Z').getTime()
        let end2 = new Date('2020-04-16T21:00:00.000Z').getTime()

        let start1 = new Date(pm1).getTime()
        let end1 = new Date(pm2).getTime()


        let result1 = this.state.post.length > 0 && this.state.post.filter(post => {var time = new Date(post.date).getTime();
            return (start1 < time && time < end1);
           });

        // let start2 = new Date(pm1).getTime()
        // let end2 = new Date(pm2).getTime()

        

        let result2 = this.state.post.length > 0 && this.state.post.filter(post => {var time = new Date(post.date).getTime();
            return (start2 < time && time < end2);
           });
        
       
        

        return (
                <Column.Group className="live" textAlign="centered" color="warning" vcentered>
                    <Column size={6}>
                        <Notification textAlign="centered">
                            <Title className="last">
                                <Heading > 
                              
                           LAST WORLD MEDITATION AUDIENCE
                           </Heading>
                      </Title>
                      <Title className="counter" subtitle>
                     
                           <Numeric> {result2.length} </Numeric>
                        </Title>
                        
                        
                            <Button className="show" /*disabled={am || pm ? this.state.counter > 0 ? true : false : true }*/ onClick={()=>{this.handleSubmit()}}>
                                SHOW YOUR PRESENCE
                            </Button>
                            </Notification>
                    </Column>
                    
                    <Column size={6} offset={1}>
                        <Container>
                            <Title className="next" >
                                <Heading >
                           
                                NEXT WORLD MEDITATION
                            </Heading>
                            </Title>
                            <Title subtitle>
                               Today at {meditate.tz(moment.tz.guess()).format('LT')} and {meditate2.tz(moment.tz.guess()).format('LT')} Local time
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
