import React,{useEffect,useState} from 'react';

import './Nav.css';

function Nav() {
    const [show, handleShow] =useState(false);

    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);

            } else handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll");
        };
        
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" src="https://secureservercdn.net/198.12.144.78/bza.03e.myftpupload.com/wp-content/uploads/2020/08/Netflix-Logo.png" alt="Netflix Logo" />
            
             <img className="nav__avatar" 
              src="https://dhlm2eb86cbhs.cloudfront.net/public/thumbs/news/2020/07/32003/facebook-avatar-main_425_735.jpg"
              alt="Hello User"            
               />
        </div>
    )
}

export default Nav
