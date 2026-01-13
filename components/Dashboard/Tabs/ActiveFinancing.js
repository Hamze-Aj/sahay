export default function ActiveFinancing() {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-gray-700 font-medium mb-6">My Active Financing</h3>

            <div className="border border-gray-100 rounded-lg p-6 mb-4">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Murabaha - Education</h4>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded mt-1 inline-block">Active</span>
                    </div>
                    <button className="text-xs border border-gray-200 px-3 py-1 rounded hover:bg-gray-50">
                        View Details
                    </button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-4 border-t border-b border-gray-50">
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Principal Amount</p>
                        <p className="font-semibold text-gray-900">ETB 50,000</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Remaining Balance</p>
                        <p className="font-semibold text-[#00A651]">ETB 32,000</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Monthly Payment</p>
                        <p className="font-semibold text-gray-900">ETB 4,500</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-400 mb-1">Next Payment Due</p>
                        <p className="font-semibold text-orange-600">2025-01-15</p>
                    </div>
                </div>

                <div className="mt-6 flex gap-3">
                    <button className="bg-[#0f3d2f] hover:bg-[#0b2e23] text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                        Make Payment
                    </button>
                    <button className="border border-gray-200 text-gray-600 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        Download Schedule
                    </button>
                </div>
            </div>
        </div>
    );
}
