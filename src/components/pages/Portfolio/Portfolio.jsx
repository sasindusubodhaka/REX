import React,{useEffect} from 'react';
import {portfolioLinks} from './portfolioLinks'
import Youtube from 'react-youtube'
import imsg from '../../assets/img/20.jpg';
import img from '../../assets/img/audio2.jpg';
import { white } from 'jest-matcher-utils/node_modules/chalk';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CLink
} from  '@coreui/react'

function Portfolio() {
  useEffect(()=>{
    document.body.style.backgroundImage = `url('${img}')`;  
  },[]);
    return (    
         
            <div className="container"> 
                 <p style={{color:"white",fontFamily:"Segoe UI",fontSize:"40px"}}>OUR PORTFOLIO</p>
            <div className="portfolio-item ml-5" >        
                    {
                      portfolioLinks && portfolioLinks.map((port, index) =>   
               
                      <div className="row" >                          
                                  <div className="col-6 mt-4">
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
                                <div className="col-6">                               '"
                                    <Youtube videoId={port.url} />       
                            
                                 
                                </div>
                          
                        </div>
                        )
                      }    
                </div> 
                </div>            

   
    
     
        
    )
}

export default Portfolio
