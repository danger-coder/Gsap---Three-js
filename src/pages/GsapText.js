import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const GsapText = () => {

    useGSAP(()=>{
        // gsap.to ('#text',{
        //     ease:"power1.inOut",
        //     opacity:1,
        //     y:0
        // })

        gsap.fromTo("#text",{
opacity:0,
y:20
        },{
            opacity:1,
            y:0,
            delay:2,
            stagger:0.1
        })

    },[])
  return (
    <div className='h-screen w-full flex items-center justify-center'>
<div className='flex items-start flex-col'>

<h1 className='opacity-0 text-xl' id='text'>Helloe</h1>
        <h1 className='opacity-0 text-xl' id='text'>Helloe</h1>

        <h1 className='opacity-0 text-xl' id='text'>Helloe</h1>

        <h1 className='opacity-0 text-xl' id='text'>Helloe</h1>

        <h1 className='opacity-0 text-xl' id='text'>Helloe</h1>

        <h1 className='opacity-0 text-xl' id='text'>Helloe</h1>
</div>


    <div className='flex items-center gap-9'>
        <div id='purple-box' className='h-[50px] w-[15px] bg-purple-200'>

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

</div>
  )
}

export default GsapText
