import React from 'react'

function Posters() {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div style={{
                    background: '#8A2387',
                    background: '-webkit-linear-gradient(to right, #F27121, #E94057, #8A2387)',
                    background: 'linear-gradient(to right, #F27121, #E94057, #8A2387)'
                }} class="bg-yellow-100 rounded-sm px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {
                            [...new Array(4)].map((el) => {
                                return (
                                    <div class="p-4 md:w-1/4">
                                        <div class="h-full bg-gray-900 rounded-lg overflow-hidden">
                                            <div className="px-7 py-3 text-center text-sm font-bold text-white">
                                                SUPPORT COVID-19 HIT POOR FAMILIES
                                            </div>
                                            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                            <div class="p-6">
                                                <h2 class="bg-green-500 p-2 rounded-sm mx-20 tracking-widest text-sm text-center title-font font-medium text-gray-200 mb-1">600 INR</h2>
                                                <p class="leading-relaxed mb-3 text-center py-2 text-gray-300">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                            </div>
                                            <div class="bg-yellow-500">
                                                <button className='text-center text-red-600 font-bold w-full mx-auto bg-yellow-500 p-2 text-sm'>DONATE NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Posters
