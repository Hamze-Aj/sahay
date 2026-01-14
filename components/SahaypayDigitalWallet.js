import Image from 'next/image';

export default function SahaypayDigitalWallet() {
  return (
    <section id="sahaypay" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-2">Digital Banking Ecosystem</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Introducing
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[#D4A574]">Sahaypay</span>{' '}
            <span className="text-[#6A3E9F]">Digital Wallet</span>
          </h3>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto leading-relaxed">
            Ethiopia's fastest-growing Shariah-compliant mobile wallet. Send money, pay bills, and access instant financing—all from your smartphone.
          </p>
        </div>

        {/* Main Image with Overlay Metrics */}
        <div className="relative">
          {/* Image Container */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="w-full h-[500px] lg:h-[600px] relative">
              <img
                src="https://picsum.photos/seed/wallet-app/800/600"
                alt="Sahaypay Digital Wallet"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Metrics Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-b-xl p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Active Users */}
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#6A3E9F] mb-2">1M+</div>
                  <div className="text-base text-[#333333]">Active Users</div>
                </div>

                {/* Merchants */}
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#D4A574] mb-2">15K+</div>
                  <div className="text-base text-[#333333]">Merchants</div>
                </div>

                {/* Transactions */}
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-[#D4A574] mb-2">ETB 5B+</div>
                  <div className="text-base text-[#333333]">Transactions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                ),
                title: 'P2P Transfer',
                description: 'Send money instantly to anyone with Sahaypay, zero fees'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                title: 'Bill Payments',
                description: 'Pay utilities, airlines, traffic fines effortlessly'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Mobile Top-up',
                description: 'Recharge Ethio Telecom instantly'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                ),
                title: 'QR Scan & Pay',
                description: 'Fast checkout at merchants nationwide'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: 'Merchant Services',
                description: 'Accept payments, manage sales, track revenue'
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Instant E-Financing',
                description: 'Quick digital loans with instant approval'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-[#333333] mb-2 text-center">{feature.title}</h4>
                <p className="text-base text-[#333333] text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="mt-16 bg-[#FFF9E6] rounded-xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4">
            Download Sahaypay Today
          </h3>
          <p className="text-lg text-[#333333] mb-8 max-w-2xl mx-auto">
            Join over 1 million Ethiopians using Sahaypay for seamless, Shariah-compliant digital payments.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-[#FFC107] text-white px-8 py-3.5 rounded-lg font-medium text-base flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-1.56-.65-2.53-1.06-3.19-1.77C6.93 17.04 6.8 16.09 6.8 15V5c0-1.1.9-2 2-2h6.5c.83 0 1.5.67 1.5 1.5 0 .41-.17.79-.44 1.06l-1.06 1.06c.28.28.44.65.44 1.06 0 .83.67 1.5 1.5 1.5H19c1.1 0 2 .9 2 2v9.5c0 .83-.67 1.5-1.5 1.5 0 .41-.17.79-.44 1.06l-1.06 1.06c.28.28.44.65.44 1.06 0 .83.67 1.5 1.5 1.5.83 0 1.5.67 1.5 1.5v3.28c0 .6-.4 1.12-1 1.32-.6.2-1.22.08-1.95-.32z" />
              </svg>
              Download for Android
            </button>
            <button className="bg-[#FFC107] text-white px-8 py-3.5 rounded-lg font-medium text-base flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Download for iOS
            </button>
          </div>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-6 text-base text-[#333333]">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Zero transaction fees</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Instant transfers</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>100% Shariah compliant</span>
            </div>
          </div>
        </div>

        {/* Nationwide Agent Network */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4">
              Nationwide Agent Network
            </h3>
            <p className="text-lg text-[#333333] max-w-2xl mx-auto">
              Access your money anywhere with over 5,000 Sahaypay agents across Ethiopia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Find an Agent Card */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h4 className="text-xl font-bold text-[#333333] mb-3">Find an Agent</h4>
              <p className="text-base text-[#333333] mb-6">
                Locate the nearest Sahaypay agent for cash deposits, withdrawals, and assistance
              </p>
              <button className="bg-white text-[#333333] border border-gray-300 px-6 py-3 rounded-lg font-medium text-base w-full hover:bg-gray-50 transition-colors">
                Agent Locator
              </button>
            </div>

            {/* Become an Agent Card */}
            <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
              <h4 className="text-xl font-bold text-[#333333] mb-3">Become an Agent</h4>
              <p className="text-base text-[#333333] mb-6">
                Earn commissions and serve your community as a Sahaypay agent
              </p>
              <button className="bg-[#FFF9E6] text-[#333333] px-6 py-3 rounded-lg font-medium text-base w-full hover:bg-[#FFF5D6] transition-colors">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

