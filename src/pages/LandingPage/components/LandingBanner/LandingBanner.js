import React from "react";
import { Text } from '../../../../components';
const LandingBanner = () => {
    return (
        <React.Fragment>
            <div className="mx-auto">
                <div className="bg-green-400 text-white p-8 py-4 flex flex-col md:flex-row space-between items-center justify-between relative overflow-hidden">
                    <div className="flex flex-col lg:ml-14 xl:ml-28 max-w-sm lg:max-w-xl z-10">
                        <h4 className="text-xl sm:text-2xl text-center md:text-left font-bold text-white md:pb-2">
                            Save Life Foundation.
                        </h4>
                        <Text
                            text={'The underlying truth in the immortal words of Henry Wads Worth Longfellow. It serves as the basic idea behind the formation of the NGO- SAVE LIFE FOUNDATION.  Founded in the year 2018 by a crusader for social help, Mr. Aslam Shaikh, the NGO started working with the exclusive aim to start and facilitate deliverance of medical, educational and child care facilities to each and every needy person. SAVE LIFE FOUNDATION has the firm commitment to help in the complete fulfilment of constitutional obligations'}
                            className='text-center md:text-left text-white text-sm font-semibold md:text-sm'
                        />
                    </div>
                    <div className="pt-8 md:pt-0 justify-center lg:ml-auto z-10">
                        <a href="#" target="_blank" download
                            className="flex items-center px-4 py-2 sm:px-8 sm:py-4 text-center text-sm text-yellow-500 uppercase bg-white font-display rounded-full transition duration-200 hover:bg-red-600 hover:text-white">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd"></path></svg>
                            <span className='pl-3 text-xs sm:text-md font-bold'>
                                Make A Donation
                            </span>
                        </a>
                    </div>
                    <div className="absolute bg-green-500 opacity-60 w-96 h-96 -top-10 -right-16 md:w-[800px] md:h-[800px] md:left-[45%] md:top-[-150%] rounded-full shadow-2xl z-0"></div>
                </div>
            </div>
            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Join the fight!" target="_blank" className="block w-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        {/* <img className="object-cover object-center w-full h-full rounded-full" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=tonyricher&button_colour=FF5F5F&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" /> */}
                        <button className='text-sm bg-green-500 py-2 px-4 text-white rounded-md'>
                            <div className='flex flex-row justify-between items-center space-x-2'>
                                <div>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clipRule="evenodd"></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                                </div>
                                <p className='font-bold'>Join The Fight!</p>
                            </div>
                        </button>
                    </a>
                </div>
            </div>


        </React.Fragment>
    )
}

export default LandingBanner;