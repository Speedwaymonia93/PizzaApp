import React, {useEffect} from 'react';
import {motion} from 'framer-motion';
import '../styles/order_styles.css';
const orderContainerVariants={
  animateFrom:{
    opacity: 0,
    x:'100vw'
  },
  animateTo:{
    x:0,
    opacity:1,
    transition:{
      type:'spring', mass:0.5, when:"beforeChildren", damping:8, staggerChildren: 0.4
    }
  },
  exit:{
    x:'-100vw',
    transition:{ease:'easeInOut'}
  }
}
const orderSummaryVariants = {
  animateFrom:{
    opacity: 0
  },
  animateTo:{
    opacity: 1
  }
}

const Order = ({ pizza,setShowModal }) => 
{
  // useEffect lifecycle hook, array with only setShowModal as dep 
  useEffect(() => {
    setTimeout(() => setShowModal(true), 5000);
  }, [setShowModal]);

  return (
<motion.div className="order-contianer" variants={orderContainerVariants} exit="exit" initial="animateFrom" animate="animateTo">

      <h2 className="order-style-h2">Thank you for your order :) </h2>
      <motion.p className="order-style-p" variants={orderSummaryVariants}>You ordered a <span className="pizza-base">{pizza.base.name}</span> pizza with:</motion.p>
      <motion.p className="order-style-p" variants={orderSummaryVariants}>Total order: <span className="pizza-base">{
        pizza.base.price + pizza.price.reduce(function(a, b){
          return a + b;
          }, 0)
      }</span> zł</motion.p>  
      <motion.div  className="toppings-container-summary" variants={orderSummaryVariants}>
        {pizza.toppings.map(topping => 
          <div className="toppings-element-summary" key={topping.id} >
            <img className="toppings-icon-style" src={topping.icon} alt={topping.name}/>
          {topping.name} 
          {console.log("Pizza object" + pizza.base + pizza.toppings)}
          </div>)
        }
      </motion.div>
  </motion.div>
  
  )
}


export default Order;