import { motion } from 'framer-motion'
import React from 'react'
import Animations from './utils/item'

const Blog = () => {
    const articles = [
        { image: "website1.jpg", title: "Comment un site web bien conçu peut booster votre entreprise", link: "/articles/comment-un-site-web-bien-conçu-peut-booster-votre-entreprise", date: "12 Septembre 2024" },
    ]
    return (
        <section id='blog' className='max w-full my-9'>
            <h1 className='my-6 text-2xl md:text-4xl text-center'>Articles & Nouvelles</h1>
            <div className='flex justify-center'>
                <div className='flex overflow-x-auto p-3 gap-3'>
                    {
                        articles.map((element) => (
                            <motion.a
                                variants={Animations.leftToRight({ duration: 0.4 * articles.indexOf(element) + 0.4, inverse: true })}
                                initial="hidden"
                                whileInView="show"
                                key={element.image} href="/articles/comment-un-site-web-bien-code-peut-booster-votre-entreprise">
                                <div className='center-shadow flex flex-col  w-80 gap-2  p-4 hover:bg-zinc-300'>
                                    <img src={`/articles_images/${element.image}`} alt="" className='w-80 h-48 object-cover ' />
                                    <div className='p-3'>
                                        <p className='mb-2 font-light font-roboto text-sm'>{element.date}</p>
                                        <p className='font-openSans font-bold text-base sm:text-lg md:text-xl my-2'>{element.title}</p>

                                        <p className='py-2 text-morange'>VOIR PLUS</p>
                                    </div>
                                </div>
                            </motion.a>
                        )
                        )
                    }

                </div>
            </div>
        </section>
    )
}

export default Blog