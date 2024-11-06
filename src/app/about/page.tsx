export default function About() {
  return (
    <div className=" flex justify-center bg-bgdark py-10">
        <main className="w-10/12">
      <section >
        <h2
          className="text-accentOrange font-bold text-2xl  text-center pb-4
        "
        >
          About Me
        </h2>
        <p className="text-textSecondary font-bold font-mono">
          Hello! I&apos;m Muhammad Hassaan Arain, a frontend developer and aspiring
          full stack expert from Pakistan, driven by a passion for building
          impactful, user-centered applications. As part of the AI, Metaverse,
          and Web 3.0 initiative under the Governor Sindh, I&apos;m constantly honing
          my skills in cutting-edge web technologies, from <span>Next.js</span>{" "}
          and
          <span className="text-textLight  font-sans"> TypeScript</span> to{" "}
          <span className="text-textLight  font-sans">Tailwind CSS</span> and {" "}
          <span className="text-textLight  font-sans">Sanity CMS</span>.
          <br />
          <br />
          With a strong foundation in frontend and backend technologies, I&apos;ve
          completed multiple projects that showcase my versatility and
          commitment to quality, including an expense tracker, a movie search
          tool, and a fully responsive portfolio website. I have experience in
          building dynamic, content-rich applications using{" "}
          <span className="text-textLight  font-sans">Sanity CMS</span> for easy content
          management, <span className="text-textLight  font-sans">jQuery</span> for
          seamless interactivity, and{" "}
          <span className="text-textLight  font-sans">PostgreSQL</span> for reliable
          data management.
        </p>
      </section>
      <section>
        <h2 className="text-accentOrange font-bold text-xl text-center py-4">
          Why Me ?
        </h2>
        <div className="text-textSecondary font-mono">
          <p>
            <span className="text-accentOrange font-bold">
              <li>Technical Versatility:</li>
            </span>
            With a robust skill set that spans frontend frameworks, backend
            management, and database integrations, I am well-equipped to handle
            both user interface design and complex data needs.
          </p>
          <p>
            <span className="text-accentOrange font-bold">
              <li>Hands-On Experience:</li>
            </span>
            I bring real-world project experience, from creating responsive apps
            to managing dynamic content, ensuring practical, scalable solutions
            tailored to any project requirements.
          </p>
          <p>
            <span className="text-accentOrange font-bold">
              <li>Attention to Detail:</li>
            </span>
            My focus on clean, maintainable code and efficient problem-solving
            means every feature is built with both quality and usability in
            mind.
          </p>
          <p>
            <span className="text-accentOrange font-bold">
              <li>Passion for Learning:</li>
            </span>
            I&apos;m committed to continuous improvement, always exploring new tools
            and techniques to keep my skills sharp and stay current with
            industry trends.
          </p>
          <p>
            <span className="text-accentOrange font-bold">
              <li>Client-Centered Approach:</li>
            </span>
            Whether it&apos;s freelancing or collaborating on team projects, I
            prioritize open communication and a clear understanding of client
            needs to deliver solutions that exceed expectations.
          </p>
        </div>
        <h3 className="text-accentOrange font-bold py-4">
          With these strengths, I aim to create engaging, impactful digital
          experiences that bring ideas to life. Let&apos;s connect and explore how I
          can contribute to your next project!
        </h3>
      </section>
    </main>
    </div>
  );
};
