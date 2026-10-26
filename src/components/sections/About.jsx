
export const About = () => {
  const frontendSkills = [
    "React",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "HTML",
  ];

  const backendSkills = ["Node.js", "Express.js", "AWS", "MongoDB", "firebase"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
     
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am an MCA graduate and adaptable Full-Stack Developer with a robust foundation in the MERN stack (MongoDB, Express.js, React.js, Node.js) and Java. My unique career path blends technical development with hands-on team leadership and operations management. Having worked both as a full-stack engineer and an operational supervisor at major supply-chain networks like Delhivery, I excel at bridging the gap between digital systems and real-world execution.
            </p>
            <p>I thrive on solving complex logic problems, optimizing database performance, and building clean, responsive user interfaces. My experience managing on-the-floor teams and leading daily operations has sharpened my communication, debugging under pressure, and cross-functional collaboration skills. I am currently seeking full-time development or software engineering opportunities where I can leverage my tech stack and leadership background to build scalable, high-impact products.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        { /* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> MCA in Computer Science </strong> - Dr IT Group of Institutes, Banur
                  (2023-2025)
                </li>
                <li>
                  <strong> BCA in Computer Science </strong> - Punjab Institute of Technology, Rajpura
                  (2019-2022)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    
                    Full Stack Developer Intern at Prodigy InfoTech (Dec 2024- Jan 2025)
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based
                    applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    
                     Full Stack Developer Trainee at Coding Ninjas (Oct 2022- Jun 2023)
                  </h4>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs
                  </p>
                </div>
              </div>
            </div>
          </div>*/}
        </div>
     
    </section> 
  );
};