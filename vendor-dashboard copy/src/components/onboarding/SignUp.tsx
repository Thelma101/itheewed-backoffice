import React, { useState } from "react";
import eye from '@/assets/eye.svg';
import OTPVerification from "./OTPVerification";
import { FaGoogle, FaFacebookF, FaApple, FaXTwitter } from 'react-icons/fa6';

interface SignUpProps {
    onToggleSignIn?: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onToggleSignIn }) => {
    const [role, setRole] = useState<'Couple' | 'Vendor'>('Couple');
    const [showPassword, setShowPassword] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted with role:', role);
        // Show OTP verification
        setShowOTP(true);
    }

    const handleBackToSignUp = () => {
        setShowOTP(false);
    }

    const handleOTPSuccess = () => {
        if (onToggleSignIn) onToggleSignIn();
    }

    const handleOTPResend = () => {
        console.log('Resending OTP to:', formData.email);
        // Handle OTP resend logic
    }

    if (showOTP) {
        const isEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email);
        return (
            <OTPVerification
                contact={formData.email}
                method={isEmail ? 'email' : 'phone'}
                purpose="registration"
                onBack={handleBackToSignUp}
                onSuccess={handleOTPSuccess}
                onResend={handleOTPResend}
            />
        );
    }

    return (
        <section className="w-full flex items-center justify-items-start md:px-16 pt-3 pb-8 ">
            <div className="p-4 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-2 text-center text-primary-dark">{role} Sign Up</h2>
                <p className="text-center text-primary-dark font-thin text-sm mb-6">Start your journey to <span className="text-primary-red">‘I do.’</span> Join our wedding planning family.</p>
                <div className="flex justify-center mb-3 space-x-8">
                    <label className="flex items-center space-x-2 font-thin cursor-pointer mb-3">
                        <input
                            type="radio"
                            checked={role === 'Couple'}
                            onChange={() => setRole('Couple')}
                            className="accent-primary-dark focus:accent-primary-dark"
                        />
                        <span className="text-primary-dark">Couple</span>
                    </label>
                    <label className="flex items-center space-x-2 font-thin cursor-pointer mb-3">
                        <input
                            type="radio"
                            checked={role === 'Vendor'}
                            onChange={() => setRole('Vendor')}
                            className="accent-primary-dark focus:accent-primary-dark"
                        />
                        <span className="text-primary-dark">Vendor</span>
                    </label>
                </div>
                <form onSubmit={handleSubmit} className="px-5 md:px-0 font-thin">
                    <label className="block mb-3">
                        <span className="text-primary-dark text-xs sm:text-sm font-thin">Full Name</span>
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            name="name" 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            required
                            className="mt-1 w-full md:h-12 h-12 px-3 sm:px-4 pr-12 rounded-3xl border border-color-focus focus:ring-2 focus:ring-color-focus focus:outline-none transition text-primary-dark text-sm md:text-base"
                        />
                    </label>
                    <label className="block mb-3">
                        <span className="text-primary-black text-xs sm:text-sm">Email or Phone Number</span>
                        <input 
                            type="email" 
                            placeholder="Email or Phone Number" 
                            name="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            required
                            className="mt-1 w-full md:h-12 h-12 px-3 sm:px-4 rounded-3xl border border-color-focus focus:ring-2 focus:ring-color-focus focus:outline-none transition text-primary-dark text-sm md:text-base"
                        />
                    </label>
                    <label className="block mb-3">
                        <span className="text-primary-dark text-xs sm:text-sm ">Password</span>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                required
                                className="mt-1 w-full md:h-12 h-12 px-3 sm:px-4 pr-12 rounded-3xl border border-color-focus focus:ring-2 focus:ring-color-focus focus:outline-none transition text-primary-dark text-sm md:text-base"
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? (
                                    <span className="text-lg">🙈</span>
                                ) : (
                                    <img src={eye} alt="Show password" className="w-5 h-5 text-primary-dark" />
                                )}
                            </button>
                        </div>
                    </label>
                    <button type="submit"
                        className="w-full md:h-12 h-12 rounded-3xl bg-primary hover:bg-primary transition text-white font-semibold text-center text-base sm:text-lmd shadow mt-5"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-200" />
                    <span className="mx-4 text-gray-400 text-xs">or sign up with</span>
                    <div className="flex-grow h-px bg-gray-200" />
                </div>
                <div className="flex justify-center gap-3 mb-6 px-5 md:px-0">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-100 transition" aria-label="Sign up with Google"><FaGoogle className="text-[#EA4335] text-lg" /></button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-100 transition" aria-label="Sign up with Facebook"><FaFacebookF className="text-[#1877F3] text-lg" /></button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-100 transition" aria-label="Sign up with Apple"><FaApple className="text-black text-lg" /></button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-100 transition" aria-label="Sign up with X"><FaXTwitter className="text-black text-lg" /></button>
                </div>
                <div className="flex justify-center font-thin px-5 md:px-0 mt-2 mb-7 text-xs sm:text-sm text-primary-dark">
                    <span>Already have an account? </span>
                    <button 
                        onClick={onToggleSignIn}
                        className="text-primary font-semibold hover:underline ml-1"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SignUp;