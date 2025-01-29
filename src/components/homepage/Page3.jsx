import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Page3 = () => {

  const divRef1 = useRef(null)
  const divRef2 = useRef(null)

gsap.registerPlugin(ScrollTrigger)

useGSAP(function(){
  gsap.to([divRef1.current,divRef2.current],{
    y:-1200,
scrollTrigger:{
  trigger:"#page3",
  markers:true,
  start: "top 50%", 
  end: "top -100%", 
  scrub:5,
  pin:true

}
  })
})

  return (
    <div id='page3' className='min-h-screen flex items-start justify-center gap-20  w-full  p-40 bg-slate-900'>
 <div ref={divRef1} className=' mt-20 flex flex-col gap-4 bg-orange-800 '>
   <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>

    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
   </div>

    <div>
    <h3 className='text-[#154359] uppercase text-center whitespace-nowrap text-5xl'>15 сategories</h3>
    <video className='block mt-10 mix-blend-darken' src="https://www.dropbox.com/scl/fi/kshsba87e82hyni11vzkk/3d-startech-final-1.mp4?rlkey=3bxi98ck9ki0vjpr6jaii0vw5&&raw=1" autoPlay loop muted></video>
    </div>

    <div ref={divRef2} className='mt-20 flex flex-col gap-4  '>
   <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>

    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
   
    <div className='h-20 w-[25vw] flex items-center justify-center bg-cover bg-[url(https://cdn.prod.website-files.com/65ef0d86eff3b9ba6b18aef9/65f86f4ba6e239d1ffadbfc4_Vector%204.svg)] '>
Best Business Project
    </div>
   
    
   </div>

    </div>
  )
}

export default Page3
