import React, { Component, useState } from 'react';
import { Modal } from './Modal';
import './products.css'

export default class Products extends Component {
    
    render(){
return (
    <div className='products-container'>
        <img src='/images/ntl_sunshine.jpg' height='550'width="30%" />
        <img src='/images/ntl_winter.jpg' height='550'width="30%" />
        <img src='/images/ntl_boats.jpg' height='550'width="30%" />
        <div class="text-block2">
    <h4>Nainital Darshan</h4>

    <p> Journey Time is around 4-5 hrs <br></br>
    COVERS: Cave Garden, Bara Pathar, Lover’s
Point,Suicide Point, Khurpatal View
Point, <br></br>Saritatal, Water Fall, Hanuman
Gari Tample, Himalaya Darshan, <br></br>Lake
View Point, Horse Riding and Zoo Point
Drop or Ropeway Drop.</p>
  </div>
  <img src='/images/ntl_himalaya.jpg' height='550'width="30%" />
  <img src='/images/himalaya_almora.jpg' height='550'width="30%" />
  <img src='/images/harshil.jpg' height='550'width="30%" />
  <div class="text-block3">
    <h4>Himalaya Darshan</h4>

    <p>Journey Time is around 2 hrs<br></br>
    COVERS: Cave Garden, Bara Pathar, Lover’s Point,
Himalaya Darshan, Lake View, Khurpatal
View.</p>
  </div>



  <img src='/images/bhimtal.jpg' height='550'width="30%" />
  <img src='/images/nauk.jpg' height='550'width="30%" />
  <img src='/images/nainital.jpg' height='550'width="30%" />
  <div class="text-block4">
    <h4>Lake Tour</h4>

    <p>Journey Time is around 4-5 hrs<br></br>
    COVERS : Bhowali, Bhimtal, Sattal, Kamaltal,
Noukuchiyatal and Hanuman Gari Tample.
View.</p>
  </div>



  <img src='/images/pan.jpg' height='547'width="30%" />
  
  <img src='/images/mussorrie.jpg' height='547'width="30%" />
  <img src='/images/mukteshwar.jpg' height='550'width="30%" />
  <div class="text-block5">
    <h4>Mukteshwar Tour</h4>

    <p>Journey Time is around 1 Day<br></br>
    COVERS : Bhowali, Ghorakhal Tample, Gagar,
Ramgarh, Tea Garden, Apple Garden,<br></br>
Panchachuli Peak and Back to Nainital.
View.</p>
  </div>




  <img src='/images/jageshwar.jpg' height='550'width="30%" />
  <img src='/images/kainchi.jpg' height='550'width="30%" />
  <img src='/images/jageshwar2.jpg' height='550'width="30%" />
  <div class="text-block6">
    <h4>Jageshwar Tour</h4>

    <p>Journey Time is around 1 Day<br></br>
    COVERS : Bhowali, Kainchi Tample, Almora-
Jageshwar Dham.</p>
  </div>



  <img src='/images/kausani.jpg' height='600'width="90%" />
  <div class="text-block7">
    <h4>Kausani Tour</h4>

    <p>Journey Time is around 2 Days<br></br>
    Day 1 COVERS : Bhowali, Kainchi Tample, Almora,
Kausani (Night Stay)<br>
</br>
Day 1 COVERS : Kausani to Ranikhet and Back to
Nainital.</p>
  </div>


  <img src='/images/tiger_corbett.jpg' height='500'width="30%" />
  <img src='/images/c_forest.jpg' height='500'width="30%" />
 
  <img src='/images/c_fall.jpg' height='500'width="30%" />
  
  <div class="text-block8">
    <h4>JIM CORBETT Wild Life Tour </h4>

    <p>Journey Time is around 1 Day<br></br>
    COVERS : Corbett Museum, Corbett Fall ( Needs Permit
by wild life warden) and
Back to Nainital same day.</p>
  </div>




  <img src='/images/c_fall3.jpg' height='500'width="30%" />
  <img src='/images/cave.jpg' height='500'width="30%" />
 
  <img src='/images/khurpatal.jpg' height='500'width="30%" />
  
  <div class="text-block9">
    <h4>CORBETT Fall Tour </h4>

    <p>Journey Time is around 1 Day<br></br>
    COVERS : Cave Garden, Bara Pathar, Lovers Point
and Suicide Point, Sarita Tal, Khurpatal,
Water Fall, Corbet Musiam,Corbett Fall.</p>
  </div>



  <img src='/images/ukhimat.jpg' height='500'width="30%" />
  <img src='/images/snowlake.jpg' height='500'width="30%" />
 
  <img src='/images/road.jpg' height='500'width="30%" />
  
  <div class="text-block10">
    <h4>Special Jumble Tour </h4>

    <p>Journey Time is around 1 Day <br></br>COVERS :Bhowali, Kainchi Tample, Frog Point,
Ghorakhal Tample, Tea Garden, Bhimtal,<br></br>
Noukuchiatal and Hanuman Gari Tample.</p>
  </div>



  <img src='/images/devprayag.jpg' height='500'width="30%" />
<img src='/images/kedarnath_night1.jpg' height='500'width="30%" />
<img src='/images/badrinath.jpg' height='500'width="30%" />
<div class="text-block0">
    <h4>Custom Tour Packages</h4>

    <p>We provide on-demand touring packages specifically customized for the customers need.<br></br> Please contact us for details.</p>
  </div>


  <img src='/images/auli.jpg' height='500'width="30%" />
  <img src='/images/boats.jpg' height='500'width="30%" />
 
  <img src='/images/para.jpg' height='500'width="30%" />
  
  <div class="text-block11">
    <h4>Other Services </h4>

    <p>Hotel Booking <br></br>Boating <br></br>
Paragliding</p>
  </div>

  <img src='/images/Harshil2.jpg' height='500'width="30%" />
  <img src='/images/snowroad.jpg' height='500'width="30%"  />

  <img src='/images/kedarnath.jpg' height='500'width="30%" />
<div class="text-block12">
    <h4>Contact Us</h4>
    <p>You can reach out to us through mail at<br></br>uttaranchaltravels@gmail.com
   <br></br> 
   Or Call Us on
   <br></br>
   +91 9837691399
   +91 9411791399

<br></br>


    </p>
  </div>

    
  <img src='/images/c1.jpg' height='400'width="35%" />
  <img src='/images/c2.jpg' height='400'width="35%" />
 
  <img src='/images/c3.jpg' height='400'width="20%" />
  <br></br>
  <img src='/images/him_end.jpg' height='500'width="90%" />
  
  <div class="text-block13">
    <h4>“Going to the mountains is going home” </h4>
  </div>



    </div>
    
  );
}
}

