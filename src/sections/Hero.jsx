// import React from 'react'

import { arrowRight } from "../assets/icons"
import Buttons from "../components/Buttons"
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section className=" w-full border-2 border-red-500 max-container  min-h-screen gap-10 flex lg:flex-row flex-col justify-center ">
      <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28  " >
        <p className="text-coral-red text-xl font-montserrat ">Our summer collections</p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:text-[82]">
          <span className="xl:bg-white xl:whitespace-nowrap z-10 relative mr-10 ">The New Arrival</span>
          <br/>
          <span className="text-coral-red inline-block mt-3 " >Nike</span> Shoes
        </h1>
        <p className="text-slate-gray font-montserrat mt-6 mb-14 text-lg leading-8 sm:max-w-sm" >
          Descover stylish nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Buttons label="Show now" iconURL={arrowRight} />
        <div className="flex flex-wrap justify-start items-start gap-16 mt-20 w-full">
          {statistics.map((stat, index)=>(
            <div key={index}>
              <p className="text-4xl font-bold font-montserrat">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray ">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
