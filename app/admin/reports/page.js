export default function AdminReports() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Generate Report Form */}
            <div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm h-fit">
                <h2 className="text-sm font-semibold text-gray-800 mb-6">Generate Report</h2>

                <form className="space-y-6">
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-2">Report Type</label>
                        <div className="relative">
                            <select className="w-full bg-gray-50 border-0 rounded p-3 text-xs text-gray-600 outline-none focus:ring-1 focus:ring-green-600 appearance-none">
                                <option>Select report type</option>
                                <option>Financial Summary</option>
                                <option>Customer Growth</option>
                                <option>Portfolio Analysis</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-2">Period</label>
                        <div className="relative">
                            <select className="w-full bg-gray-50 border-0 rounded p-3 text-xs text-gray-600 outline-none focus:ring-1 focus:ring-green-600 appearance-none">
                                <option>Select period</option>
                                <option>Last 30 Days</option>
                                <option>This Quarter</option>
                                <option>Year to Date</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                            </div>
                        </div>
                    </div>

                    <button type="button" className="w-full bg-[#1b5e20] hover:bg-[#154a19] text-white text-sm font-medium py-2.5 rounded flex items-center justify-center gap-2 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        Generate Report
                    </button>
                </form>
            </div>

            {/* Quick Stats Side */}
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden h-fit">
                <div className="p-6 border-b border-gray-100">
                    <h2 className="text-sm font-semibold text-gray-800">Quick Stats</h2>
                </div>
                <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-xs text-gray-600">Total Disbursed (2024)</span>
                        <span className="text-sm font-bold text-gray-900">ETB 2.5B</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-xs text-gray-600">New Customers (Dec)</span>
                        <span className="text-sm font-bold text-gray-900">1,247</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-xs text-gray-600">Active Financing</span>
                        <span className="text-sm font-bold text-gray-900">15,432</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                        <span className="text-xs text-gray-600">Default Rate</span>
                        <span className="text-sm font-bold text-green-600">1.7%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
