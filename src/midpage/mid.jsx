import React, { Component } from 'react'
<<<<<<< HEAD
import {Hero, Column, Title} from 'rbx'
=======
import {Column, Title, Level } from 'rbx'
>>>>>>> f0321df270967b851c9bb1916cbd64c8ba484bff
import "./mid.scss"

export default class Mid extends Component {
    render() {
        return (
<<<<<<< HEAD
            <Hero className="mid" >
                <Column.Group >
                    <Column size={4} offset={6}> 
                    <Title>
                    Why <strong>Meditate</strong> together ?
                    </Title>
                    <Title subtitle>
                    We are one.  Deep within each of us, lays a unified field of consciousness that pervades and connects us all. That is our profound nature.
                    According to the Global Union of Scientists for Peace, when a relatively small fraction of society engage in transcendental meditationtogether, they can significantly reduce crime, war, social stress and improve the effectivness of government. Radiating the feeling of love and harmony creates coherence in the field  and positively impacts our society.
                    </Title>
                    </Column> 
                    <Column className="learnmore" size={1} offset={1}> 
                    <Title subtitle>
                    <svg width="117" height="36" viewBox="0 0 117 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="105" cy="17" r="12" fill="#FBBA00"/>
<path d="M111.129 17.84H105.777V23.24H104.217V17.84H98.8887V16.4H104.217V11H105.777V16.4H111.129V17.84Z" fill="white"/>
<path d="M3.2378 21.712H6.5278V23H1.6418V13.27H3.2378V21.712ZM9.4585 14.558V17.414H12.8185V18.716H9.4585V21.698H13.2385V23H7.8625V13.256H13.2385V14.558H9.4585ZM21.0703 21.012H16.9963L16.2963 23H14.6303L18.1163 13.256H19.9643L23.4503 23H21.7703L21.0703 21.012ZM20.6223 19.71L19.0403 15.188L17.4443 19.71H20.6223ZM30.02 23L27.78 19.108H26.562V23H24.966V13.27H28.326C29.0727 13.27 29.7027 13.4007 30.216 13.662C30.7387 13.9233 31.126 14.2733 31.378 14.712C31.6393 15.1507 31.77 15.6407 31.77 16.182C31.77 16.8167 31.5833 17.3953 31.21 17.918C30.846 18.4313 30.2813 18.7813 29.516 18.968L31.924 23H30.02ZM26.562 17.834H28.326C28.9233 17.834 29.3713 17.6847 29.67 17.386C29.978 17.0873 30.132 16.686 30.132 16.182C30.132 15.678 29.9827 15.286 29.684 15.006C29.3853 14.7167 28.9327 14.572 28.326 14.572H26.562V17.834ZM41.8057 23H40.2097L35.4077 15.734V23H33.8117V13.256H35.4077L40.2097 20.508V13.256H41.8057V23ZM57.7863 13.27V23H56.1903V16.336L53.2223 23H52.1163L49.1343 16.336V23H47.5383V13.27H49.2603L52.6763 20.9L56.0783 13.27H57.7863ZM64.322 23.098C63.4167 23.098 62.5813 22.888 61.816 22.468C61.06 22.0387 60.458 21.446 60.01 20.69C59.5713 19.9247 59.352 19.066 59.352 18.114C59.352 17.162 59.5713 16.308 60.01 15.552C60.458 14.796 61.06 14.208 61.816 13.788C62.5813 13.3587 63.4167 13.144 64.322 13.144C65.2367 13.144 66.072 13.3587 66.828 13.788C67.5933 14.208 68.1953 14.796 68.634 15.552C69.0727 16.308 69.292 17.162 69.292 18.114C69.292 19.066 69.0727 19.9247 68.634 20.69C68.1953 21.446 67.5933 22.0387 66.828 22.468C66.072 22.888 65.2367 23.098 64.322 23.098ZM64.322 21.712C64.966 21.712 65.54 21.5673 66.044 21.278C66.548 20.9793 66.94 20.5593 67.22 20.018C67.5093 19.4673 67.654 18.8327 67.654 18.114C67.654 17.3953 67.5093 16.7653 67.22 16.224C66.94 15.6827 66.548 15.2673 66.044 14.978C65.54 14.6887 64.966 14.544 64.322 14.544C63.678 14.544 63.104 14.6887 62.6 14.978C62.096 15.2673 61.6993 15.6827 61.41 16.224C61.13 16.7653 60.99 17.3953 60.99 18.114C60.99 18.8327 61.13 19.4673 61.41 20.018C61.6993 20.5593 62.096 20.9793 62.6 21.278C63.104 21.5673 63.678 21.712 64.322 21.712ZM75.9165 23L73.6765 19.108H72.4585V23H70.8625V13.27H74.2225C74.9692 13.27 75.5992 13.4007 76.1125 13.662C76.6352 13.9233 77.0225 14.2733 77.2745 14.712C77.5358 15.1507 77.6665 15.6407 77.6665 16.182C77.6665 16.8167 77.4798 17.3953 77.1065 17.918C76.7425 18.4313 76.1778 18.7813 75.4125 18.968L77.8205 23H75.9165ZM72.4585 17.834H74.2225C74.8198 17.834 75.2678 17.6847 75.5665 17.386C75.8745 17.0873 76.0285 16.686 76.0285 16.182C76.0285 15.678 75.8792 15.286 75.5805 15.006C75.2818 14.7167 74.8292 14.572 74.2225 14.572H72.4585V17.834ZM81.3042 14.558V17.414H84.6642V18.716H81.3042V21.698H85.0842V23H79.7082V13.256H85.0842V14.558H81.3042Z" fill="white"/>
</svg>
=======

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
>>>>>>> f0321df270967b851c9bb1916cbd64c8ba484bff

                    </Title>
                    </Column>   
                </Column.Group>
            </Hero>
             
        )
    }
}

