import React from 'react';
import '../styles/menu_styles.css';
import menuDetailsData from '../data/pizzaMenuData.json';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
function Menu(){
    return(
        <>
        <div className="menu-container">
            <div className="menu-heading">
               <div className="head-menu">
                <Link to="/"><FontAwesomeIcon icon={faBars}/>
                <h3 className="menu-h3-style">Go back to home page</h3>
                </Link>
                </div>
               
                <h2 className="menu-h2-style">Check out our ready pizza combinations</h2>
                <p className="menu-description-style">You will find here classic and more creative variations of one 
                of the most delitious inventions that a human being has ever made</p>
            </div>
       <div className="menu-details">
       <table>
           <thead>
            <tr className="menu-header">
                <th className="header-element">Number</th>
                <th className="header-element">Name</th>
                <th className="header-element">Ingredients</th>
                <th className="header-element">Price</th>
            </tr>
           </thead>
          <tbody>
          {
            menuDetailsData.map((item)=>{
                return(
                    <>
                       <tr className="menu-items">
                           <td className="item-detail number-style">{item.id}</td>
                            <td className="item-detail name-style">{item.name}</td>
                            <td className="item-detail">{item.ingredients}</td>
                            <td className="item-detail">{item.price} zł</td>
                        </tr> 
                    
                    </>
                )
            })
        }
          </tbody>
       </table>

        
       </div>
        </div>

        
        
        </>
    )
}
export default Menu 