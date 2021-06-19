import React from 'react';
import {portfolioLinks} from './portfolioLinks'
import Youtube from 'react-youtube'
import img from '../../assets/img/2.jpg';
import { white } from 'jest-matcher-utils/node_modules/chalk';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow 
} from '@coreui/react'
function Portfolio() {
    return (
    

    <header className="masthead"  >
    
      <section className="page-section-portfolio" id="services"  >      
       
        <div className="row align-items-start"> 
            <div className="col">  
            <h3 style={{color:white}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quisquam ducimus dicta aliquam voluptas vel 
              dolorem ullam soluta adipisci, blanditiis quaerat sapiente ipsam asperiores! Illum consequatur aperiam in ipsam animi?
            </h3>
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
