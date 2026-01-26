export default function RaysStory() {
  return (
    <section id="company-profile" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* About Us Button */}
        <div className="text-center mb-6">
          <span className="bg-[#6A3E9F] text-white px-4 py-2 rounded-lg text-sm font-medium inline-block">
            About Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-6 text-center">
          The Rays Story
        </h2>

        {/* Description */}
        <p className="text-lg text-[#333333] mb-12 max-w-3xl mx-auto text-center">
          Since 2009, Rays Microfinance Institution has been at the forefront of bringing Shariah-compliant financial services to underserved communities across Ethiopia and Somalia.
        </p>

        {/* Central Image */}
        <div className="mb-16">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="w-full h-96 bg-gray-200 relative">
              <img
                src="https://picsum.photos/seed/rays-story/1200/600"
                alt="The Rays Story"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Our Vision Box */}
          <div className="bg-[#6A3E9F] rounded-xl p-8 lg:p-10 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#6A3E9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold">Our Vision</h3>
            </div>
            <p className="text-base lg:text-lg leading-relaxed">
              To be the leading Shariah-compliant microfinance institution in the Horn of Africa, fostering economic empowerment and financial inclusion for all.
            </p>
          </div>

          {/* Our Mission Box */}
          <div className="bg-[#FFC107] rounded-xl p-8 lg:p-10 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <circle cx="12" cy="12" r="6" strokeWidth="2" />
                  <circle cx="12" cy="12" r="2" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold">Our Mission</h3>
            </div>
            <p className="text-base lg:text-lg leading-relaxed">
              To provide accessible, ethical, and innovative financial solutions that uplift communities, support entrepreneurship, and promote sustainable development.
            </p>
          </div>
        </div>

        {/* Our Core Values Section */}
        <div className="mt-16 lg:mt-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#333333] text-center mb-12">
            Our Core Values
          </h3>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Shariah Integrity */}
            <div className="bg-white rounded-xl p-6 text-center border border-[#E0D9EB]">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#6A3E9F] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#333333] mb-3">
                Shariah Integrity
              </h4>
              <p className="text-base text-[#333333]">
                Unwavering commitment to Islamic principles in every transaction.
              </p>
            </div>

            {/* Social Impact */}
            <div className="bg-white rounded-xl p-6 text-center border border-[#E0D9EB]">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#6A3E9F] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#333333] mb-3">
                Social Impact
              </h4>
              <p className="text-base text-[#333333]">
                Empowering communities and reducing poverty through ethical finance.
              </p>
            </div>

            {/* Financial Inclusion */}
            <div className="bg-white rounded-xl p-6 text-center border border-[#E0D9EB]">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#6A3E9F] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <circle cx="12" cy="12" r="6" strokeWidth="2" />
                    <circle cx="12" cy="12" r="2" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#333333] mb-3">
                Financial Inclusion
              </h4>
              <p className="text-base text-[#333333]">
                Bringing banking services to underserved populations.
              </p>
            </div>

            {/* Trust & Transparency */}
            <div className="bg-white rounded-xl p-6 text-center border border-[#E0D9EB]">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#6A3E9F] rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h4 className="text-xl font-bold text-[#333333] mb-3">
                Trust & Transparency
              </h4>
              <p className="text-base text-[#333333]">
                Building lasting relationships through honest dealings.
              </p>
            </div>
          </div>
        </div>

        {/* Our Journey Timeline Section */}
        <div className="mt-16 lg:mt-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#333333] text-center mb-16">
            Our Journey
          </h3>

          {/* Timeline Container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#6A3E9F] h-full top-0"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2009 - Left */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
                    <div className="bg-[#6A3E9F] text-white px-4 py-1.5 rounded-lg text-sm font-medium inline-block mb-3">
                      2009
                    </div>
                    <h4 className="text-xl font-bold text-[#333333] mb-2">RMFI Founded</h4>
                    <p className="text-base text-[#333333]">Established to provide ethical finance</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FFC107] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2"></div>
              </div>

              {/* 2012 - Right */}
              <div className="relative flex items-center">
                <div className="w-1/2"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FFC107] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8 text-left">
                  <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
                    <div className="bg-[#6A3E9F] text-white px-4 py-1.5 rounded-lg text-sm font-medium inline-block mb-3">
                      2012
                    </div>
                    <h4 className="text-xl font-bold text-[#333333] mb-2">NBE Licensed</h4>
                    <p className="text-base text-[#333333]">Officially licensed by National Bank of Ethiopia</p>
                  </div>
                </div>
              </div>

              {/* 2015 - Left */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
                    <div className="bg-[#6A3E9F] text-white px-4 py-1.5 rounded-lg text-sm font-medium inline-block mb-3">
                      2015
                    </div>
                    <h4 className="text-xl font-bold text-[#333333] mb-2">Sahaypay Launch</h4>
                    <p className="text-base text-[#333333]">Pioneered digital Islamic banking in Ethiopia</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FFC107] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2"></div>
              </div>

              {/* 2020 - Right */}
              <div className="relative flex items-center">
                <div className="w-1/2"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FFC107] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8 text-left">
                  <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
                    <div className="bg-[#6A3E9F] text-white px-4 py-1.5 rounded-lg text-sm font-medium inline-block mb-3">
                      2020
                    </div>
                    <h4 className="text-xl font-bold text-[#333333] mb-2">250K+ Customers</h4>
                    <p className="text-base text-[#333333]">Reached quarter million milestone</p>
                  </div>
                </div>
              </div>

              {/* 2023 - Left */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
                    <div className="bg-[#6A3E9F] text-white px-4 py-1.5 rounded-lg text-sm font-medium inline-block mb-3">
                      2023
                    </div>
                    <h4 className="text-xl font-bold text-[#333333] mb-2">Regional Expansion</h4>
                    <p className="text-base text-[#333333]">Extended services to Somalia regions</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FFC107] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2"></div>
              </div>

              {/* 2024 - Right */}
              <div className="relative flex items-center">
                <div className="w-1/2"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#FFC107] rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 pl-8 text-left">
                  <div className="bg-gray-100 rounded-xl p-6 shadow-sm">
                    <div className="bg-[#6A3E9F] text-white px-4 py-1.5 rounded-lg text-sm font-medium inline-block mb-3">
                      2024
                    </div>
                    <h4 className="text-xl font-bold text-[#333333] mb-2">ETB 2.5B Financed</h4>
                    <p className="text-base text-[#333333]">Total financing crossed 2.5 billion birr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Regional Footprint Section */}
        <div className="mt-16 lg:mt-20 bg-gradient-to-br from-[#FFC107]/10 via-[#FFC107]/5 to-white -mx-6 lg:-mx-8 px-6 lg:px-8 py-16 lg:py-20">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#333333] text-center mb-12">
            Our Regional Footprint
          </h3>

          {/* Regional Data Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {/* Addis Ababa */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-[#6A3E9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="text-lg font-bold text-[#333333]">Addis Ababa</h4>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-[#333333]">
                  <span className="font-medium">Branches:</span> <span className="text-[#6A3E9F] font-bold">15</span>
                </div>
                <div className="text-sm text-[#333333]">
                  <span className="font-medium">Customers:</span> <span className="text-[#6A3E9F] font-bold">85K+</span>
                </div>
              </div>
            </div>

            {/* Somali Region */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-[#6A3E9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="text-lg font-bold text-[#333333]">Somali Region</h4>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-[#333333]">
                  <span className="font-medium">Branches:</span> <span className="text-[#6A3E9F] font-bold">23</span>
                </div>
                <div className="text-sm text-[#333333]">
                  <span className="font-medium">Customers:</span> <span className="text-[#6A3E9F] font-bold">120K+</span>
                </div>
              </div>
            </div>

            {/* Oromia */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-[#6A3E9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="text-lg font-bold text-[#333333]">Oromia</h4>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-[#333333]">
                  <span className="font-medium">Branches:</span> <span className="text-[#6A3E9F] font-bold">8</span>
                </div>
                <div className="text-sm text-[#333333]">
                  <span className="font-medium">Customers:</span> <span className="text-[#6A3E9F] font-bold">25K+</span>
                </div>
              </div>
            </div>

            {/* Amhara */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-[#6A3E9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="text-lg font-bold text-[#333333]">Amhara</h4>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-[#333333]">
                  <span className="font-medium">Branches:</span> <span className="text-[#6A3E9F] font-bold">5</span>
                </div>
                <div className="text-sm text-[#333333]">
                  <span className="font-medium">Customers:</span> <span className="text-[#6A3E9F] font-bold">15K+</span>
                </div>
              </div>
            </div>

            {/* Dire Dawa */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-[#6A3E9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="text-lg font-bold text-[#333333]">Dire Dawa</h4>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-[#333333]">
                  <span className="font-medium">Branches:</span> <span className="text-[#6A3E9F] font-bold">3</span>
                </div>
                <div className="text-sm text-[#333333]">
                  <span className="font-medium">Customers:</span> <span className="text-[#6A3E9F] font-bold">5K+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Overall Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Branches */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#E0D9EB] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#6A3E9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-[#6A3E9F] mb-2">54+</div>
              <div className="text-base text-[#333333] font-medium">Total Branches</div>
            </div>

            {/* Active Customers */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="8" cy="8" r="3" />
                    <circle cx="16" cy="8" r="3" />
                    <circle cx="12" cy="16" r="3" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">250K+</div>
              <div className="text-base text-[#333333] font-medium">Active Customers</div>
            </div>

            {/* Satisfaction Rate */}
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-[#E0D9EB] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#6A3E9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-[#6A3E9F] mb-2">98%</div>
              <div className="text-base text-[#333333] font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

