import React,{useEffect} from 'react';
import '../../assets/css/style.css';
import bg from '../../assets/img/home.jpg'
import { SocialIcon } from 'react-social-icons';
function Home() {
    useEffect(()=>{
        document.body.style.backgroundImage = `url('${bg}')`;  
    },[]);
    return (
        <div className="container">
          
                <header className="masthead">    
                    <div className="row  mb-3">             
                                <div className="intro-text">
                                    
                                            <div className="intro-lead-in">WELCOME TO RECORDEX</div>
                                            <div className="intro-heading ">Have the Best Recording Experience</div>
                                            <a className="btn btn-primary btn-m text-uppercase" href="#portfolio">Tell Me More</a>   
                                                          <div className="center mt-5"  style={{float: "none",margin: "35rem",display:"flex"}}>                                 
                                                                <div className="ml-3 " >    
                                                                <article className="leaderboard__profile">                             
                                                                <SocialIcon url="https://twitter.com/jaketrent" /> 
                                                                </article>                  
                                                                </div>

                                                                <div className="ml-3">  
                                                                <article className="leaderboard__profile ">                                 
                                                                <SocialIcon url="https://youtube.com/jaketrent"  /> 
                                                                </article>                          
                                                                </div>

                                                                <div className="ml-3" >         
                                                                <article className="leaderboard__profile">                          
                                                                <SocialIcon url="https://www.facebook.com/profile.php?id=100008945019054" />  
                                                                </article>                        
                                                                </div>

                                                                <div className="ml-3" >  
                                                                <article className="leaderboard__profile">                                
                                                                <SocialIcon url="https://www.linkedin.com/in/sasindu-subodhaka-111419203/" />  
                                                                </article>                         
                                                                </div>                                                          
                                                        </div> 
                                           
                
                                                
                                                
                                               
                                         
                                 
                                </div>
                                
                    </div>
               
                
                </header>                       
        
                            
  
             </div>
          
           
         
             
      
             
            
       
    )
}

export default Home;
