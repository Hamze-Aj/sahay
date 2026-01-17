import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#020617] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Section: Brand & Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand Column (Left) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Logo Area */}
            <div className="inline-block bg-white p-4 rounded-xl">
              <Image
                src="/logo-full.png"
                alt="Rays Microfinance"
                width={400}
                height={130}
                className="h-32 w-auto object-contain"
              />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Ethiopia's leading Shariah-compliant microfinance institution, empowering communities through ethical financial solutions since 2009.
            </p>

            {/* License Badge */}
            <div className="inline-flex items-center gap-3 bg-[#0B1121] border border-gray-800 rounded-lg px-4 py-3 max-w-sm">
              <div className="text-[#FFC107]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.352-.272-2.636-.759-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400">Licensed by</p>
                <p className="text-sm font-semibold text-white">National Bank of Ethiopia</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300">Subscribe to our newsletter</label>
              <div className="flex gap-2 max-w-md">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-[#0B1121] border border-gray-700 text-white text-sm rounded-lg block w-full p-2.5 focus:ring-[#4CAF50] focus:border-[#4CAF50] placeholder-gray-500 outline-none"
                />
                <button className="bg-[#4CAF50] hover:bg-green-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links Columns (Right) */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Solutions */}
            {/* Solutions */}
            <div>
              <h4 className="text-[#FFC107] font-semibold mb-6">Solutions</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="/#financial-services" className="hover:text-white transition-colors">Personal Financing</a></li>
                <li><a href="/#business-sme" className="hover:text-white transition-colors">Business & SME</a></li>
                <li><a href="/#agri-finance" className="hover:text-white transition-colors">Agricultural Finance</a></li>
                <li><a href="/#agri-finance" className="hover:text-white transition-colors">Women's Banking</a></li>
              </ul>
            </div>

            {/* Islamic Finance */}
            <div>
              <h4 className="text-[#FFC107] font-semibold mb-6">Islamic Finance</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="/#shariah-framework" className="hover:text-white transition-colors">Shariah Framework</a></li>
                <li><a href="/#knowledge-center" className="hover:text-white transition-colors">Knowledge Center</a></li>
                <li><a href="/#social-responsibility" className="hover:text-white transition-colors">Social Responsibility</a></li>
                <li><a href="/#shariah-framework" className="hover:text-white transition-colors">Product Certifications</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-[#FFC107] font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="/#company-profile" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/#our-reach" className="hover:text-white transition-colors">Our Reach</a></li>
                <li><a href="/#success-stories" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="/#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="/#" className="hover:text-white transition-colors">Newsroom</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-[#FFC107] font-semibold mb-6">Support</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="/#contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/#our-reach" className="hover:text-white transition-colors">Branch Locator</a></li>
                <li><a href="/#knowledge-center" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Grievance Redressal</a></li>
                <li><a href="/#contact" className="hover:text-white transition-colors">Feedback</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-gray-800 border-b mb-8">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#0B1121] flex items-center justify-center border border-gray-800 text-[#4CAF50]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400">24/7 Support</p>
              <p className="font-semibold text-white">8977 (Toll-Free)</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#0B1121] flex items-center justify-center border border-gray-800 text-[#FFC107]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400">Email Us</p>
              <p className="font-semibold text-white">info@raysmfi.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#0B1121] flex items-center justify-center border border-gray-800 text-[#4CAF50]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-400">Head Office</p>
              <p className="font-semibold text-white">Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
          <p className="text-gray-500 text-sm">
            © 2026 Rays Microfinance Institution S.C. All rights reserved. | Licensed by NBE
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[
              { icon: "facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { icon: "twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
              { icon: "instagram", path: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" }, // Just a placeholder path, actually using standard icons below for accuracy
              // Re-using standard SVG structure for consistent icons
            ].map((social, idx) => (
              <a key={idx} href="#" className="w-8 h-8 rounded bg-[#0B1121] flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors border border-gray-800">
                {/* Using generic path for simplicity or specifics if needed. Let's use generic shape or specific SVGs */}
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                  {/* We'll use a conditional or just simple circles for now if paths are complex, but let's try to be precise */}
                  {idx === 0 && <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />}
                  {idx === 1 && <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />}
                  {idx === 2 && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />}
                  {idx === 3 && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />}
                </svg>
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span className="text-gray-800">•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <span className="text-gray-800">•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

