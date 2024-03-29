import React from "react"
import { PRICE } from "@prisma/client"


export default function ItemPricing({price}:{price:PRICE})
{
    const renderPrice=()=>{
        if(price===PRICE.CHEAP)
        {
            return(
               <>
               <span >$$</span><span className='text-gray-400'>$$</span>

               </>
               )
        }
        else if(price===PRICE.REGULAR)
        {
            return(
                <>
                <span >$$$</span><span className='text-gray-400'>$</span>
 
                </>
                )
        }
        else
        {
            return(
                <>
                 <span >$$$$</span>
 
                </>
            )
        }

    }
   return (
    <p className="text-reg foot-light mr-3" >{renderPrice()}</p>
   )
    
}

