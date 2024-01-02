import { bio } from "../data/contants.js"

function Hero() {
  return (
    <header className="main_container h-5/6 ">
      <div className="inner_container flex flex-col items-center md:items-start gap-6 md:gap-4">
        <h1 className="text-4xl text-center font-poppins font-bold md:text-left">Hi, I am <br /> <span className="whitespace-nowrap">{bio.name}</span></h1>
        <p className="text-3xl whitespace-nowrap">I am a <span className="text-purple-500 font-medium">{bio.roles[0]}</span></p>
        <p className="text-gray-500 text-center leading-8 md:text-xl md:text-left max-w-xl">{bio.description}</p>
        <button className="rounded-full  font-semibold  bg-gradient-to-r from-purple-500   to-fuchsia-500 py-3 px-6 md:text-xl md:px-10 transition ease-in-out delay-150   hover:-translate-y-1 hover:scale-110  duration-300 ">Check Resume</button>  
      </div>
    </header>
  )
}

export default Hero