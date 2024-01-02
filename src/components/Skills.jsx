import { skills } from "../data/contants.js"

function Skills() {
  return (
    <div id="container" className="main_container pt-20">
      <div id="wrapper" className="inner_container flex flex-col w-full gap-3 items-center">
        <h2 id="title " className="text-center text-5xl font-semibold py-2">
          Skills
        </h2>
        <p id="desc" className="text-center text-gray-400">
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </p>
        {/* flex flex-col gap-6 mt-3 md:flex-row md:flex-wrap items-center md:justify-center */}
        <div id="skill-contanier" className="grid grid-cols-1  gap-6 md:mt-4 sm:grid-cols-2 place-content-center max-w-3xl">
          {skills.map((skill, index) => {
            return (
              <div id="contaner" key={index} className="flex flex-col  gap-3 border border-purple-500 py-3 px-4 rounded-lg  ">
                <h3 id="skill-title" className="text-center text-2xl font-medium">{skill.title}</h3>
                <div id="skill-contanier" className="flex flex-wrap gap-2 justify-center">
                  {skill.list.map((item, j) => {
                    return (
                      <div id="skill-item" key={j} className="flex items-center  gap-3 rounded-md border border-gray-300 py-2 px-4 h-10">
                        <img id="skill-img"  src={item.image} alt={item.name} className="w-5 "/>
                        <span>{item.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
