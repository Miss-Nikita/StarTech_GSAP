import React from "react";

const Structure = () => {
  return (
    <div className=" fixed p-3 h-screen w-screen bg-[#F4F9FB]">
      <div className="fixed top-0 left-0 w-full">
        <img
          className="absolute top-0 left-0 w-1/2"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f2ff660acfee8ba5cd3b36_border-left-top.svg"
          alt=""
        />
        <img
          className="absolute top-0 right-0 w-1/2"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/66603af083943342fe214cf9_border-right-top-new.svg"
          alt=""
        />
      </div>

      <div className="fixed top-1/2 left-0 -translate-y-1/2">
        <img
          className="w-20"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f3025ed598b85f146d736d_border-left-center.svg"
          alt=""
        />
      </div>

      <div className="fixed top-1/2 right-0 -translate-y-1/2">
        <img
          className="w-20"
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f302f74ee53940c8b3ece4_border-right-center.svg"
          alt=""
        />
      </div>

      <div className="absolute flex justify-between  items-center p-10 w-full bottom-0 left-0">
        <img
          className=" h-40 left-0 "
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601a44ad564d4d03ce8f94f_Object1.svg"
          alt=""
        />
        <img
          className=" h-20 right-0 "
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601a486295efb3bb8c5d777_Object2.svg"
          alt=""
        />
      </div>

      <div className="h-full w-full bg-[#EBEDEE] rounded-3xl">
        <img
          className="h-full w-full object-cover "
          src="https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/6601b7d63c31da7e5be13f14_Frame%201815%20copy-min%20(1).webp"
          alt=""
        />
      </div>
      
    </div>
  );
};

export default Structure;
