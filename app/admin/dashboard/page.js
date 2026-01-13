export default function AdminDashboard() {
    return (
        <div className="space-y-6">

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-gray-500 text-xs font-medium">Total Financing</span>
                        <span className="text-green-500 text-xs bg-green-50 px-1.5 py-0.5 rounded font-bold">$</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">ETB 2.5B</h3>
                    <p className="text-[10px] text-green-600 font-medium mt-1">+12.5% from last month</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-gray-500 text-xs font-medium">Active Customers</span>
                        <span className="text-yellow-600 text-xs bg-yellow-50 px-1.5 py-0.5 rounded font-bold">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">250,437</h3>
                    <p className="text-[10px] text-green-600 font-medium mt-1">+8.2% from last month</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-gray-500 text-xs font-medium">Pending Applications</span>
                        <span className="text-orange-500 text-xs bg-orange-50 px-1.5 py-0.5 rounded font-bold">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">47</h3>
                    <p className="text-[10px] text-gray-400 font-medium mt-1">Requires review</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                        <span className="text-gray-500 text-xs font-medium">Portfolio Health</span>
                        <span className="text-green-500 text-xs bg-green-50 px-1.5 py-0.5 rounded font-bold">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">98.3%</h3>
                    <p className="text-[10px] text-gray-400 font-medium mt-1">Repayment rate</p>
                </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Mock Line Chart */}
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm min-h-[300px]">
                    <h3 className="text-sm font-medium text-gray-800 mb-6">Monthly Financing Trend</h3>
                    <div className="relative h-48 border-l border-b border-dashed border-gray-200 ml-4 mb-4">
                        {/* Y-Axis Labels (Mock) */}
                        <div className="absolute -left-12 bottom-0 text-[10px] text-gray-400">0+</div>
                        <div className="absolute -left-12 bottom-1/4 text-[10px] text-gray-400">80000-</div>
                        <div className="absolute -left-12 bottom-2/4 text-[10px] text-gray-400">160000-</div>
                        <div className="absolute -left-12 bottom-3/4 text-[10px] text-gray-400">240000-</div>
                        <div className="absolute -left-12 top-0 text-[10px] text-gray-400">320000-</div>

                        {/* SVG Line */}
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                            <polyline
                                fill="none"
                                stroke="#198754"
                                strokeWidth="2"
                                points="0,150 50,130 100,135 150,110 200,90 250,80 300,60 350,70 400,50 450,30 500,10"
                            />
                            {/* Dots */}
                            <circle cx="0" cy="150" r="3" fill="white" stroke="#198754" strokeWidth="2" />
                            <circle cx="50" cy="130" r="3" fill="white" stroke="#198754" strokeWidth="2" />
                            <circle cx="100" cy="135" r="3" fill="white" stroke="#198754" strokeWidth="2" />
                            <circle cx="150" cy="110" r="3" fill="white" stroke="#198754" strokeWidth="2" />
                            <circle cx="200" cy="90" r="3" fill="white" stroke="#198754" strokeWidth="2" />
                            <circle cx="250" cy="80" r="3" fill="white" stroke="#198754" strokeWidth="2" />
                            <circle cx="300" cy="60" r="3" fill="white" stroke="#198754" strokeWidth="2" />
                            <circle cx="350" cy="70" r="3" fill="white" stroke="#198754" strokeWidth="2" />
                            <circle cx="400" cy="50" r="3" fill="white" stroke="#198754" strokeWidth="2" />
                            <circle cx="450" cy="30" r="3" fill="white" stroke="#198754" strokeWidth="2" />
                            <circle cx="500" cy="10" r="3" fill="white" stroke="#198754" strokeWidth="2" />
                        </svg>
                    </div>
                    {/* X-Axis Labels */}
                    <div className="flex justify-between text-[10px] text-gray-400 ml-4">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                    </div>
                </div>

                {/* Mock Pie Chart */}
                <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm min-h-[300px] flex flex-col">
                    <h3 className="text-sm font-medium text-gray-800 mb-6">Product Distribution</h3>
                    <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-8">
                        <div
                            className="w-40 h-40 rounded-full"
                            style={{
                                background: 'conic-gradient(#198754 0% 35%, #9fd3c7 35% 47%, #eebf3d 47% 65%, #d1a435 65% 82%, #2d5a27 82% 100%)'
                            }}
                        ></div>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#198754]"></div>
                                <span className="text-xs text-green-700">Murabaha: 35%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#2d5a27]"></div>
                                <span className="text-xs text-green-900">Salam: 20%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#eebf3d]"></div>
                                <span className="text-xs text-yellow-600">Ijara: 15%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#d1a435]"></div>
                                <span className="text-xs text-yellow-700">Musharakah: 18%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#9fd3c7]"></div>
                                <span className="text-xs text-teal-600 opacity-60">Wadiah: 12%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
