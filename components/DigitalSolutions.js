import Button from './Button';

export default function DigitalSolutions() {
  const solutions = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      id: 'mobile-banking',
      title: 'Digital wallet Revolution',
      description: "Ethiopia's most trusted mobile wallet for instant transfers, bill payments, and merchant transactions.",
      capabilities: [
        'Person-to-person transfers',
        'Bill payment (utilities, airlines)',
        'Mobile top-up',
        'QR code payments',
        'Merchant acceptance'
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      id: 'murabaha',
      title: 'Digital Islamic Financing',
      description: 'Instant online Murabaha financing with digital approval, transparent terms, and seamless disbursement.',
      capabilities: [
        '100% digital application',
        'Instant credit assessment',
        'Transparent cost structure',
        'Fast approval process',
        'Secure document upload'
      ]
    }
  ];

  return (
    <section id="digital-solutions" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Next-Generation Digital Solutions
          </h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            Cutting-edge technology platform designed to deliver seamless banking experiences
          </p>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => (
            <div key={index} id={solution.id} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 scroll-mt-24">
              {/* Icon */}
              <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center mb-6">
                {solution.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#333333] mb-4">
                {solution.title}
              </h3>

              {/* Description */}
              <p className="text-base text-[#333333] mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Key Capabilities */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-[#333333] mb-3">Key Capabilities:</h4>
                <ul className="space-y-2">
                  {solution.capabilities.map((capability, capIndex) => (
                    <li key={capIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#FFC107] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-base text-[#333333]">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call-to-Action Buttons */}
              <div className="flex gap-4">
                <button className="bg-[#FFC107] text-white px-6 py-3 rounded-lg font-medium text-base flex-1">
                  Get Started
                </button>
                <button className="bg-white text-[#6A3E9F] border-2 border-[#6A3E9F] px-6 py-3 rounded-lg font-medium text-base flex-1">
                  View Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
