export default function FreeTools() {
  const tools = [
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Business Record Keeper',
      category: 'Financial Management',
      description: 'Simple yet powerful bookkeeping tool designed for small businesses and micro-enterprises. Track income, expenses, and manage your business finances efficiently.',
      features: [
        'Daily sales and expense tracking',
        'Customer and supplier ledgers',
        'Inventory management'
      ],
      badge: 'Free',
      badgeColor: 'yellow',
      buttonText: 'Access Tool'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Profit Calculator',
      category: 'Financial Planning',
      description: 'Calculate your business profitability, break-even point, and pricing strategies. Essential tool for making informed financial decisions.',
      features: [
        'Gross profit margin calculator',
        'Break-even analysis',
        'Pricing strategy optimizer'
      ],
      badge: 'Free',
      badgeColor: 'yellow',
      buttonText: 'Access Tool'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Business Budget Planner',
      category: 'Financial Planning',
      description: 'Create and manage business budgets, forecast cash flows, and plan for seasonal variations. Keep your business finances organized and predictable.',
      features: [
        'Monthly/quarterly budget creation',
        'Expense categorization',
        'Revenue forecasting'
      ],
      badge: 'Free',
      badgeColor: 'yellow',
      buttonText: 'Access Tool'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <circle cx="12" cy="12" r="6" strokeWidth="2" />
          <circle cx="12" cy="12" r="2" strokeWidth="2" />
        </svg>
      ),
      title: 'Business Goal Tracker',
      category: 'Performance Management',
      description: 'Set SMART business goals, track progress, and celebrate milestones. Stay motivated and focused on achieving your business objectives.',
      features: [
        'SMART goal setting framework',
        'Revenue and growth targets',
        'Customer acquisition goals'
      ],
      badge: 'Free',
      badgeColor: 'yellow',
      buttonText: 'Access Tool'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Personal vs Business Finance Separator',
      category: 'Financial Management',
      description: 'Learn to separate personal and business finances, a critical skill for business success. Track both accounts and maintain clear financial boundaries.',
      features: [
        'Dual account tracking',
        'Personal withdrawals monitor',
        'Business reinvestment calculator'
      ],
      badge: 'Free',
      badgeColor: 'yellow',
      buttonText: 'Access Tool'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Customer Management System',
      category: 'Business Operations',
      description: 'Manage your customer relationships, track repeat customers, send reminders, and build customer loyalty for sustainable business growth.',
      features: [
        'Customer database',
        'Purchase history tracking',
        'Birthday and anniversary reminders'
      ],
      badge: 'Free',
      badgeColor: 'yellow',
      buttonText: 'Access Tool'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v9M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      title: 'Business Basics Course',
      category: 'Micro Training',
      description: 'Comprehensive 4-week online course covering business fundamentals, financial literacy, marketing basics, and customer service for entrepreneurs.',
      features: [
        '4-week structured curriculum',
        'Video lessons (Amharic, English, Somali)',
        'Practical exercises and worksheets'
      ],
      badge: 'ETB 500 (Free for women entrepreneurs)',
      badgeColor: 'purple',
      buttonText: 'Enroll Now'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Financial Literacy Training',
      category: 'Micro Training',
      description: 'Master personal and business financial management. Learn budgeting, saving, investing, and debt management strategies for long-term financial success.',
      features: [
        '6 modules (self-paced)',
        'Interactive financial simulations',
        'Budget creation workshop'
      ],
      badge: 'Free',
      badgeColor: 'yellow',
      buttonText: 'Enroll Now'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Digital Marketing for Small Business',
      category: 'Micro Training',
      description: 'Learn how to market your business online using social media, WhatsApp Business, and low-cost digital tools to reach more customers and grow sales.',
      features: [
        'Social media marketing basics',
        'WhatsApp Business strategies',
        'Content creation for small budgets'
      ],
      badge: 'ETB 300',
      badgeColor: 'purple',
      buttonText: 'Enroll Now'
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-[#6A3E9F] text-white px-4 py-2 rounded-full text-sm font-medium">
              Business Development
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Free Tools & Training for Entrepreneurs
          </h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            Empower your business with free digital tools and affordable training programs designed for micro-entrepreneurs and small business owners
          </p>
        </div>

        {/* Statistics Banner */}
        <div className="bg-[#6A3E9F] rounded-xl p-8 lg:p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Businesses Using Tools */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50K+</div>
              <div className="text-base text-white">Businesses Using Tools</div>
            </div>

            {/* Training Graduates */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v9M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15K+</div>
              <div className="text-base text-white">Training Graduates</div>
            </div>

            {/* Free Tools Available */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">8+</div>
              <div className="text-base text-white">Free Tools Available</div>
            </div>

            {/* Training Programs */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-[#FFC107]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">20+</div>
              <div className="text-base text-white">Training Programs</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button className="bg-gray-200 text-[#333333] px-6 py-2.5 rounded-lg font-medium text-sm">
            All Tools & Training
          </button>
          <button className="bg-gray-100 text-[#333333] px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">
            Financial Tools
          </button>
          <button className="bg-gray-100 text-[#333333] px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">
            Business Training
          </button>
          <button className="bg-gray-100 text-[#333333] px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-200 transition-colors">
            Free Resources
          </button>
        </div>

        {/* Tool Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm relative">
              {/* Badge Tag - Top Right */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`${tool.badgeColor === 'yellow' ? 'bg-[#FFC107] text-[#333333]' : 'bg-[#6A3E9F] text-white'} px-3 py-1 rounded text-xs font-medium whitespace-nowrap`}>
                  {tool.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-[#6A3E9F] rounded-lg flex items-center justify-center mb-6">
                {tool.icon}
              </div>

              {/* Title and Category */}
              <h3 className="text-xl font-bold text-[#333333] mb-2">{tool.title}</h3>
              <p className="text-[#6A3E9F] text-sm font-medium mb-4">{tool.category}</p>

              {/* Description */}
              <p className="text-base text-[#333333] mb-6 leading-relaxed">{tool.description}</p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {tool.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-[#333333]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="bg-[#6A3E9F] text-white px-6 py-3 rounded-lg font-medium text-base flex items-center gap-2 w-full justify-center hover:bg-[#5a3590] transition-colors">
                {tool.buttonText}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Women in Business Webinar Series Card */}
        <div className="mt-12">
          <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm relative max-w-2xl">
            {/* Badge Tag - Top Right */}
            <div className="absolute top-4 right-4">
              <span className="bg-[#FFC107] text-[#333333] px-3 py-1 rounded text-xs font-medium">
                Free
              </span>
            </div>

            {/* Icon */}
            <div className="w-16 h-16 bg-[#6A3E9F] rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Title and Category */}
            <h3 className="text-2xl font-bold text-[#333333] mb-2">Women in Business Webinar Series</h3>
            <p className="text-[#6A3E9F] text-sm font-medium mb-4">Micro Training</p>

            {/* Description */}
            <p className="text-base text-[#333333] mb-6 leading-relaxed">
              Monthly live webinars featuring successful women entrepreneurs, covering topics like work-life balance, scaling businesses, and accessing finance.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base text-[#333333]">Monthly live sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base text-[#333333]">Successful entrepreneur stories</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#FFC107] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-base text-[#333333]">Interactive Q&A</span>
              </li>
            </ul>

            {/* Enroll Now Button */}
            <button className="bg-[#6A3E9F] text-white px-6 py-3 rounded-lg font-medium text-base flex items-center gap-2 hover:bg-[#5a3590] transition-colors">
              Enroll Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Need Custom Business Support Card */}
        <div className="mt-12">
          <div className="bg-white rounded-xl p-12 border border-gray-100 shadow-sm text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#333333] mb-4">
              Need Custom Business Support?
            </h3>
            <p className="text-lg text-[#333333] mb-8 max-w-2xl mx-auto">
              Our business development team offers personalized consulting, mentorship programs, and customized training for growing enterprises
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-[#6A3E9F] text-white px-8 py-3.5 rounded-lg font-medium text-base">
                Schedule Consultation
              </button>
              <button className="bg-white text-[#6A3E9F] border-2 border-[#6A3E9F] px-8 py-3.5 rounded-lg font-medium text-base">
                Browse All Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

