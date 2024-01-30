import React from 'react'
import SignUp from '../components/SignUp';

function Home() {
  return (
    <div className='flex flex-col h-screen'>
        <nav className='w-full h-[40px] bg-zinc-400 flex items-center'>Menu</nav>
        <div className='flex flex-col-2 mt-2 h-full'>
            <div className='bg-red-200 w-[200px]'>SideBar</div>
            <div className='bg-neutral-400 w-full ml-1'>Main contents</div>
        </div>
        <div className='bg-red-300 h-[70px] mt-2'>Footer</div>
    </div>
  );
}

export default Home