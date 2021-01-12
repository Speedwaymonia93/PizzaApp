import React from 'react';
import '../styles/navigation_styles.css';
import home from '../images/house.svg';
import contacts from '../images/contacts.svg';
import menu from '../images/menu.svg';
import gallery from '../images/gallery.svg';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const navigationContainerVariants = {
    animateFrom :{
        bottom:-300
    },
    animateTo:{
        bottom:0,
        transition:{delay:2.5}
    }
}
const navigationElementVariants = {
    hover:{
        backgroundColor:"#f7dbb4",
        borderRadius:"10px",
        transition: {
            duration: 0.5,
          }
    }
}
function Navigation(){
    return(
        <>   
        <nav>
        <motion.div variants={navigationContainerVariants} initial="animateFrom" animate="animateTo" className="navigation-component">
            <ul className="nav-style">
                <Link to="/" style={{ textDecoration: 'none'}}>
                    <motion.li variants={navigationElementVariants} whileHover="hover" className="nav-element-style"><img className="icon-nav-style" src={home} alt="Home" />Home page</motion.li>
                 </Link>
                <Link to="/menu" style={{ textDecoration: 'none'}}>
                    <motion.li variants={navigationElementVariants} whileHover="hover" className="nav-element-style"><img className="icon-nav-style" src={menu} alt="Menu"/>Menu</motion.li>
                </Link>
                <Link to="/gallery" style={{ textDecoration: 'none'}}>
                    <motion.li variants={navigationElementVariants} whileHover="hover" className="nav-element-style"><img className="icon-nav-style" src={gallery} alt="Gallery"/>Gallery</motion.li>
                </Link>
                <Link to="/contact" style={{ textDecoration: 'none'}}>
                <motion.li variants={navigationElementVariants} whileHover="hover" className="nav-element-style"><img className="icon-nav-style" src={contacts} alt="Contact"/>Location &amp; Contact</motion.li>
                </Link>
            </ul>
        </motion.div> 
        </nav>
        </>
    )
}

export default Navigation