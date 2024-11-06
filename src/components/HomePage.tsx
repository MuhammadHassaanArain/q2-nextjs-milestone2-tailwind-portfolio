import Link from "next/link";
function HomePage() {
  return (
    <main className="w-screen bg-bgdark py-14 flex justify-center">
      <section className="text-center md:w-3/5">
        <h2 className="text-accentOrange text-4xl py-4 font-extrabold font-mono">Crafting Seamless Web Experiences</h2>
        <h3 className="text-textLight text-2xl py-4">
          Full Stack Developer with Expertise in Next.js, TypeScript, and
          Tailwind CSS
        </h3>
        <p className="text-textSecondary text-xl font-bold font-mono">
          Hello! I&apos;m Muhammad Hassaan Arain, a developer passionate about
          building modern, responsive web applications. With expertise in
          Next.js and TypeScript, I create scalable and efficient web solutions.
          I specialize in crafting sleek, user-friendly interfaces using
          Tailwind CSS, while also ensuring seamless backend integration with
          PostgreSQL and Drizzle ORM. Dive into my portfolio to explore my
          projects and the journey of turning ideas into functional, impactful
          digital experiences.
        </p>
       <div className="py-10">
       <button className="bg-accentOrange hover:bg-orange-300 text-textLight p-2 px-5 mx-2 font-bold "><Link href={"/contact"}>Contact</Link></button>
       <button className="bg-textLight hover:bg-gray-50 text-accentOrange p-2 mx-2 px-4 font-bold "><Link href={"/about"}>About</Link></button>
       </div>
      </section>
    </main>
  );
}

export default HomePage;
