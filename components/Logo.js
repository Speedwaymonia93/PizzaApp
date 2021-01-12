import {React} from 'react'
import '../styles/logo_styles.css';
/*import logo from '../images/logo.jpg';*/
import logo from '../images/pizzeria.jpg';
import pizza from '../images/pizza.svg';
import spaghetti from '../images/spaghetti.svg';
import {motion} from 'framer-motion';

const logoVariants1 = {
    animateFrom:{
        x:-250, opacity:0
    },
    animateTo:{
        x:0, opacity:1,
        transition:{
            delay:1, duration:2
        }
    }
}

const h2Variants = {
    animateFrom:{
        y:-250
    },
    animateTo:{
        y: 2,
        transition:{delay:0.2, type:'spring', stifness: 120}
    }
}
const logoVariants2 = {
    animateFrom:{
        opacity:0, right:-200
    },
    animateTo:{
        opacity:1, right:0,
        transition:{
            delay:1, duration:2
        }
    }
}
const imageVariants = {
    animateFrom:{
        opacity:0, scale:0.1
    },
    animateTo:{ 
        opacity:1, scale:1,
        transition:{delay:1.2, duration:2}
    }
}
function Logo(){
    return(
        <>
        
            <header>
                <div className="logo-container">
                    <div className="log-container">                     
                        <motion.img  variants={logoVariants1} initial="animateFrom" animate="animateTo" src={pizza} className="svg-style"/>
                        <motion.h2 variants={h2Variants} initial="animateFrom" animate="animateTo"
                        className="style-h2">Pizzeria &amp; Ristorante Luigi</motion.h2>
                        <motion.img variants={logoVariants2} initial="animateFrom" animate="animateTo" src={spaghetti} className="svg-style"/>
                    </div>
                    <motion.img variants={imageVariants} initial="animateFrom" animate="animateTo" src={logo} alt="Pizzeria" className="logo-style"/>
                </div>
            </header>
      
        </>
    )
}

export default Logo