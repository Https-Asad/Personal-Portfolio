import { FaCertificate } from "react-icons/fa"

export default function Certificate() {
  const certificates = [
    { title: "Web Development Bootcamp", file: "/certificates/aptech.jpg" },
    { title: "Front-End Development Certificate", file: "/certificates/meta.jpg" },
    { title: "React Basics", file: "/certificates/react.jpg" },
  ]

  return (
    <section id="certificates" className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-3">Certificates</h2>
        <p className="text-gray-400 mb-10">Some of the certifications I have earned</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6
                         hover:border-blue-500 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-32 bg-gray-800 rounded-lg mb-4 overflow-hidden">
                <a href={cert.file} target="_blank">
                  <img 
                    src={cert.file} 
                    alt={cert.title} 
                    className="h-full w-full object-cover"
                  />
                </a>
              </div>

              {/* Info */}
              <div className="flex items-start gap-3">
                <FaCertificate className="text-blue-500 text-xl mt-1" />
                <div className="text-left">
                  <h3 className="font-medium">{cert.title}</h3>
                  <p className="text-sm text-gray-400">Click image to view</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
