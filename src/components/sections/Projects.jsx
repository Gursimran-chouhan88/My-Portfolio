export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Gursimran Food World</h3>
            <p className="text-gray-400 mb-4">
              Project Overview: Developed a responsive recipe discovery web application that enables users to search and explore recipes based on food names and ingredients. Implemented dynamic recipe search functionality using Vanilla JavaScript and API integration to fetch and display relevant recipe data in real time. Built an Add to Favorites feature using browser-side storage, allowing users to save and manage their preferred recipes for quick access.

            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML5", "CSS3", "Vanilla JavaScript", "REST API"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  {tech}
                </span>
              ))}
              <button onClick={() => {
                window.open("https://gursimran-chouhan88.github.io/Gursimran-food-world-meals-site/", "_blank");
              }} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition">
                View Project
              </button>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Polling System API </h3>
            <p className="text-gray-400 mb-4">
              <b>Project Overview:</b> Developed a scalable RESTful Polling System API using Node.js and Express.js, enabling users to create questions, submit votes, and manage polling data. Integrated MongoDB for efficient storage and management of questions, voting records, poll options. Designed and implemented CRUD operations for question and poll management, including question creation, retrieval, updating, and deletion.


            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Node.js","Express.js","MongoDB","REST API"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  {tech}
                </span>
              ))}
              <button onClick={() => {
                window.open("https://github.com/Gursimran-chouhan88/Polling-System-API", "_blank");
              }} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition">
                View Project
              </button>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">E-mart Lending page</h3>
            <div className="text-gray-400 mb-4">
              <b>Project Overview:</b>  Developed a dynamic and 
responsive E-commerce platform, E-mart, 
focused on providing an engaging and seamless 
online shopping experience.

<b> Key Responsibilities:</b>
             <ul className="list-disc list-inside text-gray-400 space-y-2">
                <li>Designed and implemented the user-friendly 
interface using HTML, CSS, JavaScript, and 
Bootstrap to ensure a responsive .</li>
                <li>Developed interactive features to enhance 
user experience, including product listings, 
search functionality, and shopping cart 
management. </li>
                <li>Ensured cross-browser compatibility and 
optimized the platform for various devices 
and screen sizes </li>
                
             </ul>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {[ "HTML","CSS", "JavaScript","Bootstrap", "Git"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  {tech}
                </span>
              ))}
              <button onClick={() => {
                window.open("https://gursimran-chouhan88.github.io/E-mart/", "_blank");
              }} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition">
                View Project
              </button>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Authentication System</h3>
            <p className="text-gray-400 mb-4">
              <b>Project Overview:</b> ign Up: New users can easily register with their details. 🔐 Login: Secure user authentication with Passport.js. 🔐 Reset Password: Users can reset their passwords securely. 🔐 Secure Routes: Protect sensitive routes and ensure only authenticated users can access them

            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Node.js","Express.js","MongoDB","REST API","Passport.js","EJS","Bootstrap","CSS"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  {tech}
                </span>
              ))}
              <button onClick={() => {
                window.open("https://github.com/Gursimran-chouhan88/authentication-system-nodejs", "_blank");
              }} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
