import React,{useEffect} from 'react';
import './Audio.scss';
import NavBar from '../../NavBar/Header/Navbar'
import Footer from '../../NavBar/Footer/Footer'

import g1 from '../../assets/img/g5.jpg'; 
import g2 from '../../assets/img/25.jpg';
import g3 from '../../assets/img/g3.jpg';

import m1 from '../../assets/img/home.jpg'; 
import m2 from '../../assets/img/port.jpg';
import m3 from '../../assets/img/13.jpg';

import k1 from '../../assets/img/10.jpg'; 
import k2 from '../../assets/img/k2.jpg';
import k3 from '../../assets/img/i1.jpg';


import back from '../../assets/img/i3.jpg';
import h2 from '../../assets/img/head.png'
import inst from '../../assets/img/inst.png'


import {
  CCard,
  CCarousel,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
} from '@coreui/react'

const mic = [
    m1,m2,m3
   
  ];
const key =[
    k1,k2,k3
]
const guitar =[
  g1,g2,g3
]
function AudioGears() {
    useEffect(()=>{
        document.body.style.backgroundImage = `url('${back}')`;  
      },[]);
      const styleobj={
        fontSize:"40px",
        color:"white",
        fontFamily:"Segoe UI"

      }
    return (
      <React.Fragment>
      <NavBar/>
      <div id="equipments">     
          <div className="row mt-5" id="audio"> 
                    <div className="col ml-5 " style={{alignItems:'left'}} id="audio-gears">    
                            <p style={styleobj}>Audio Gears</p>                       
                            <ul>
                                <div className="mt-5">
                                 <article className="leaderboard__profile">
                                <img src={h2} alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">MXL V67G Microphone</span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src={h2} class="leaderboard__picture" alt="Dustin Moskovitz"/>
                                <span className="leaderboard__name">Stellar X2 Microphone</span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src={h2} alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Fender Frontman Amp</span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src={h2} alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Donner Mini Amp</span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src={h2} alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">FLAMMA FX100 Pedal</span>
                                </article>
                               </div>
                               <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src={h2} alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Mackie-FX Mixer </span>
                                </article>
                              </div>
                              <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src={h2} alt="Dustin Moskovitz" class="leaderboard__picture"/>
                                <span className="leaderboard__name">Presonus 24.4 Mixer </span>
                                </article>
                              </div>
                            </ul>
                    </div> 
                    <div className="col  mt-4" id="slide">
                            <div className="row">
                                      <CCard >       
                                        <CCarousel animate autoSlide={3000}>
                                        <CCarouselIndicators/>
                                        <CCarouselInner>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={mic[0]} alt="slide 1"/>                                           
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={mic[1]} alt="slide 2"/>
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={mic[2]} alt="slide 3"/>                                          
                                            </CCarouselItem>                          
                                          

                                        </CCarouselInner>
                                        <CCarouselControl direction="prev"/>
                                        <CCarouselControl direction="next"/>
                                        </CCarousel>
                                    
                                    </CCard>
                            </div>   
                            <div className="row mt-4 ">
                                      <CCard >       
                                        <CCarousel animate autoSlide={3000}>
                                        <CCarouselIndicators/>
                                        <CCarouselInner>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={key[0]} alt="slide 1"/>                                           
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={key[1]} alt="slide 2"/>
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={key[2]} alt="slide 3"/>                                          
                                            </CCarouselItem>                                   
                                          

                                        </CCarouselInner>
                                        <CCarouselControl direction="prev"/>
                                        <CCarouselControl direction="next"/>
                                        </CCarousel>
                                    
                                    </CCard>
                            </div>                   
     

                    </div>
                    <div className="col  mt-4 " id="slide1" >                             
                         
                          <div className="row ml-3 mb-3">
                                      <CCard >       
                                        <CCarousel animate autoSlide={3000}>
                                        <CCarouselIndicators/>
                                        <CCarouselInner>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={guitar[0]} alt="slide 1"/>                                           
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={guitar[1]} alt="slide 2"/>
                                            </CCarouselItem>
                                            <CCarouselItem>
                                            <img className="d-block w-100" src={guitar[2]} alt="slide 3"/>                                          
                                            </CCarouselItem>                                       

                                        </CCarouselInner>
                                        <CCarouselControl direction="prev"/>
                                        <CCarouselControl direction="next"/>
                                        </CCarousel>
                                    
                                    </CCard>
                            </div>   
                         
           
                      
                     </div>
      
                    <div className="col mr-5" id="instrument">  
                           <p style={styleobj}>Instruments</p>                            
                            <ul>
                                <div className="mb-3 mt-5">
                                 <article className="leaderboard__profile">
                                <img src={inst} alt="Dustin Moskovitz" class="leaderboard__picture1"/>
                                <span className="leaderboard__name">Ibanez GRGM </span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src={inst} alt="Dustin Moskovitz" class="leaderboard__picture1"/>
                                <span className="leaderboard__name">Fender Bullet </span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src={inst} alt="Dustin Moskovitz" class="leaderboard__picture1"/>
                                <span className="leaderboard__name">Bass Glarry GP</span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src={inst} alt="Dustin Moskovitz" class="leaderboard__picture1"/>
                                <span className="leaderboard__name">Donner DEK-610 Piano</span>
                                </article>
                                </div>
                                <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src={inst} alt="Dustin Moskovitz" class="leaderboard__picture1"/>
                                <span className="leaderboard__name">RockJam 54-key keyboard</span>
                                </article>
                               </div>
                               <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src={inst} alt="Dustin Moskovitz" class="leaderboard__picture1"/>
                                <span className="leaderboard__name">Donner DED-100 Drum Set</span>
                                </article>
                              </div>
                              <div className="mb-3">
                                 <article className="leaderboard__profile">
                                <img src={inst} alt="Dustin Moskovitz" class="leaderboard__picture1"/>
                                <span className="leaderboard__name">Mendini Violin</span>
                                </article>
                              </div>
                            </ul>
                    </div>
 

              </div>
              </div>  
              <Footer/>
              </React.Fragment>
    )
}

export default AudioGears
