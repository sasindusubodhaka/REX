import React,{useEffect} from 'react';
import '../../assets/css/style.css';
import bg from '../../assets/img/4.jpg'
import { SocialIcon } from 'react-social-icons';
function Home() {
    useEffect(()=>{
        document.body.style.backgroundImage = `url('${bg}')`;  
    },[]);
    return (
        <div className="container">
          
            <header className="masthead">    
                <div className="row mb-3">             
                            <div className="intro-text">
                                
                                        <div className="intro-lead-in">WELCOME TO RECORDEX</div>
                                        <div className="intro-heading ">Find The Perfect Recording Experience</div>
                                        <a className="btn btn-primary btn-m text-uppercase " href="#services">Tell Me More</a>
                                        <div className="col align-self-center mt-5">
                                    <div className="col mr-3">
                                    
                                        <div className="social mb-3 "> 
                                                    
                                                    <div className="ml-3">    
                                                    <article className="leaderboard__profile">                             
                                                    <SocialIcon url="https://twitter.com/jaketrent" /> 
                                                    </article>                  
                                                    </div>

                                                    <div className="ml-3">  
                                                    <article className="leaderboard__profile">                                 
                                                    <SocialIcon url="https://youtube.com/jaketrent" /> 
                                                    </article>                          
                                                    </div>

                                                    <div className="ml-3">         
                                                    <article className="leaderboard__profile">                          
                                                    <SocialIcon url="https://facebook.com/jaketrent" />  
                                                    </article>                        
                                                    </div>

                                                    <div className="ml-3">  
                                                    <article className="leaderboard__profile">                                
                                                    <SocialIcon url="https://linkedin.com/jaketrent" />  
                                                    </article>                         
                                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                </div>
             
             </header>                       
          
                            
  
             </div>
          
           
         
             
      
             
            
       
    )
}

export default Home;
