import React, { useEffect } from 'react';
import './About.css'
import mix from '../../assets/img/12.jpg';
import a from '../../assets/img/aa.jpg';
import com1 from '../../assets/img/13.jpg'
import com from '../../assets/img/audio.jpg';
import back from '../../assets/img/audio.jpg';
import { SocialIcon } from 'react-social-icons';
import {FaPhoneAlt,FaEnvelope} from "react-icons/fa";
import {MdPlace} from "react-icons/md";
import {
  CCard,
  CCardBody,
  CCardHeader, 
  CCarousel,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem

} from '@coreui/react'

import {

} from '@coreui/react'

const slides = [
  mix,
  com,back  
  
]

const About = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url('${a}')`;
  }, []);

  return (
  
    <div >
      <div className="container">
              <div className="row mt-5 mb-5">
                <div className="col">
                  <div className="card h-100">
                    <CCard color="dark" className="text-white h-100">
                      <CCardHeader>
                        We are
                      </CCardHeader>
                      <CCardBody>
                        Recordex is a top-quality music recording studio and production company specializing in writing, production, recording, and artist development. We are always
                       ready to work with you.We understand and respect the importance of each individual project and commit ourselves to provide the highest quality recording, 
                       flexibility, and patience to give you the standard of excellence required to compete in today’s market. At Recording Studio, you will experience friendly, comfortable surroundings that provide you, 
                       the artist, with the creative atmosphere essential to producing your best work.
                        
  
                      </CCardBody>
                    </CCard>
                  </div>
                </div>
                <div className="col-6">


                  <CCard>
                    <CCarousel animate autoSlide={3000}>
                      <CCarouselIndicators />
                      <CCarouselInner>
                        <CCarouselItem>
                          <img className="d-block w-100" src={slides[0]} alt="slide 1" />

                        </CCarouselItem>
                        <CCarouselItem>
                          <img className="d-block w-100" src={slides[1]} alt="slide 2" />

                        </CCarouselItem>
                        <CCarouselItem>
                          <img className="d-block w-100" src={slides[2]} alt="slide 3" />

                        </CCarouselItem>
                      </CCarouselInner>
                      <CCarouselControl direction="prev" />
                      <CCarouselControl direction="next" />
                    </CCarousel>

                  </CCard>

                </div>

              </div>

        </div>
        <section className="page-section " style={{backgroundImage:`url(${com1})`,backgroundSize:"cover"}} >
                  <div className="row ml-5 mr-5">
                      <div className="col-5">
                            <div className="row">
                            <h1 class="title font-weight-light text-white mt-2">Contact Us</h1>
                              <form class="mt-3">
                                  <div class="row">
                                      <div class="col-lg-12">
                                        <div class="form-group mt-2">
                                        <input class="form-control text-white" type="text" placeholder="name"/>
                                          </div>
                                      </div>

                                      <div class="col-lg-12">
                                        <div class="form-group mt-2">
                                          <input class="form-control text-white" type="email" placeholder="email address"/>
                                        </div>
                                      </div>

                                      <div class="col-lg-12">
                                          <div class="form-group mt-2">
                                            <textarea class="form-control text-white" rows="3" placeholder="message"></textarea>
                                          </div>
                                      </div>
                                      <div class="col-lg-12 d-flex align-items-center mt-2">
                                          <button type="submit" class="btn bg-white text-inverse px-3 py-2"><span> Submit</span></button>
                                        <span class="ml-auto text-white align-self-center"><i class="icon-phone mr-2"></i></span>
                                      </div> 
                               
                                    </div>
                              </form>
                            </div>
                                                                                               
                       
                            <div className="row mt-5 ml-5">
                                    <div className="" style={{float: "left",margin: "", display:"flex"}}>
                                                            <div className="mb-2 ml-2">    
                                                            <article className="">                             
                                                            <SocialIcon url="https://twitter.com/jaketrent" /> 
                                                            </article>                  
                                                            </div>

                                                            <div className="mb-3 ml-2 ">  
                                                            <article className="">                                 
                                                            <SocialIcon url="https://youtube.com/jaketrent" /> 
                                                            </article>                          
                                                            </div>

                                                            <div className="mb-3 ml-2">         
                                                            <article className="">                          
                                                            <SocialIcon url="https://facebook.com/jaketrent" />  
                                                            </article>                        
                                                            </div>

                                                            <div className="mb-3 ml-2">  
                                                            <article className="">                                
                                                            <SocialIcon url="https://linkedin.com/jaketrent" />  
                                                            </article>                         
                                                            </div>
                                    </div>
                                    <div className="row mt-5" >
                                     
                                          <div className=" mt-5 mb-5" style={{float:"left"}} >
                                                <h5 style={{color:"Blue",fontSize:"15px"}} ><MdPlace color="blue" size="3em"/> Our location :</h5><p style={{color:"white",fontSize:"15px"}}> Down Patna Rd,Colombo 05 </p>
                                                <h5 style={{color:"Blue",fontSize:"15px"}}><FaEnvelope color="blue" size="2em"/> Email : </h5><p style={{color:"white",fontSize:"15px"}}> recordex@gmail.com </p>
                                                <h5 style={{color:"Blue",fontSize:"15px"}}><FaPhoneAlt color="blue" size="2em"/> Phones :</h5><p style={{color:"white",fontSize:"15px"}}> +9479726195</p>
                                            </div>
                                        
                                   </div>

                            </div>
        
                                     
      
                      </div>
                      <div className="col-7 mt-5">
                         
                              <iframe src="https://maps.google.com/maps?q=colombo&t=&z=13&ie=UTF8&iwloc=&output=embed" title="map"
                                width="100%" height="680" allowfullscreen data-aos="fade-left" data-aos-duration="3000"></iframe> 
                                            
                    </div>
                    </div>
               </section>   
    </div>
        )
}

        export default About
