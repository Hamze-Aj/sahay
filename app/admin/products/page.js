export default function AdminProducts() {
    const products = [
        { name: 'Murabaha (Personal)', rate: '8%', term: '12-36 months', actions: '' },
        { name: 'Salam (Agriculture)', rate: '7%', term: '6-12 months', actions: '' },
        { name: 'Ijara (Equipment)', rate: '9%', term: '12-60 months', actions: '' },
        { name: 'Musharakah (Business)', rate: '10-15%', term: 'Variable', actions: '' },
        { name: 'Wadiah (Savings)', rate: '0%', term: 'On-demand', actions: '' },
    ];

    return (
        <div className="bg-white rounded-lg border border-gray-100 shadow-sm">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-sm font-semibold text-gray-800">Islamic Financial Products</h2>
                <button className="bg-[#1b5e20] text-white text-xs px-3 py-1.5 rounded flex items-center gap-1 hover:bg-[#154a19]">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    Add Product
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-white text-xs text-gray-800 font-bold border-b border-gray-100">
                        <tr>
                            <th className="px-6 py-4 w-1/3">Product Name</th>
                            <th className="px-6 py-4">Profit Rate</th>
                            <th className="px-6 py-4">Term</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {products.map((product, index) => (
                            <tr key={index} className="hover:bg-gray-50/50 text-xs text-gray-600">
                                <td className="px-6 py-4 font-medium">{product.name}</td>
                                <td className="px-6 py-4">{product.rate}</td>
                                <td className="px-6 py-4">{product.term}</td>
                                <td className="px-6 py-4 flex justify-center gap-3">
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                    </button>
                                    <button className="text-red-400 hover:text-red-600">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
