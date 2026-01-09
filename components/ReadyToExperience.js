import Button from './Button';

export default function ReadyToExperience() {
  return (
    <section className="bg-[#6A3E9F] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Experience Modern Banking?
        </h2>
        <p className="text-lg text-white mb-10 max-w-2xl mx-auto leading-relaxed">
          Join thousands of satisfied clients who trust Rays Financial Services for their banking needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#FFC107] text-[#333333] px-8 py-3.5 rounded-lg font-medium text-base">
            Open Account Now
          </button>
          <button className="bg-white text-[#6A3E9F] px-8 py-3.5 rounded-lg font-medium text-base">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}





