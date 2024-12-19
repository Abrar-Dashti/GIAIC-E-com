import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";


export default function Header3() {
    return (
        <header className="border-gray-300 ">
            <div className="p-5 flex justify-between items-center">

                <div className="flex justify-between items-center w-full md:w-[50%] md:flex-row">
                <div id="title">
                    <Link href="/">
                    <h1 className="text-3xl font-sans font-light">Avion</h1>
                    </Link>
                </div>
                <div className="flex gap-5 justify-between items-center">

                <div className="block md:hidden">
                <Menu />
                </div>
                </div>

                </div>

                <div className="hidden md:block">
                    <div className="flex flex-row gap-7">
                    <div className="flex gap-5 text-gray-500">
                        <Link className=" hover:text-gray-800" href="./about">About Us</Link>
                        <Link className=" hover:text-gray-800" href="#">Contact</Link>
                        <Link className=" hover:text-gray-800" href="#">Blog</Link>
                    </div>
                <div className="flex gap-5">
                    
                    <div id="search">
                        <Search className="w-5 h-5" />
                    </div>

                    <Link href="./shoppingBasket">
                    <div id="cart">
                        <ShoppingCart className="w-5 h-5" />
                    </div>
                    </Link>

                    <div id="profile">
                        <CircleUserRound className="w-5 h-5" />
                    </div>
                </div>
                </div>
                </div>

            </div>

            <div>
                <div className="w-full mt-1 bg-gray-100">
                    <div className="p-4 flex gap-10 text-gray-500 justify-start md:justify-center items-center overflow-x-auto whitespace-nowrap no-scrollbar">
                    <Link href='./allProducts' className=" hover:border-b-2 border-gray-500 transition-all duration-100">All products</Link>
                    <Link href='' className=" hover:border-b-2 border-gray-500 transition-all duration-100">Plant pots</Link>
                    <Link href='' className=" hover:border-b-2 border-gray-500 transition-all duration-100">Ceramics</Link>
                    <Link href='' className=" hover:border-b-2 border-gray-500 transition-all duration-100">Tables</Link>
                    <Link href='' className=" hover:border-b-2 border-gray-500 transition-all duration-100">Chairs</Link>
                    <Link href='' className=" hover:border-b-2 border-gray-500 transition-all duration-100">Crockery</Link>
                    <Link href='' className=" hover:border-b-2 border-gray-500 transition-all duration-100">Tableware</Link>
                    <Link href='' className=" hover:border-b-2 border-gray-500 transition-all duration-100">Cutlery</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}