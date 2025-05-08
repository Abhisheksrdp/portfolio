import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const programmingLanguages =["HTML 5" , "CSS 3", "JavaScript (ES6+)", "Core Java"]; 
    const Frameworks =["React" , "Node JS ", "Express JS "];
    const Libraries =["Bootstrap" , "TailwindCSS "];
    const Databases =["MangoDB" , "MYSQL "];
    const VersionControl =["GIT" , "Git-Hub ", "VS Code"];
    const ProductivityTools =["MS Word" , "MS Excel "];

    return(
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent text-center  ">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Passionate developer with expertise in building scalable web applications and creating innovative solutions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y- transition-all">
                            <h3 className="text-xl font-bold mb-4">
                                Programming-Languages
                            </h3>

                            <div className="flex flex-wrap gap-2 ">
                                {programmingLanguages.map((tech,key)=> (
                                    <span 
                                    key={key}
                                    className="bd-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all ">
                                        {tech}
                                    </span>
                                ))}


                            </div>
                        </div>


                        <div className="rounded-xl p-6 hover:-translate-y- transition-all">
                            <h3 className="text-xl font-bold mb-4">
                            Frameworks
                            </h3>

                            <div className="flex flex-wrap gap-2 ">
                                {Frameworks.map((tech,key)=> (
                                    <span 
                                    key={key}
                                    className="bd-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all ">
                                        {tech}
                                    </span>
                                ))}


                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y- transition-all">
                            <h3 className="text-xl font-bold mb-4">
                            Libraries
                            </h3>

                            <div className="flex flex-wrap gap-2 ">
                                {Libraries.map((tech,key)=> (
                                    <span 
                                    key={key}
                                    className="bd-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all ">
                                        {tech}
                                    </span>
                                ))}


                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y- transition-all">
                            <h3 className="text-xl font-bold mb-4">
                            Databases
                            </h3>

                            <div className="flex flex-wrap gap-2 ">
                                {Databases.map((tech,key)=> (
                                    <span 
                                    key={key}
                                    className="bd-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all ">
                                        {tech}
                                    </span>
                                ))}


                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y- transition-all">
                            <h3 className="text-xl font-bold mb-4">
                            VersionControl
                            </h3>

                            <div className="flex flex-wrap gap-2 ">
                                {VersionControl.map((tech,key)=> (
                                    <span 
                                    key={key}
                                    className="bd-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_rgba(59,130,246,0.1)] transition-all ">
                                        {tech}
                                    </span>
                                ))}


                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y- transition-all">
                            <h3 className="text-xl font-bold mb-4">
                            ProductivityTools
                            </h3>

                            <div className="flex flex-wrap gap-2 ">
                                {ProductivityTools.map((tech,key)=> (
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all ">
                          <h3 className="text-xl font-bold mb-4"> 🏫 Education</h3>
                          <ul className=" list-disc list-inside text-gray-300 space-y-2 ">
                            <li>
                                <strong>Bachelor of Technology</strong> - Institute of Aeronautical Engineering. 
                            </li>
                            <li>
                                <strong>Polytechnic</strong> - Ratnapuri Institute of Technology - College Of Polytechnic.
                            </li>
                          </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 transition-all ">
                          <h3 className="text-xl font-bold mb-4"> 💼 Work Experience</h3>
                          <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-bold mb-1">Frontend Developer at Error Technologies  [Feb 2024 - Present]</h4>
                                <p>Integrated third-party APIs for seamless front-end and back-end communication and Quickly adapted to new technologies, demonstrating a commitment to continuous learning.
                                </p>
                            </div>

                          </div>
                    </div>

                </div>

            </div>

            </RevealOnScroll>

        </section>
    )
}