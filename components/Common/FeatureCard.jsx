
"use client" ;

import React, { useEffect } from 'react'


const FeatureCard = ({title , desc ,i , ind}) => {

  return (
    <div className="glass-effect rounded-3xl p-6 sm:p-8 hover:!bg-white/20 transition-all duration-300" data-aos="fade-up" data-aos-delay={`${ind}00`}>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-amber-500 hexagon flex items-center justify-center mb-4 sm:mb-6">
                            <i className={`fas ${i} text-xl sm:text-2xl text-purple-900`}></i>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{title}</h3>
                        <p className="text-sm sm:text-base text-purple-200">{desc}</p>
                    </div>
  )
}

export default FeatureCard