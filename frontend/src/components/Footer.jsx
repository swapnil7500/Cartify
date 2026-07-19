function Footer() {
  return (
    <footer className="bg-teal-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-3">Cartify</h3>
          <p className="text-teal-100 text-sm leading-relaxed">
            Your one-stop shop for electronics, footwear, accessories, and more built with care to bring quality products right to your doorstep.
          </p>
          <p className="text-teal-200 text-xs mt-4">Prayagraj, Uttar Pradesh, India</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm text-teal-100">
            <li>Phone: +91 93051 18567</li>
            <li>Email: swapnilsureshgupta365@gmail.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <ul className="space-y-2 text-sm text-teal-100">
            <li><a href="https://github.com/swapnil7500" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors duration-200">GitHub - swapnil7500</a></li>
            <li><a href="https://www.linkedin.com/in/swapnil-gupta-dev/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors duration-200">LinkedIn - Swapnil Gupta</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-teal-800 py-4 text-center text-xs text-teal-200">
        Thanks for visiting Cartify - Built as an internship project by Swapnil Gupta - {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
}

export default Footer;