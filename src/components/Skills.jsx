import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGithub,
} from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"

export default function Skills() {
    const skills = [
        { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
        { name: "React", icon: <FaReact />, color: "text-cyan-400" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
        { name: "GitHub", icon: <FaGithub />, color: "text-gray-300" },
    ]

    return (
        <section id="skills" className="py-20 px-6 bg-gray-950">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Skills
                    </h2>
                    <p className="mt-3 text-gray-400">
                        Technologies I use to build modern web applications
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="group bg-gray-900 border border-gray-800 rounded-xl p-6
                         flex flex-col items-center justify-center
                         hover:border-blue-500 hover:-translate-y-2
                         transition-all duration-300"
                        >
                       
                            <div
                                className={`text-4xl mb-4 ${skill.color}
                            group-hover:scale-110 transition`}
                            >
                                {skill.icon}
                            </div>

             
                            <h3 className="text-sm font-medium text-gray-200">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
