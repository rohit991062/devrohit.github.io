function About() {
    return (
      <section className="max-w-5xl px-8 py-20 mx-auto" id="about">
        <h2 className="mb-4 text-2xl md:text-3xl">Who I Am</h2>
        <p className="mb-8 text-lg font-bold text-red-500 md:text-xl">
          A dedicated student passionate about technology
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-gray-700">
              I am currently pursuing a Bachelor of Technology (BTech) in Computer Science at Sat Kabir Institute of Technology and Management. Although I am in the early stages of my career, my enthusiasm for learning and my passion for technology drive me to continuously improve and expand my skill set.
            </p>
            <p className="text-gray-700">
              During my studies, I have developed a solid foundation in Frotntend Web Development including HTML, CSS, Java Script, Tailwind and React Js. I am eager to apply these skills in real-world scenarios and am constantly seeking opportunities to learn new technologies and contribute to innovative projects.
            </p>
          </div>
          <div>
            <img
              src="path-to-your-image.jpg"
              alt="A picture of a student"
              className="object-cover w-full h-64 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default About;
  