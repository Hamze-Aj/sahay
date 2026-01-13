export default function QuickActions() {
    const actions = [
        { name: 'Transfer Money', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' }, // Send icon
        { name: 'Deposit Funds', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' }, // Wallet icon
        { name: 'Pay Zakat', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }, // Dollar/Coin icon
        { name: 'View Statements', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' }, // Clock/History icon
    ];

    return (
        <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-700 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {actions.map((action) => (
                    <button
                        key={action.name}
                        onClick={() => alert(`Feature coming soon: ${action.name}`)}
                        className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-3 group"
                    >
                        <div className="w-10 h-10 rounded-full bg-gray-50 text-[#00A651] group-hover:bg-[#00A651] group-hover:text-white transition-colors flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={action.icon} />
                            </svg>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{action.name}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
