import Image from 'next/image'
import { useState } from 'react';
import MenuHeader from './components/MenuHeader';
import MenuNavbar from './components/MenuNavbar';
import Menubar from './components/Menubar';


export default function Home() {
  
  return (
    // <main className="bg-gray-100 min-h-screen w-screen">
  <main className="bg-gray-100 ">
  <main className="max-w-screen-2xl m-auto bg-white">
    {/* NAVBAR */}
   {/* <Navbar/> */}
    {/* NAVBAR */} {/* HEADER */}
    {/* <MenuHeader/> */}
    {/* HEADER */} {/* DESCRIPTION PORTION */}
    <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11 text-black">
      <div className="bg-white w-[100%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
       <MenuNavbar/>
        {/* RESAURANT NAVBAR */} {/* MENU */}
        <Menubar/>
        {/* MENU */}
      </div>
    </div>
    {/* DESCRIPTION PORTION */}
  </main>
</main>


  )
}
