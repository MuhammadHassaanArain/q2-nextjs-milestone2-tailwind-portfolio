import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <main className="bg-backgroundDark">
        <section className="py-4">
           <div className="flex justify-around">
           <h2 className="text-accentOrange font-bold ">Hassaan Arain</h2>
            <div className="flex">
                <a href=" https://www.linkedin.com/in/hassaan-arain-a56123290/"><FaLinkedinIn className="w-10 h-4 hover:text-accentOrange"/></a>
                <a href="https://github.com/MuhammadHassaanArain"><FaGithub className="w-10 h-4 hover:text-accentOrange"/></a>
                <a href="https://www.facebook.com/profile.php?id=100094421088969"><FaFacebook className="w-10 h-4 hover:text-accentOrange"/></a>
                <a href="https://twitter.com/shutuphassaan"><FaXTwitter className="w-10 h-4 hover:text-accentOrange"/></a>
            </div>
           </div>
            <h3 className="text-textSecondary font-bold font-mono text-center py-2">All rights reserved copyright 2024</h3>
  
        </section>
    </main>
  )
};

export default Footer