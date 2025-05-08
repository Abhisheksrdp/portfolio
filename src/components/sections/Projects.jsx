import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

    return(

        <section id="projects" className="min-h-screen flex items-center justify-center py-20">

            
           <RevealOnScroll>

            <div className="max-w5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent text-center  ">
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">

                <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all ">
                    <h3 className="text-xl font-bold mb-2">GDP Game (The Fantasy Prime Minister) </h3>
                    <p className="text-gray-400 mb-4">Developed Fantasy Prime Minister, a platform where users input defense and welfare values to calculate
                    GDP, with visual representations that promote awareness of economic health and fiscal dynamics. Built a multi-page app from Figma designs with user authentication, form validation, a real-time
                    data dashboard, and an interactive leader board with search, sort, and filter features</p>

                    <div>
                        {["React.jS", "TailwindCSS", "Redux", "Node.JS", "MongoDB"].map((tech,key)=>(
                            <span 
                            key={key}
                            className="bd-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all ">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>


                <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all ">
                    <h3 className="text-xl font-bold mb-2">Tribe Africa (Web Portal for Travel and Business)</h3>
                    <p className="text-gray-400 mb-4">Led development of Tribe Africa, a multi-platform app featuring country info, travel bookings,
                    events, hotels, business listings, and community features like blogs and Q&A.Built with user authentication, API integrations, real-time listings, interactive blogs, and Sanity
                    CMS for dynamic content management.</p>

                    <div>
                        {["React.jS", "TailwindCSS", "Redux", "Node.JS","Firebase", "Sanity-CMS"].map((tech,key)=>(
                            <span 
                            key={key}
                            className="bd-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all ">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>


                <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all ">
                    <h3 className="text-xl font-bold mb-2">Industrial web app (EWIN)</h3>
                    <p className="text-gray-400 mb-4">Contributed to Enabling Win, supporting food manufacturers in Southeast Asia by delivering commer-
                    cially viable technologies to improve capacity, efficiency, and product quality.Designed modular machinery UI from Figma, using Atomic Design Pattern and pagination for
                    efficient data handling and a seamless user experience.</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React.jS", "RestAPI'S", "Npm", "TailwindCSS", "Redux", "Node.JS", "MongoDB"].map((tech,key)=>(
                            <span 
                            key={key}
                            className="bd-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all ">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all ">
                    <h3 className="text-xl font-bold mb-2">TO-DO List App </h3>
                    <p className="text-gray-400 mb-4">This project is a fully responsive To-Do application developed using HTML, Tailwind CSS, and JavaScript, designed to efficiently
manage tasks with a user-friendly interface. The application allows users to add, edit, and delete tasks, while dynamically
displaying the total number of tasks. Additionally, tasks are stored in local storage, ensuring persistence even after page refresh.</p>

                    <div>
                        {["HTML5", "CSS3", "TailwindCSS", "JavaScript"].map((tech,key)=>(
                            <span 
                            key={key}
                            className="bd-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all ">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

            </div>

            </div>

            </RevealOnScroll>

        </section>

    )
}