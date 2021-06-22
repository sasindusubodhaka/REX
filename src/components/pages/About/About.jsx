import React, { useState, useEffect } from 'react';
import './About.css'
import mix from '../../assets/img/3.jpg';
import com from '../../assets/img/com.jpg';
import rec from '../../assets/img/rec.jpg';

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
  CLink,
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem

} from '@coreui/react'

import {

} from '@coreui/react'

const slides = [
  mix,
  com,
  rec
]

const About = () => {
  // const [activeIndex] = useState(1)
  useEffect(() => {
    document.body.style.backgroundImage = `url('${com}')`;
  }, []);
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  return (
  
    <div >
      <div className="container">
              <div className="row mt-5 mb-5">
                <div className="col">
                  <div className="card">
                    <CCard color="dark" className="text-white">
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
                <div className="col-6">


                  <CCard>
                    <CCarousel animate autoSlide={3000}>
                      <CCarouselIndicators />
                      <CCarouselInner>
                        <CCarouselItem>
                          <img className="d-block w-100" src={slides[0]} alt="slide 1" />
                          <CCarouselCaption><h3>Slide 1</h3><p>Slide 1</p></CCarouselCaption>
                        </CCarouselItem>
                        <CCarouselItem>
                          <img className="d-block w-100" src={slides[1]} alt="slide 2" />
                          <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption>
                        </CCarouselItem>
                        <CCarouselItem>
                          <img className="d-block w-100" src={slides[2]} alt="slide 3" />
                          <CCarouselCaption><h3>Slide 3</h3><p>Slide 3</p></CCarouselCaption>
                        </CCarouselItem>
                      </CCarouselInner>
                      <CCarouselControl direction="prev" />
                      <CCarouselControl direction="next" />
                    </CCarousel>

                  </CCard>

                </div>

              </div>

        </div>
        <section className="page-section " style={{backgroundColor:"white"}} >
                  <div className="row ml-5 mr-5">
                      <div className="col-5">
                              <h1 class="title font-weight-light  mt-2">Contact Us</h1>
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
                      <div className="col-7">
                         
                              <iframe src="https://maps.google.com/maps?q=colombo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                width="100%" height="538" allowfullscreen data-aos="fade-left" data-aos-duration="3000"></iframe> 
                                            
                    </div>
                    </div>
               </section>   
    </div>
        )
}

        export default About
