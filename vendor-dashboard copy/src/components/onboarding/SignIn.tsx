import React, { useState } from "react";
import eye from '@/assets/eye.svg'
import ForgotPassword from "./ForgotPassword";
import { FaGoogle, FaFacebookF, FaApple, FaXTwitter } from 'react-icons/fa6';

interface SignInProps {
    onToggleSignUp?: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onToggleSignUp }) => {
    const [role, setRole] = useState<'Couple' | 'Vendor'>('Couple');
    const [showPassword, setShowPassword] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted with role:', role);
    }

    const handleForgotPassword = () => {
        setShowForgotPassword(true);
    }

    const handleBackToSignIn = () => {
        setShowForgotPassword(false);
    }

    if (showForgotPassword) {
        return <ForgotPassword onBackToSignIn={handleBackToSignIn} />;
    }

    return (
        <section className="w-full flex items-center justify-items-start md:px-16 py-8">
            <div className="p-4 w-full max-w-md">
                <h2 className="text-xl font-semibold mb-2 text-center text-primary-dark">{role} Log in</h2>
                <p className="text-center text-primary-dark font-thin text-sm mb-6">Good to see you again! Let’s make more {' '} 
                    <span className="text-primary-red">magic.</span>
                </p>
                <div className="flex justify-center mb-6 space-x-8">

                    <label className="flex items-center space-x-2 font-thin cursor-pointer mb-5">
                        <input
                            type="radio"
                            checked={role === 'Couple'}
                            onChange={() => setRole('Couple')}
                            className="text-primary"
                        />
                        <span className="text-primary-dark">Couple</span>
                    </label>
                    <label className="flex items-center space-x-2 font-thin cursor-pointer mb-5">
                        <input
                            type="radio"
                            checked={role === 'Vendor'}
                            onChange={() => setRole('Vendor')}
                            className="text-primary"
                        />
                        <span className="text-primary-dark">Vendor</span>
                    </label>
                </div>
                <form onSubmit={handleSubmit} className="px-5 md:px-0 font-thin">
                    <label className="block mb-3">
                        <span className="text-primary-black text-xs sm:text-sm">Email or Phone Number</span>
                        <input type="email" placeholder="Email or Phone Number" name="email" className="mt-1 w-full md:h-12 h-12 px-3 sm:px-4 rounded-3xl border border-color-focus focus:ring-2 focus:ring-color-focus focus:outline-none transition text-primary-dark text-sm md:text-base" />
                    </label>
                    <label className="block mb-3">
                        <span className="text-primary-dark text-xs sm:text-sm ">Password</span>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                name="password"
                                className="mt-1 w-full md:h-12 h-12 px-3 sm:px-4 rounded-3xl border border-color-focus focus:ring-2 focus:ring-color-focus focus:outline-none transition text-primary-dark text-sm md:text-base"
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
                        className="w-full md:h-12 h-12 rounded-3xl bg-primary hover:bg-primary transition text-white font-semibold text-center text-base sm:text-md shadow mt-5"
                    >
                        Sign In
                    </button>
                </form>
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-200" />
                    <span className="mx-4 text-gray-400 text-xs">or continue with</span>
                    <div className="flex-grow h-px bg-gray-200" />
                </div>
                <div className="flex justify-center gap-3 mb-6 px-5 md:px-0">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-100 transition" aria-label="Sign in with Google"><FaGoogle className="text-[#EA4335] text-lg" /></button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-100 transition" aria-label="Sign in with Facebook"><FaFacebookF className="text-[#1877F3] text-lg" /></button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-100 transition" aria-label="Sign in with Apple"><FaApple className="text-black text-lg" /></button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow border border-gray-200 hover:bg-gray-100 transition" aria-label="Sign in with X"><FaXTwitter className="text-black text-lg" /></button>
                </div>
                {/* <div className="flex justify-center mt-4 text-xs sm:text-sm text-primary-red">
                    <span>Forgot Password?
                        <button 
                            onClick={handleForgotPassword}
                            className="text-primary-red font-semibold hover:underline ml-1"
                        >
                            Click here
                        </button>
                    </span>
                </div> */}
                <div className="flex justify-center font-thin px-5 md:px-0 mt-4 text-xs sm:text-sm text-primary-red">
                    <button
                        onClick={handleForgotPassword}
                        className="text-primary-red hover:underline"
                    >
                        Forgot Password?
                    </button>
                </div>
                <div className="flex justify-center font-thin px-5 md:px-0 mt-2 text-xs sm:text-sm text-primary-dark">
                    <span>Don't have an account yet? </span>
                    <button 
                        onClick={onToggleSignUp}
                        className="text-primary font-semibold hover:underline ml-1"
                    >
                        Register Now
                    </button>
                </div>
            </div>
        </section >
    );
}

export default SignIn;