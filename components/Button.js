export default function Button({ 
  children, 
  variant = 'primary', 
  showArrow = false,
  className = '',
  ...props 
}) {
  const baseClasses = 'px-8 py-3.5 rounded-lg font-medium text-base';
  
  const variants = {
    primary: 'bg-[#6A3E9F] text-white',
    secondary: 'bg-white text-[#6A3E9F] border-2 border-[#6A3E9F]',
    green: 'bg-[#4CAF50] text-white hover:bg-[#45a049] transition-colors'
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {showArrow ? (
        <span className="flex items-center gap-2">
          {children}
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      ) : (
        children
      )}
    </button>
  );
}

