import React from 'react';
import '../styles/home_styles.css';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import Header from '../components/Header';
import Loader from '../components/Loader';
const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  },

}

const homeContainerVariants = {
  animateFrom:{
    bottom:-400,
    opacity:0
  },
  animateTo:{
    bottom:0,
    opacity:1,
    transition:{duration:0.5, delay:2.6}
  },
  exit:{
    x:'-100vw',
    transition:{ease:'easeInOut'}
  }
}
const headerContainerVariants = {
  exit:{
    x:'-100vw',
    transition:{ease:'easeInOut'}
  }
}
function Home (){
    return (
      <>
        <motion.div className="header-container" variants={headerContainerVariants} exit="exit">
          <Header />
        </motion.div>
      <motion.div variants={homeContainerVariants} initial="animateFrom" animate="animateTo" exit="exit"
      className="home-container">
                <div className="button-div">
                    <Link to="/base">
                        <motion.button variants={buttonVariants}
                        whileHover="hover"
                        className="home-button-style">Order your favourite pizza</motion.button>
                    </Link>
                </div>
                <Loader />
    </motion.div>
      </>
    )
  }

export default Home