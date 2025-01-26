import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import LandindPage from "./LandindPage";
import Page2 from "./Page2";
import Page3 from "./Page3";

const Homepage = () => {


  return (
    <div className="relative h-screen w-screen  overflow-x-hidden bg-[#F4F9FB] ">
      <div className=" overflow-x-hidden overflow-y-auto  w-full absolute bg-[#C6D9E1]">
<img className="h-[110vh] scale-125 ml-20 absolute " src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f42cc5f90e1d3b2215bd7f_394397%206%20copy%20(1)-p-1080.png" alt="" />
<img className="relative mt-40 " src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f462326356e70fa630f505_hero1-img%20(1)-p-1600.png" alt="" />
      </div>


<LandindPage/>
<Page2/>
<Page3/>
    
    </div>
  );
};

export default Homepage;
