import React,{useEffect} from 'react';
import './Audio.scss';
import a1 from '../../assets/img/3.jpg';
import a2 from '../../assets/img/10.jpg';
import a3 from '../../assets/img/23.jpg';
import a4 from '../../assets/img/12.jpg';


import i1 from '../../assets/img/i1.jpg';
import i2 from '../../assets/img/i2.jpg';
import i3 from '../../assets/img/i3.jpg';
import i4 from '../../assets/img/i4.jpg';

import h2 from '../../assets/img/h2.png';



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

const audio = [
    a1,a2,a3,a4
   
  ];

  const ins = [
    i1,i2,i3,i4
   
  ];



function AudioGears() {
    useEffect(()=>{
        document.body.style.backgroundImage = `url('${i1}')`;  
      },[]);
      const styleobj={
        fontSize:30,
        color:"white",

      }
    return (
        // <section className="page-section" id="services"  >
     <div className="container pt-5">        
          <div className="row align-items-start mt-5"> 
                    <div className="col mr-3 ">    
                            <p style={styleobj}>Instruments</p>                       
                            <ul>
                                <div className="mt-5">
                                 <article className="leaderboard__profile">
                                <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                               </div>
                               <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                              </div>
                            </ul>
                    </div> 
      
                    <div className="col ml-3">  
                           <p style={styleobj}>Audio Gears</p>                            
                            <ul>
                                <div className="mb-3 mt-5">
                                 <article className="leaderboard__profile">
                                <img src={h2} alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://randomuser.me/api/portraits/men/97.jpg" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                               </div>
                               <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/GuitareClassique5.png" alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Dustin Moskovitz</span>
                                </article>
                              </div>
                            </ul>
                    </div>
                    <div className="col ml-3">
                          
                         <div className="row mb-5">
                              
                                    <CCard>       
                                        <CCarousel animate autoSlide={3000}>
                                        <CCarouselIndicators/>
                                        <CCarouselInner>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={audio[0]} alt="slide 1"/>                                           
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={audio[1]} alt="slide 2"/>
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={audio[2]} alt="slide 3"/>                                          
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={audio[3]} alt="slide 3"/>                                          
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={audio[4]} alt="slide 3"/>                                          
                                            </CCarouselItem>
                                        </CCarouselInner>
                                        <CCarouselControl direction="prev"/>
                                        <CCarouselControl direction="next"/>
                                        </CCarousel>
                                    
                                    </CCard>
                        </div>
                        <div className="row mt-5">
                                     <CCard>       
                                        <CCarousel animate autoSlide={3000}>
                                        <CCarouselIndicators/>
                                        <CCarouselInner>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={ins[0]} alt="slide 1"/>                                           
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={ins[1]} alt="slide 2"/>
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={ins[2]} alt="slide 3"/>                                          
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={ins[3]} alt="slide 3"/>                                          
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={ins[4]} alt="slide 3"/>                                          
                                            </CCarouselItem>
                                        </CCarouselInner>
                                        <CCarouselControl direction="prev"/>
                                        <CCarouselControl direction="next"/>
                                        </CCarousel>
                                    
                                    </CCard>
                                    
                                
              
                        </div>  
                                
                    </div>

              </div>
         
          </div>
          // </section>
        
    )
}

export default AudioGears
