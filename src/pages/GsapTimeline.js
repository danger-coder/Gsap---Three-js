import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const GsapTimeline = () => {

    const timeline = gsap.timeline({
        repeat: -1,
        yoyo: true,
        repeatDelay:1,
        ease: "elastic.out",
    })

    useGSAP(()=>{
timeline.to('#yellow-box',{
    x:250,
    duration: 1,
    rotation:360,
    borderRadius:'100%',
})

timeline.to('#yellow-box',{
    x:700,
    scale: 1,
    rotate:360,
    borderRadius:'0px',
    duration:2,
    ease:'back.inOut'
})
    },[])
  return (
    <div className="h-screen w-full flex items-center justify-center">

      <div id='yellow-box' className='h-20 w-20 bg-yellow-700 cursor-pointer'>
      </div>
     
    </div>
  )
}

export default GsapTimeline
