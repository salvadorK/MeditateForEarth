import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Contactus from "./toppage/contactus.jsx"; 
import Aboutus from "./toppage/aboutus.jsx";
import Whymeditate from "./toppage/whymeditate.jsx"; 
import Edpage from "./educators/edpage.jsx";


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  path='/about' component={Aboutus}/>
      <Route path='/contact' component={Contactus}/>
      <Route path='/why' component={Whymeditate}/>
      <Route path='/educators' component={Edpage}/>
    </Switch>
  </main>
)

export default Main