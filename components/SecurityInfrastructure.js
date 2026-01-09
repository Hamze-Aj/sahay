export default function SecurityInfrastructure() {
  const securityFeatures = [
    {
      icon: (
        <div className="w-16 h-16 bg-[#6A3E9F] rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      ),
      title: 'Enterprise Security',
      description: 'ISO 27001 certified security infrastructure'
    },
    {
      icon: (
        <div className="w-16 h-16 bg-[#6A3E9F] rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
      ),
      title: 'Data Encryption',
      description: '256-bit AES encryption for all transactions'
    },
    {
      icon: (
        <div className="w-16 h-16 bg-[#6A3E9F] rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
      ),
      title: 'Cloud Infrastructure',
      description: 'Redundant cloud hosting with automatic failover'
    },
    {
      icon: (
        <div className="w-16 h-16 bg-[#6A3E9F] rounded-lg flex items-center justify-center">
          <svg className="w-8 h-8 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        </div>
      ),
      title: 'Disaster Recovery',
      description: 'Real-time backup and 24-hour recovery SLA'
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Security & Infrastructure
          </h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            Bank-grade security protecting every transaction and customer interaction
          </p>
        </div>
        
        {/* Security Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border-2 border-[#E0D9EB] shadow-sm text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#333333] mb-2">{feature.title}</h3>
              <p className="text-base text-[#333333]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
