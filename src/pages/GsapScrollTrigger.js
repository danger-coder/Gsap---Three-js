import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {

    const scrollRef = useRef();

    useGSAP(()=>{
        const boxes = gsap.utils.toArray(scrollRef.current.children);

        boxes.forEach((box, index) => {
gsap.to(box,{
    x:150 * (boxes.indexOf(box)+ 5),
    rotation:360,
    borderRadius:'100%',
    scale:1.5,
scrollTrigger:{
        trigger:box,
        start:'bottom bottom',
        end:'top 20%',
        scrub:true
    }
})
        })

    },{scope:scrollRef})
  return (
    <div className=' w-full flex flex-col items-center justify-center'>

        <div className='h-[2900px] bg-red-300'>
asfasdfs
        </div>

    <div className='flex items-center gap-9' ref={scrollRef}>
        <div id='purple-box' className='h-[50px] w-[15px] bg-purple-200' >

        </div>
        <div id='purple-box' className='h-[50px] w-[15px] bg-purple-300'>

        </div>
        <div id='purple-box' className='h-[50px] w-[15px] bg-purple-400'>

        </div>
        <div id='purple-box' className='h-[50px] w-[15px] bg-purple-500'>

        </div>
        <div id='purple-box' className='h-[50px] w-[15px] bg-purple-600'>

        </div>
        <div id='purple-box' className='h-[50px] w-[15px] bg-purple-700'>

        </div>
        <div id='purple-box' className='h-[50px] w-[15px] bg-purple-800'>

        </div>
    </div>
    <div className='h-[2900px] bg-red-300'>
asfasdfs
        </div>

</div>
  )
}

export default GsapScrollTrigger
