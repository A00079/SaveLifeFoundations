import React from "react";
import HomeBanner from '../../assets/images/homebanner.jpg';
import { Text } from '../../components';
import { LandingBanner, HomeSlides, WorkWithSaveLife, Cases, BankDetails, BenefitsOfJoining, OurActivity, WhoWeAre, AboutUs, MissionVissionGoal, StoryAboutWeDo, GetToKnowUs, ActivityInFrame, SomeFacts, Volunteers, LatestNews } from '../LandingPage/components';
import { Link, animateScroll as scroll } from "react-scroll";

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className='space-y-12 sm:space-y-20'>
        <section>
          <div className="w-full bg-cover bg-center" style={{ height: '40rem', backgroundImage: `url(${HomeBanner})` }}>
            <div className="flex items-center justify-start h-full w-full sm:px-24">
              <div className="text-center sm:text-left">
                <div className='space-y-1'>
                  <div className='bg-white rounded-xs px-2 py-1 w-32 mx-auto sm:mx-0'>
                    <Text
                      text={'Stand With Us'}
                      className='text-black text-sm font-semibold uppercase md:text-sm'
                    />
                  </div>
                  <Text
                    text={'No One Has Ever'}
                    className='text-white text-2xl font-semibold uppercase md:text-5xl'
                  />
                  <Text
                    text={'Become Poor'}
                    className='text-white text-2xl font-semibold uppercase md:text-5xl'
                  />
                  <Text
                    text={'By Giving.'}
                    className='text-white text-2xl font-semibold uppercase md:text-5xl'
                  />
                  <div className='w-44 h-1 bg-green-400 mx-auto sm:mx-0'></div>
                </div>
                <Text
                  text={'A Change May Help Many Lives.'}
                  className='text-white text-lg sm:text-xl mt-2 font-semibold md:text-sm sm:w-96'
                />
                <h1 className="text-white text-xs mt-2 font-semibold md:text-xs sm:w-96" style={{ fontFamily: 'Raleway' }}>The life of a man consists of seeing visions and dreaming dreams, but in active charity and in willing service </h1>
                <div className="flex justify-center sm:justify-start mt-6">
                  <button className="inline-flex text-white font-medium bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm sm:text-lg">Donate Now</button>
                  <button className="ml-4 inline-flex text-white font-medium bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-sm sm:text-lg">Join Us Now</button>
                </div>
              </div>
            </div>
          </div>
          <section>
            <LandingBanner />
          </section>
          <section id='section1'>
            <MissionVissionGoal />
          </section>
        </section>
        <section id='section2'>
          <AboutUs />
        </section>
        <section>
          <HomeSlides />
        </section>
        {/* <section>
          <OurActivity />
        </section> */}
        <section id='section3'>
          <WhoWeAre />
        </section>
        <section>
          <BankDetails />
        </section>
        <section>
          <Cases />
        </section>
        <section id='section4'>
          <StoryAboutWeDo />
        </section>
        <section id='section5'>
          <WorkWithSaveLife />
        </section>
        <section id='section6'>
          <BenefitsOfJoining />
        </section>
        {/* <section>
          <GetToKnowUs />
        </section>
        <section>
          <ActivityInFrame />
        </section>
        <section>
          <SomeFacts />
        </section>
        <section>
          <Volunteers />
        </section>
        <section>
          <LatestNews />
        </section> */}
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
