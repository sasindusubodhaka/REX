import React,{useEffect} from 'react';
import '../../assets/css/style.css';
import bg from '../../assets/img/home.jpg'
import { SocialIcon } from 'react-social-icons';
import { Link } from 'react-router-dom';
function Home() {
    
    useEffect(()=>{
        document.body.style.backgroundImage = `url('${bg}')  `;  
        
    },[]);
    return (
        <div className="container" id="homes" >
          
                <header className="masthead" >    
                    <div className="row  mb-3">             
                                <div className="intro-text">
                                    
                                            <div className="intro-lead-in">WELCOME TO RECORDEX</div>
                                            <div className="intro-heading ">Have the Best Recording Experience</div>
                                            <a className="btn btn-primary btn-m text-uppercase" href="#portfolio"><Link to="./service" style={{color:"white"}}>Tell Me More</Link></a>   
                                                                                        
                                            <article className="mt-5  " >   
                                                    <div className="mr-4" style={{display:"inline-block"}}>                                                 
                                                    <SocialIcon url="https://twitter.com/jaketrent" />                                                   
                                                    </div>     
                                                    <div className="mr-4" style={{display:"inline-block"}}>                                                     
                                                    <SocialIcon url="https://youtube.com/jaketrent"  />                                                 
                                                    </div>     
                                                    <div className="mr-4" style={{display:"inline-block"}}>                                  
                                                    <SocialIcon url="https://www.facebook.com/profile.php?id=100008945019054" />    
                                                    </div> 
                                                    <div className="mr-4" style={{display:"inline-block"}}>                                                                                 
                                                    <SocialIcon url="https://www.linkedin.com/in/sasindu-subodhaka-111419203/" />  
                                                    </div> 
                                            </article>                          
                                               
                                         
                                 
                                </div>
                                
                    </div>
               
                
                </header>                       
        
                            
  
             </div>
          
           
         
             
      
             
            
       
    )
}

export default Home;
