import React from "react"

function ExperienceCard({ experience }) {
  return (
    <div className="border border-blue-500 rounded-md flex flex-col gap-3 p-4 sm:w-[650px] shodow-sm ">
      <div id="top" className="flex gap-2">
        <img
          src={experience.img}
          alt={experience.role}
          className="h-10 rounded-md"
        />
        <div id="top-body" className="">
          <p className="text-lg font-bold text-gray-300">{experience.role}</p>
          <p className="text-sm text-gray-400">{experience.company}</p>
          <p className="text-sm text-gray-500">{experience.date}</p>
        </div>
      </div>
      <p id="desc"  className="text-sm text-gray-400 w-full">{experience.desc.substring(0, 60)}....</p>
      {experience.hasOwnProperty("skills") && experience.skills.length > 0 && (
        <div id="skills" className="flex gap-4">
          <p className="text-gray-300">Skills:</p>
          <div id="skill-wrapper" className="flex gap-2 flex-wrap ">
            {experience.skills.map((skill, index) => {
              return (
                <div key={index} className="flex items-center justify-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-300"/> 
                  <span className="text-gray-400">
                    {skill}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default ExperienceCard
