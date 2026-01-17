import ServiceCard from './ServiceCard';

export default function FinancialServices() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      id: 'savings',
      title: 'Savings Accounts',
      description: 'Secure, interest-free savings solutions designed to grow your wealth while adhering to Shariah principles.',
      features: [
        'Wadiah savings accounts',
        'Flexible deposit options',
        '24/7 account access',
        'No hidden fees'
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      id: 'current',
      title: 'Current Accounts',
      description: 'Professional business and personal checking accounts with comprehensive transaction capabilities.',
      features: [
        'Unlimited transactions',
        'Checkbook facility',
        'Online & mobile banking',
        'Monthly statements'
      ]
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      id: 'islamic-finance',
      title: 'Islamic Financing Services',
      description: 'Shariah-compliant financing solutions including Murabaha, Salam, and Ijara for personal and business needs.',
      features: [
        'Zero-interest (Riba-free)',
        'Asset-backed financing',
        'Transparent pricing',
        'Flexible terms'
      ]
    }
  ];

  return (
    <section id="financial-services" className="bg-[#F8F8F8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Comprehensive Financial Services
          </h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            Institutional-grade banking solutions designed for individuals, businesses, and institutions
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} id={service.id} className="scroll-mt-24">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

