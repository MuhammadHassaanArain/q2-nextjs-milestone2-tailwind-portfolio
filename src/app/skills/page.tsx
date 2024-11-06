import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSanity } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

function Skills() {
  return (
    <main className="bg-bgdark text-center flex flex-col items-center py-10">
      <section className="w-11/12 md:w-3/5">
        <h2 className="text-accentOrange text-2xl py-4 font-bold">My SKills</h2>
        <p className="text-textSecondary md:text-xl font-bold font-mono">
          As a full stack developer, I have developed a comprehensive skill set
          spanning both frontend and backend technologies. This allows me to
          build robust, scalable, and dynamic web applications from the user
          interface down to the database. My expertise covers a range of modern
          tools, frameworks, and languages, empowering me to tackle all aspects
          of web development. Below is an overview of my primary skills, where I
          excel, and additional skills that complement my core expertise.
        </p>
      </section>
      <section>
        {/* <h3 className="text-accentOrange text-xl py-2 font-bold" >Main Skills</h3> */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 py-8 ">
          <div className="bg-backgroundDark p-2 rounded shadow-md shadow-accentOrange m-2">
            <BiLogoTypescript className="h-3/4 w-10/12 " />
            <span>Typescript</span>
          </div>
          <div className="bg-backgroundDark p-2 rounded shadow-md shadow-accentOrange m-2">
            <SiNextdotjs className="h-3/4 w-10/12" />
            <span>Next JS </span>
          </div>
          <div className="bg-backgroundDark p-2 rounded shadow-md shadow-accentOrange m-2">
            <BiLogoPostgresql className="h-3/4 w-10/12" />
            <span>PostgreSQl</span>
          </div>
          <div className="bg-backgroundDark p-2 rounded shadow-md shadow-accentOrange m-2">
            <IoLogoJavascript className="h-3/4 w-10/12" />
            <span>Javascript</span>
          </div>
          <div className="bg-backgroundDark p-2 rounded shadow-md shadow-accentOrange m-2">
            <SiSanity className="h-3/4 w-10/12" />
            <span>Sanity CMS</span>
          </div>
          <div className="bg-backgroundDark p-2 rounded shadow-md shadow-accentOrange m-2">
            <FaReact className="h-3/4 w-10/12" />
            <span>React JS</span>
          </div>

          <div className="bg-backgroundDark p-2 rounded shadow-md shadow-accentOrange m-2">
            <FaHtml5 className="h-3/4 w-10/12" />
            <span>HTML</span>
          </div>
          <div className="bg-backgroundDark p-2 rounded shadow-md shadow-accentOrange m-2">
            <FaCss3 className="h-3/4 w-10/12" />
            <span>CSS</span>
          </div>
          <div className="bg-backgroundDark p-2 rounded shadow-md shadow-accentOrange m-2">
            <FaGitAlt className="h-3/4 w-10/12" />
            <span>Git & Github</span>
          </div>
          <div className="bg-backgroundDark p-2 rounded shadow-md shadow-accentOrange m-2">
            <FiFigma className="h-3/4 w-10/12" />
            <span>Figma</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;
