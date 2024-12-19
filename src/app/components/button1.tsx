interface IProps {
    text: string;
}

const Btn1 = (props:IProps) => {
    return (
    <button className="w-[70vw] md:w-44 bg-[#2A254B] hover:bg-[#3e3766] text-white transition-all duration-300 p-3">
        {props.text}
    </button>
    )
}
export default Btn1