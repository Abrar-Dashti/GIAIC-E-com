import Image from "next/image";
import Link from "next/link";
interface IProduct {
    phead: string;
    ptitle1: string;
    pprice1: string;
    ptitle2: string;
    pprice2: string;
    ptitle3: string;
    pprice3: string;
    ptitle4: string;
    pprice4: string;
}

const Products = (props:IProduct) => {
    return (
        <div className="flex flex-col flex-wrap justify-center items-center my-10 font-light">
          <h3 className="text-lg font-normal pl-5">{props.phead}</h3>
      <div className="flex flex-row flex-wrap justify-around gap-3 md:gap-16 p-5 md:text-lg font-semibold text-gray-600">

      <div>
        <Link href="./productListing" className="flex flex-col justify-center gap-3 sm:gap-7">
        <Image src="/Thedandychair.jpg" alt={props.ptitle1} width={150} height={100} objectFit="fill" quality={100} className="w-32 h-40 sm:w-60 sm:h-80 "/>
        <div>
        <h3>{props.ptitle1}</h3>
        <h3>£{props.pprice1}</h3>
        </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center gap-3 sm:gap-7">
        <Image src="/vaseset.jpg" alt={props.ptitle2} width={150} height={100} objectFit="fill" quality={100} className="w-32 h-40 sm:w-60 sm:h-80 "/>
        <div>
        <h3>{props.ptitle2}</h3>
        <h3>£{props.pprice2}</h3>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3 sm:gap-7">
        <Image src="/Silkyvase.jpg" alt={props.ptitle3} width={150} height={100} objectFit="fill" quality={100} className="w-32 h-40 sm:w-60 sm:h-80"/>
        <div>
        <h3>{props.ptitle3}</h3>
        <h3>£{props.pprice3}</h3>
        </div>
      </div>
      <div className=" flex flex-col justify-center gap-3 sm:gap-7">
        <Image src="/Lamp.jpg" alt={props.ptitle4} width={150} height={100} objectFit="fill" quality={100} className="w-32 h-40 sm:w-60 sm:h-80 "/>
        <div>
        <h3>{props.ptitle4}</h3>
        <h3>£{props.pprice4}</h3>
        </div>
      </div>
      </div>
      <div>
        <button className="w-[13rem] sm:w-60 bg-gray-200 hover:bg-gray-300 hover:text-gray-800 text-gray-700 transition-all duration-300 p-2 rounded-md mx-5">View collection</button>
      </div>
    </div>
    )
}

export default Products