import React,{useEffect} from 'react';
import {portfolioLinks} from './portfolioLinks'
import Youtube from 'react-youtube'
import img from '../../assets/img/20.jpg';
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
    

    <header className="masthead"  >
    
      <section className="page-section-portfolio" id="services"  >      
       
        <div className="row align-items-start"> 
        <div className="col ml-5"> 
            <div className="card">
              <CCard color="danger" className="text-white">
                <CCardHeader>
                  Latest work
                </CCardHeader>
                <CCardBody>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </CCardBody>
              </CCard>
            </div>  
            </div>
            <div className="col">  
            <div className="portfolio-item" >        
                    {
                      portfolioLinks && portfolioLinks.map((port, index) =>                 
                      <div className="tube" > 
                                <Youtube videoId={port.url} />               
                        
                                <div className="portfolio-caption">
                                    <h4>{ port.title }</h4>
                                    <p className="text-muted">{ port.caption }</p>
                                </div>
                        </div>
                        )
                      }    
                </div> 
            </div>
        </div>
            
        </section>
   
      </header>
     
        
    )
}

export default Portfolio
