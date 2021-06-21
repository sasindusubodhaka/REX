import React,{useState} from 'react';
import {MenuItems} from './MenuItems';
import {Link} from 'react-router-dom';
import './Navbar.css';






function Navbar() {
    const[clicked,setClicked]=useState(false);  
    return (

             <nav className="NavbarItems" >
                <div className="container">
                    <div className="navbarResponsive" >
                            <ul className={clicked?'nav-menu-active':'nav-menu'}>
                                {MenuItems.map((item,index)=>{ 
                                    return(
                                        <li key={index} className="nav-item">
                                            <Link  className={item.cName} to={item.link} >
                                                {item.title}
                                            </Link>
                                           
                                        </li>
                                    )
                                })}
                    
                            </ul>  
                    </div>   
                </div>       
            </nav>
  
     
      

            
        
    )
}

export default Navbar
