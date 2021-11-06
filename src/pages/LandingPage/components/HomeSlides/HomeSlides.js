import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Homecss.css"
import HomeSlide1 from "../../../../assets/images/slide1.jpeg";
import HomeSlide2 from "../../../../assets/images/slide2.jpeg";
import HomeSlide3 from "../../../../assets/images/slide3.jpeg";
import HomeSlide4 from "../../../../assets/images/slide4.jpeg";
import HomeSlide5 from "../../../../assets/images/slide5.jpeg";

const HomeSlider = () => {
    const [sliderRef] = useKeenSlider({
        slidesPerView: 2,
        mode: "free-snap",
        spacing: 15,
        centered: true,
        loop: false,
    })
    return (
        <React.Fragment>
            <div ref={sliderRef} className="keen-slider">
                <img alt="content" class="keen-slider__slide number-slide6 object-cover object-center w-full" src={HomeSlide1} />
                <img alt="content" class="keen-slider__slide number-slide6 object-cover object-center w-full" src={HomeSlide2} />
                <img alt="content" class="keen-slider__slide number-slide6 object-cover object-center w-full" src={HomeSlide3} />
                <img alt="content" class="keen-slider__slide number-slide6 object-cover object-center w-full" src={HomeSlide4} />
                <img alt="content" class="keen-slider__slide number-slide6 object-cover object-center w-full" src={HomeSlide5} />
            </div>
        </React.Fragment>
    )
}

export default HomeSlider;
