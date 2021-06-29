import React, { useState, useEffect } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';
import './Navbar.css';






function Navbar() {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {

    }, [clicked])

    function updateState() {
        setClicked(false);
    }
    const ABC = (e) => {
        setClicked(e.target.checked);
    }    
    return (
        <div>

        <nav className="NavbarItems">             
                    <input type="checkbox" id="check" checked={clicked} onChange={(e) => ABC(e)} />
                        <label htmlFor="check" className="checkbtn">
                            <i className="fas fa-bars"></i>
                            <label className="logo">RECORDEX</label>
                        </label> 
                        
                        <ul className="nav-menu">
                            {MenuItems.map((item, index) => {
                                return (
                                    
                                    <li key={index}  className="nav-item ">
                                        <Link className="nav-links" to={item.link} onClick={updateState}>
                                            {item.title}
                                        </Link>

                                    </li>
                                    
                                )
                            })}

                        </ul>   
                     
              
        </nav>

        </div>





    )
}

export default Navbar
