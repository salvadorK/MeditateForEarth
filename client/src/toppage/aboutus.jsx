import React, { Component } from 'react'
import {Navbar, Hero, Column, Title, Level, Heading} from 'rbx'
import "./aboutus.scss"
import Nav from "../toppage/nav.jsx";  
import Bottom from "../footer/footer.jsx"; 
import SvgTop from "../assets/logotop.js";

export default class Aboutus extends Component {
    render() {
     
        return (
        <div>  
 
                <Nav/>

            <Hero className="about" >
                <Column.Group>
                    <Column size={1} offset={1} >
                       <Level>
                           <Level.Item className="logolanding">
                                
                                <SvgTop/>
                                                
                            </Level.Item>
                        </Level>
                    </Column>
                
                    <Column size={4} offset={2}> 
                        <Title>

                            About Us
                            
                            <Navbar.Divider className="line"></Navbar.Divider>
    
                        </Title>
                    
                        <Title subtitle>
    
                            The mission of <strong>Meditate for Earth</strong> is to enable as many loving minds and loving souls to connect together in this decisive moment of our history. We believe meditation/prayer has a profound effect on the individual and moslty on society as a <strong>whole</strong>. Therefore our vision was to create an opportunity for people from all around the world, to engage <strong>simultaneously</strong>, in one of the purest experiences known to man,
                            which is to <strong>Meditate as One</strong>.
                            <br/><br/>
                            This project was able to see the day because of the help of the amazing people listed below who have invested their time, love and knowledge at no cost to contribute in the realizaton of this website.
                            <br/><br/>
                            <h1><strong>Olivier Dionne Coutya</strong> : Content Creator</h1>
                            <h1><strong>Leonie Garand</strong> : Web Design 
                            <br/> <a href="https://en.picotatoo.com/" target="_blank" rel="noopener noreferrer">en.picotatoo.com</a>{''}</h1>
                            <h1><strong>Karl Anthony Salvador</strong>  : Web Development</h1>
                            <h1><strong>Chi-Hung Ly </strong> : Web Development</h1>
                            <h1><strong>Jake Lockhart </strong>: Texts <a href="https://www.youtube.com/channel/UCpy6fnxfGhtAK6ql9BYPWww" target="_blank" rel="noopener noreferrer">youtube.com/channel</a>{''}</h1>
                            <h1><strong>Siona Rea</strong> : Co-writer of Earth meditation <a href="http://www.sionarea.com" target="_blank" rel="noopener noreferrer">sionarea.com</a>{''}</h1>
                            <h1><strong>Leon Levisk</strong> : Time Zone Planning <a href="http://www.esoterictrips.com" target="_blank" rel="noopener noreferrer">esoterictrips.com</a>{''}</h1>
                            <h1><strong>Andreas Mantovanis</strong> : Editing </h1>
                            <h1>Music: Talking to nature live in Thaïland by Shastro
                            <br/>
                            The beautiful music was offered to us for the Daily Meditation exercise and was recorded during a live meditation in Ko Phangan in Thailand. This musical piece is a special thank you to nature for all the inspiration she has always showered in the life of the artist, Shastro. His music and events are available on:
                            <br/>
                            <a href="http://www.shastro.com" target="_blank" rel="noopener noreferrer">shastro.com</a>{''}
                            <br/>
                            <a href="http://www.malimba.com" target="_blank" rel="noopener noreferrer">malimba.com</a>{''}
                            <br/>
                            <a href="https://www.youtube.com/channel/UCmuVlnoRaIGa9VXua1kkNUw" target="_blank" rel="noopener noreferrer">youtube.com/channel</a>{''}</h1> 
                        </Title>
                    </Column>   
                </Column.Group>
            </Hero>

                    <Bottom/>

        </div>



        )
    }
}

