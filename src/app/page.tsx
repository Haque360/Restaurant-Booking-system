import { PRICE, PrismaClient } from '@prisma/client';
import Header from './components/Header'
import RestaurantCards from './components/RestaurantCards'
import { useState } from 'react';

export interface Location{
  id: number;
  name: String;
}
export interface Cuisine{
  id: number;
  name: String;
}
export interface Product{
    id: number;
    name: String;
    main_image: string;
    cuisine: Cuisine ;
    location: Location;
    price: PRICE;
    slug: String;
}
export interface ProductList{
  products:Product[];
}

const prisma= new PrismaClient();

const fetchRestaurants=async()=>{
  const restaurants=await prisma.restaurant.findMany({
    select:{
      id:true,
      name:true,
      main_image:true,
      cuisine:true,
      location: true,
      price: true,
      slug:true
    }
  });
  return restaurants;
}

export default async function Home() {
  const restaurants=await fetchRestaurants();
  console.log("restaurants",restaurants);
  // const [product,setProduct]=useState<Product[]>(
  //   [{productName:'Product A', productReview:'78', productType:'Mexican', productLocation:"Toronto",productStars:"*****",productPricing:"$$$$"},
  //   {productName:'Product B', productReview:'85', productType:'Arabian', productLocation:"New York",productStars:"**** ",productPricing:"$$"}]
  // );
  return (
    // <main className="bg-gray-100 min-h-screen w-screen">
    <main className="flex py-4 m-auto w-2/3 bg-gray-100">
    <main className="max-w-screen-2xl m-auto bg-white">
      {/* NAVBAR */}
   
      {/* NAVBAR */}
      <main>
        {/* HEADER */}
       <Header/>
        {/* HEADER */} {/* CARDS */}
        <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
          {/* CARD */}
          <RestaurantCards products={restaurants}/>
          {/* CARD */}
        </div>
        {/* CARDS */}
      </main>
    </main>
  </main>
   
  
  )
}
