import React, { Component } from 'react'
import { Hero, Column, Title, Level, Control, Field, Button, Input, Textarea, Container} from 'rbx'
import "./contactus.scss"
import Nav from "../toppage/nav.jsx";  
import Bottom from "../footer/footer.jsx"; 
import SvgTop from "../assets/logotop.js";

export default class Contactus extends Component {
    render() {
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
            <form>
              
              <br/>
              We’d be happy to hear about you if you have any questions or suggestions. <br/>We are opened to any world peace incentives partnership requests.
              <br/>One Love 
              <br/><br/>
              Or contact us by email on <strong>info@meditateforearth.com</strong>
                      
              <Field className="inputmessage">
                
                <strong>CONTACT US</strong>
            
                <Control>
                  <Input 
                    defaultValue=""
                    placeholder="Name" 
                    type="text" />
                </Control>
              </Field>
        
              <Field>
                <Control>
                  <Input
                    defaultValue=""
                    placeholder="Email"
                    type="email"/>
                </Control>
              </Field>
  
              <Field>
                <Control>
                  <Input 
                    defaultValue=""
                    placeholder="Subject" 
                    type="text" />
                </Control>
              </Field>
  
              <Field>
                <Control>
                  <Textarea 
                    defaultValue=""
                    placeholder="Message"
                    type="text" />
                </Control >
              </Field>
  
              <Field kind="group" align="right">
                <Control>
      
                  <Button color="warning" >Send</Button>
                </Control>
            
              </Field>

            </form>
          </Container>

              <Bottom/>    

        </div>
     )
  }
}

