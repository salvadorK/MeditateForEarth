import React, {} from 'react'
import { Hero, Column, Title, Level, Button, Textarea, Container} from 'rbx'
import "./contactus.scss"
import Nav from "../toppage/nav.jsx";  
import Bottom from "../footer/footer.jsx"; 
import SvgTop from "../assets/logotop.js";
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-bulma-components";

export default function Contactus() {
    const { handleSubmit, errors, control } = useForm();
    const onSubmit = data => {
      console.log(data);
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
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <br/>
              We’d be happy to hear about you if you have any questions or suggestions. <br/>We are opened to any world peace incentives partnership requests.
              <br/>One Love 
              <br/><br/>
              Or contact us by email on <strong>info@meditateforearth.com</strong>
                      
                <Title subtitle className="inputmessage">CONTACT US</Title>
       
                    <Form.Field>
            
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

                    <Form.Field>
            
                        <label>Email</label>
            
                    <Form.Control>
                        <Controller
                
                            as={Form.Input}
                            name="Email"
                            control={control}
                            defaultValue=""
                            placeholder="Email"
                            type="Email"
                        />
                    </Form.Control>
                        <Form.Help color="danger">
                            {errors.Name && "This field is required"}
                        </Form.Help>
                    </Form.Field>
          
                    <Form.Field>
            
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

                    <Form.Field>
            
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

                    <Form.Field kind="group" align="right">
                        <Form.Control>
                            
                            <Button color="warning" >Send</Button>
            
                        </Form.Control>
                    </Form.Field>
       
      
 

             
             
              
  
            

            </form>
          </Container>


        
              <Bottom/>    

        </div>
     )
  }


