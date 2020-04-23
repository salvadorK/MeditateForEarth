import React, { Component } from 'react'
import { Column, Title, Container, Button, Numeric, Heading, Notification} from 'rbx';
import * as moment from 'moment-timezone/builds/moment-timezone-with-data';
import socketIOClient from 'socket.io-client';
import "./live.scss"


export default class Live extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 0,
            counter: 0,
            post:[]
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.socket = socketIOClient('https://meditate-for-earth.herokuapp.com/', {
            transports: ['websocket'],
            rejectUnauthorized: false
          });
        this.socket.on('init',(data)=>
            this.setState({
                post: data
            })
        );
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
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
        this.socket.emit('clicks', payload );
    }
    render() {
        let now = moment.tz("Europe/London");
        let meditate = moment(`${now.format('YYYY-MM-DD')}T08:00:00+01:00`);
        let meditate2 = moment(`${now.format('YYYY-MM-DD')}T20:00:00+01:00`);
        let am1 = moment(`${now.format('YYYY-MM-DD')}T07:50:00+01:00`);
        let am2 = moment(`${now.format('YYYY-MM-DD')}T08:30:00+01:00`);
        let pm1 = moment(`${now.format('YYYY-MM-DD')}T19:50:00+01:00`);
        let pm2 = moment(`${now.format('YYYY-MM-DD')}T20:30:00+01:00`);
     
        let am = moment(now).isBetween(am1,am2);
        let pm = moment(now).isBetween(pm1,pm2);

        let amresult = moment(now).isBetween(am1,pm1);


        let start1 = new Date(am1).getTime()
        let end1 = new Date(am2).getTime()


        let result1 = this.state.post && this.state.post.filter(post => {var time = new Date(post.date).getTime();
            return (start1 < time && time < end1);
           });

        let start2 = new Date(pm1).getTime()
        let end2 = new Date(pm2).getTime()

        // let start2 = new Date('2020-04-16T17:00:00.000Z').getTime()
        // let end2 = new Date('2020-04-17T20:00:00.000Z').getTime()
        

        let result2 = this.state.post && this.state.post.filter(post => {var time = new Date(post.date).getTime();
            return (start2 < time && time < end2);
           });
        
       
        
        

        return (
                <Column.Group className="live" textAlign="centered" color="warning" vcentered>
                    <Column size={6} >
                        <Notification>
                            <Title className="lastcurrent">
                                <Heading > 
                                   {am || pm ? "current " : "last "}
                                 WORLD MEDITATION AUDIENCE
                           </Heading>
                      </Title>
                      <Title className="counter" subtitle>
                     
                           <Numeric> {amresult ? result1.length : result2.length} </Numeric>
                        </Title>
                        
                        
                            <Button className="show" disabled={am || pm ? this.state.counter > 0 ? true : false : true }onClick={()=>{this.handleSubmit()}}>
                                SHOW YOUR PRESENCE
                            </Button>
                            </Notification>
                    </Column>
                    <Column size={6} >
                        <Container>
                            <Title className="next" >
                                <Heading >
                                     NEXT WORLD MEDITATION
                            </Heading>
                            </Title>
                            <Title className="todaytime" subtitle>
                               Today at {meditate.tz(moment.tz.guess()).format('LT')} and {meditate2.tz(moment.tz.guess()).format('LT')} Local time
                            </Title>
                            
                        </Container>
                   </Column>
                   </Column.Group>
        )
    }
}
