import React,{useEffect} from 'react';
import home from '../../assets/img/com.jpg';
import NavBar from '../../NavBar/Header/Navbar'
import Footer from '../../NavBar/Footer/Footer'


import {

  CCard,
  CCardBody,
  CCardHeader,


} from '@coreui/react'

function Service() {
  useEffect(()=>{
    document.body.style.backgroundImage = `url('${home}')`;  
  },[]);
    return (

        <React.Fragment>
          <NavBar/>
             <div className="container"  id="services">
                 <p style={{color:"white",fontFamily:"Segoe UI",fontSize:"40px"}} id="service_tite">OUR SERVICES</p>
                  <div className="row" id="service">
                        <div className="col-6 ">     
                                <div className="card mb-2 h-25">                           
                                      <CCard color="primary" className="text-white h-100" >
                                          <CCardHeader>
                                              MIXING
                                          </CCardHeader>
                                      <CCardBody>                                       
                                          The mixing takes place in two control rooms, 
                                          equipped for the most comfortable listening experience. 
                                          The variety of analog and digital instrumentation allows us to obtain extremely fine products.
                                          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis n ullamcorper suscipitullamcorper suscipit
                                          Ut wisi enim ad minim veniam, quis nostrud exerci tatio
                                       
                                      </CCardBody>
                                    </CCard>  
                                </div>      
                                <div className="card mb-2 h-25">                                                        
                                      <CCard color="dark" className="text-white h-100">
                                          <CCardHeader>
                                          MASTERING
                                          </CCardHeader>
                                      <CCardBody>
                                       Mastering a disk means assuring the highest audio quality of the mixed tracks enhancing dynamics, volumes, stereophony and frequency contents.
                                       During the mastering phase the sound obtained during the mixing is further characterized and customized to assure a perfect reproduction on any audio support and system.
                                      </CCardBody>
                                    </CCard>
                              </div>    
                              <div className="card mb-2 h-25">                                                        
                                      <CCard color="primary" className="text-white h-100">
                                          <CCardHeader>
                                          AUDIO DUBBING & VOICEOVER
                                          </CCardHeader>
                                      <CCardBody>
                                     Contact us today for more info on live recordings in natural and artificial environments for the sonorization of short films, documentaries, films, commercials and video clips. Request an estimate for our Synchronization and Post-Production services. We work with pre-existing audio material.
                                      </CCardBody>
                                    </CCard>
                              </div> 
                              <div className="card mb-2 h-25">                                                        
                                      <CCard color="dark" className="text-white h-100">
                                          <CCardHeader>
                                          OTHER
                                          </CCardHeader>
                                      <CCardBody>
                                          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                          laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                          ullamcorper suscipit lobortis n ullamcorper suscipitullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                      </CCardBody>
                                    </CCard>
                              </div> 
                              <div className="card mb-2 h-25"> 
                              <CCard color="primary" className="text-white h-100">
                                  <CCardHeader>
                                    OTHER
                                  </CCardHeader>
                              <CCardBody>
                                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                  ullamcorper suscipit lobortis n ullamcorper suscipitullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                              </CCardBody>
                            </CCard>
                            </div>  
                        </div>
                      <div className="col-6 ">
                          <div className="card mb-2 h-25"> 
                              <CCard color="primary" className="text-white h-100">
                                  <CCardHeader>
                                  RECORDING
                                  </CCardHeader>
                              <CCardBody>
                               We work with different genres, rock, pop, punk, dance, electro, folk, jazz, r&b, choral, orchestral.
                              When recording at our facilities it's possible to obtain a vast variety of sounds thanks to two recording rooms with different sound characteristics and a wide selection of instruments at the musicians' disposal. 
                              Our objective is to work with you towards the obtainment of your ideal sound.
                              </CCardBody>
                            
                            </CCard>           
                            </div> 
                            <div className="card mb-2 h-25">                                                        
                                      <CCard color="dark" className="text-white h-100">
                                          <CCardHeader>
                                          MOBILE STUDIO RECORDING
                                          </CCardHeader>
                                      <CCardBody>
                                     Our cutting-edge equipment assures freedom of movement and creative solutions without compromising the quality of the classic studio recording. The logistic advantages are unquestionable. Mobility allows us to use the sound characteristics of theatres, cinemas, auditoriums, concert and conference halls, churches and open spaces.
                          
                                      </CCardBody>
                                    </CCard>
                              </div> 
                              <div className="card mb-2 h-25">                                                        
                                      <CCard color="primary" className="text-white h-100">
                                          <CCardHeader>
                                          LIVE RECORDING
                                          </CCardHeader>
                                      <CCardBody>
                                      At SUDESTUDIO we offer Live Recording. Our two rooms (LIVE ROOM and STUDIO B) and various mobile boots are designed to make the artists feel comfortable during their live performance assuring at the same time the highest quality of sound.
                                      We work with pre-existing audio material.
                                      </CCardBody>
                                    </CCard>
                              </div> 
                            <div className="card mb-2 h-25"> 
                              <CCard color="dark" className="text-white h-100">
                                  <CCardHeader>
                                    OTHER
                                  </CCardHeader>
                              <CCardBody>
                                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                  ullamcorper suscipit lobortis n ullamcorper suscipitullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                              </CCardBody>
                            </CCard>
                            </div> 
                            <div className="card mb-2 h-25"> 
                              <CCard color="primary" className="text-white h-100">
                                  <CCardHeader>
                                    OTHER
                                  </CCardHeader>
                              <CCardBody>
                                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                                  laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                  ullamcorper suscipit lobortis n ullamcorper suscipitullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                              </CCardBody>
                            </CCard>
                            </div> 

                      </div>
                      </div>
              </div>
              <Footer/>
              </React.Fragment>
      
    
    )
}

export default Service
