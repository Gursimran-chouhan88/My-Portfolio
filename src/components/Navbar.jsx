import {  useEffect, useState } from "react";
import {FaLinkedin,FaGithub} from "react-icons/fa";

const Navbar = ({menuOpen,setMenuOpen}) => {

    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidden" : "";
    },[menuOpen]);

    const [activeSection, setActiveSection] = useState("");
    const[isScrolled,setIsScrolled] = useState(false);

    useEffect(() => {
        const sections = document.querySelectorAll("#home, #projects, #contact, #about");
        const updateActiveSection = () => {
            const activationPoint = window.innerHeight * 0.35;
            const currentSection = Array.from(sections).find((section) => {
                const bounds = section.getBoundingClientRect();
                return bounds.top <= activationPoint && bounds.bottom > activationPoint;
            });

            if (currentSection) setActiveSection(currentSection.id);
        };
        const observer = new IntersectionObserver(
            updateActiveSection,
            { rootMargin: "-30% 0px -60% 0px" }
        );

        sections.forEach((section) => observer.observe(section));
        updateActiveSection();
        return () => observer.disconnect();
    }, []);

    useEffect(()=>{
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (<nav className={`fixed top-0 w-full z-40 transition-colors duration-300 ${isScrolled ? "bg-[rgba(10,10,10,0.6)] backdrop-blur-lg border-b border-white/10 shadow-lg" : "bg-transparent"}`}>
           
              <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16"> 
                   <a href="#home" className="font-mono text-xl font-bold text-white">
                    <span >&lt;</span>
                      Gursimran <span className="text-blue-400">Portfolio</span><span >&#47;</span>
                      <span >&gt;</span>
                   </a>
                    
                    <div className="h-5 w-7 relative cursor-pointer z-40 md:hidden" onClick={()=>setMenuOpen(!menuOpen)}>
                    &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className={`text-gray-300 hover:text-white transition-colors ${activeSection === 'home' ? 'text-green-400' : ''}`}>Home</a>
                        <a href="#projects" className={`text-gray-300 hover:text-white transition-colors ${activeSection === 'projects' ? 'text-green-400' : ''}`}>Projects</a>
                        <a href="#contact" className={`text-gray-300 hover:text-white transition-colors ${activeSection === 'contact' ? 'text-green-400' : ''}`}>Contact</a>
                        <a href="#about" className={`text-gray-300 hover:text-white transition-colors ${activeSection === 'about' ? 'text-green-400' : ''}`}>About</a>
                         <div className="flex items-center space-x-3">
                            <a href="https://github.com/Gursimran-chouhan88" target="_blank"  className="text-gray-300 hover:text-white transition-colors"><FaGithub/></a>
                        <a href="https://www.linkedin.com/in/gursimranjeet-singh" target="_blank" className="text-gray-300 hover:text-white transition-colors"><FaLinkedin/></a>
                         </div>
                    </div>
                </div>
              </div>
           </nav>)

}
            


export default Navbar;