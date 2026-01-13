export default function AdminFinancing() {
    const applications = [
        { customer: 'Amina Hassan', date: '2024-12-20', product: 'Murabaha', amount: 'ETB 50,000', term: '12 Months', status: 'approved' },
        { customer: 'Mohammed Ali', date: '2024-12-20', product: 'Salam', amount: 'ETB 75,000', term: '6 Months', status: 'pending' },
        { customer: 'Fatima Yusuf', date: '2024-12-19', product: 'Ijara', amount: 'ETB 120,000', term: '24 Months', status: 'processing' },
    ];

    return (
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-sm font-semibold text-gray-800">Recent Financing Applications</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-xs text-gray-500 uppercase">
                        <tr>
                            <th className="px-6 py-4 font-medium">Customer</th>
                            <th className="px-6 py-4 font-medium">Date</th>
                            <th className="px-6 py-4 font-medium">Product</th>
                            <th className="px-6 py-4 font-medium">Amount</th>
                            <th className="px-6 py-4 font-medium">Term</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {applications.map((app, index) => (
                            <tr key={index} className="hover:bg-gray-50/50">
                                <td className="px-6 py-4 text-xs font-medium text-gray-700">{app.customer}</td>
                                <td className="px-6 py-4 text-xs text-gray-500">{app.date}</td>
                                <td className="px-6 py-4 text-xs text-gray-600">{app.product}</td>
                                <td className="px-6 py-4 text-xs font-semibold text-gray-800">{app.amount}</td>
                                <td className="px-6 py-4 text-xs text-gray-500">{app.term}</td>
                                <td className="px-6 py-4">
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase
                                    ${app.status === 'approved' ? 'bg-[#6A3E9F] text-white' : ''}
                                    ${app.status === 'pending' ? 'bg-[#FFC107] text-gray-800' : ''}
                                    ${app.status === 'processing' ? 'border border-gray-200 text-gray-500' : ''}
                                `}>
                                        {app.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button className="text-xs font-medium text-gray-600 hover:text-[#6A3E9F]">Review</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
