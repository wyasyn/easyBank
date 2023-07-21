import React from 'react'
import './Artcles.scss';
import { ArticlesData } from '../../constants/Data';
import CardArticle from "../CardArticle/CardArticle";
import { motion } from 'framer-motion';

function Articles() {
  return (
    <section className="articles">
        <div
         className="articles-container container"
         >
            <h2>Latest Articles</h2>
            <motion.div
              whileInView={{opacity: [0, 1]}}
              transition={{ duration: 1.2, ease: "easeInOut"}}
             className="wrapper"
             >
               {ArticlesData.map((article) => (
                <CardArticle
                key={article.img}
                {...article}
                 />
               ))}
            </motion.div>
        </div>
    </section>
  )
}

export default Articles