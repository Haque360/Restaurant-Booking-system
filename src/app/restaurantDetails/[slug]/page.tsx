"use client"
import Image from 'next/image'
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import DetailsHeader from './components/DetailsHeader';
import ProductDescription from './components/ProductDescription';
import ReservationCard from './components/ReservationCard';
import RestaurantNavbar from './components/RestaurantNavbar';
import ProductTitle from './components/ProductTitle';
import ProductRatings from './components/ProductRatings';
import ProductImages from './components/ProductImages';
import ProductReviews from './components/ProductReviews';

export default function Home() {
  
  return (
    // <main className="bg-gray-100 min-h-screen w-screen">
  <main className="bg-gray-100 ">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* NAVBAR */}
     {/* <DetailsHeader/> */}
      {/* HEADER */} 
      {/* DESCRIPTION PORTION */}
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11 text-black">
      <div className="bg-white w-[70%] rounded p-3 shadow">
        {/* RESAURANT NAVBAR */}
        <RestaurantNavbar/>
        {/* RESAURANT NAVBAR */} {/* TITLE */}
       <ProductTitle/>
        {/* TITLE */} {/* RATING */}
       <ProductRatings/>
        {/* RATING */} {/* DESCRIPTION */}
        <ProductDescription/>
        {/* DESCRIPTION */} 
        {/* IMAGES */}
        <ProductImages/>
        {/* IMAGES */} {/* REVIEWS */}
        <ProductReviews/>
        {/* REVIEWS */}
      </div>
        <ReservationCard/>
      </div>
      {/* DESCRIPTION PORTION */} {/* RESERVATION CARD PORTION */} {/* RESERVATION
      CARD PORTION */}
    </main>
  </main>
  

  )
}
