
import React, { Component } from 'react';
import './landing.css';
import Navbar from "./Navbar";
import Section from "./Section";
import Aboutus from "./aboutus";
import Services from "./services";
import Products from "./products";
import Landing from "./landing";

import { Link, animateScroll as scroll } from "react-scroll";





class home extends Component{
    scrollToTop = () => {
        scroll.scrollToTop();
      };
render(){

    
    return(

<div className='home-page'>
<Navbar/>
<Landing/>
{/* <img src='/images/ntl_monsoon.jpg' height='800'width="100%"  /> */}
{/* <img src='/images/4.png' height='800' width='100%'/> */}
{/* <button className="top" onClick={this.scrollToTop}>V</button> */}
        <Section
          title=""
          subtitle={Aboutus}
          dark={false}
          id="section1"
        />




        <Section
          title=""
          subtitle={Services}
          dark={false}
          id="section2"
        />

        
<Products/>
         <Section
          title=""
          subtitle=""
          dark={false}
          id="section3"
        />
        {/*<Section
          title="Section 5"
          subtitle='HEllo'
          dark={true}
          id="section5"
        /> */}










</div>      

    )
}

}
export default home;