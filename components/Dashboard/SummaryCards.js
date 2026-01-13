export default function SummaryCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Account Balance */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-gray-500 text-sm font-medium">Account Balance</h3>
                    <span className="text-green-600 bg-green-50 p-1 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </span>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">ETB 15,000</p>
                <p className="text-xs text-gray-400">Wadiah Savings Account</p>
            </div>

            {/* Active Financing */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-gray-500 text-sm font-medium">Active Financing</h3>
                    <span className="text-yellow-600 bg-yellow-50 p-1 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                    </span>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">ETB 32,000</p>
                <p className="text-xs text-gray-400">Remaining balance</p>
            </div>

            {/* Next Payment */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-gray-500 text-sm font-medium">Next Payment</h3>
                    <span className="text-orange-600 bg-orange-50 p-1 rounded">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </span>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">ETB 4,500</p>
                <p className="text-xs text-gray-400">Due: January 15, 2025</p>
            </div>
        </div>
    );
}
