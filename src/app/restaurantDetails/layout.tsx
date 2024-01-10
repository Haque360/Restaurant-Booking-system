import Navbar from "../components/Navbar"
import DetailsHeader from "./[slug]/components/DetailsHeader"


export default function RestaurantLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return(
          // <main className="bg-gray-100 min-h-screen w-screen">
  <main className="bg-gray-100 ">
        <main className="max-w-screen-2xl m-auto bg-white">
          {/* NAVBAR */}
          {/* <Navbar/> */}
          {/* NAVBAR */} {/* HEADER */}
          <DetailsHeader/>
          {/* HEADER */} {/* DESCRIPTION PORTION */}
            {children}
        </main>
        </main>
    )
}