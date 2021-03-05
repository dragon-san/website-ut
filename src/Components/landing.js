import React, { Component } from 'react';
import '../App.css';
import { Button } from './Button';
import './landing.css';


class landing extends Component  {

  render() {
  return (
    <div id="wholepage">
    <div className='landing-container'>
      <video src='/videos/home.mp4' autoPlay loop muted />
      
      {/* <img src='/images/2.png'
        alt="logo"
        className="logo-img"/> */}
        <p2>"A Journey Starts From The Outside And Ends Within"</p2> 
      <p1>DEVBHOOMI AWAITS</p1> 

      <p>LET'S ADVENTURE TOGETHER</p>
      
      
      <div className='landing-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          
        EXPLORE NOW 
          
        </Button>
       
        
     </div>
  
     
    </div>
    </div>
  );

}
}
export default landing;
