import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Homepage = () => {

  const image1Ref = useRef(null)
  const image2Ref = useRef(null)


  useGSAP (function(){
    gsap.from([image1Ref.current,image2Ref.current],{
      y:200,
      opacity: 0, 
      duration:0.8,
      stagger:0.1
    })
  })
  return (
    <div className="relative h-screen w-screen   bg-[#F4F9FB] ">
      <div className="h-full overflow-x-hidden overflow-y-auto  w-full absolute bg-[#C6D9E1]">
<img className="h-[110%] scale-125 ml-24 " src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f42cc5f90e1d3b2215bd7f_394397%206%20copy%20(1)-p-1080.png" alt="" />
      </div>
      <div className="relative h-screen w-full   flex flex-col justify-center items-center p-40 ">
       <h4 className="text-xl text-center my-3 ">AWARD FOR STARTUPS </h4>
 <div className="h-20 overflow-hidden">      <img className="h-full" ref={image1Ref} src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f46aee59c0e45f3fbe5b9e_startech.svg" alt="" /></div>
       <div className="h-20 overflow-hidden"><img className="h-full" ref={image2Ref} src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f46afd932038ab1eace743_awards.svg" alt="" /></div>
       <h4 className=" uppercase text-lg  text-center my-4 w-1/2">Connecting dreams with reality, helping startups
       soar to the stars</h4>
      </div>
    
    </div>
  );
};

export default Homepage;
