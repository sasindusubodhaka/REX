import React, { useState } from 'react'
import mix from '../../assets/img/3.jpg';
import com from '../../assets/img/com.jpg';
import rec from '../../assets/img/rec.jpg';

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

const About = () => {
  // const [activeIndex] = useState(1)

  return (
    <CRow> 
      <CCol xs="12" xl="6">
        <CCard>       
            <CCarousel animate autoSlide={3000}>
              <CCarouselIndicators/>
              <CCarouselInner>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[0]} alt="slide 1"/>
                  <CCarouselCaption><h3>Slide 1</h3><p>Slide 1</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[1]} alt="slide 2"/>
                  <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[2]} alt="slide 3"/>
                  <CCarouselCaption><h3>Slide 3</h3><p>Slide 3</p></CCarouselCaption>
                </CCarouselItem>
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>
        
        </CCard>
      </CCol>
      <CCol xs="12" xl="6">
        <CCard>       
            <CCarousel animate autoSlide={3000}>
              <CCarouselIndicators/>
              <CCarouselInner>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[0]} alt="slide 1"/>
                  <CCarouselCaption><h3>Slide 1</h3><p>Slide 1</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[1]} alt="slide 2"/>
                  <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption>
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={slides[2]} alt="slide 3"/>
                  <CCarouselCaption><h3>Slide 3</h3><p>Slide 3</p></CCarouselCaption>
                </CCarouselItem>
              </CCarouselInner>
              <CCarouselControl direction="prev"/>
              <CCarouselControl direction="next"/>
            </CCarousel>         
        </CCard>
      </CCol>
    </CRow>
  )
}

export default About
