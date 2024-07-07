// import logo from './logo.svg';
import './App.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function App() {

  useGSAP(()=>{
    gsap.fromTo('#red-box',{
      x:0,
      rotation:0,
   borderRadius:'0%',
      ease:"elastic.out"
    },{
      x:250,
      repeat:-1,
      yoyo:true,
      borderRadius:'100%',
      rotation:360,
      duration:2,
      ease:"bounce.out"
    })
  },[])
  return (
    <div className="h-screen w-full flex items-center justify-center">

      <div id='red-box' className='h-20 w-20 bg-red-700 cursor-pointer'>
      </div>
     
    </div>
  );
}

export default App;
