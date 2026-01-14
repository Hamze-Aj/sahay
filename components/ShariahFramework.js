import Button from './Button';

export default function ShariahFramework() {
  const principles = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Riba-Free',
      description: 'No interest-based transactions. All products comply with Islamic prohibition of usury.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Risk Sharing',
      description: 'Equitable profit and loss sharing between institution and clients.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Asset-Backed',
      description: 'Every financing is backed by real, tangible assets or services.'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Ethical Investment',
      description: 'No involvement in prohibited sectors (alcohol, gambling, etc.)'
    }
  ];

  const keyActivities = [
    'Quarterly product review and certification',
    'Internal Shariah audit process',
    'Alignment with AAOIFI global standards',
    'Public fatwa disclosure and transparency'
  ];

  return (
    <section id="shariah-framework" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-[#E8F5E9] text-[#4CAF50] px-4 py-2 rounded-lg text-sm font-medium">
              Islamic Finance
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Our Shariah Framework
          </h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            Every product and service at Rays Microfinance is certified Shariah-compliant by our dedicated Shariah Advisory Board, ensuring all transactions adhere to Islamic principles and ethical standards.
          </p>
        </div>

        {/* Four Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {principles.map((principle, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <div className="flex justify-center mb-4">
                {principle.icon}
              </div>
              <h3 className="text-lg font-bold text-[#333333] mb-2 text-center">{principle.title}</h3>
              <p className="text-base text-[#333333] text-center">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* Shariah Supervisory Board Section */}
        <div className="bg-[#E8F5E9] rounded-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Panel - Shariah Supervisory Board */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-8 h-8 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 className="text-2xl lg:text-3xl font-bold text-[#333333]">Shariah Supervisory Board</h3>
              </div>
              <p className="text-base text-[#333333] mb-6 leading-relaxed">
                Our independent Shariah Board consists of respected Islamic scholars with expertise in Fiqh al-Muamalat (Islamic commercial jurisprudence). They ensure every product meets the highest standards of Islamic law.
              </p>

              {/* Key Activities */}
              <div className="mb-6">
                <ul className="space-y-3">
                  {keyActivities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-base text-[#333333]">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Button */}
              <button className="bg-[#4CAF50] text-white px-6 py-3 rounded-lg font-medium text-base flex items-center gap-2 hover:bg-[#45a049] transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Shariah Certificates
              </button>
            </div>

            {/* Right Panels - Three Stacked Cards */}
            <div className="space-y-6">
              {/* Board Members Card */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h4 className="text-lg font-bold text-[#333333]">Board Members</h4>
                </div>
                <p className="text-base text-[#333333] mb-3">
                  3 renowned Islamic scholars from Ethiopia, Somalia, and international institutions
                </p>
                <div className="bg-[#FFC107] text-[#333333] px-3 py-1 rounded text-sm font-medium inline-block">
                  Credentials Available on Request
                </div>
              </div>

              {/* Compliance Rate Card */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <h4 className="text-lg font-bold text-[#333333]">Compliance Rate</h4>
                </div>
                <div className="text-4xl font-bold text-[#4CAF50] mb-2">100%</div>
                <p className="text-base text-[#333333]">
                  All products certified Shariah-compliant since inception
                </p>
              </div>

              {/* AAOIFI Aligned Card */}
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h4 className="text-lg font-bold text-[#333333]">AAOIFI Aligned</h4>
                </div>
                <p className="text-base text-[#333333]">
                  Following global Islamic finance standards set by the Accounting and Auditing Organization for Islamic Financial Institutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Understanding Islamic Financial Contracts */}
        <div className="mt-16">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-8 text-center">
            Understanding Islamic Financial Contracts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Murabaha',
                description: 'Cost-plus financing for purchases',
                examples: ['Consumer goods', 'education', 'health']
              },
              {
                title: 'Salam',
                description: 'Pre-paid purchase of agricultural products',
                examples: ['Crop financing', 'livestock']
              },
              {
                title: 'Ijara',
                description: 'Leasing with option to own',
                examples: ['Equipment', 'vehicles', 'property']
              },
              {
                title: 'Mudarabah',
                description: 'Profit-sharing partnership',
                examples: ['Business ventures', 'investments']
              },
              {
                title: 'Musharakah',
                description: 'Joint venture partnership',
                examples: ['SME growth', 'project financing']
              },
              {
                title: 'Wadiah',
                description: 'Safe-keeping deposit account',
                examples: ['Savings', 'current accounts']
              }
            ].map((contract, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-[#333333] mb-2">{contract.title}</h4>
                    <p className="text-base text-[#333333] mb-3">{contract.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {contract.examples.map((example, exIndex) => (
                        <span key={exIndex} className="bg-[#E8F5E9] text-[#4CAF50] px-3 py-1 rounded-full text-sm">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Center */}
        <div id="knowledge-center" className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <svg className="w-8 h-8 text-[#4CAF50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="text-3xl lg:text-4xl font-bold text-[#333333]">Knowledge Center</h3>
          </div>
          <div className="space-y-4">
            {[
              'What is Riba and why is it prohibited?',
              'How does Murabaha work?',
              'What is the difference between Islamic and conventional banking?',
              'Who supervises Shariah compliance at RMFI?'
            ].map((question, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                <span className="text-base font-medium text-[#333333]">{question}</span>
                <svg className="w-5 h-5 text-[#333333] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Zakat & Social Responsibility */}
        <div id="social-responsibility" className="mt-16">
          <div className="bg-[#4CAF50] rounded-xl p-8 lg:p-12 text-center">
            <div className="flex justify-center mb-6">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Zakat & Social Responsibility
            </h3>
            <p className="text-lg text-white mb-8 max-w-3xl mx-auto leading-relaxed">
              As part of our commitment to Islamic values, we facilitate Zakat collection and distribution to support the most vulnerable members of our communities. We also manage charity funds for orphans, widows, and disaster relief.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-[#4CAF50] px-8 py-3 rounded-lg font-medium text-base">
                Calculate Your Zakat
              </button>
              <button className="bg-white text-[#4CAF50] px-8 py-3 rounded-lg font-medium text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
