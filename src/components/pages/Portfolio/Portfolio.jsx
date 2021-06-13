import React from 'react';
import {portfolioLinks} from './portfolioLinks'
import Youtube from 'react-youtube'
import img from '../../assets/img/2.jpg';
import { white } from 'jest-matcher-utils/node_modules/chalk';
function Portfolio() {
    return (
    <div className="" style={{backgroundColor:white}}>

     <header className="masthead" >
        {/* <section className="page-section" id="services"  > */}
          <div className="row ml-3">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted"></h3>
            </div>
          </div>  
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
        {/* </section> */}
   
      </header>
    </div>    
        
    )
}

export default Portfolio
