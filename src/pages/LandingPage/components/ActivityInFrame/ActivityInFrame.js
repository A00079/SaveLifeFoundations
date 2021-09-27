import React from "react";
import { Text } from '../../../../components';

const ActivityInFrame = () => {
    return (
        <React.Fragment>
            <main class="container mx-auto mb-5 px-6 md:px-0">
                <section>
                    <Text
                        text={'Activity In Frames'}
                        className='text-3xl font-bold text-gray-600 mb-1'
                    />
                    <Text
                        text={'Your ultimate travel companion Carries all the information you need while travellin.'}
                        className='text-xs font-bold text-gray-600 mb-10'
                    />
                    <div class="grid sm:grid-cols-3 gap-4 grid-cols-2">
                        <div>
                            <div class="bg-gray-300 h-44"></div>
                            <h3 class="text-lg font-semibold text-gray-500 mt-2">Saunas in <span class="text-gray-700">Helsinki</span></h3>
                        </div>
                        <div>
                            <div class="bg-gray-300 h-44"></div>
                            <h3 class="text-lg font-semibold text-gray-500 mt-2">Saunas in <span class="text-gray-700">Rovaniemi</span></h3>
                        </div>
                        <div>
                            <div class="bg-gray-300 h-44"></div>
                            <h3 class="text-lg font-semibold text-gray-500 mt-2">Saunas in <span class="text-gray-700">Ruka</span></h3>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default ActivityInFrame;