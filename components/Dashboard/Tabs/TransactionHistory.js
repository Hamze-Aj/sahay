export default function TransactionHistory() {
    const transactions = [
        { date: '2024-12-15', type: 'Deposit', amount: 'ETB 5,000', balance: 'ETB 15,000', status: 'completed' },
        { date: '2024-12-10', type: 'Withdrawal', amount: 'ETB 2,000', balance: 'ETB 10,000', status: 'completed' },
        { date: '2024-12-05', type: 'Transfer', amount: 'ETB 1,500', balance: 'ETB 12,000', status: 'completed' },
    ];

    return (
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-gray-700 font-medium mb-6">Transaction History</h3>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase border-b border-gray-100">
                        <tr>
                            <th className="py-3 px-2 font-medium">Date</th>
                            <th className="py-3 px-2 font-medium">Type</th>
                            <th className="py-3 px-2 font-medium">Amount</th>
                            <th className="py-3 px-2 font-medium">Balance</th>
                            <th className="py-3 px-2 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((tx, index) => (
                            <tr key={index} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/50">
                                <td className="py-4 px-2 text-gray-600 font-medium">{tx.date}</td>
                                <td className="py-4 px-2 text-gray-600">{tx.type}</td>
                                <td className="py-4 px-2 text-gray-900 font-bold">{tx.amount}</td>
                                <td className="py-4 px-2 text-gray-600">{tx.balance}</td>
                                <td className="py-4 px-2">
                                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2.5 py-1 rounded-full font-medium">
                                        {tx.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400">Showing recent 10 transactions</span>
                <button className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-[#00A651] border border-gray-200 px-3 py-1.5 rounded hover:border-[#00A651] transition-all">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                    Export Statement
                </button>
            </div>
        </div>
    );
}
