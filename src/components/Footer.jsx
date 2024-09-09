function Footer() {
    return (
      <footer className="py-10 text-center text-red-500 bg-gray-900">
        <a href="mailto:rohit99106293@gmail.com" className="font-bold no-underline hover:underline">
          rohit99106293@gmail.com
        </a>
        <ul className="flex justify-center mt-8 list-none">
          <li className="mx-2">
            <a href="https://codepen.io" className="p-2 hover:opacity-70">
              <i className="fab fa-codepen"></i>
            </a>
          </li>
          <li className="mx-2">
            <a href="http://dribbble.com" className="p-2 hover:opacity-70">
              <i className="fab fa-dribbble"></i>
            </a>
          </li>
          <li className="mx-2">
            <a href="https://twitter.com" className="p-2 hover:opacity-70">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="mx-2">
            <a href="https://github.com" className="p-2 hover:opacity-70">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    );
  }
  
  export default Footer;
  