import Button from './Button';

export default function Hero() {
  return (
    <section className="relative bg-[#F8F8F8] py-24 lg:py-32 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute top-24 left-8 lg:left-16 w-32 h-32 bg-[#E0D9EB] rounded-2xl rotate-12 opacity-60"></div>
      <div className="absolute top-1/2 right-12 lg:right-24 w-24 h-24 bg-[#E0D9EB] rounded-2xl rotate-12 opacity-60"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Main Heading */}
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
          <span className="text-[#333333] block">Empowering Communities</span>
          <span className="text-[#6A3E9F] block mt-2">Through Ethical Finance</span>
        </h1>

        {/* Description */}
        <p className="text-base lg:text-lg text-[#333333] mb-12 max-w-3xl mx-auto leading-relaxed">
          Rays Microfinance Institution provides Shariah-compliant financial solutions to individuals, SMEs, and communities across Ethiopia and Somalia. Building prosperity through faith-based banking.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" showArrow>
            Open Account
          </Button>
          <Button variant="secondary" href="https://sahay.app/download">
            Download Sahaypay App
          </Button>
        </div>
      </div>
    </section>
  );
}
