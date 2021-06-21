import React,{useEffect} from 'react';
import mix from '../../assets/img/3.jpg';
import com from '../../assets/img/com.jpg';
import rec from '../../assets/img/4.jpg';


function Service() {
  useEffect(()=>{
    document.body.style.backgroundImage = `url('${rec}')`;  
  },[]);
    return (
   

          <header className="masthead"  >
          <section className="page-section" id="services" >
              <div className="container"  >
                <div className="mb-3">
                  <div className="col-lg-12 mb-3">
                    <h1 className="section-heading text-uppercase">Services</h1>
                    <h3 className="section-subheading text-muted"></h3>
                  </div>
                </div>
                <div className="row text-center">
                  <div className="col-md-4">
                    <div className="service">
                    <img src={mix} />
                    </div>
                    <h4 className="service-heading">MIXING & MASTERING </h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                  </div>
                  <div className="col-md-4">
                  <div className="service">
                    <img src={com} />
                    </div>
                    <h4 className="service-heading">MUSIC COMPOSITION</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                  </div>
                  <div className="col-md-4">
                  <div className="service">
                    <img src={rec} />
                    </div>
                    <h4 className="service-heading">MUSIC RECORDING</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                  </div>
            
                </div>
              </div>
              </section>
            </header>
    
    )
}

export default Service
