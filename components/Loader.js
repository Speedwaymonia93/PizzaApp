import React from 'react';
import {motion} from 'framer-motion';
import '../styles/loader_styles.css';


const loaderVariants = {
    animateOne:{
        x: [-20,20],
        y:[0,-30],
        transition:{
            x:{
                yoyo: Infinity,
                duration:0.5
            },
            y:{
                yoyo: Infinity,
                duration:0.25,
                ease: 'easeOut'
            }
        }
    },
    animateTwo:{

    }
}
const Loader = () =>{
    return(
        <>
            <motion.div variants={loaderVariants} animate="animateOne" className="loader">

            </motion.div>
        </>
    )
}

export default Loader