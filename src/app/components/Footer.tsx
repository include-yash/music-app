function Footer() {
  return (
    <footer className="bg-white text-black py-12"> {/* Change background to white and text to black */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">About Us</h2> {/* Text color set to black */}
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">Quick Links</h2> 
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-black transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black transition-colors duration-300" 
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black transition-colors duration-300" 
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-black transition-colors duration-300" 
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">Follow Us</h2> {/* Text color set to black */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-black transition-colors duration-300" 
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-black transition-colors duration-300" 
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-black transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-black text-lg font-semibold mb-4">Contact Us</h2> {/* Text color set to black */}
          <p>New Delhi, India</p>
          <p>Delhi 10001</p>
          <p>Email: info@musicschool.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8 text-black">© 2024 Music School. All rights reserved.</p> {/* Text color set to black */}
    </footer>
  );
}

export default Footer;
