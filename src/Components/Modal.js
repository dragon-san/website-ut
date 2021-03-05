import React from 'react';
import './Modal.css';

export const Modal = ({ show, close }) => {
    
  return (
    <div className="modal-wrapper"
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
       <div className="intro">
<img src='/images/11.png' height="50%" width="30%"/></div>
      <div className="modal-header">
        {/* <p>Welcome To Our Site</p> */}
        
      </div>
      <div className="modal-content">
        <div className="modal-body">
           
         <span onClick={close} className="close-modal-btn">x</span> 
          {/* <img src='/images/11.png' height="700px" width="900px"/>  */}
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, placeat aliquam? Nostrum vero fugiat rem, itaque molestias ipsa quae facilis.</p>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
  )
};