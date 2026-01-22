import cv from '../assets/asadullah_CV.pdf'

export default function Hero() {
  return (
    <section id='hero' className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-125 h-125 bg-blue-600/20 rounded-full blur-[120px]"></div>

      <div className="relative z-10 text-center max-w-3xl">

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Asadullah
          </span>
        </h1>

        <p className="mt-6 text-gray-400 text-base md:text-lg">
          Front-End Developer specializing in building modern, responsive, and
          user-friendly web applications using{" "}
          <span className="text-white font-medium">
            React & Tailwind CSS
          </span>.
        </p>


        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="https://github.com/Https-Asad"
            target='_blank'
            className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 transition font-medium"
          >
            View Projects
          </a>

          <a
            href={cv}
            download
            className="px-6 py-3 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-800 transition font-medium"
          >
            Download CV
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <span className="px-3 py-1 border border-gray-700 rounded">React</span>
          <span className="px-3 py-1 border border-gray-700 rounded">Tailwind</span>
          <span className="px-3 py-1 border border-gray-700 rounded">JavaScript</span>
        </div>
      </div>
    </section>
  )
}
