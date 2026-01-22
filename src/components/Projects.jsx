import { FaGithub } from "react-icons/fa"

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "My personal portfolio built using React and Tailwind CSS.",
      tech: ["React", "Tailwind"],
      screenshot: "/projects/image3.jpeg",
      github: "https://github.com/Https-Asad",
    },
    {
      title: "Todo App",
      description: "A simple todo app to practice JavaScript and React basics.",
      tech: ["JavaScript", "React"],
      screenshot: "/projects/image2.jpeg",
      github: "https://github.com/Https-Asad",
    },
    {
      title: "Kanban Board",
      description: "A simple Kanban Board to practice JavaScript and Dom-Manipulation.",
      tech: ["JavaScript", "Dom-Manipulation"],
      screenshot: "/projects/image.png",
      github: "https://github.com/Https-Asad",
    },
    {
      title: "Snake Game",
      description: "A simple Snake Game to practice JavaScript and Logic.",
      tech: ["JavaScript", "Logic"],
      screenshot: "/projects/image4.jpeg",
      github: "https://github.com/Https-Asad",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
        <p className="mt-3 text-gray-400">
          Projects I have built while learning front-end development
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6
                       hover:border-blue-500 hover:-translate-y-2
                       transition-all duration-300"
          >
            <a href={project.screenshot} target="_blank" rel="noopener noreferrer">
              <div className="h-40 w-full overflow-hidden rounded-lg mb-4 cursor-pointer hover:opacity-90 transition">
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </a>

            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-400 text-sm">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-blue-600/10 text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-gray-300 hover:text-white transition"
            >
              <FaGithub />
              View Code on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
