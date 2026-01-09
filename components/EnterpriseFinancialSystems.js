export default function EnterpriseFinancialSystems() {
  const systems = [
    {
      icon: (
        <svg className="w-8 h-8 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      subtitle: 'Enterprise Infrastructure',
      title: 'Core Banking System',
      description: 'Robust, scalable core banking platform powering all financial operations with real-time processing and enterprise-grade reliability.',
      metrics: [
        { label: 'Uptime SLA', value: '99.95%' },
        { label: 'Transaction Speed', value: '<100ms' },
        { label: 'Scalability', value: '10M+ accounts' }
      ],
      capabilities: [
        'Real-time transaction processing',
        'Multi-currency support',
        'Automated reconciliation',
        'Regulatory reporting engine',
        'Customer relationship management',
        'Risk management framework'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      subtitle: 'Digital Payment Infrastructure',
      title: 'Wallet System',
      description: 'Advanced digital wallet platform enabling seamless P2P transfers, merchant payments, and value-added services.',
      metrics: [
        { label: 'Daily Transactions', value: '500K+' },
        { label: 'Active Wallets', value: '1M+' },
        { label: 'Success Rate', value: '99.8%' }
      ],
      capabilities: [
        'Instant fund transfers',
        'QR code payment processing',
        'Bill payment integration',
        'Merchant settlement system',
        'Multi-channel access',
        'Fraud detection engine'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      subtitle: 'Customer Digital Experience',
      title: 'Mobile Banking System',
      description: 'Comprehensive mobile banking platform delivering full-service banking capabilities through native iOS and Android applications.',
      metrics: [
        { label: 'App Rating', value: '4.8/5.0' },
        { label: 'Monthly Users', value: '750K+' },
        { label: 'Platform', value: 'iOS & Android' }
      ],
      capabilities: [
        'Account management',
        'Fund transfers & payments',
        'Biometric authentication',
        'Push notifications',
        'Document scanning & upload',
        'Personal financial management'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      subtitle: 'Automated Lending Platform',
      title: 'Digital Loan System',
      description: 'AI-powered digital lending system with automated credit scoring, instant approvals, and seamless disbursement.',
      metrics: [
        { label: 'Approval Time', value: '<5 min' },
        { label: 'Default Rate', value: '1.7%' },
        { label: 'Automation', value: '95%' }
      ],
      capabilities: [
        'Digital credit assessment',
        'Automated decision engine',
        'E-signature integration',
        'Instant disbursement',
        'Repayment automation',
        'Portfolio analytics'
      ]
    }
  ];

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
          <div className="inline-block mb-4">
            <span className="bg-[#F5F5F5] text-[#333333] border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium">
              Technology Infrastructure
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Enterprise-Grade Financial Systems
          </h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            Our technology stack combines cutting-edge innovation with institutional reliability, powering secure, scalable, and efficient financial operations
          </p>
        </div>
        
        {/* System Cards */}
        <div className="space-y-6 lg:space-y-8 mb-16">
          {systems.map((system, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Column - Purple Background */}
                <div className="bg-[#6A3E9F] p-8 lg:p-12">
                  <div className="mb-6">
                    {system.icon}
                    <h3 className="text-white text-sm font-medium mb-2">{system.subtitle}</h3>
                    <h4 className="text-white text-2xl lg:text-3xl font-bold mb-4">{system.title}</h4>
                    <p className="text-white text-base leading-relaxed mb-8">
                      {system.description}
                    </p>
                  </div>
                  
                  {/* Key Metrics */}
                  <div className="space-y-4">
                    {system.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex}>
                        <div className="text-white/80 text-sm mb-1">{metric.label}</div>
                        <div className="text-white text-2xl font-bold">{metric.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Right Column - White Background */}
                <div className="bg-white p-8 lg:p-12">
                  <div className="flex items-center gap-2 mb-6">
                    <svg className="w-5 h-5 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <h3 className="text-[#333333] text-xl font-bold">Key Capabilities</h3>
                  </div>
                  
                  {/* Capabilities Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {system.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-base text-[#333333]">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Infrastructure Section */}
        <div className="bg-white py-12 lg:py-16 rounded-xl border-2 border-[#E0D9EB]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-10">
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
        </div>

        {/* Seamless System Integration */}
        <div className="mt-8">
          <div className="bg-[#FFF9E6] rounded-xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4">
              Seamless System Integration
            </h2>
            <p className="text-lg text-[#333333] max-w-4xl mx-auto leading-relaxed">
              All systems are interconnected through our enterprise service bus, ensuring real-time data synchronization, unified customer experience, and comprehensive operational visibility
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
