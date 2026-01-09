import Button from './Button';

export default function ServiceCard({ icon, title, description, features }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm h-full flex flex-col">
      {/* Icon */}
      <div className="w-12 h-12 bg-[#6A3E9F] rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="text-xl font-bold text-[#333333] mb-4">{title}</h3>
      
      {/* Description */}
      <p className="text-base text-[#333333] mb-6 leading-relaxed">{description}</p>
      
      {/* Features List */}
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#4CAF50] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-base text-[#333333]">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Learn More Button */}
      <Button variant="primary" showArrow className="w-full">
        Learn More
      </Button>
    </div>
  );
}





