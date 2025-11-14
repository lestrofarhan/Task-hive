import React from 'react'

const Footer = () => {
    let date = new Date
    let year = date.getFullYear()
    
  return (
    <footer className="bg-purple-950 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">
                <div className="flex justify-between flex-col sm:flex-row gap-8 sm:gap-10 mb-8 sm:mb-12">
                    <div>
                        <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-amber-500 hexagon"></div>
                            <span className="text-xl sm:text-2xl font-bold">Task Hive</span>
                        </div>
                        <p className="text-sm sm:text-base text-purple-300">Organize smarter, collaborate better, achieve more.</p>
                    </div>
                    
                    <div>
                        <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 glass-effect rounded-full flex items-center justify-center hover:!bg-yellow-400 hover:text-purple-900 transition-all duration-300">
                                <i className="fab fa-twitter text-lg sm:text-xl"></i>
                            </a>
                            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 glass-effect rounded-full flex items-center justify-center hover:!bg-yellow-400 hover:text-purple-900 transition-all duration-300">
                                <i className="fab fa-linkedin text-lg sm:text-xl"></i>
                            </a>
                            <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 glass-effect rounded-full flex items-center justify-center hover:!bg-yellow-400 hover:text-purple-900 transition-all duration-300">
                                <i className="fab fa-github text-lg sm:text-xl"></i>
                            </a>
                        </div>
                    </div>
                </div>
            
                <div className="border-t border-purple-800 pt-6 sm:pt-8 text-center">
                    <p className="text-sm sm:text-base text-purple-300">&copy; {year} Task Hive. All rights reserved.</p>
                </div>
            </div>
        </footer>
  )
}

export default Footer