"use client";
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
    const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'

    // Login State
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Register State
    const [regFullName, setRegFullName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPhone, setRegPhone] = useState('');
    const [regAddress, setRegAddress] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [regConfirmPassword, setRegConfirmPassword] = useState('');
    const [regRole, setRegRole] = useState('User');

    const [showPassword, setShowPassword] = useState(false);
    const [showRegPassword, setShowRegPassword] = useState(false);
    const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false);

    const [error, setError] = useState('');
    const { login, register } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        const result = login(loginEmail, loginPassword);
        if (!result.success) {
            setError(result.error);
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setError('');
        const userData = {
            fullName: regFullName,
            email: regEmail,
            phone: regPhone,
            address: regAddress,
            password: regPassword,
            confirmPassword: regConfirmPassword,
            role: regRole.toLowerCase()
        };

        const result = register(userData);
        if (!result.success) {
            setError(result.error);
        }
    };

    return (
        <div className="flex min-h-screen w-full bg-[#f8f9fa] overflow-hidden">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex w-1/2 bg-[#6A3E9F] relative flex-col justify-center px-16 text-white overflow-hidden">
                {/* Background Pattern Overlay (CSS approximation) */}
                <div className="absolute inset-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }}
                ></div>

                <div className="relative z-10 max-w-lg">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 border-2 border-white rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg leading-tight">Rays Microfinance</h2>
                            <p className="text-xs opacity-80">Shariah-Compliant Banking</p>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold mb-4 leading-tight">
                        Ethical Finance for Prosperous Communities
                    </h1>

                    <p className="text-white/80 mb-12 text-lg font-light">
                        Join 250,000+ customers who trust Rays Microfinance for Shariah-compliant banking. Building prosperity through ethical, interest-free financial solutions.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                            </div>
                            <span className="font-medium">100% Shariah-compliant products</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            </div>
                            <span className="font-medium">NBE licensed & regulated</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            </div>
                            <span className="font-medium">Community-focused banking</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Form Container */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white lg:bg-[#f8f9fa] overflow-y-auto">
                <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-md my-auto">

                    {/* Tabs */}
                    <div className="flex bg-gray-50 p-1 rounded-lg mb-8">
                        <button
                            onClick={() => setActiveTab('login')}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'login' ? 'bg-white shadow-sm text-[#4CAF50]' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => setActiveTab('register')}
                            className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'register' ? 'bg-white shadow-sm text-[#4CAF50]' : 'text-gray-500 hover:text-gray-700'}`}
                        >
                            Register
                        </button>
                    </div>

                    {activeTab === 'login' ? (
                        /* Login Form */
                        <>
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                                <p className="text-gray-500 text-sm">Sign in to your account to continue</p>
                            </div>

                            <form onSubmit={handleLogin} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </span>
                                        <input
                                            type="email"
                                            value={loginEmail}
                                            onChange={(e) => setLoginEmail(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-transparent focus:bg-white focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] rounded-lg text-sm transition-all outline-none"
                                            placeholder="name@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                        </span>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            value={loginPassword}
                                            onChange={(e) => setLoginPassword(e.target.value)}
                                            className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-transparent focus:bg-white focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] rounded-lg text-sm transition-all outline-none"
                                            placeholder="Enter password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showPassword ? (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a3.04 3.04 0 00-2.175-.808c-2.22 0-4.015 1.777-4.015 4.015 0 .227.027.447.078.657m5.918 5.918a2.978 2.978 0 01-1.921.577 2.98 2.98 0 01-2.98-2.98 2.98 2.98 0 01.577-1.921m-4.788 4.788l14.143-14.143" /></svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#00A651] hover:bg-[#009045] text-white font-medium py-2.5 rounded-lg transition-colors shadow-sm"
                                >
                                    Sign In
                                </button>
                            </form>
                        </>
                    ) : (
                        /* Registration Form */
                        <>
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Join Us</h2>
                                <p className="text-gray-500 text-sm">Register to get started</p>
                            </div>

                            <form onSubmit={handleRegister} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                        </span>
                                        <input
                                            type="text"
                                            value={regFullName}
                                            onChange={(e) => setRegFullName(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-transparent focus:bg-white focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] rounded-lg text-sm transition-all outline-none"
                                            placeholder="Enter full name"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </span>
                                        <input
                                            type="email"
                                            value={regEmail}
                                            onChange={(e) => setRegEmail(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-transparent focus:bg-white focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] rounded-lg text-sm transition-all outline-none"
                                            placeholder="name@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone (Optional)</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                            </span>
                                            <input
                                                type="tel"
                                                value={regPhone}
                                                onChange={(e) => setRegPhone(e.target.value)}
                                                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-transparent focus:bg-white focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] rounded-lg text-sm transition-all outline-none"
                                                placeholder="0812-3456-7890"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Address (Optional)</label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            </span>
                                            <input
                                                type="text"
                                                value={regAddress}
                                                onChange={(e) => setRegAddress(e.target.value)}
                                                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-transparent focus:bg-white focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] rounded-lg text-sm transition-all outline-none"
                                                placeholder="Full address"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                        </span>
                                        <input
                                            type={showRegPassword ? "text" : "password"}
                                            value={regPassword}
                                            onChange={(e) => setRegPassword(e.target.value)}
                                            className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-transparent focus:bg-white focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] rounded-lg text-sm transition-all outline-none"
                                            placeholder="Minimum 8 characters"
                                            required
                                            minLength={8}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowRegPassword(!showRegPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showRegPassword ? (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a3.04 3.04 0 00-2.175-.808c-2.22 0-4.015 1.777-4.015 4.015 0 .227.027.447.078.657m5.918 5.918a2.978 2.978 0 01-1.921.577 2.98 2.98 0 01-2.98-2.98 2.98 2.98 0 01.577-1.921m-4.788 4.788l14.143-14.143" /></svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm Password</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                        </span>
                                        <input
                                            type={showRegConfirmPassword ? "text" : "password"}
                                            value={regConfirmPassword}
                                            onChange={(e) => setRegConfirmPassword(e.target.value)}
                                            className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-transparent focus:bg-white focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] rounded-lg text-sm transition-all outline-none"
                                            placeholder="Repeat password"
                                            required
                                            minLength={8}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowRegConfirmPassword(!showRegConfirmPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showRegConfirmPassword ? (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858-5.908a3.04 3.04 0 00-2.175-.808c-2.22 0-4.015 1.777-4.015 4.015 0 .227.027.447.078.657m5.918 5.918a2.978 2.978 0 01-1.921.577 2.98 2.98 0 01-2.98-2.98 2.98 2.98 0 01.577-1.921m-4.788 4.788l14.143-14.143" /></svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Role</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                        </span>
                                        <select
                                            value={regRole}
                                            onChange={(e) => setRegRole(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-transparent focus:bg-white focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50] rounded-lg text-sm transition-all outline-none appearance-none cursor-pointer"
                                        >
                                            <option value="User">User</option>
                                            <option value="Admin">Admin</option>
                                        </select>
                                        <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1">Admin memiliki akses penuh ke dashboard manajemen</p>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#00A651] hover:bg-[#009045] text-white font-medium py-2.5 rounded-lg transition-colors shadow-sm"
                                >
                                    Register Now
                                </button>
                            </form>
                        </>
                    )}

                    {error && (
                        <div className="mt-4 text-red-500 text-sm text-center bg-red-50 p-2 rounded animate-in fade-in slide-in-from-top-1">
                            {error}
                        </div>
                    )}

                    {/* Footer Credentials - Keep valid logic visible for dev */}
                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <p className="text-xs text-gray-400 mb-2">Demo credentials for testing:</p>
                        <p className="text-xs text-gray-500 font-mono">
                            Admin: admin@banksampah.id / admin123<br />
                            User: budi@gmail.com / budi123 <br />
                            (Or Register a new account)
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
