import React from 'react'
import './NotFound.scss'
import { motion } from "framer-motion"

function NotFound() {

  return (
    <div className='not-found'>
      <div className="not-found-container">
        <motion.div 
            className="square"
            whileInView={{ y: [-200, 0], opacity: [0, 1]}}
            transition={{ duration: 1, delayChildren: 0.5}}
            >

              {[1,2,3,4].map(box => (
                <motion.div 
                className='box'
                whileInView={{ opacity: [0, 1]}}
                whileHover={{opacity: 0.7}}
                transition={{ duration: 1}}
                ></motion.div>
              ))}

        </motion.div>
        <p>Page Not Found!</p>
      </div>
    </div>
  )
}

export default NotFound