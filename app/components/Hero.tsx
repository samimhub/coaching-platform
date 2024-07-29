"use client"

import Image from "next/image"

function Hero() {
  return (
  <section className="flex justify-evenly items-center flex-col lg:flex-row 
                      lg:py-20">
    {/*Left*/}
    <div className="flex justify-center items-center p-10 lg:shadow-md ">
        <Image
          src="/personal_photo.jpg"
          alt="bg"
          width={320}
          height={320}
          className="rounded-full drop-shadow-sm" />
      </div>
      {/*Right*/}
        <div className=" flex justify-center items-center flex-col flex-wrap gap-5">
          <h1 className="text-4xl">Hey dear student,</h1>
          <h1 className="text-xl">Your Journey to Excellence Starts Here
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
          <p className=" lg:bold-20">1100+ <span className=" lg;regular-20"></span>Excellent Review</p>
        </div>

  </section>
    
      
  )
}

export default Hero
