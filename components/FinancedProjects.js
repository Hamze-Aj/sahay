export default function FinancedProjects() {
  const metrics = [
    {
      value: 'USD 88M+',
      label: 'Total Project Value',
      borderColor: 'border-[#6A3E9F]'
    },
    {
      value: '300K+',
      label: 'Direct Beneficiaries',
      borderColor: 'border-[#FFC107]'
    },
    {
      value: '15+',
      label: 'Partner Organizations',
      borderColor: 'border-[#6A3E9F]'
    },
    {
      value: '8',
      label: 'Active Programs',
      borderColor: 'border-[#FFC107]'
    }
  ];

  const projects = [
    {
      image: 'https://picsum.photos/seed/agriculture/400/250',
      status: 'Active',
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Sustainable Agriculture Financing Program',
      category: 'Agricultural Development',
      description: 'Comprehensive agricultural financing program providing Salam contracts to smallholder farmers for seeds, fertilizers, and equipment.',
      beneficiaries: '15,000+ smallholder farmers',
      location: 'Somali Region, Afar Region, Oromia Region',
      partners: 'Mercy Corps & FAO'
    },
    {
      image: 'https://picsum.photos/seed/women-business/400/250',
      status: 'Active',
      icon: (
        <svg className="w-6 h-6 text-[#6A3E9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v9M5 13.909A11.955 11.955 0 0112 12c1.93 0 3.68.467 5.241 1.209M19 13.909V12a7.972 7.972 0 00-1.759-4.976M5 13.909V6.091a7.972 7.972 0 011.759-4.976" />
        </svg>
      ),
      title: 'Women Entrepreneurship Development Program',
      category: 'Economic Empowerment',
      description: 'Dedicated program empowering women entrepreneurs through Islamic microfinance, business training, and mentorship.',
      beneficiaries: '20,000+ women entrepreneurs',
      location: 'Addis Ababa, Dire Dawa, Harar, Jigjiga, Somali...',
      partners: 'UN Women & JOA'
    },
    {
      image: 'https://picsum.photos/seed/housing/400/250',
      status: 'Active',
      icon: (
        <svg className="w-6 h-6 text-[#6A3E9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Affordable Housing Finance Initiative',
      category: 'Housing Development',
      description: 'Islamic housing finance program providing Ijara (lease-to-own) financing for low and middle-income families.',
      beneficiaries: '5,000 families (25,000+ individuals)',
      location: 'Addis Ababa, Dire Dawa, Mekelle, Bahir Dar,...',
      partners: 'UN-Habitat & Ministry of Urban Development'
    },
    {
      image: 'https://picsum.photos/seed/water/400/250',
      status: 'Active',
      icon: (
        <svg className="w-6 h-6 text-[#6A3E9F]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.69c-2.5 0-4.5 2-4.5 4.5 0 3 4.5 7.5 4.5 7.5s4.5-4.5 4.5-7.5c0-2.5-2-4.5-4.5-4.5z" />
        </svg>
      ),
      title: 'Rural Water & Sanitation Project',
      category: 'Infrastructure Development',
      description: 'Integrated WASH (Water, Sanitation, and Hygiene) project providing Musharakah financing to community water systems and sanitation facilities.',
      beneficiaries: '100,000+ rural community members',
      location: 'Somali Region, Afar Region, SNNPR',
      partners: 'African Development Bank & UNICEF'
    },
    {
      image: 'https://picsum.photos/seed/solar/400/250',
      status: 'Active',
      icon: (
        <svg className="w-6 h-6 text-[#6A3E9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Solar Energy Access Program',
      category: 'Renewable Energy',
      description: 'Green energy financing program providing Murabaha contracts for solar home systems, solar water pumps, and community solar installations.',
      beneficiaries: '10,000 households (50,000+ people)',
      location: 'Somali Region, Afar, Gambella, SNNPR',
      partners: 'Global Green Fund & Power Africa'
    },
    {
      image: 'https://picsum.photos/seed/relief/400/250',
      status: 'Active',
      icon: (
        <svg className="w-6 h-6 text-[#6A3E9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Emergency Relief and Resilience Program',
      category: 'Humanitarian Response',
      description: 'Emergency response program providing interest-free Qard Hassan loans and grants to conflict-affected and disaster-hit communities.',
      beneficiaries: '25,000 households (125,000+ individuals)',
      location: 'Somali Region, Tigray, Afar, Oromia (conflict...',
      partners: 'JOA (Joint Operations Addis) & Red Crescent'
    },
    {
      image: 'https://picsum.photos/seed/sme/400/250',
      status: 'Active',
      icon: (
        <svg className="w-6 h-6 text-[#6A3E9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'SME Growth Acceleration Program',
      category: 'Business Development',
      description: 'Comprehensive SME financing and capacity building program combining Musharakah equity financing with business advisory services.',
      beneficiaries: '1,000 SMEs (30,000+ employees)',
      location: 'Addis Ababa, Dire Dawa, Industrial Parks',
      partners: 'IFC & Ethiopian Chamber of Commerce'
    },
    {
      image: 'https://picsum.photos/seed/youth/400/250',
      status: 'Active',
      icon: (
        <svg className="w-6 h-6 text-[#6A3E9F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Youth Employment and Skills Program',
      category: 'Youth Development',
      description: 'Youth-focused program providing vocational skills training combined with Islamic microfinance for self-employment and entrepreneurship.',
      beneficiaries: '15,000 youth (18-35 years)',
      location: 'Nationwide (focus on urban and peri-urban areas)',
      partners: 'ILO & Ministry of Youth and Sports'
    }
  ];

  return (
    <section id="financed-projects" className="py-16 lg:py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-[#6A3E9F] text-white px-4 py-1.5 rounded-full text-sm font-medium">
              Impact & Development
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Financed Projects & Programs
          </h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            Partnering with leading development organizations to finance transformative projects that create lasting impact in communities across Ethiopia and Somalia
          </p>
        </div>

        {/* Key Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className={`bg-white rounded-xl p-6 border-2 ${metric.borderColor} text-center`}>
              <div className="text-3xl lg:text-4xl font-bold text-[#333333] mb-2">
                {metric.value}
              </div>
              <div className="text-base text-[#333333]">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Project Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
              {/* Image with Status Tag */}
              <div className="relative">
                <div className="w-full h-48 bg-gray-200 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-[#6A3E9F] text-white px-3 py-1 rounded text-xs font-medium">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 mt-1">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#333333] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#6A3E9F] font-medium">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base text-[#333333] mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#6A3E9F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-sm text-[#333333]">
                      <span className="font-medium">Beneficiaries:</span> {project.beneficiaries}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#6A3E9F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm text-[#333333]">
                      <span className="font-medium">Location:</span> {project.location}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#6A3E9F] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="text-sm text-[#333333]">
                      <span className="font-medium">Partners:</span> {project.partners}
                    </span>
                  </div>
                </div>

                {/* View Details Button */}
                <button className="w-full bg-[#6A3E9F] text-white px-6 py-3 rounded-lg font-medium text-base flex items-center justify-center gap-2 hover:bg-[#5a3590] transition-colors">
                  View Details
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Partner with Us Banner */}
        <div className="mt-16 bg-[#6A3E9F] rounded-t-2xl py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#FFC107] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-[#333333]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <circle cx="12" cy="12" r="6" strokeWidth="2" />
                  <circle cx="12" cy="12" r="2" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Partner with Us on Impact Projects
            </h3>

            {/* Description */}
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
              We welcome partnerships with NGOs, development agencies, and impact investors to co-finance projects that create sustainable development outcomes
            </p>

            {/* Button */}
            <button className="bg-[#FFC107] text-[#333333] px-8 py-3.5 rounded-lg font-medium text-base hover:bg-[#e0a800] transition-colors">
              Discuss Partnership Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

