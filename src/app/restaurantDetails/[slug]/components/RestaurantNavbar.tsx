import Link from "next/link"

export default function RestaurantNavbar()
{
    return(
        <nav className="flex text-reg border-b pb-2">
          <a href="" className="mr-7"> Overview </a>
          <Link href={"1/restaurantMenu"} className="mr-7"> Menu </Link>
        </nav>
    )
}
