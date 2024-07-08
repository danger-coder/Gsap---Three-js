import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const GsapStagger = () => {
    useGSAP(() => {

        gsap.to('#purple-box',{
            y:250,
            repeat: -1,
            stagger:0.1,
            ease:"elastic.out",
            duration:1,
            yoyo:true
        })
   

    }, [])
    return (
        <div className='h-screen w-full flex items-center justify-center'>

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

export default GsapStagger
