export default function StatCard({ icon, iconBgColor, value, label }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm">
      <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <div className="text-4xl lg:text-5xl font-bold text-[#333333] mb-3">{value}</div>
      <div className="text-base text-[#333333]">{label}</div>
    </div>
  );
}





