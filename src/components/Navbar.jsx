import { useEffect, useState } from "react"
import cv from '../assets/asadullah_CV.pdf'

export default function Navbar() {
  const [active, setActive] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["skills", "projects", "certificates", "contact"]
      const scrollY = window.scrollY + 120

      sections.forEach((section) => {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollY >= top && scrollY < top + height) {
            setActive(section)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav  className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

      <a href="#hero">

        <h1 id="navbar" className="text-xl font-bold cursor-pointer text-white">
          Asad<span className="text-blue-500">Dev</span>
        </h1>
      </a>

        <ul className="flex gap-8 text-sm font-medium">
          {[
            { name: "Skills", id: "skills" },
            { name: "Projects", id: "projects" },
            { name: "Certificates", id: "certificates" },
            { name: "Contact", id: "contact" },
      
          ].map((item) => (
            <li key={item.id} className="relative cursor-pointer group">
              <a
                href={`#${item.id}`}
                className={`transition ${
                  active === item.id
                    ? "text-blue-500"
                    : "text-gray-400 group-hover:text-white"
                }`}
              >
                {item.name}
              </a>

              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-blue-500 transition-all
                ${active === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <a
            href={cv}
            download
            className="hidden md:block px-4 py-2 text-sm rounded bg-blue-600 hover:bg-blue-700 transition cursor-pointer"
          >
            Download CV
          </a>

          <a
            href="https://www.linkedin.com/in/asadullah-rind-0a20483a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-4 py-2 text-sm rounded border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition cursor-pointer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  )
}
