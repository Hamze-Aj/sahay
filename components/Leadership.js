export default function Leadership() {
  const leaders = [
    {
      name: 'Ahmed Hassan Osman',
      title: 'Chief Executive Officer',
      description: 'Ahmed brings over 20 years of experience in Islamic banking and financial services, leading Rays Microfinance\'s strategic vision and growth initiatives.',
      tag: 'Executive Leadership',
      image: 'https://picsum.photos/seed/ahmed/400/400'
    },
    {
      name: 'Fatima Abdi Mohamed',
      title: 'Chief Financial Officer',
      description: 'Fatima oversees all financial operations, ensuring robust fiscal management and compliance across all Rays Microfinance operations.',
      tag: 'Executive Leadership',
      image: 'https://picsum.photos/seed/fatima/400/400'
    },
    {
      name: 'Ibrahim Yusuf Ali',
      title: 'Director of Sahaypay',
      description: 'Ibrahim leads Sahaypay, Rays\' digital wallet platform serving over 1 million users across Ethiopia with innovative payment solutions.',
      tag: 'Digital Banking Leadership',
      image: 'https://picsum.photos/seed/ibrahim/400/400'
    },
    {
      name: 'Dr. Aisha Nur Hassan',
      title: 'Chief Technology Officer',
      description: 'Dr. Aisha leads all technology initiatives at Rays, overseeing core banking systems, digital platforms, and infrastructure development.',
      tag: 'Technology Leadership',
      image: 'https://picsum.photos/seed/aisha/400/400'
    },
    {
      name: 'Sheikh Mohammed Al-Amin',
      title: 'Chairman, Shariah Supervisory Board',
      description: 'Sheikh Mohammed chairs Rays\' Shariah Supervisory Board, ensuring all products and services comply with Islamic principles and ethical standards.',
      tag: 'Shariah Governance',
      image: 'https://picsum.photos/seed/mohammed/400/400'
    },
    {
      name: 'Yasmin Abdurahman',
      title: 'Head of Women\'s Banking',
      description: 'Yasmin leads Rays\' Women\'s Banking division, empowering female entrepreneurs and promoting financial inclusion for women across Ethiopia.',
      tag: 'Social Impact Leadership',
      image: 'https://picsum.photos/seed/yasmin/400/400'
    },
    {
      name: 'Abdullahi Omar Hussein',
      title: 'Regional Director - Somali Region',
      description: 'Abdullahi leads Rays\' operations across the Somali region, managing branch networks and expanding financial services to underserved communities.',
      tag: 'Regional Leadership',
      image: 'https://picsum.photos/seed/abdullahi/400/400'
    },
    {
      name: 'Samuel Tekle Gebre',
      title: 'Chief Risk Officer',
      description: 'Samuel oversees enterprise risk management, credit risk assessment, and regulatory compliance across all Rays Microfinance operations.',
      tag: 'Risk & Compliance',
      image: 'https://picsum.photos/seed/samuel/400/400'
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-[#6A3E9F] text-white px-4 py-2 rounded-full text-sm font-medium">
              Leadership Team
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            Experienced professionals driving innovation, growth, and social impact in Islamic finance
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Image Container with Overlay Tag */}
              <div className="relative h-64 bg-gray-200">
                {/* Placeholder for image */}
                {/* Image */}
                <div className="w-full h-full relative">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Overlay Tag */}
                <div className="absolute top-4 right-4">
                  <span className="bg-[#6A3E9F] text-white px-3 py-1 rounded-full text-xs font-medium">
                    {leader.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#333333] mb-1">{leader.name}</h3>
                <p className="text-sm text-[#6A3E9F] font-medium mb-3">{leader.title}</p>
                <p className="text-sm text-[#333333] mb-4 leading-relaxed">{leader.description}</p>
                <button className="w-full border-2 border-[#6A3E9F] text-[#6A3E9F] px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#6A3E9F] hover:text-white transition-colors">
                  View Full Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Company Statistics Banner */}
        <div className="bg-[#6A3E9F] rounded-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Executive Team Members */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-base text-white">Executive Team Members</div>
            </div>

            {/* Years Combined Experience */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-base text-white">Years Combined Experience</div>
            </div>

            {/* Ethiopian Leadership */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-base text-white">Ethiopian Leadership</div>
            </div>

            {/* Advanced Degrees */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v9M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">12+</div>
              <div className="text-base text-white">Advanced Degrees</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

