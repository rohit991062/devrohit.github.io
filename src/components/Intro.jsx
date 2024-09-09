function Intro() {
    return (
      <section className="relative px-8 py-20 mt-20" id="home">
        <div className="max-w-4xl mx-auto">
          <div className="grid items-center grid-cols-1 gap-8 sm:grid-cols-[250px_auto]">
            <img 
              src={1} 
              alt="Intro" 
              className="relative z-10 min-w-[250px] shadow-lg"
            />
            <div>
              <h1 className="mb-4 font-serif text-3xl md:text-5xl">
                <strong className="block">Hello, I&apos;m</strong> Rohit
              </h1>
              <h2 className="inline-block px-4 py-2 mb-4 font-sans text-xl font-bold text-white bg-red-500 md:text-2xl">
                Fronte-end dev
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Intro;
  