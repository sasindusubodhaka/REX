import React,{useEffect} from 'react';
import {portfolioLinks} from './portfolioLinks'
import Youtube from 'react-youtube'
import img from '../../assets/img/audio2.jpg';
import NavBar from '../../NavBar/Header/Navbar'
import Footer from '../../NavBar/Footer/Footer'

import {

  CCard,
  CCardBody,
  CCardHeader,

} from  '@coreui/react'

function Portfolio() {
  useEffect(()=>{
    document.body.style.backgroundImage = `url('${img}')`;  
  },[]);
    return (    
      <React.Fragment>
      <NavBar/>
         
            <div className="container" id="portcontainer"> 
                 <p style={{color:"white",fontFamily:"Segoe UI",fontSize:"40px"}}>OUR PORTFOLIO</p>
                <div className="portfolio-item ml-5" id="port-item" >        
                        {
                          portfolioLinks && portfolioLinks.map((port, index) =>   
                  
                          <div className="row" key={index} id="port">                          
                                      <div className="col-6 mt-4" id="port_col">
                                        <div className="card h-100">
                                        <CCard color={port.color} className="text-white h-100" >
                                          <CCardHeader>
                                            {port.title}  
                                          </CCardHeader>
                                          <CCardBody align="left">
                                              Release date:{port.date} <br></br>
                                              {port.description}
                                          </CCardBody>
                                        </CCard>
                                      </div> 
                                    </div>
                                    <div className="col-6" id="port_col">                               '"
                                        <Youtube videoId={port.url} id="you-tube" />       
                                
                                    
                                    </div>
                              
                            </div>
                            )
                          }    
                    </div> 
                </div>            

                <Footer/>
              </React.Fragment>
    
     
        
    )
}

export default Portfolio
