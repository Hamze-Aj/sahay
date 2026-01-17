export default function TrustedPartners() {
  const statistics = [
    {
      value: '25+',
      label: 'Strategic Partners'
    },
    {
      value: '10+',
      label: 'Countries'
    },
    {
      value: '15+',
      label: 'Years Collaboration'
    },
    {
      value: '$50M+',
      label: 'Partner Funding'
    }
  ];

  return (
    <section id="partners" className="py-16 lg:py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="border border-[#6A3E9F] text-[#6A3E9F] px-4 py-1.5 rounded-full text-sm font-medium">
              Our Network
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Trusted Partners & Collaborators
          </h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            Building strong partnerships with leading institutions, development organizations, and technology providers to expand financial inclusion across Ethiopia and Somalia.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#6A3E9F] mb-2">
                {stat.value}
              </div>
              <div className="text-base text-[#333333]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Banking Partner Section */}
        <div className="mt-12">
          {/* Section Heading */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#6A3E9F] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#333333]">
              Strategic Banking Partner
            </h3>
          </div>

          {/* Tsehay Bank Card */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm max-w-2xl">
            <div className="flex items-start gap-6">
              {/* Bank Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center relative">
                  <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="absolute text-blue-600 font-bold text-lg leading-none" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>$</span>
                </div>
              </div>

              {/* Bank Details */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="text-2xl font-bold text-[#333333]">
                    Tsehay Bank
                  </h4>
                  <span className="bg-[#E0D9EB] text-[#6A3E9F] px-3 py-1 rounded-full text-xs font-medium">
                    Primary Banking Partner
                  </span>
                </div>
                <p className="text-base text-[#333333]">
                  Core banking infrastructure and liquidity partner.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* International Development Partners Section */}
        <div className="mt-16">
          {/* Section Heading */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#6A3E9F] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#333333]">
              International Development Partners
            </h3>
          </div>

          {/* Partner Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mercy Corps */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#333333] mb-2">Mercy Corps</h4>
                  <span className="bg-[#E0D9EB] text-[#6A3E9F] px-3 py-1 rounded-full text-xs font-medium">
                    Development Partner
                  </span>
                </div>
              </div>
              <p className="text-base text-[#333333]">
                Financial inclusion and capacity building programs
              </p>
            </div>

            {/* JOA */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#333333] mb-2">JOA (Joint Operations Addis)</h4>
                  <span className="bg-[#E0D9EB] text-[#6A3E9F] px-3 py-1 rounded-full text-xs font-medium">
                    Humanitarian Partner
                  </span>
                </div>
              </div>
              <p className="text-base text-[#333333]">
                Humanitarian financial services and emergency response
              </p>
            </div>

            {/* African Development Bank */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#333333] mb-2">African Development Bank</h4>
                  <span className="bg-[#E0D9EB] text-[#6A3E9F] px-3 py-1 rounded-full text-xs font-medium">
                    Financial Institution
                  </span>
                </div>
              </div>
              <p className="text-base text-[#333333]">
                Infrastructure financing and technical assistance
              </p>
            </div>
          </div>
        </div>

        {/* Technology & Fintech Partners Section */}
        <div className="mt-16">
          {/* Section Heading */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#6A3E9F] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#333333]">
              Technology & Fintech Partners
            </h3>
          </div>

          {/* Partner Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Kifiya Financial Technology */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#333333] mb-2">Kifiya Financial Technology</h4>
                  <span className="bg-[#E0D9EB] text-[#6A3E9F] px-3 py-1 rounded-full text-xs font-medium">
                    Fintech Partner
                  </span>
                </div>
              </div>
              <p className="text-base text-[#333333]">
                Digital payment infrastructure and innovation
              </p>
            </div>

            {/* Ethio Telecom */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#333333] mb-2">Ethio Telecom</h4>
                  <span className="bg-[#E0D9EB] text-[#6A3E9F] px-3 py-1 rounded-full text-xs font-medium">
                    Telecom Partner
                  </span>
                </div>
              </div>
              <p className="text-base text-[#333333]">
                Mobile money and USSD banking services
              </p>
            </div>

            {/* EthSwitch */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#333333] mb-2">EthSwitch</h4>
                  <span className="bg-[#E0D9EB] text-[#6A3E9F] px-3 py-1 rounded-full text-xs font-medium">
                    Payment Infrastructure
                  </span>
                </div>
              </div>
              <p className="text-base text-[#333333]">
                National payment switch and interoperability
              </p>
            </div>
          </div>
        </div>

        {/* Regulatory & Industry Bodies Section */}
        <div className="mt-16">
          {/* Section Heading */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#6A3E9F] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#333333]">
              Regulatory & Industry Bodies
            </h3>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* National Bank of Ethiopia */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#333333] mb-2">National Bank of Ethiopia (NBE)</h4>
                  <span className="bg-[#E0D9EB] text-[#6A3E9F] px-3 py-1 rounded-full text-xs font-medium">
                    Regulator
                  </span>
                </div>
              </div>
              <p className="text-base text-[#333333]">
                Regulatory oversight and licensing authority
              </p>
            </div>

            {/* Ethiopian Microfinance Association */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#333333] mb-2">Ethiopian Microfinance Association</h4>
                  <span className="bg-[#E0D9EB] text-[#6A3E9F] px-3 py-1 rounded-full text-xs font-medium">
                    Industry Association
                  </span>
                </div>
              </div>
              <p className="text-base text-[#333333]">
                Industry standards and advocacy
              </p>
            </div>

            {/* AAOIFI */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18z" />
                    <path d="M4 9.5v7.5c0 4.5 3.5 8.5 8 9.5 4.5-1 8-5 8-9.5V9.5l-8-4-8 4z" />
                    <circle cx="7" cy="6" r="1" />
                    <circle cx="17" cy="6" r="1" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#333333] mb-2">AAOIFI</h4>
                  <span className="bg-[#E0D9EB] text-[#6A3E9F] px-3 py-1 rounded-full text-xs font-medium">
                    Standards Organization
                  </span>
                </div>
              </div>
              <p className="text-base text-[#333333]">
                Global Shariah standards for Islamic finance
              </p>
            </div>
          </div>
        </div>

        {/* Academic & Research Partners Section */}
        <div className="mt-16">
          {/* Section Heading */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#6A3E9F] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#333333]">
              Academic & Research Partners
            </h3>
          </div>

          {/* Partner Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Addis Ababa University */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                    <path d="M12 9l-1 1v2h2v-2l-1-1z" fill="#FFC107" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#333333] mb-2">Addis Ababa University</h4>
                  <span className="bg-[#E0D9EB] text-[#6A3E9F] px-3 py-1 rounded-full text-xs font-medium">
                    Academic Partner
                  </span>
                </div>
              </div>
              <p className="text-base text-[#333333]">
                Research collaboration and talent development
              </p>
            </div>

            {/* International Islamic University Malaysia */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="6" width="16" height="3" fill="#EF4444" rx="1" />
                    <rect x="4" y="10" width="16" height="3" fill="#3B82F6" rx="1" />
                    <rect x="4" y="14" width="16" height="3" fill="#10B981" rx="1" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#333333] mb-2">International Islamic University Malaysia</h4>
                  <span className="bg-[#E0D9EB] text-[#6A3E9F] px-3 py-1 rounded-full text-xs font-medium">
                    Training Partner
                  </span>
                </div>
              </div>
              <p className="text-base text-[#333333]">
                Islamic finance research and training
              </p>
            </div>
          </div>
        </div>

        {/* Corporate & Commercial Partners Section */}
        <div className="mt-16">
          {/* Section Heading */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#6A3E9F] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#333333]">
              Corporate & Commercial Partners
            </h3>
          </div>

          {/* Partner Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Ethiopian Airlines */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13l9-3 9 3M3 13l9 3 9-3" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#333333] mb-2">Ethiopian Airlines</h4>
                  <span className="bg-[#E0D9EB] text-[#6A3E9F] px-3 py-1 rounded-full text-xs font-medium">
                    Corporate Client
                  </span>
                </div>
              </div>
              <p className="text-base text-[#333333]">
                Payroll services and employee banking
              </p>
            </div>

            {/* Ethiopian Grain Trade Enterprise */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <path d="M8 8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V8z" fill="#F97316" />
                    <path d="M6 10h12M6 12h12M6 14h12" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#333333] mb-2">Ethiopian Grain Trade Enterprise</h4>
                  <span className="bg-[#E0D9EB] text-[#6A3E9F] px-3 py-1 rounded-full text-xs font-medium">
                    Commercial Partner
                  </span>
                </div>
              </div>
              <p className="text-base text-[#333333]">
                Agricultural value chain financing
              </p>
            </div>

            {/* Somali Chamber of Commerce */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 relative">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="absolute text-orange-600 text-xs font-bold">24</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-[#333333] mb-2">Somali Chamber of Commerce</h4>
                  <span className="bg-[#E0D9EB] text-[#6A3E9F] px-3 py-1 rounded-full text-xs font-medium">
                    Business Network
                  </span>
                </div>
              </div>
              <p className="text-base text-[#333333]">
                SME financing and business development
              </p>
            </div>
          </div>
        </div>

        {/* Partnership Invitation Section */}
        <div className="mt-16">
          <div className="bg-[#6A3E9F] rounded-xl p-12 lg:p-16 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 border-2 border-[#FFC107] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Interested in Partnering with Rays?
            </h3>

            {/* Description */}
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
              We're always looking for strategic partners who share our vision of expanding financial inclusion and economic empowerment across the Horn of Africa
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#FFC107] text-[#6A3E9F] px-8 py-3.5 rounded-lg font-medium text-base hover:bg-[#e0a800] transition-colors">
                Contact Partnership Team
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-lg font-medium text-base hover:bg-white hover:text-[#6A3E9F] transition-colors">
                Download Partnership Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Certifications & Industry Memberships Section */}
        <div className="mt-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#333333] text-center mb-12">
            Certifications & Industry Memberships
          </h3>

          {/* Certifications Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* NBE Licensed */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-base text-[#333333] font-medium">NBE Licensed</p>
            </div>

            {/* ISO 27001 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-base text-[#333333] font-medium">ISO 27001</p>
            </div>

            {/* AAOIFI Member */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18z" />
                  <path d="M4 9.5v7.5c0 4.5 3.5 8.5 8 9.5 4.5-1 8-5 8-9.5V9.5l-8-4-8 4z" />
                </svg>
              </div>
              <p className="text-base text-[#333333] font-medium">AAOIFI Member</p>
            </div>

            {/* PCI-DSS */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <p className="text-base text-[#333333] font-medium">PCI-DSS</p>
            </div>

            {/* MIX Market */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="text-base text-[#333333] font-medium">MIX Market</p>
            </div>

            {/* CGAP Member */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-base text-[#333333] font-medium">CGAP Member</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

