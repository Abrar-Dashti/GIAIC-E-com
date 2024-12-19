interface BProp {
    title: string;
    description:  string;
    description2:  string;
    text: string;
}
export default function Banner2(props:BProp) {
    return (
      <div className="h-60 sm:h-[31rem]  max-w-[31rem] bg-gray-100 p-5 text-gray-600 gap-5 flex flex-col justify-between items-center sm:items-start">
      <div className="space-y-4">
      <h3 className="text-lg sm:text-xl md:text-3xl font-extralight text-black font-sans">{props.title}</h3>
      <h3 className="text-sm sm:text-lg max-w-[29rem] md:max-w-[35rem] font-extralight font-sans">{props.description}</h3>
      <h3 className="text-sm sm:text-lg max-w-[29rem] md:max-w-[35rem] font-extralight font-sans mt-5">{props.description2}</h3>
      </div>
      <div>
      <button  className="w-[70vw] md:w-44 bg-[#f5f5f5] hover:bg-[#ffffff] text-black transition-all duration-300 p-3">{props.text}</button>
      </div>
      </div>
    )
}
