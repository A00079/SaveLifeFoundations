import React from "react";
import { Text } from '../../../../components';

const SomeFacts = () => {
    return (
        <React.Fragment>
            <section className='mb-10'>
                <div class="w-full bg-cover bg-center" style={{ height: '15rem', backgroundImage: "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)" }}>
                    <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                        <div class="text-center">
                            <Text
                                text={'Some Facts'}
                                className='text-white text-2xl font-semibold uppercase md:text-3xl'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
export default SomeFacts;