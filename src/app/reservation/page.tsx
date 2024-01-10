import Image from 'next/image'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import ReservationHeader from './components/ReservationHeader';
import ReservationForm from './components/ReservationForm';

export default function Home() {
  
  return (
   // <main className="bg-gray-100 min-h-screen w-screen">
  <main className="bg-gray-100 ">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* NAVBAR */}
      {/* <Navbar/> */}
      {/* NAVBAR END */}
      <div className="border-t h-screen text-black">
        <div className="py-9 w-3/5 m-auto">
          {/* HEADER */}
          <ReservationHeader/>
          {/* HEADER */} {/* FORM */}
          <ReservationForm/>
        </div>
      </div>
    </main>
  </main>
  

  )
}
