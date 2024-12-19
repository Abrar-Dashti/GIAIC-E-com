interface BProp {
    title: string;
    description:  string;
    text: string;
}
export default function Banner1(props:BProp) {
    return (
      <div className="h-60 sm:h-[31rem]  max-w-[31rem] bg-[#2A254B] p-5 text-white gap-5 flex flex-col justify-between items-center sm:items-start">
      <div className="space-y-4">
      <h3 className="text-lg sm:text-xl md:text-3xl font-extralight font-sans">{props.title}</h3>
      <h3 className="text-sm sm:text-lg max-w-[29rem] md:max-w-[35rem] font-extralight font-sans">{props.description}</h3>
      </div>
      <div>
      <button  className="w-[70vw] md:w-44 bg-[#6f689b80] hover:bg-[#a298e380] text-white transition-all duration-300 p-3">{props.text}</button>
      </div>
      </div>
    )
}
