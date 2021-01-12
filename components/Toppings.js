import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import dataToppings from '../data/toppingsData.json';
import '../styles/toppings_styles.css';

const toppingsContainerVariants={
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
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity
    }
  }, 
  exit:{
    x:'-100vw',
    transition:{ease:'easeInOut'}
  }
}

const Toppings = ({ addTopping, pizza }) => {
  let toppingsObject = dataToppings;
      
  return (
    <motion.div variants={toppingsContainerVariants} exit="exit" initial="animateFrom" animate="animateTo" className="toppings-container">
      <div className="toppings-h3-container-style">
        <h3 className="style-h3">Step 2: Choose Toppings</h3>
      </div>
      <ul className="toppings-element-container">
        {toppingsObject.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          let liElementClass = pizza.toppings.includes(topping) ? 'active-element' : 'toppings-list-element';
          return (
              <motion.li className={liElementClass} key={topping} onClick={() => addTopping(topping)}>
                <img className="toppings-icon-style" src={topping.icon} alt={topping.name}/>
                <span className={spanClass}>{ topping.name }</span>
              </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={toppingsContainerVariants} className="base-button-style" whileHover="hover">
          Contact Form
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;