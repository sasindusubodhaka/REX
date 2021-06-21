import React,{useEffect} from 'react';
import '../../assets/css/style.css';
import bg from '../../assets/img/4.jpg'
import { SocialIcon } from 'react-social-icons';
function Home() {
    useEffect(()=>{
        document.body.style.backgroundImage = `url('${bg}')`;  
    },[]);
    return (
        
        <header className="masthead">
                <div className="container">
                    <div className="intro-text">
                        <div className="intro-lead-in">WELCOME TO RECORDEX</div>
                        <div className="intro-heading ">Find The Perfect Recording Experience</div>
                        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
                    </div>
                    <div className="social"> 

                                <h2>Our Social media</h2>
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
        </header>
             
            
       
    )
}

export default Home;
