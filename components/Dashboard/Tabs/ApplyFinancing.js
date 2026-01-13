export default function ApplyFinancing() {
    return (
        <div className="space-y-6">
            {/* Application Form */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="text-gray-700 font-medium mb-2">Apply for Islamic Financing</h3>
                <p className="text-xs text-gray-400 mb-6">All our products are 100% Shariah-compliant and certified by our Shariah Supervisory Board</p>

                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-2">Select Product</label>
                            <select className="w-full bg-gray-50 border-0 rounded p-3 text-sm text-gray-600 outline-none focus:ring-1 focus:ring-[#00A651]">
                                <option>Choose financing product...</option>
                                <option>Murabaha (Cost-Plus)</option>
                                <option>Ijara (Leasing)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-2">Amount (ETB)</label>
                            <input
                                type="text"
                                className="w-full bg-gray-50 border-0 rounded p-3 text-sm outline-none focus:ring-1 focus:ring-[#00A651]"
                                placeholder="Enter amount"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-2">Financing Term</label>
                            <select className="w-full bg-gray-50 border-0 rounded p-3 text-sm text-gray-600 outline-none focus:ring-1 focus:ring-[#00A651]">
                                <option>Select term</option>
                                <option>6 Months</option>
                                <option>12 Months</option>
                                <option>24 Months</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-2">Purpose</label>
                            <select className="w-full bg-gray-50 border-0 rounded p-3 text-sm text-gray-600 outline-none focus:ring-1 focus:ring-[#00A651]">
                                <option>Select purpose</option>
                                <option>Business Expansion</option>
                                <option>Equipment</option>
                                <option>Education</option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-green-50 border border-green-100 rounded-lg p-3 flex items-start gap-3">
                        <div className="mt-0.5 text-green-700">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold text-gray-900">Shariah-Compliant Guarantee</h4>
                            <p className="text-xs text-gray-600 mt-1">This financing is structured according to Islamic principles. No interest (riba) is charged. Profit-sharing and asset-backed transactions ensure fairness for all parties.</p>
                        </div>
                    </div>

                    <button type="button" className="w-full bg-[#8bad9b] text-white font-medium py-2.5 rounded hover:bg-[#7a9e8c] transition-colors">
                        Submit Application
                    </button>
                </form>
            </div>

            {/* Education/Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">What is Murabaha?</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">Cost-plus financing where we purchase an asset for you and sell it at a marked-up price payable in installments. Full transparency guaranteed.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">What is Salam?</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">Pre-paid purchase contract, perfect for farmers. We finance your crop inputs and purchase the harvest at a predetermined price.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">What is Ijara?</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">Lease-to-own financing for equipment, vehicles, or property. Make monthly lease payments with option to own at the end.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">What is Wadiah?</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">Interest-free savings account based on safekeeping principle. Your deposits are secure and Shariah-compliant.</p>
                </div>
            </div>
        </div>
    );
}
