import { CircleCheck, CreditCard, Fullscreen, Sprout, Truck } from "lucide-react"

interface IBrand {
    head: string;
    title1: string;
    description1: string;
    title2: string;
    description2: string;
    title3: string;
    description3: string;
    title4: string;
    description4: string;
}
const Brand = (props:IBrand) => {
    return (
        <div className="flex flex-col px-3 py-10 gap-5 sm:items-center">
      <div className="my-4">
        <h3 className="max-w-52 font-light text-lg sm:text-xl sm:max-w-80">{props.head}</h3>
      </div>

      <div className="flex flex-col sm:flex-wrap justify-center sm:flex-row gap-5 sm:gap-16">
      <div className="bg-gray-200 p-5 space-y-2 rounded-sm sm:w-72 sm:h-auto sm:p-10">
      <Truck />
      <h3 className="text-sm">{props.title1}</h3>
      <h4 className="font-light text-sm">{props.description1}</h4>
      </div>
      <div className="bg-gray-200 p-5 space-y-2 rounded-sm sm:w-72 sm:h-auto sm:p-10">
      <CircleCheck />
      <h3 className="text-sm">{props.title2}</h3>
      <h4 className="font-light text-sm">{props.description2}</h4>
      </div>
      <div className="bg-gray-200 p-5 space-y-2 rounded-sm sm:w-72 sm:h-auto sm:p-10">
      <CreditCard />
      <h3 className="text-sm">{props.title3}</h3>
      <h4 className="font-light text-sm">{props.description3}</h4>
      </div>
      <div className="bg-gray-200 p-5 space-y-2 rounded-sm sm:w-72 sm:h-auto sm:p-10">
      <Sprout />
      <h3 className="text-sm">{props.title4}</h3>
      <h4 className="font-light text-sm">{props.description4}</h4>
      </div>
      </div>
    </div>
    )
}

export default Brand