import React from 'react';
import { motion } from 'framer-motion';

import './Button.css'

const Button = (props) => {
    return ( 
        <motion.button
        whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
        className={props.className} >
            {props.text}
        </motion.button>
     );
}
 
export default Button;