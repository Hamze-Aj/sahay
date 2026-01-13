export default function AdminCustomers() {
    const customers = [
        { name: 'Amina Hassan', email: 'amina.h@email.com', type: 'Personal', balance: 'ETB 15,000', status: 'active', activity: '2024-12-20 14:30' },
        { name: 'Mohammed Ali', email: 'mohammed.a@email.com', type: 'Business', balance: 'ETB 45,000', status: 'active', activity: '2024-12-20 09:15' },
        { name: 'Fatima Yusuf', email: 'fatima.y@email.com', type: 'Agricultural', balance: 'ETB 28,000', status: 'active', activity: '2024-12-19 16:45' },
        { name: 'Ibrahim Osman', email: 'ibrahim.o@email.com', type: 'Personal', balance: 'ETB 0', status: 'pending', activity: '2024-12-20 11:20' },
    ];

    return (
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="p-6 border-b border-gray-100">
                <h2 className="text-sm font-semibold text-gray-800">Customer Management</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-white text-xs text-gray-800 font-bold border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">Account Type</th>
                            <th className="px-6 py-4">Balance</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Last Activity</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {customers.map((c, index) => (
                            <tr key={index} className="hover:bg-gray-50/50 text-xs text-gray-600">
                                <td className="px-6 py-4 font-medium">{c.name}</td>
                                <td className="px-6 py-4 text-gray-500">{c.email}</td>
                                <td className="px-6 py-4">{c.type}</td>
                                <td className="px-6 py-4 font-medium text-gray-800">{c.balance}</td>
                                <td className="px-6 py-4">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md uppercase text-white
                                    ${c.status === 'active' ? 'bg-[#6A3E9F]' : ''}
                                    ${c.status === 'pending' ? 'bg-[#FFC107] text-gray-800' : ''}
                                `}>
                                        {c.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-400">{c.activity}</td>
                                <td className="px-6 py-4 text-center">
                                    <button className="text-xs font-medium text-gray-600 hover:text-black">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
