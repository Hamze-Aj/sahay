import Button from './Button';

export default function BankingTechnology() {
  const solutions = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Core Banking System',
      subtitle: 'Enterprise-Grade Banking Infrastructure',
      description: 'Complete core banking solution powering retail, commercial, and Islamic banking operations with real-time processing, multi-currency support, and comprehensive financial management.',
      features: [
        'Real-time transaction processing engine',
        'Multi-currency and multi-branch support',
        'Islamic banking modules (Murabaha, Ijara, Salam, etc.)'
      ]
    },
    {
      id: 'wallet-system',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Digital Wallet Platform',
      subtitle: 'Mobile Money Infrastructure',
      description: 'White-label digital wallet platform enabling banks and MFIs to launch mobile money services with P2P transfers, bill payments, merchant acceptance, and value-added services.',
      features: [
        'P2P instant fund transfers',
        'QR code payment processing',
        'Bill payment aggregator (utilities, airlines, etc.)'
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      id: 'digital-loan',
      title: 'Digital Lending System',
      subtitle: 'AI-Powered Loan Management',
      description: 'End-to-end digital lending platform with automated credit scoring, instant loan approvals, and comprehensive portfolio management for personal and business loans.',
      features: [
        'AI-powered credit scoring engine',
        'Digital loan application portal',
        'Automated decision engine'
      ]
    }
  ];

  return (
    <section id="core-banking" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-white text-[#6A3E9F] border-2 border-[#6A3E9F] px-4 py-2 rounded-full text-sm font-medium">
              &lt;&gt; Sahaypay Solutions
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Banking Technology for Institutions
          </h2>
          <p className="text-lg text-[#333333] max-w-4xl mx-auto leading-relaxed">
            Enterprise banking software and digital financial infrastructure powering banks, microfinance institutions, and fintech companies across Ethiopia and East Africa
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="bg-[#6A3E9F] rounded-xl p-8 lg:p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Financial Institutions */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-base text-white">Financial Institutions Served</div>
            </div>

            {/* End Users */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">3M+</div>
              <div className="text-base text-white">End Users Powered</div>
            </div>

            {/* System Uptime */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">99.95%</div>
              <div className="text-base text-white">System Uptime SLA</div>
            </div>
          </div>
        </div>

        {/* Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} id={solution.id} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm scroll-mt-24">
              {/* Icon */}
              <div className="w-12 h-12 bg-[#6A3E9F] rounded-lg flex items-center justify-center mb-6">
                {solution.icon}
              </div>

              {/* Title and Subtitle */}
              <h3 className="text-xl font-bold text-[#333333] mb-2">{solution.title}</h3>
              <p className="text-[#6A3E9F] text-base font-medium mb-4">{solution.subtitle}</p>

              {/* Description */}
              <p className="text-base text-[#333333] mb-6 leading-relaxed">{solution.description}</p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-[#333333]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* View Details Button */}
              <button className="bg-[#6A3E9F] text-white px-6 py-3 rounded-lg font-medium text-base flex items-center gap-2 w-full justify-center hover:bg-[#5a3590] transition-colors">
                View Details
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Additional Solutions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {[
            {
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              ),
              title: 'Branch Banking Suite',
              subtitle: 'Next-Gen Branch Operations',
              description: 'Modern branch banking platform with teller operations, cash management, customer onboarding, and queue management for efficient branch operations.',
              features: [
                'Teller transaction processing',
                'Cash and vault management',
                'Digital customer onboarding'
              ]
            },
            {
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: 'Analytics & BI Platform',
              subtitle: 'Data-Driven Decision Making',
              description: 'Comprehensive business intelligence platform providing real-time insights, predictive analytics, and automated reporting for financial institutions.',
              features: [
                'Real-time executive dashboards',
                'Predictive analytics engine',
                'Customer segmentation analysis'
              ]
            },
            {
              icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              ),
              title: 'Banking-as-a-Service (BaaS)',
              subtitle: 'Embedded Finance Platform',
              description: 'API-first banking infrastructure enabling non-financial companies to offer financial services to their customers without becoming a bank.',
              features: [
                'Virtual account creation API',
                'Payment processing API',
                'KYC and customer verification'
              ]
            }
          ].map((solution, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              {/* Icon */}
              <div className="w-12 h-12 bg-[#6A3E9F] rounded-lg flex items-center justify-center mb-6">
                {solution.icon}
              </div>

              {/* Title and Subtitle */}
              <h3 className="text-xl font-bold text-[#333333] mb-2">{solution.title}</h3>
              <p className="text-[#6A3E9F] text-base font-medium mb-4">{solution.subtitle}</p>

              {/* Description */}
              <p className="text-base text-[#333333] mb-6 leading-relaxed">{solution.description}</p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-[#333333]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* View Details Button */}
              <button className="bg-[#6A3E9F] text-white px-6 py-3 rounded-lg font-medium text-base flex items-center gap-2 w-full justify-center hover:bg-[#5a3590] transition-colors">
                View Details
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Trusted by Leading Financial Institutions */}
        <div>
          <h3 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-8 text-center">
            Trusted by Leading Financial Institutions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                name: 'National Bank of Ethiopia',
                tag: 'Regulator'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
                name: 'Hijra Bank',
                tag: 'Islamic Bank'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
                name: 'Addis Microfinance',
                tag: 'MFI'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                name: 'Ethio Telecom',
                tag: 'Telecom'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                ),
                name: 'Ethiopian Airlines',
                tag: 'Corporate'
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                name: 'Kifiya Financial Technology',
                tag: 'Fintech'
              }
            ].map((institution, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="flex justify-center mb-4">
                  {institution.icon}
                </div>
                <h4 className="text-base font-bold text-[#333333] mb-2">{institution.name}</h4>
                <div className="bg-[#FFC107] text-[#333333] px-3 py-1 rounded-full text-xs font-medium inline-block">
                  {institution.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16">
          <div className="bg-[#6A3E9F] rounded-xl p-12 lg:p-16 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Financial Services?
            </h3>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
              Schedule a demo to see how Sahaypay Solutions can power your digital banking transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#FFC107] text-[#333333] px-8 py-3.5 rounded-lg font-medium text-base">
                Schedule Demo
              </button>
              <button className="bg-white text-[#6A3E9F] px-8 py-3.5 rounded-lg font-medium text-base">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

