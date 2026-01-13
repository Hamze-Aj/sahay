"use client";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import SummaryCards from "@/components/Dashboard/SummaryCards";
import QuickActions from "@/components/Dashboard/QuickActions";
import TransactionHistory from "@/components/Dashboard/Tabs/TransactionHistory";
import ActiveFinancing from "@/components/Dashboard/Tabs/ActiveFinancing";
import ApplyFinancing from "@/components/Dashboard/Tabs/ApplyFinancing";

export default function Dashboard() {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('apply'); // 'apply', 'active', 'history'

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user, router]);

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-50 pb-12">
            {/* Header */}
            <div className="bg-[#1b5e20] text-white px-8 py-5 flex justify-between items-center shadow-md">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold">Welcome, {user.name}</h1>
                        <p className="text-xs text-green-100 opacity-80">Shariah-Compliant Banking Dashboard</p>
                    </div>
                </div>
                <button
                    onClick={logout}
                    className="flex items-center gap-2 text-xs font-medium hover:text-green-200 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                    Sign Out
                </button>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-8">

                <SummaryCards />

                {/* Tab Navigation */}
                <div className="bg-gray-200 p-1 rounded-full flex text-sm font-medium text-gray-600 mb-8 max-w-3xl mx-auto">
                    <button
                        onClick={() => setActiveTab('apply')}
                        className={`flex-1 py-2 text-center rounded-full transition-all ${activeTab === 'apply' ? 'bg-white text-[#1b5e20] shadow-sm font-bold' : 'hover:text-gray-900'}`}
                    >
                        Apply for Financing
                    </button>
                    <button
                        onClick={() => setActiveTab('active')}
                        className={`flex-1 py-2 text-center rounded-full transition-all ${activeTab === 'active' ? 'bg-white text-[#1b5e20] shadow-sm font-bold' : 'hover:text-gray-900'}`}
                    >
                        Active Financing
                    </button>
                    <button
                        onClick={() => setActiveTab('history')}
                        className={`flex-1 py-2 text-center rounded-full transition-all ${activeTab === 'history' ? 'bg-white text-[#1b5e20] shadow-sm font-bold' : 'hover:text-gray-900'}`}
                    >
                        Transaction History
                    </button>
                </div>

                {/* Tab Content */}
                <div className="min-h-[400px]">
                    {activeTab === 'apply' && <ApplyFinancing />}
                    {activeTab === 'active' && <ActiveFinancing />}
                    {activeTab === 'history' && <TransactionHistory />}
                </div>

                <QuickActions />

                {/* Footer Help */}
                <div className="mt-12 bg-[#1b5e20] rounded-xl p-8 text-center text-white">
                    <h3 className="font-medium mb-1">Need Help?</h3>
                    <p className="text-xs text-green-100 opacity-80 mb-6">Our customer support team is available 24/7 to assist you</p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-white text-[#1b5e20] px-6 py-2 rounded text-sm font-bold hover:bg-gray-100 transition-colors">
                            Call 8977 (Toll-Free)
                        </button>
                        <button className="bg-white text-[#1b5e20] px-6 py-2 rounded text-sm font-bold hover:bg-gray-100 transition-colors">
                            Chat Support
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
