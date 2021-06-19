import React from 'react';
import './Audio.scss';
import mix from '../../assets/img/3.jpg';
import com from '../../assets/img/com.jpg';
import rec from '../../assets/img/rec.jpg';
import './Audio.css'

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

const slides = [
    mix,
    com,
    rec
  ]


function AudioGears() {
    return (
        <section className="page-section-audio" id="services"  >
          <div className="container">             
   
              <div className="row align-items-start"> 
                    <div className="col">                           
                            <ul>
                                <li className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                                </li>
                                <li className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                                </li>
                                <li className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                                </li>
                                <li className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                                </li>
                                <li className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                                </li>
                                <li className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                                </li>
                            </ul>
                    </div>
                    <div className="col-6">
                          
                         
                                {/* <CCol xs="6" xl="12"> */}
                                    <CCard>       
                                        <CCarousel animate autoSlide={3000}>
                                        <CCarouselIndicators/>
                                        <CCarouselInner>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={slides[1]} alt="slide 1"/>                                           
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={slides[1]} alt="slide 2"/>
                                           
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={slides[1]} alt="slide 3"/>                                          
                                            </CCarouselItem>
                                        </CCarouselInner>
                                        <CCarouselControl direction="prev"/>
                                        <CCarouselControl direction="next"/>
                                        </CCarousel>
                                    
                                    </CCard>
                                
              
                            
                                
                    </div>
              </div>
         
          </div>
          </section>
        
    )
}

export default AudioGears
