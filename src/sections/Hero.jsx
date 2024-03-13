// import React from 'react'

import { arrowRight } from "../assets/icons"
import Buttons from "../components/Buttons"
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section className=" w-full border-2 border-red-500 max-container  min-h-screen gap-10 flex lg:flex-row flex-col justify-center ">
      <div className=" relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28  " >
        <p className="text-coral-red text-xl font-montserrat ">Our summer collections</p>
        <h1 className="">
          <span>The New Arrival</span>
          <br/>
          <span>Nike </span>
          Shoes
        </h1>
        <p className="text-gray-400" >
          Descover stylish nike arrivals, quality comfort, and innovation for your active life.
        </p>
      Hero
        <Buttons label="Show now" iconURL={arrowRight} />
        <div className="flex flex-wrap justify-start items-start gap-16 mt-20 w-full">
          {statistics.map((stat, index)=>(
            <div key={index}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
