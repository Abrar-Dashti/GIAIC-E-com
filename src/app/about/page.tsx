import Link from "next/link"
import Header3 from "../components/header3"
import Banner1 from "../components/banner1"
import Image from "next/image"
import Banner2 from "../components/banner2"
import Brand from "../components/brandbanner"

export default function About() {
    return (
        <div>
            <Header3 />
            <div className="py-12 px-2 flex flex-col sm:gap-10 sm:flex-row items-center justify-around ">
                <div className="text-3xl font-sans p-5">
                    <h2 className="text-start sm:w-[40rem]">A brand built on the love of craftmanship, quality and outstanding customer service</h2>
                </div>
                <div className="w-full sm:w-auto py-3 flex items-center justify-center text-center">
                    <Link href="#" className="text-gray-600 bg-gray-100 w-full py-3 md:p-5 rounded-lg">View our products</Link>
                </div>
            </div>

            <div className="p-5 sm:p-10 flex flex-row flex-wrap gap-5 md:gap-10 items-center justify-center">
            <Banner1 title='It all started as small idea' description='A global brand with a local begining, our story begins in a small studio in south london in early 2014' text='View collection' />
            <div>
            <Image src='/endPic.jpg' alt="Footer Pic" width={500} height={500} objectFit="cover" />
            </div>
            </div>

            <div className="flex flex-row flex-wrap items-center bg-gray-100 justify-between">
                <div><Image src="/aboutpic.jpg" width={382} height={382} alt="About Us" quality={100} className="w-[40rem] h-[36rem] object-cover"></Image></div>
                <div className="w-[50%] flex items-center justify-start">
                <div className="bg-gray-100">
                    <Banner2 title="Our service is not just personal,it's actually hyper personally exquisite" description="When we started Avion the idea was simple. Make high quality furniture with affordable and available for mass market." description2="Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community." text="get in touch" />
                </div>
                </div>
            </div>

            <div>
                <Brand head="What makes our brand different" title1="Next day as standard" description1="Order before 3pm and get your order next day as standard" title2="Made by true artisans" description2="Handmade crafted goods made with real passion and craftmanship" title3="Unbeatable prices" description3="For our material and quality. You won't find better prices anywhere" title4="Recycled packaging" description4="We use 100% recycled packaging to ensure our footprint is managable" />
            </div>

            <div className="p-7 sm:my-10 flex flex-col justify-center items-start sm:items-center">
                <div className="mb-5 text-xl">
                    <h3>Join the club and get the benefits</h3>
                </div>
                <div className="mb-10 font-light">
                    <h4>Sign up for our newsletter and recieve exclusive offers on new ranges, sales, pop up stores and more</h4>
                </div>
                <div className="w-full flex items-center justify-center">
                    <input type="text" placeholder="your@email.com" className="w-full md:max-w-72 p-4 font-light bg-gray-100 outline-none text-gray-800 " />
                    <button className="bg-[#6258af] p-4 w-32 font-extralight text-white">Sign up</button>
                </div>
            </div>

            <div id="footer">
            <div className="p-5 md:p-10  bg-[#2A254B] flex flex-col gap-5">

    <div className="text-white flex flex-col md:flex-row md:justify-around items-center md:items-start gap-8 md:gap-20 text-sm font-extralight">
        <div className="w-full flex flex-row flex-wrap gap-5 justify-around items-center md:items-start">

            <div className="w-[7.5rem] sm:w-auto p-1">
                <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Avion</h1>
                <h3>21 New York street</h3>
                <h3>New York City</h3>
                <h3>United States of America</h3>
                <h3>432 34</h3>
            </div>

            <div className="flex flex-col gap-2 ">
                <h3 className="text-lg">Social links</h3>
                <div className="flex flex-wrap gap-5 md:gap-7 w-32 sm:w-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 16 16">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 16 16">
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 16 16">
    <path d="M4.671 0c.88 0 1.733.247 2.468.702a7.42 7.42 0 0 1 6.02 2.118 7.37 7.37 0 0 1 2.167 5.215q0 .517-.072 1.026a4.66 4.66 0 0 1 .6 2.281 4.64 4.64 0 0 1-1.37 3.294A4.67 4.67 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.42 7.42 0 0 1-6.114-2.107A7.37 7.37 0 0 1 .529 8.035q0-.545.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7 7 0 0 0 1.257.653q.737.308 1.145.523c.229.112.437.264.615.448.135.142.21.331.21.528a.87.87 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.6 2.6 0 0 1-1.048-.206 11 11 0 0 1-.532-.253 1.3 1.3 0 0 0-.587-.15.72.72 0 0 0-.501.176.63.63 0 0 0-.195.491.8.8 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.1 5.1 0 0 0 2.212.419 4.6 4.6 0 0 0 1.624-.265 2.3 2.3 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.1 2.1 0 0 0-.279-1.101 2.5 2.5 0 0 0-.772-.792A7 7 0 0 0 8.486 7.3a1 1 0 0 0-.145-.058 18 18 0 0 1-1.013-.447 1.8 1.8 0 0 1-.54-.387.73.73 0 0 1-.2-.508.8.8 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096q.412.119.802.293c.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.7.7 0 0 0 .18-.496.72.72 0 0 0-.17-.476 1.4 1.4 0 0 0-.556-.354 3.7 3.7 0 0 0-.708-.183 6 6 0 0 0-1.022-.078 4.5 4.5 0 0 0-1.536.258 2.7 2.7 0 0 0-1.174.784 1.9 1.9 0 0 0-.45 1.287c-.01.37.076.736.25 1.063"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 16 16">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 16 16">
    <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0"/>
    </svg>
                </div>
            </div>

      <div>
        <ul>
          <li className="flex flex-col gap-1">
            <h3 className="text-lg font-normal">Menu</h3>
            <h4>New Arrivals</h4>
            <h4>Best sellers</h4>
            <h4>Recently viewed</h4>
            <h4>Popular this week</h4>
            <h4>All products</h4>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="flex flex-col gap-1">
            <h3 className="text-lg font-normal">Our company</h3>
            <h4>About us</h4>
            <h4>Vacancies</h4>
            <h4>Contact us</h4>
            <h4>Privacy</h4>
            <h4>Return policy</h4>
          </li>
        </ul>
      </div>
    </div>
    </div>

    <hr className="border-t-2 md:mt-10 border-[#584da0]" />

    <div className="w-full font-medium text-center md:hidden text-white flex items-center justify-center md:justify-between">
      Copyright 2022 Avion LTD
    </div>

    <div className="hidden md:block">
    <div className="flex flex-row gap-8 ">
    <div className="w-full font-medium text-center text-white flex items-center md:justify-between">
      Copyright 2022 Avion LTD
    </div>
    </div>
    </div>
    </div>
            </div>
        </div>
    )
}