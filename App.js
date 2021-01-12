import React, { useState } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { AnimatePresence} from 'framer-motion';
import Modal from './components/Modal';



function App() {
  // get information about the current route location, whenever route changes it will update the information stored in this constant
  // we have to pass this information to switch component and it will understnand when rout changes and what
  // that to do with exit animation
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [], price:[] });
  const [showModal, setShowModal] = useState(false);
  
  const addBase = (base) => {
    setPizza({ ...pizza, base});
    console.log("Pizza base: "+ base.name);
    console.log("Pizza object Base" + base.name);
    console.log("Pizza object Base :Price" + base.price);
    console.log("Pizza object Base id" + base.id);
  }
  
  const addTopping = (topping) => {
    let toppingsPrice;
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
      toppingsPrice = [...pizza.price, topping.price]
      console.log("toppingsprice" + toppingsPrice);
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping)
      toppingsPrice = pizza.toppings.filter(item => item !== topping.price)
      console.log("toppingsprice" + toppingsPrice);
    }
    setPizza({ ...pizza, toppings: newToppings , price: toppingsPrice});
    console.log("toppings" + newToppings.length)
    console.log("toppings" + newToppings[0].id)
    console.log("toppings" + newToppings[0].name)
    console.log("toppings" + newToppings[0].price)
    console.log("czy cos jest w toppings price"+ toppingsPrice);
  }

  
  return (
    <>
    <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence exitBeforeEnter onExitComplete={()=>setShowModal(false)}>
        <Switch location={location} key={location.key}>
          <Route path="/base">
            <Base addBase={addBase} pizza={pizza} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} pizza={pizza}/>
          </Route>
          <Route path="/order">
            <Order pizza={pizza} setShowModal={setShowModal} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}
export default App