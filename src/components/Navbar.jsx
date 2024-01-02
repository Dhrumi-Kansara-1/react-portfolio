import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { FaGithub } from "react-icons/fa";

function Navbar() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)
  return (
    <nav className={`bg-[#191924] main_container absolute w-full z-[10] `}>
      <div className="inner_container flex_center h-20     ">
        <div id="logo" className="font-semibold text-xl cursor-pointer">
          <span>Portfolio</span>
        </div>
        <ul className="hidden md:flex md:gap-2 lg:gap-4 ">
          <li className="nav_link">About</li>
          <li className="nav_link">Skills</li>
          <li className="nav_link">Experience</li>
          <li className="nav_link">Projects</li>
          <li className="nav_link">Eduction</li>
        </ul>
        <a
          href="/"
          id="button"
          className=" whitespace-nowrap hidden md:flex md:gap-1 md:items-center border border-purple-500 p-2 rounded-full text-purple-500 hover:bg-purple-500 hover:text-white font-medium transition duration-[0.6s] ease-out hover:ease-in"
        >
          <FaGithub  />  Github  
        </a>
        <button
          onClick={() => {
            setIsOpenDropdown((prev) => !prev)
          }}
          className="block md:hidden p-2"
        >
          <FontAwesomeIcon icon={faBars} className="text-white" size="lg" />
        </button>
      </div>

      {isOpenDropdown && (
        <div className="    opacity-75 md:hidden mb-6">
          <ul className=" flex flex-col gap-2  mb-4">
            <li className="nav_link">About</li>
            <li className="nav_link">Skills</li>
            <li className="nav_link">Experience</li>
            <li className="nav_link">Projects</li>
            <li className="nav_link">Eduction</li>
          </ul>
          <a
            href="/"
            id="button"
            // className=" hover:border hover:bg-[#191924]   hover:border-purple-500  p-2 rounded-full hover:text-purple-500  bg-purple-500  text-white font-medium transition duration-[0.4s] ease-out hover:ease-in"
            className="nav_link flex gap-2 items-center"
          >
            <FaGithub  />  
            <span>Github</span>
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
