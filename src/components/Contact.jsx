export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 bg-gray-950">
            <div className="max-w-3xl mx-auto">


                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Contact Me
                    </h2>
                    <p className="mt-3 text-gray-400">
                        I'm open to internships and freelance opportunities. Drop me a message!
                    </p>
                </div>


                <form className="bg-gray-900 border border-gray-800 rounded-xl p-8 flex flex-col gap-6">


                    <div className="flex flex-col">
                        <label className="mb-2 text-gray-300 font-medium">Name</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2
                         text-gray-200 focus:border-blue-500 focus:outline-none transition"
                        />
                    </div>


                    <div className="flex flex-col">
                        <label className="mb-2 text-gray-300 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2
                         text-gray-200 focus:border-blue-500 focus:outline-none transition"
                        />
                    </div>


                    <div className="flex flex-col">
                        <label className="mb-2 text-gray-300 font-medium">Message</label>
                        <textarea
                            placeholder="Write your message..."
                            rows={5}
                            className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2
                         text-gray-200 focus:border-blue-500 focus:outline-none transition resize-none"
                        ></textarea>
                    </div>


                    <button
                        type="submit"
                        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium
                       py-3 rounded-md transition"
                    >
                        Send Message
                    </button>
                </form>

                <div className="mt-8 text-center text-gray-400">
                    <p>Email: <span className="text-blue-400">asadullahb801@gmail.com</span></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/asadullah-rind-0a20483a3/" target="_blank" className="text-blue-400 hover:underline">View Profile</a></p>
                </div>

            </div>
        </section>
    )
}
