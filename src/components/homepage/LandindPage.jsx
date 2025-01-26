import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const LandindPage = () => {
      const image1Ref = useRef(null)
      const image2Ref = useRef(null)
    
    
      useGSAP (function(){
        gsap.from([image1Ref.current,image2Ref.current],{
          y:200,
          opacity: 0, 
          duration:0.8,
          stagger:0.1
        })
        gsap.from(".h4",{
          y:10,
          opacity: 0, 
          duration:0.8,
          stagger:0.1
        })
      })
  return (
    <div className="relative h-screen w-full   flex flex-col justify-center items-center p-40 ">
    <h4 className="h4 text-xl text-center my-3 ">AWARD FOR STARTUPS </h4>
<div className="h-20 overflow-hidden">      <img className="h-full" ref={image1Ref} src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f46aee59c0e45f3fbe5b9e_startech.svg" alt="" /></div>
    <div className="h-20 overflow-hidden"><img className="h-full" ref={image2Ref} src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f46afd932038ab1eace743_awards.svg" alt="" /></div>
    <h4 className="h4 uppercase text-lg  text-center my-4 w-1/2">Connecting dreams with reality, helping startups
    soar to the stars</h4>
   </div>
  )
}

export default LandindPage
