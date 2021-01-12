import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import '../styles/base_styles.css';
import dataBases from '../data/basesData.json';
//import {faPizzaSlice} from '@fortawesome/fontawesome-svg-core';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const baseContainerVariants={
  animateFrom:{
    opacity: 0,
    x:'100vh'
  },
  animateTo:{
    x:0,
    opacity:1,
    transition:{
      type:'spring', delay:0.5
    }
  },
  exit:{
    x:'-100vw',
    transition:{ease:'easeInOut'}
  }
}
const nextButtonVariants = {
  animateFrom:{
    x:'-100vw'
  },
  animateTo: {
    x:0,
    transition :{
      type:'spring', stiffness:120, delay:0.5
    }
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }
}

const Base = ({ addBase, pizza }) => {
  //const bases = [{'Classic', 'Thin & Crispy', 'Thick Crust', 'Wholemeal','Vegan', 'Gluten Free'];

  return (
    <motion.div className="base-container" 
    variants={baseContainerVariants} initial="animateFrom" animate="animateTo" exit="exit">
      <h3 className="style-h3">Step 1: Choose Your Base</h3>
      <ul>
        {dataBases.map(base => {
          let spanClass = pizza.base === base ? 'active-base' : '';
          return (
            <motion.li className="base-list-element-style" key={base.id} onClick={() => addBase(base)} 
            whileHover={{
              scale:1.3,
              color: '#572723',
              originX:0
            }} transition={{type:'spring', stiffness:300}}
            >
              <span className={spanClass}>{base.name}</span>
              <span className="price-style">{base.price} zł</span>
            </motion.li>
          )
        })}
      </ul>

      
      {pizza.base && (
        <motion.div variants={nextButtonVariants} initial="animateFrom" animate="animateTo" className="next">
          <Link to="/toppings">
            <motion.button variants={nextButtonVariants}
            whileHover="hover"
            className="base-button-style">Next</motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;
