import logo from './logo.svg';
import './App.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function App() {

  useGSAP(()=>{
    gsap.to('#red-box',{
      x:250,
      repeat:-1,
      yoyo:true
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
