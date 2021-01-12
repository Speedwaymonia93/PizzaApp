import '../styles/modal_confirmation_styles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}
const modalVariants={
    initial:{
        y: "-100vh",
        opacity:0
    },
    animate:{
        y:"200px",
        opacity: 1,
        transition:{
            delay:0.5
        }
    }
}

const buttonModalVariants = {
  hover:{
    backgroundColor:'#dcc090',
    cursor:'pointer',
    scale: 1.2,
    color: '#441b19'
  }
}
const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      { showModal && (
        <motion.div className="back-drop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
         <motion.div className="modal" variants={modalVariants} initial="initial" animate="animate">
             <p className="modal-paragraph">Want to make another pizza?</p>
             <Link to="/">
                 <motion.button variants={buttonModalVariants} whileHover="hover" className="modal-button">Start again</motion.button>
             </Link>
         </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal;