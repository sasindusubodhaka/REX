import React from 'react';
import {portfolioLinks} from './portfolioLinks'
import Youtube from 'react-youtube'
function Portfolio() {
    return (
        
     <header className="masthead">
        <section className="page-section" id="services">
          <div className="row ml-3">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>  
          <div className="portfolio-item">        
                {
                    portfolioLinks && portfolioLinks.map((port, index) =>                 
                        <div className="col-ml-6"> 
                            <Youtube videoId={port.url}/>               
                    
                            <div className="portfolio-caption">
                                <h4>{ port.title }</h4>
                                <p className="text-muted">{ port.caption }</p>
                            </div>
                        </div>
                    )
                }    
            </div> 
        </section>
   
      </header>
        
    )
}

export default Portfolio
