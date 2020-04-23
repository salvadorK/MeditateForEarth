import React, {} from 'react'
import { Hero, Column, Title, Level, Button, Textarea, Container} from 'rbx'
import "./contactus.scss"
import Nav from "../toppage/nav.jsx";  
import Bottom from "../footer/footer.jsx"; 
import SvgTop from "../assets/logotop.js";
import socketIOClient from 'socket.io-client';
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-bulma-components";

export default function Contactus() {
    const { handleSubmit, errors, control, reset } = useForm();
    const onSubmit = (data,e) => {
        reset();
        const socket = socketIOClient('https://meditate-for-earth.herokuapp.com/',{
            transports: ['websocket'],
            rejectUnauthorized: false
          });
        socket.emit('contact',data);
  
    };
        return (
        
        <div>  
   
            <Nav/>

          <Hero className="contact" >
            <Column.Group>
              <Column size={1} offset={1} >
                <Level>
                  <Level.Item>
                    
                    <SvgTop/>

                  </Level.Item>
                </Level>
              </Column>
    
              <Column size={4} offset={5}> 
                <Title subtitle>
    
                  We want to <strong>hear from you!</strong>
                
                </Title>
              </Column>   
            </Column.Group>
          </Hero>

          <Container className="infomessage">
          <Column.Group>
          <Column size={10} offset={1} >

            <form onSubmit={handleSubmit(onSubmit)}>
              
              <br/>
              We’d be happy to hear about you if you have any questions or suggestions. We are opened to any world peace incentives partnership requests.
              <br/>One Love 
              <br/><br/>
              Or contact us by email on <a href="mailto:info@meditateforearth.org">info@meditateforearth.org</a>
                      
                <Title subtitle className="inputmessage">CONTACT US</Title>
       
                    <Form.Field className="inputfield">
            
                        <label>Name</label>
            
                    <Form.Control>
                        <Controller
                    
                            as={Form.Input}
                            name="Name"
                            placeholder="Name"
                            defaultValue=""
                            control={control}
                            rules={{ required: true}}
                        />   
                    </Form.Control>
                        <Form.Help color="danger">                   
                            {errors.Name && "This field is required"}
                        </Form.Help>
                    </Form.Field>

                    <Form.Field className="inputfield">
            
                        <label>Email</label>
            
                    <Form.Control>
                        <Controller
                
                            as={Form.Input}
                            name="Email"
                            control={control}
                            defaultValue=""
                            placeholder="Email"
                            type="email"
                        />
                    </Form.Control>
                        <Form.Help color="danger">
                            {errors.Name && "This field is required"}
                        </Form.Help>
                    </Form.Field>
          
                    <Form.Field className="inputfield">
            
                        <label>Subject</label>
            
                    <Form.Control>
                        <Controller
                
                            as={Form.Input}
                            name="Subject"
                            control={control}
                            defaultValue=""
                            placeholder="Subject"
                            type="text"
                        />
                    </Form.Control>
                        <Form.Help color="danger">
                            {errors.Name && "This field is required"}
                        </Form.Help>
                    </Form.Field>

                    <Form.Field className="inputfield">
            
                        <label>Message</label>
            
                    <Form.Control>
                        <Controller
                
                            as={Textarea}
                            name="Message"
                            control={control}
                            defaultValue=""
                            placeholder="Message"
                            type="text"
                        />
                    </Form.Control>
                    </Form.Field>

                    <Form.Field kind="group" align="right" className="inputfield">
                        <Form.Control>
                            
                            <Button color="warning" >Send</Button>
            
                        </Form.Control>
                    </Form.Field>
       
      
 

             
             
              
  
            

            </form>
            </Column>
            </Column.Group>
          </Container>


        
              <Bottom/>    

        </div>
     )
  }


