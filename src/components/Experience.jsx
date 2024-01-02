import { experiences } from "../data/contants.js"
import ExperienceCard from "./cards/ExperienceCard.jsx"

function Experience() {
  return (
    <div id="container" className="main_container pt-20">
      <div
        id="wrapper"
        className="inner_container flex flex-col w-full gap-3 items-center"
      >
        <h2 id="title " className="text-center text-5xl font-semibold py-2">
          Experience
        </h2>
        <p id="desc" className="text-center text-gray-400">
          My work experience as a software engineer and working on different
          companies and projects.
        </p>
        <div id="experience-container" className=" flex flex-col items-start gap-6">
          {experiences.map((experience, index) => {
            return (
              <div key={index} className="flex gap-4 ">
                <div className="flex flex-col   items-center gap-1.5">
                  <div className="w-2 h-2 first-letter: rounded-full border  border-fuchsia-500       " />
                  <div className="border-l-2 border-l-purple-500 flex-1   " />
                </div>

                <ExperienceCard experience={experience} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Experience
