import React, { useState, useEffect } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import HomeSlide1 from "../../../../assets/images/slide1.jpeg";
import HomeSlide2 from "../../../../assets/images/slide2.jpeg";
import HomeSlide3 from "../../../../assets/images/slide3.jpeg";
import HomeSlide4 from "../../../../assets/images/slide4.jpeg";
import HomeSlide5 from "../../../../assets/images/slide5.jpeg";
import axios from 'axios';

const HomeSlider = () => {
    const [casesData, setCasesData] = useState([]);
    const [isDesktop, setIsDesktop] = useState();

    useEffect(() => {
        if (window.innerWidth > 468) {
            setIsDesktop(true);
        } else {
            setIsDesktop(false);
        }
        fetchData();
    }, []);



    const fetchData = () => {
        axios.get('https://savelifefoundation.org.in/api/v1/case/allcases')
            .then(response => setCasesData(response.data.cases));
    }

    const [sliderRef] = useKeenSlider({
        slidesPerView: isDesktop? 3: 1,
        mode: "free-snap",
        spacing: 5,
        centered: false,
        loop: false,
    })

    return (
        <React.Fragment>
            <section className='p-1' style={{
                background: '#0f0c29',
                background: '-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)',
                background: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)',
            }}>
                <div class="container px-5 py-4 mx-auto" >
                    <div class="flex flex-col text-center w-full py-4 bg-yellow-600 rounded-sm">
                        <h1 class="text-3xl text-white font-bold title-font mb-1">Help Save Childrens Lives</h1>
                        <h1 class="text-3xl text-white font-bold title-font mb-4">Save Life Foundation</h1>
                    </div></div>
                <div ref={sliderRef} className="keen-slider z-60">
                    {
                        casesData.map((el, index) => {
                            return (
                                <div class="p-4 keen-slider__slide number-slide1">
                                    <div class="h-full flex flex-col w-96 bg-white  shadow-xl rounded-lg items-center  text-center">
                                        <img alt="team" class="flex-shrink-0  rounded-lg w-full h-56 object-cover object-center mb-4" src={el.imageUrl} />
                                        <div class="w-full">
                                            <div className="flex flex-row justify-between pb-3 border-b-2 border-gray-300 px-10">
                                                <div className="flex flex-col px-4 border-r-2 border-gray-300">
                                                    <p className="text-sm font-bold text-gray-600">Current</p>
                                                    <p className="text-green-500 font-bold">&#8377;{el.current}</p>
                                                </div>
                                                <div className="flex flex-col px-4 border-r-2 border-gray-300">
                                                    <p className="text-sm font-bold text-gray-600">Target</p>
                                                    <p className="text-green-500 font-bold">&#8377;{el.donationRequirement}</p>
                                                </div>
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-bold text-gray-600">Rate</p>
                                                    <p className="text-green-500 font-bold">{el.rate}</p>
                                                </div>
                                            </div>
                                            <h2 class="title-font font-medium text-lg text-gray-900 mt-3">{el.needersName}</h2>
                                            <h3 class="text-gray-500 mb-1 text-sm">{el.disease}</h3>
                                            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex mb-4"></div>

                                            <p class="mb-4 text-sm font-medium h-96 px-5">{el.content}</p>
                                            <div className='bg-green-500 w-full p-2'>
                                                <a href="https://pmny.in/LIplFS6Lo0ki" class="inline-flex text-white py-1 px-4 focus:outline-none  rounded text-sm">
                                                    DONATE NOW
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </React.Fragment>
    )
}

export default HomeSlider;
