import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";


export default function Header2() {
    return (
        <header className="md:px-10 md:py-5 p-5 border-gray-300 ">
            <div className="flex justify-between items-center">

                <div className="flex justify-between items-center w-full flex-row">

                <div id="title">
                <Link href="/">
                    <h1 className="text-3xl font-sans font-light">Avion</h1>
                </Link>                </div>

                <div>
                <div className="hidden md:block">
                    <div className="p-4 flex gap-10 text-gray-600 justify-center items-center">
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

                <div className="flex gap-5">
                <div id="search">
                    <Search className="w-5 h-5" />
                </div>
                <div className="flex gap-5">
                <Link href="./shoppingBasket">
                    <div id="cart">
                        <ShoppingCart className="w-5 h-5" />
                    </div>
                    </Link>

                    <div id="profile">
                        <CircleUserRound className="w-5 h-5" />
                    </div>
                </div>


                <div className="block md:hidden">
                <Menu />
                </div>
                </div>
                
                </div>

            </div>

        </header>
    )
}