import Image from 'next/image';

export default function Leadership() {
  return (
    <section id="governance" className="bg-[#F8F8F8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-[#6A3E9F] text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              Leadership Team
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#333333] mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            Guiding digital innovation, financial inclusion, and sustainable growth across Ethiopia and the region.
          </p>
        </div>

        <div className="bg-white rounded-[28px] border border-[#EAE3F3] shadow-[0_20px_60px_rgba(106,62,159,0.09)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)]">
            <div className="relative bg-gradient-to-br from-[#F4ECFF] via-[#F9F5FF] to-[#F2F7F0] p-6 lg:p-8 flex items-center justify-center">
              <div className="w-full max-w-[320px]">
                <div className="relative rounded-[24px] overflow-hidden shadow-xl ring-4 ring-white">
                  <Image
                    src="/ceo.jpeg"
                    alt="Abdiaziz Hassen Muhumed"
                    width={800}
                    height={960}
                    priority
                    className="w-full h-[420px] object-cover object-center"
                  />
                </div>
                <div className="mt-5 text-center">
                  <span className="inline-flex items-center rounded-full bg-[#D4A574] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#2C1A12]">
                    Chief Executive Officer
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 lg:p-12">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#6A3E9F] mb-3">
                  Rays Microfinance Institution S.C. & SahayPay
                </p>
                <h3 className="text-3xl sm:text-4xl font-bold text-[#1F1F1F] leading-tight">
                  Abdiaziz Hassen Muhumed
                </h3>
                <p className="mt-3 text-lg font-medium text-[#D4A574]">
                  Chief Executive Officer, Rays Microfinance Institution S.C. and SahayPay
                </p>
              </div>

              <div className="space-y-5 text-base leading-8 text-[#333333]">
                <p>
                  Abdiaziz Hassen Muhumed is the Chief Executive Officer of Rays Microfinance Institution S.C. and its digital financial services platform, SahayPay. An economist and financial services executive with more than 15 years of experience building and transforming institutions across East Africa, he has led Rays since 2018, guiding its growth into a regulated financial institution with a national branch and sub-branch network, a workforce of several hundred employees, and a growing digital distribution footprint.
                </p>

                <p>
                  Under his leadership, Rays has directed the development and scale-up of SahayPay, extending mobile money and digital financial services to well over a million customers through USSD, a nationwide agent network, and interoperable payment rails. He has driven the institution&apos;s transition toward a fully digital, Sharia-compliant financial model — combining Islamic finance principles with digital onboarding, automated credit workflows, and data-led decision-making to reach customers conventional banking has historically underserved.
                </p>

                <p>
                  Abdiaziz has built strategic relationships with regulators, banks, investors, and development partners, including programs that have channeled substantial digitally enabled financing to underserved communities and micro and small enterprises. Beyond Rays and SahayPay, he co-founded HudHud Express and CommercePal, technology-enabled ventures in logistics and commerce that remain part of the broader ecosystem Rays works within.
                </p>

                <p>
                  He holds a Bachelor of Arts in Economics and a Postgraduate Master of Arts in Development Economics from Unity University, and is currently an Executive MBA candidate in the TRIUM Global Executive MBA program, jointly delivered by NYU Stern School of Business, HEC Paris, and the London School of Economics and Political Science. He serves as a Board Member of the Ethiopian Muslims Development Agency (EMDA), and is active in community initiatives supporting financial inclusion, education, and entrepreneurship.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[#EDE7F5]">
                <h4 className="text-lg font-bold text-[#333333] mb-4">Connect with our CEO</h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/abdiaziz-h-muhumed/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#6A3E9F] px-4 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 hover:bg-[#5b347d]"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.facebook.com/share/1EWsmMj2L9/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#D4A574] bg-[#FFF9F2] px-4 py-2.5 text-sm font-medium text-[#7B592F] transition-transform hover:-translate-y-0.5"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

