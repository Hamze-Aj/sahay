export default function CustomerSuccessStories() {
  const testimonials = [
    {
      iconColor: 'bg-green-600',
      title: "Amina's Grocery",
      quote: "With RMFI's Murabaha financing, I expanded my small shop into a thriving grocery store. Now I employ 3 people from my community.",
      attribution: "— Amina H., Jigjiga"
    },
    {
      iconColor: 'bg-[#FFC107]',
      title: "Mohammed's Farm",
      quote: "Salam financing helped me purchase seeds and fertilizer. My harvest tripled and I can now support my family with dignity.",
      attribution: "— Mohammed A., Gode"
    },
    {
      iconColor: 'bg-green-600',
      title: "Fatima's Tailoring",
      quote: "Women's Banking program gave me confidence and capital. My tailoring business now serves customers across the region.",
      attribution: "— Fatima K., Addis Ababa"
    }
  ];

  return (
    <section id="success-stories" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] text-center mb-12">
          Customer Success Stories
        </h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 rounded-xl p-6">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className={`w-16 h-16 ${testimonial.iconColor} rounded-full flex items-center justify-center`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#333333] mb-3 text-center">
                {testimonial.title}
              </h3>

              {/* Quote */}
              <p className="text-base text-[#333333] mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Attribution */}
              <p className="text-sm text-[#333333] font-medium text-center">
                {testimonial.attribution}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-green-700 rounded-xl p-12 lg:p-16 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Success Story?
          </h3>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Join 250,000+ customers who trust Rays Microfinance for ethical, Shariah-compliant banking
          </p>
          <button className="bg-white text-green-700 px-8 py-3.5 rounded-lg font-medium text-base hover:bg-gray-100 transition-colors">
            Open Account Today
          </button>
        </div>
      </div>
    </section>
  );
}


