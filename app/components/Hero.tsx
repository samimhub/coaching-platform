"use client"

import Image from "next/image"
import { FaArrowUpRightFromSquare, FaChevronRight } from "react-icons/fa6";

function Hero() {
  return (
  <section className="flex justify-evenly items-center flex-col lg:flex-row 
                      lg:py-14">
    {/*Left*/}
    <div className="flex justify-center items-center lg:shadow-lg px-32 py-8">
        <Image
          src="/personal_photo.jpg"
          alt="bg"
          width={260}
          height={260}
          className="rounded-full " />
      </div>
      {/*Right*/}
        <div className=" flex justify-center items-center flex-col flex-wrap gap-6 mb-5">
          <h1 className=" text-4xl lg:text-5xl text-center">Welcome to Your Coaching Journey</h1>
          <h1 className="text-2xl mt-5">Your Journey to Excellence Starts Here
          </h1>
          <div className="flex items-center gap-2">
            {
              Array(5).fill(1).map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  height={25}
                  width={25}
                />
              ))
            }
          </div>
          <p className=" lg:text-xl">1100+ <span className=" lg;text-xl"></span>Excellent Review</p>
           <div className="flex gap-5 mt-12">
           <div className="">
          <button className="flex flex-row gap-4 py-4 px-5 text-2xl font-medium text-gray-900 bg-white rounded-full border border-indigo-800 hover:bg-indigo-700 hover:scale-105 duration-300 ">Get Start
          <FaArrowUpRightFromSquare />
          </button>
          </div>
          <div>
          <button className="flex flex-row gap-1 py-4 px-5 text-2xl font-medium text-gray-900 bg-white rounded-full border border-fuchsia-700 hover:bg-fuchsia-700 hover:scale-105 duration-300 ">Contact Me
          <FaChevronRight />
          </button>
          </div>
           </div>
          
        </div>

  </section>
    
      
  )
}

export default Hero
