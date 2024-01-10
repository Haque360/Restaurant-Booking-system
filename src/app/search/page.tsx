import SearchpageHeader from './components/SearchpageHeader';
import SearchsideBar from './components/SearchsideBar';
import SearchpageRestaurantCard from './components/SearchpageRestaurantCard';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import RestaurantCards from '../components/RestaurantCards';
import Header from '../components/Header';

const prisma = new PrismaClient();

const fetchRestaurantByCity=async(city:string|undefined)=>{
  const select={
    id: true,
    name: true,
    main_image: true,
    cuisine: true ,
    location: true,
    price: true,
    slug: true,
  }

  if(!city)
  return await prisma.restaurant.findMany({select});
  const restaurants=await prisma.restaurant.findMany({
    where:{
      location:{
        name:{
          equals:city.toLowerCase()
        }
      }
    },
    select
  });
  return restaurants;
}

const fetchLocations=async()=>{
  return prisma.location.findMany();
}

const fetchCuisines=async()=>{
  return prisma.cuisine.findMany();
}

export default async function Search({searchParams}:{searchParams:{city:string|undefined}}) {
  const restaurants=await fetchRestaurantByCity(searchParams.city);
  const locations=await fetchLocations();
  const cuisines=await fetchCuisines();

  return (
    <main>
      <Header/>
    <div className="flex py-4 m-auto w-2/3 justify-between items-start ">
      
      <div className='w-1/5'>
        <div className='border-b pb-4'>
          <h1 className='mb-2'> Regions </h1>

            {
              locations.map((location)=>(
                <p>
                  <Link href={{
                    pathname:"\search",
                    query:{
                      city:location.name
                    }
                  }} className='font-light text-reg' key={location.id}>
                    {location.name}
                  </Link>
                </p>
              ))
            }
        </div>
        <div className='border-b pb-4 mt-3'>
          <h1 className='mb-2'> Cuisines </h1>
          {
            cuisines.map((item)=>(
              <p className='font-light test-reg' key={item.id}></p>
            ))
          }
        </div>
        <div className='mt-3 pb-4'>
          <h1 className='mb-2'> Price </h1>
           <div className='flex'>
            <button className='border w-full text-reg font rounded-1 p-2'>
              $
            </button>
            <button className='border w-full text-reg font rounded-1 p-2'>
              $$
            </button>
            <button className='border w-full text-reg font rounded-1 p-2'>
              $$$
            </button>
           </div>
        </div>
      </div>
      <div className='w-1/5'>
      </div>

    </div>
    </main>

  )
}
