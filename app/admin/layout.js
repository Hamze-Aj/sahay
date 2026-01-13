"use client";
import AdminSidebar from "@/components/Admin/AdminSidebar";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";

export default function AdminLayout({ children }) {
    const pathname = usePathname();
    const { user, loading } = useAuth();
    const router = useRouter();

    // Protect Admin Route
    useEffect(() => {
        if (!loading && (!user || user.role !== 'admin')) {
            router.push('/login');
        }
    }, [user, loading, router]);

    // Get Title from Pathname
    const getTitle = () => {
        if (pathname.includes('/dashboard')) return 'Dashboard';
        if (pathname.includes('/financing')) return 'Financing';
        if (pathname.includes('/products')) return 'Products';
        if (pathname.includes('/customers')) return 'Customers';
        if (pathname.includes('/reports')) return 'Reports';
        return 'Admin Panel';
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (!user || user.role !== 'admin') return null;

    return (
        <div className="min-h-screen bg-white">
            <AdminSidebar />

            <div className="pl-64">
                {/* Top Bar */}
                <header className="h-16 border-b border-gray-100 flex items-center justify-between px-8 bg-white sticky top-0 z-20">
                    <div className="flex items-center gap-4">
                        <button className="lg:hidden p-1 text-gray-500">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </button>
                        <h2 className="text-lg font-bold text-gray-800">{getTitle()}</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-xs text-[#00A651] border border-[#00A651] px-2 py-1 rounded-full bg-green-50">Shariah Compliant</span>
                    </div>
                </header>

                <main className="p-8 bg-gray-50/50 min-h-[calc(100vh-64px)]">
                    {children}
                </main>
            </div>
        </div>
    );
}
