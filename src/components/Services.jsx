function Services() {
    return (
      <section className="px-8 py-20 text-center text-white bg-gradient-to-b from-gray-800 to-gray-900" id="services">
        <h2 className="relative mb-12 text-3xl font-bold text-red-500 md:text-4xl">
          What I Do
          <span className="block w-12 h-1 mx-auto my-4 bg-red-500"></span>
        </h2>
        <div className="flex flex-col justify-center space-y-12 md:space-y-0 md:flex-row md:space-x-12">
          <div className="max-w-md px-8 py-6 mx-auto mb-8 transition-transform transform bg-gray-700 rounded-lg shadow-lg md:mb-0 md:hover:scale-105">
            <h3 className="mb-4 text-xl font-semibold md:text-2xl">Design Using Webflow</h3>
            <p className="text-sm text-gray-300 md:text-base">
              I design user-focused websites with a blend of aesthetic appeal and functionality, using Webflow to create intuitive and engaging interfaces.
            </p>
          </div>
          <div className="max-w-md px-8 py-6 mx-auto mb-8 transition-transform transform bg-gray-700 rounded-lg shadow-lg md:mb-0 md:hover:scale-105">
            <h3 className="mb-4 text-xl font-semibold md:text-2xl">Development Using HTML, CSS, JS, Tailwind, React.js</h3>
            <p className="text-sm text-gray-300 md:text-base">
              I develop high-performance, responsive websites using modern technologies like HTML, CSS, JavaScript, Tailwind CSS, and React.js. My code is clean, scalable, and optimized for the best user experience.
            </p>
          </div>
          <div className="max-w-md px-8 py-6 mx-auto transition-transform transform bg-gray-700 rounded-lg shadow-lg md:hover:scale-105">
            <h3 className="mb-4 text-xl font-semibold md:text-2xl">WordPress Development</h3>
            <p className="text-sm text-gray-300 md:text-base">
              I specialize in creating custom WordPress websites tailored to your needs. From blogs to e-commerce platforms, I ensure your WordPress site is secure, fast, and easy to manage.
            </p>
          </div>
        </div>
        <a href="#work" className="inline-block px-12 py-3 mt-12 text-base font-bold tracking-widest text-gray-900 uppercase transition-transform duration-300 ease-in-out transform bg-red-500 rounded-full shadow-lg cursor-pointer hover:bg-red-600 hover:scale-105">
          View My Work
        </a>
      </section>
    );
  }
  
  export default Services;
  
